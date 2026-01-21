import * as fs from "fs/promises"
import * as path from "path"
import * as yaml from "yaml"

interface SchemaAttribute {
  "Type": Array<string | { $ref: string }>
  "NCI C-Code"?: string
  "Preferred Term"?: string
  "Definition"?: string
  "Cardinality": string
  "Relationship Type": string
  "Model Name"?: string
  "Model Representation"?: string
  "Inherited From"?: Array<{ $ref: string }>
}

interface SchemaEntity {
  "NCI C-Code"?: string
  "Preferred Term"?: string
  "Definition"?: string
  "Modifier"?: string
  "Super Classes"?: Array<{ $ref: string }>
  "Sub Classes"?: Array<{ $ref: string }>
  "Attributes": Record<string, SchemaAttribute>
}

type Schema = Record<string, SchemaEntity>

// Primitive types that can be referenced
const PRIMITIVE_TYPES = ["string", "float", "integer", "boolean", "date", "datetime"] as const
type PrimitiveType = typeof PRIMITIVE_TYPES[number]

class TypeScriptInterfaceGenerator {
  private schema: Schema
  private generatedInterfaces: Set<string> = new Set()
  private abstractClassUnions: Map<string, string[]> = new Map()

  constructor(schema: Schema) {
    this.schema = schema
    this.buildAbstractClassUnions()
  }

  /**
   * Build a map of abstract classes to their concrete subclasses
   */
  private buildAbstractClassUnions(): void {
    for (const [entityName, entity] of Object.entries(this.schema)) {
      if (entity.Modifier === "Abstract" && entity["Sub Classes"]) {
        const subClassNames = entity["Sub Classes"].map(ref => ref.$ref.replace("#/", ""))
        this.abstractClassUnions.set(entityName, subClassNames)
      }
    }
  }

  /**
   * Parse cardinality to determine if field is optional and/or array
   */
  private parseCardinality(cardinality: string): { optional: boolean; isArray: boolean } {
    const optional = cardinality.startsWith("0")
    const isArray = cardinality.includes("*")
      || (cardinality.includes("..") && !cardinality.endsWith("..1"))
    return { optional, isArray }
  }

  /**
   * Check if a type is an abstract union type (defined in index.ts)
   */
  private isUnionType(refType: string): boolean {
    return this.abstractClassUnions.has(refType)
  }

  /**
   * Get all referenced types for an entity (for generating imports)
   * Returns { localImports: Set<string>, indexImports: Set<string> }
   */
  private getReferencedTypes(name: string, entity: SchemaEntity): { localImports: Set<string>; indexImports: Set<string> } {
    const localImports = new Set<string>()
    const indexImports = new Set<string>()
    const interfaceName = entity.Modifier === "Abstract" ? `${name}Abstract` : name

    // Add super class references (these are always local imports)
    if (entity["Super Classes"]) {
      for (const superRef of entity["Super Classes"]) {
        const superName = superRef.$ref.replace("#/", "")
        if (PRIMITIVE_TYPES.includes(superName as PrimitiveType)) continue

        const typeName = this.schema[superName]?.Modifier === "Abstract"
          ? `${superName}Abstract`
          : superName

        if (typeName !== interfaceName) {
          localImports.add(typeName)
        }
      }
    }

    // Add attribute type references
    for (const attr of Object.values(entity.Attributes)) {
      for (const type of attr.Type) {
        if (typeof type === "object" && type.$ref) {
          const refType = type.$ref.replace("#/", "")
          if (PRIMITIVE_TYPES.includes(refType as PrimitiveType)) continue

          // If it's an abstract union type, import from index.ts
          if (this.isUnionType(refType)) {
            indexImports.add(refType)
          } else {
            // Regular type - import locally
            const typeName = this.schema[refType]?.Modifier === "Abstract"
              ? `${refType}Abstract`
              : refType

            if (typeName !== interfaceName) {
              localImports.add(typeName)
            }
          }
        }
      }
    }

    return { localImports, indexImports }
  }

  /**
   * Convert schema type to TypeScript type
   * If relationshipType is "Ref", creates a union of string | ObjectType
   */
  private convertType(types: Array<string | { $ref: string }>, relationshipType?: string): string {
    const tsTypes = types.map(type => {
      if (typeof type === "string") {
        return type
      } else if (type.$ref) {
        const refType = type.$ref.replace("#/", "")

        if (PRIMITIVE_TYPES.includes(refType as PrimitiveType)) {
          switch (refType) {
            case "string": return "string"
            case "float": return "number"
            case "integer": return "number"
            case "boolean": return "boolean"
            case "date": return "Date"
            case "datetime": return "Date"
            default: return refType
          }
        }

        return refType
      }
      return "unknown"
    })

    const mappedTypes = tsTypes.map(type => {
      switch (type) {
        case "string": return "string"
        case "float": return "number"
        case "integer": return "number"
        case "boolean": return "boolean"
        case "date": return "Date"
        case "datetime": return "Date"
        default: return type
      }
    })

    let baseType = mappedTypes.length > 1 ? mappedTypes.join(" | ") : (mappedTypes[0] ?? "unknown")

    // If this is a Ref relationship and doesn't already include string, add string as an alternative
    if (relationshipType === "Ref" && !mappedTypes.includes("string")) {
      baseType = `string | ${baseType}`
    }

    return baseType
  }

  /**
   * Generate JSDoc comment from attribute metadata
   */
  private generateJSDoc(attr: SchemaAttribute, indent: string = ""): string {
    const lines: string[] = []
    lines.push(`${indent}/**`)

    if (attr.Definition != null) {
      lines.push(`${indent} * ${attr.Definition.trim()}`)
    }

    if (attr["Preferred Term"] != null) {
      lines.push(`${indent} * @preferredTerm ${attr["Preferred Term"]}`)
    }

    if (attr["NCI C-Code"] != null) {
      lines.push(`${indent} * @nciCode ${attr["NCI C-Code"]}`)
    }

    if (attr.Cardinality) {
      lines.push(`${indent} * @cardinality ${attr.Cardinality}`)
    }

    if (attr["Relationship Type"]) {
      lines.push(`${indent} * @relationshipType ${attr["Relationship Type"]}`)
    }

    if (attr["Model Name"] != null) {
      lines.push(`${indent} * @modelName ${attr["Model Name"]}`)
    }

    if (attr["Model Representation"] != null) {
      lines.push(`${indent} * @modelRepresentation ${attr["Model Representation"]}`)
    }

    if (attr["Inherited From"]) {
      const inherited = attr["Inherited From"].map(ref => ref.$ref.replace("#/", "")).join(", ")
      lines.push(`${indent} * @inheritedFrom ${inherited}`)
    }

    lines.push(`${indent} */`)
    return lines.join("\n")
  }

  /**
   * Generate interface JSDoc from entity metadata
   */
  private generateInterfaceJSDoc(entity: SchemaEntity): string {
    const lines: string[] = []
    lines.push("/**")

    if (entity.Definition != null) {
      lines.push(` * ${entity.Definition.trim()}`)
    }

    if (entity["Preferred Term"] != null) {
      lines.push(` * @preferredTerm ${entity["Preferred Term"]}`)
    }

    if (entity["NCI C-Code"] != null) {
      lines.push(` * @nciCode ${entity["NCI C-Code"]}`)
    }

    if (entity.Modifier != null) {
      lines.push(` * @modifier ${entity.Modifier}`)
    }

    if (entity["Super Classes"]) {
      const supers = entity["Super Classes"].map(ref => ref.$ref.replace("#/", "")).join(", ")
      lines.push(` * @extends ${supers}`)
    }

    if (entity["Sub Classes"]) {
      const subs = entity["Sub Classes"].map(ref => ref.$ref.replace("#/", "")).join(", ")
      lines.push(` * @subClasses ${subs}`)
    }

    lines.push(" */")
    return lines.join("\n")
  }

  /**
   * Generate interface body (without imports)
   */
  private generateInterfaceBody(name: string, entity: SchemaEntity): string {
    const lines: string[] = []

    lines.push(this.generateInterfaceJSDoc(entity))

    const superClasses = entity["Super Classes"]?.map(ref => {
      const superName = ref.$ref.replace("#/", "")
      return this.schema[superName]?.Modifier === "Abstract"
        ? `${superName}Abstract`
        : superName
    }) ?? []

    const extendsClause = superClasses.length > 0 ? ` extends ${superClasses.join(", ")}` : ""
    const interfaceName = entity.Modifier === "Abstract" ? `${name}Abstract` : name
    lines.push(`export interface ${interfaceName}${extendsClause} {`)

    for (const [attrName, attr] of Object.entries(entity.Attributes)) {
      const { optional, isArray } = this.parseCardinality(attr.Cardinality)
      let baseType = this.convertType(attr.Type, attr["Relationship Type"])
      if (baseType.includes(" | ")) {
        baseType = `(${baseType})`
      }
      const finalType = isArray ? `${baseType}[]` : baseType
      const optionalMark = optional ? "?" : ""

      lines.push(this.generateJSDoc(attr, "  "))
      lines.push(`  ${attrName}${optionalMark}: ${finalType}`)
      lines.push("")
    }

    lines.push("}")
    return lines.join("\n")
  }

  /**
   * Generate a single file for an interface
   */
  private generateFile(name: string, entity: SchemaEntity): string {
    const lines: string[] = []

    lines.push("// Auto-generated - do not edit")
    lines.push("")

    // Generate imports
    const { localImports, indexImports } = this.getReferencedTypes(name, entity)

    // Import from local files
    const sortedLocalImports = [...localImports].sort()
    for (const ref of sortedLocalImports) {
      lines.push(`import type { ${ref} } from "./${ref}"`)
    }

    // Import union types from index.ts
    if (indexImports.size > 0) {
      const sortedIndexImports = [...indexImports].sort()
      lines.push(`import type { ${sortedIndexImports.join(", ")} } from "./index"`)
    }

    if (localImports.size > 0 || indexImports.size > 0) {
      lines.push("")
    }

    // Generate interface body
    lines.push(this.generateInterfaceBody(name, entity))
    lines.push("")

    return lines.join("\n")
  }

  /**
   * Generate index.ts that re-exports all types
   */
  private generateIndex(entityNames: string[]): string {
    const lines: string[] = []

    lines.push("// Auto-generated - do not edit")
    lines.push("// Re-exports all USDM types")
    lines.push("")

    // Collect all imports needed for union types (sorted)
    const unionImports = new Set<string>()
    if (this.abstractClassUnions.size > 0) {
      for (const [, subClasses] of this.abstractClassUnions) {
        for (const subClass of subClasses) {
          unionImports.add(subClass)
        }
      }
    }

    // Generate imports for union types first (sorted alphabetically)
    if (unionImports.size > 0) {
      const sortedImports = [...unionImports].sort()
      for (const subClass of sortedImports) {
        lines.push(`import type { ${subClass} } from "./${subClass}"`)
      }
      lines.push("")
    }

    // Export all interfaces (sorted)
    const sortedNames = [...entityNames].sort()
    for (const name of sortedNames) {
      const entity = this.schema[name]
      if (entity) {
        const interfaceName = entity.Modifier === "Abstract" ? `${name}Abstract` : name
        lines.push(`export type { ${interfaceName} } from "./${interfaceName}"`)
      }
    }

    lines.push("")

    // Generate union type aliases for abstract classes
    if (this.abstractClassUnions.size > 0) {
      lines.push("// Union types for abstract classes")
      for (const [abstractName, subClasses] of this.abstractClassUnions) {
        lines.push(`export type ${abstractName} = ${subClasses.join(" | ")}`)
      }
      lines.push("")
    }

    return lines.join("\n")
  }

  /**
   * Generate all TypeScript interface files
   * Returns a Map of filename -> content
   */
  public generate(): Map<string, string> {
    const files = new Map<string, string>()
    const allEntities = Object.keys(this.schema)

    // Generate individual files for each entity
    for (const name of allEntities) {
      const entity = this.schema[name]
      if (!this.generatedInterfaces.has(name) && entity) {
        const interfaceName = entity.Modifier === "Abstract" ? `${name}Abstract` : name
        files.set(`${interfaceName}.ts`, this.generateFile(name, entity))
        this.generatedInterfaces.add(name)
      }
    }

    // Generate index.ts
    files.set("index.ts", this.generateIndex(allEntities))

    return files
  }
}

class ZodSchemaGenerator {
  private schema: Schema
  private generatedSchemas: Set<string> = new Set()
  private generationOrder: string[] = []
  private abstractClassUnions: Map<string, string[]> = new Map()

  constructor(schema: Schema) {
    this.schema = schema
    this.buildAbstractClassUnions()
  }

  /**
   * Build a map of abstract classes to their concrete subclasses
   */
  private buildAbstractClassUnions(): void {
    for (const [entityName, entity] of Object.entries(this.schema)) {
      if (entity.Modifier === "Abstract" && entity["Sub Classes"]) {
        const subClassNames = entity["Sub Classes"].map(ref => ref.$ref.replace("#/", ""))
        this.abstractClassUnions.set(entityName, subClassNames)
      }
    }
  }

  /**
   * Parse cardinality to determine if field is optional and/or array
   */
  private parseCardinality(cardinality: string): { optional: boolean; isArray: boolean; min?: number; max?: number } {
    const optional = cardinality.startsWith("0")
    const isArray = cardinality.includes("*")
      || (cardinality.includes("..") && !cardinality.endsWith("..1"))

    let min: number | undefined
    let max: number | undefined

    if (cardinality.includes("..")) {
      const parts = cardinality.split("..")
      const minStr = parts[0] ?? ""
      const maxStr = parts[1] ?? "*"
      min = minStr === "" ? 0 : parseInt(minStr)
      max = maxStr === "*" ? undefined : parseInt(maxStr)
    } else if (cardinality === "*") {
      min = 0
      max = undefined
    } else if (cardinality.match(/^\d+$/)) {
      min = max = parseInt(cardinality)
    }

    return { optional, isArray, min, max }
  }

  /**
   * Check if a type reference creates a circular dependency
   */
  private hasCircularReference(entityName: string, referencedType: string, visited: Set<string> = new Set()): boolean {
    if (entityName === referencedType) return true
    if (visited.has(entityName)) return false

    visited.add(entityName)
    const entity = this.schema[entityName]
    if (!entity) return false

    // Check all attribute types
    for (const attr of Object.values(entity.Attributes)) {
      for (const type of attr.Type) {
        if (typeof type === "object" && type.$ref) {
          const refName = type.$ref.replace("#/", "")
          if (refName === referencedType) return true
          if (!PRIMITIVE_TYPES.includes(refName as PrimitiveType) && this.schema[refName]) {
            if (this.hasCircularReference(refName, referencedType, new Set(visited))) {
              return true
            }
          }
        }
      }
    }

    return false
  }

  /**
   * Convert schema type to Zod schema, handling abstract class unions and Ref relationships
   */
  private convertTypeToZod(
    types: Array<string | { $ref: string }>,
    cardinality: { optional: boolean; isArray: boolean; min?: number; max?: number },
    currentEntity?: string,
    relationshipType?: string
  ): string {
    const zodTypes = types.map(type => {
      if (typeof type === "string") {
        switch (type) {
          case "string": return "z.string()"
          case "float": return "z.number()"
          case "integer": return "z.number().int()"
          case "boolean": return "z.boolean()"
          case "date": return "z.date()"
          case "datetime": return "z.date()"
          default: return "z.unknown()"
        }
      } else if (type.$ref) {
        const refType = type.$ref.replace("#/", "")

        // Check if this is a primitive type reference
        if (PRIMITIVE_TYPES.includes(refType as PrimitiveType)) {
          switch (refType) {
            case "string": return "z.string()"
            case "float": return "z.number()"
            case "integer": return "z.number().int()"
            case "boolean": return "z.boolean()"
            case "date": return "z.date()"
            case "datetime": return "z.date()"
            default: return "z.unknown()"
          }
        }

        // For both abstract and concrete classes, use consistent naming
        // Check for circular references or self-references
        if ((currentEntity != null) && this.needsLazyEvaluation(currentEntity, refType)) {
          return `z.lazy(() => ${refType}Schema)`
        }

        // Regular schema reference - works for both concrete classes and abstract unions
        return `${refType}Schema`
      }
      return "z.unknown()"
    })

    // Create union if multiple types
    let baseSchema = zodTypes.length > 1
      ? `z.union([${zodTypes.join(", ")}])`
      : (zodTypes[0] ?? "z.unknown()")

    // If this is a Ref relationship and doesn't already include string, add string as an alternative
    if (relationshipType === "Ref" && !zodTypes.some(t => t === "z.string()")) {
      baseSchema = `z.union([z.string(), ${baseSchema}])`
    }

    // Handle arrays
    if (cardinality.isArray) {
      baseSchema = `z.array(${baseSchema})`
      if (cardinality.min !== undefined) {
        baseSchema += `.min(${cardinality.min})`
      }
      if (cardinality.max !== undefined) {
        baseSchema += `.max(${cardinality.max})`
      }
    }

    // Handle optional
    if (cardinality.optional && !cardinality.isArray) {
      baseSchema += ".optional()"
    } else if (cardinality.optional && cardinality.isArray && cardinality.min === 0) {
      baseSchema += ".optional()"
    }

    return baseSchema
  }

  /**
   * Check if a type reference creates a circular dependency or self-reference
   */
  private needsLazyEvaluation(currentEntity: string, referencedType: string): boolean {
    // Self-reference always needs lazy
    if (currentEntity === referencedType) return true

    // Check for circular reference
    return this.hasCircularReference(currentEntity, referencedType)
  }

  /**
   * Generate JSDoc comment for schema
   */
  private generateSchemaJSDoc(entity: SchemaEntity): string {
    const lines: string[] = []
    lines.push("/**")

    if (entity.Definition != null) {
      lines.push(` * ${entity.Definition.trim()}`)
    }

    if (entity["Preferred Term"] != null) {
      lines.push(` * @preferredTerm ${entity["Preferred Term"]}`)
    }

    if (entity["NCI C-Code"] != null) {
      lines.push(` * @nciCode ${entity["NCI C-Code"]}`)
    }

    lines.push(" */")
    return lines.join("\n")
  }

  /**
   * Get all attributes including inherited ones
   */
  private getAllAttributes(entityName: string, visited: Set<string> = new Set()): Record<string, SchemaAttribute> {
    if (visited.has(entityName)) {
      console.warn(`Circular inheritance detected for ${entityName}`)
      return {}
    }
    visited.add(entityName)

    const entity = this.schema[entityName]
    if (!entity) return {}

    let attributes: Record<string, SchemaAttribute> = {}

    // Get inherited attributes first
    if (entity["Super Classes"]) {
      for (const superRef of entity["Super Classes"]) {
        const superName = superRef.$ref.replace("#/", "")
        const superAttrs = this.getAllAttributes(superName, new Set(visited)) // Create new Set to avoid mutation
        attributes = { ...attributes, ...superAttrs }
      }
    }

    // Override with own attributes
    attributes = { ...attributes, ...entity.Attributes }

    return attributes
  }

  /**
   * Generate a single Zod schema
   */
  private generateSchema(name: string, entity: SchemaEntity): string {
    const lines: string[] = []

    // Add JSDoc
    lines.push(this.generateSchemaJSDoc(entity))

    // Get all attributes including inherited
    const allAttributes = this.getAllAttributes(name)

    // Start schema definition with explicit type
    lines.push(`export const ${name}Schema: z.ZodSchema<${name}> = z.object({`)

    // Generate properties
    const attrEntries = Object.entries(allAttributes)
    attrEntries.forEach(([attrName, attr], index) => {
      const cardinalityInfo = this.parseCardinality(attr.Cardinality)
      const zodType = this.convertTypeToZod(attr.Type, cardinalityInfo, name, attr["Relationship Type"])

      // Add description as comment
      if (attr.Definition != null) {
        lines.push(`  // ${attr.Definition.trim()}`)
      }

      // No trailing comma on last property
      const isLast = index === attrEntries.length - 1
      lines.push(`  ${attrName}: ${zodType}${isLast ? "" : ","}`)
    })

    lines.push("})")
    lines.push("")

    // Generate type inference
    // lines.push(`export type ${name} = z.infer<typeof ${name}Schema>;`);

    return lines.join("\n")
  }

  /**
   * Generate all Zod schemas
   */
  public generate(): string {
    const output: string[] = []

    // Add header
    output.push("// Auto-generated Zod schemas from schema")
    output.push("")
    output.push("import { z } from \"zod\"")

    // Only generate schemas for concrete classes
    const concreteEntities = Object.keys(this.schema).filter(name => {
      const entity = this.schema[name] ?? ""
      return entity !== "" && entity.Modifier !== "Abstract"
    })

    output.push("// Import types for schema inference")
    output.push("import type {")
    // Import concrete types only (abstract/union types are not used in schema definitions)
    concreteEntities.forEach((name, index) => {
      const isLast = index === concreteEntities.length - 1
      output.push(`  ${name}${isLast ? "" : ","}`)
    })
    output.push("} from \"./types/index\"")
    output.push("")

    // Sort concrete entities to ensure dependencies are generated first
    const sorted = this.topologicalSort(concreteEntities)

    // Generate each schema (only concrete classes)
    for (const name of sorted) {
      const entity = this.schema[name]
      if (!this.generatedSchemas.has(name) && entity) {
        output.push(this.generateSchema(name, entity))
        this.generatedSchemas.add(name)
        this.generationOrder.push(name)
      }
    }

    // Generate union schemas for abstract classes with consistent naming
    if (this.abstractClassUnions.size > 0) {
      output.push("// Union schemas for abstract classes")
      for (const [abstractName, subClasses] of this.abstractClassUnions) {
        const subSchemas = subClasses.map(subName => `${subName}Schema`)

        // Generate JSDoc for the union schema
        const abstractEntity = this.schema[abstractName]
        if (abstractEntity) {
          output.push(this.generateSchemaJSDoc(abstractEntity))
        }

        // Use consistent naming: QuantityRangeSchema validates QuantityRange
        output.push(`export const ${abstractName}Schema: z.ZodUnion<[${subSchemas.map(s => `typeof ${s}`).join(", ")}]> = z.union([${subSchemas.join(", ")}])`)
        output.push("")
      }
    }

    // Generate a master schema object
    output.push("// Master schema object for easy access")
    output.push("export const schemas: Record<string, z.ZodTypeAny> = {")
    const allSchemaNames = [...sorted, ...this.abstractClassUnions.keys()]
    allSchemaNames.forEach((name, index) => {
      const isLast = index === allSchemaNames.length - 1
      output.push(`  ${name}: ${name}Schema${isLast ? "" : ","}`)
    })
    output.push("}")
    output.push("")

    return output.join("\n")
  }

  /**
   * Topological sort for dependency order (only concrete entities)
   */
  private topologicalSort(entities: string[]): string[] {
    const visited = new Set<string>()
    const visiting = new Set<string>() // For cycle detection
    const result: string[] = []

    const visit = (name: string): void => {
      if (visited.has(name)) return

      if (visiting.has(name)) return

      visiting.add(name)

      const entity = this.schema[name]
      if (!entity) {
        visiting.delete(name)
        return
      }

      // Visit super classes first (but only if they're concrete)
      if (entity["Super Classes"]) {
        for (const superRef of entity["Super Classes"]) {
          const superName = superRef.$ref.replace("#/", "")
          if (this.schema[superName]
            && this.schema[superName].Modifier !== "Abstract" // Only visit concrete super classes
            && !visited.has(superName)) {
            visit(superName)
          }
        }
      }

      // Visit referenced types in attributes (but only concrete ones)
      for (const attr of Object.values(entity.Attributes)) {
        for (const type of attr.Type) {
          if (typeof type === "object" && type.$ref) {
            const refName = type.$ref.replace("#/", "")
            // Only visit if it's not a primitive type, exists in schema, is concrete, and not visited
            if (!PRIMITIVE_TYPES.includes(refName as PrimitiveType)
              && this.schema[refName]
              && this.schema[refName].Modifier !== "Abstract"
              && !visited.has(refName)) {
              visit(refName)
            }
          }
        }
      }

      visiting.delete(name)
      visited.add(name)
      result.push(name)
      return
    }

    // Visit all entities (only concrete ones should be in the input)
    for (const name of entities) {
      if (!visited.has(name)) {
        visit(name)
      }
    }

    return result
  }
}

/**
 * Main function to parse schema file and generate TypeScript interfaces
 */
export async function generateInterfacesFromSchema(
  inputPath: string,
  outputDir: string
): Promise<void> {
  try {
    // Read the schema file
    const fileContent = await fs.readFile(inputPath, "utf-8")

    // Parse YAML
    const schema = yaml.parse(fileContent) as Schema

    // Generate TypeScript interfaces
    const generator = new TypeScriptInterfaceGenerator(schema)
    const files = generator.generate()

    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true })

    // Clean existing .ts files in directory
    const existingFiles = await fs.readdir(outputDir)
    for (const file of existingFiles) {
      if (file.endsWith(".ts")) {
        await fs.unlink(path.join(outputDir, file))
      }
    }

    // Write all generated files
    for (const [filename, content] of files) {
      await fs.writeFile(path.join(outputDir, filename), content)
    }

    console.log(`✅ Successfully generated ${files.size} TypeScript interface files to: ${outputDir}`)
  } catch (error) {
    console.error("❌ Error generating interfaces:", error)
    throw error
  }
}

/**
 * Generate Zod validation schemas from schema file
 */
export async function generateZodSchemasFromSchema(
  inputPath: string,
  outputPath: string
): Promise<void> {
  try {
    // Read the schema file
    const fileContent = await fs.readFile(inputPath, "utf-8")

    // Parse YAML
    const schema = yaml.parse(fileContent) as Schema

    // Generate Zod schemas
    const generator = new ZodSchemaGenerator(schema)
    const generatedCode = generator.generate()

    // Write to output file
    await fs.writeFile(outputPath, generatedCode)

    console.log(`✅ Successfully generated Zod schemas to: ${outputPath}`)
  } catch (error) {
    console.error("❌ Error generating Zod schemas:", error)
    throw error
  }
}

/**
 * Generate both TypeScript interfaces and Zod schemas
 */
export async function generateAllFromSchema(
  inputPath: string,
  options: {
    interfacesOutputDir?: string
    zodOutput?: string
  } = {}
): Promise<void> {
  const dir = path.dirname(inputPath)

  const interfacesDir = options.interfacesOutputDir ?? path.join(dir, "src/generated/types")
  const zodPath = options.zodOutput ?? path.join(dir, "src/generated/zod.ts")

  await Promise.all([
    generateInterfacesFromSchema(inputPath, interfacesDir),
    generateZodSchemasFromSchema(inputPath, zodPath)
  ])
}

await generateAllFromSchema("./src/dataStructure.yml", {
  interfacesOutputDir: "src/generated/types",
  zodOutput: "src/generated/zod.ts"
})