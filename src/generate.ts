import * as yaml from 'yaml';
import * as fs from 'fs/promises';
import * as path from 'path';

interface SchemaAttribute {
  Type: Array<string | { $ref: string }>;
  'NCI C-Code'?: string;
  'Preferred Term'?: string;
  Definition?: string;
  Cardinality: string;
  'Relationship Type': string;
  'Model Name'?: string;
  'Model Representation'?: string;
  'Inherited From'?: Array<{ $ref: string }>;
}

interface SchemaEntity {
  'NCI C-Code'?: string;
  'Preferred Term'?: string;
  Definition?: string;
  Modifier?: string;
  'Super Classes'?: Array<{ $ref: string }>;
  'Sub Classes'?: Array<{ $ref: string }>;
  Attributes: Record<string, SchemaAttribute>;
}

type Schema = Record<string, SchemaEntity>;

// Primitive types that can be referenced
const PRIMITIVE_TYPES = ['string', 'float', 'integer', 'boolean', 'date', 'datetime'] as const;
type PrimitiveType = typeof PRIMITIVE_TYPES[number];

class TypeScriptInterfaceGenerator {
  private schema: Schema;
  private generatedInterfaces: Set<string> = new Set();
  private abstractClassUnions: Map<string, string[]> = new Map(); // Track abstract class unions

  constructor(schema: Schema) {
    this.schema = schema;
    this.buildAbstractClassUnions(); // Build the union map during construction
  } 
  /**
   * Build a map of abstract classes to their concrete subclasses
   */
  private buildAbstractClassUnions(): void {
    for (const [entityName, entity] of Object.entries(this.schema)) {
      if (entity.Modifier === 'Abstract' && entity['Sub Classes']) {
        const subClassNames = entity['Sub Classes'].map(ref => ref.$ref.replace('#/', ''));
        this.abstractClassUnions.set(entityName, subClassNames);
      }
    }
  }

  /**
   * Topological sort for dependency order - include all entities
   */
  private topologicalSort(entities: string[]): string[] {
    const visited = new Set<string>();
    const visiting = new Set<string>(); // For cycle detection
    const result: string[] = [];

    const visit = (name: string) => {
      if (visited.has(name)) return;

      if (visiting.has(name)) {
        console.warn(`Circular dependency detected involving ${name}`);
        return;
      }

      visiting.add(name);

      const entity = this.schema[name];
      if (!entity) {
        visiting.delete(name);
        return;
      }

      // Visit super classes first
      if (entity['Super Classes']) {
        for (const superRef of entity['Super Classes']) {
          const superName = superRef.$ref.replace('#/', '');
          if (this.schema[superName] && !visited.has(superName)) {
            visit(superName);
          }
        }
      }

      // Visit referenced types in attributes
      for (const attr of Object.values(entity.Attributes)) {
        for (const type of attr.Type) {
          if (typeof type === 'object' && type.$ref) {
            const refName = type.$ref.replace('#/', '');
            // Only visit if it's not a primitive type and exists in schema
            if (!PRIMITIVE_TYPES.includes(refName as PrimitiveType) && this.schema[refName] && !visited.has(refName)) {
              visit(refName);
            }
          }
        }
      }

      visiting.delete(name);
      visited.add(name);
      result.push(name);
    };

    // Visit all entities
    for (const name of entities) {
      if (!visited.has(name)) {
        visit(name);
      }
    }

    return result;
  }

  /**
   * Check if a type reference creates a circular dependency
   */
  private hasCircularReference(entityName: string, referencedType: string, visited: Set<string> = new Set()): boolean {
    if (entityName === referencedType) return true;
    if (visited.has(entityName)) return false;

    visited.add(entityName);
    const entity = this.schema[referencedType];
    if (!entity) return false;

    // Check if the referenced type has any attributes that reference back to the original entity
    for (const attr of Object.values(entity.Attributes)) {
      for (const type of attr.Type) {
        if (typeof type === 'object' && type.$ref) {
          const refName = type.$ref.replace('#/', '');
          if (refName === entityName) return true;
          if (!PRIMITIVE_TYPES.includes(refName as PrimitiveType) && this.schema[refName]) {
            if (this.hasCircularReference(entityName, refName, new Set(visited))) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  /**
   * Parse cardinality to determine if field is optional and/or array
   */
  private parseCardinality(cardinality: string): { optional: boolean; isArray: boolean } {
    const optional = cardinality.startsWith('0');
    const isArray = cardinality.includes('*') ||
      (cardinality.includes('..') && !cardinality.endsWith('..1'));
    return { optional, isArray };
  }

  /**
   * Convert schema type to TypeScript type, using union type names for abstract classes
   */
  private convertType(types: Array<string | { $ref: string }>): string {
    const tsTypes = types.map(type => {
      if (typeof type === 'string') {
        return type;
      } else if (type.$ref) {
        const refType = type.$ref.replace('#/', '');
        
        // Check if this is a primitive type reference
        if (PRIMITIVE_TYPES.includes(refType as PrimitiveType)) {
          switch (refType) {
            case 'string': return 'string';
            case 'float': return 'number';
            case 'integer': return 'number';
            case 'boolean': return 'boolean';
            case 'date': return 'Date';
            case 'datetime': return 'Date';
            default: return refType;
          }
        }

        // For abstract classes, just return the type name (we'll define it as a union)
        // For concrete classes, also just return the type name
        return refType;
      }
      return 'unknown';
    });

    // Map remaining schema types to TypeScript types
    const mappedTypes = tsTypes.map(type => {
      switch (type) {
        case 'string': return 'string';
        case 'float': return 'number';
        case 'integer': return 'number';
        case 'boolean': return 'boolean';
        case 'date': return 'Date';
        case 'datetime': return 'Date';
        default: return type; // Keep as is - will be either a concrete interface or union type
      }
    });

    // Return union type if multiple types
    return mappedTypes.length > 1 ? mappedTypes.join(' | ') : mappedTypes[0];
  }

  /**
   * Generate JSDoc comment from attribute metadata
   */
  private generateJSDoc(attr: SchemaAttribute, indent: string = ''): string {
    const lines: string[] = [];
    lines.push(`${indent}/**`);

    if (attr.Definition) {
      lines.push(`${indent} * ${attr.Definition.trim()}`);
    }

    if (attr['Preferred Term']) {
      lines.push(`${indent} * @preferredTerm ${attr['Preferred Term']}`);
    }

    if (attr['NCI C-Code']) {
      lines.push(`${indent} * @nciCode ${attr['NCI C-Code']}`);
    }

    if (attr.Cardinality) {
      lines.push(`${indent} * @cardinality ${attr.Cardinality}`);
    }

    if (attr['Relationship Type']) {
      lines.push(`${indent} * @relationshipType ${attr['Relationship Type']}`);
    }

    if (attr['Model Name']) {
      lines.push(`${indent} * @modelName ${attr['Model Name']}`);
    }

    if (attr['Model Representation']) {
      lines.push(`${indent} * @modelRepresentation ${attr['Model Representation']}`);
    }

    if (attr['Inherited From']) {
      const inherited = attr['Inherited From'].map(ref => ref.$ref.replace('#/', '')).join(', ');
      lines.push(`${indent} * @inheritedFrom ${inherited}`);
    }

    lines.push(`${indent} */`);
    return lines.join('\n');
  }

  /**
   * Generate interface JSDoc from entity metadata
   */
  private generateInterfaceJSDoc(entity: SchemaEntity): string {
    const lines: string[] = [];
    lines.push('/**');

    if (entity.Definition) {
      lines.push(` * ${entity.Definition.trim()}`);
    }

    if (entity['Preferred Term']) {
      lines.push(` * @preferredTerm ${entity['Preferred Term']}`);
    }

    if (entity['NCI C-Code']) {
      lines.push(` * @nciCode ${entity['NCI C-Code']}`);
    }

    if (entity.Modifier) {
      lines.push(` * @modifier ${entity.Modifier}`);
    }

    if (entity['Super Classes']) {
      const supers = entity['Super Classes'].map(ref => ref.$ref.replace('#/', '')).join(', ');
      lines.push(` * @extends ${supers}`);
    }

    if (entity['Sub Classes']) {
      const subs = entity['Sub Classes'].map(ref => ref.$ref.replace('#/', '')).join(', ');
      lines.push(` * @subClasses ${subs}`);
    }

    lines.push(' */');
    return lines.join('\n');
  }

  /**
   * Generate a single TypeScript interface
   */
  private generateInterface(name: string, entity: SchemaEntity): string {
    const lines: string[] = [];

    // Add interface JSDoc
    lines.push(this.generateInterfaceJSDoc(entity));

    // Handle inheritance
    const superClasses = entity['Super Classes']?.map(ref => {
      const superName = ref.$ref.replace('#/', '');
      // If super class is abstract, reference the Abstract version
      return this.schema[superName]?.Modifier === 'Abstract' 
        ? `${superName}Abstract` 
        : superName;
    }) || [];
    
    const extendsClause = superClasses.length > 0 ? ` extends ${superClasses.join(', ')}` : '';

    const interfaceName = entity.Modifier === 'Abstract' ? `${name}Abstract` : name;
    lines.push(`export interface ${interfaceName}${extendsClause} {`);

    // Generate properties
    for (const [attrName, attr] of Object.entries(entity.Attributes)) {
      const { optional, isArray } = this.parseCardinality(attr.Cardinality);
      let baseType = this.convertType(attr.Type);
      if(baseType.includes(' | ')) {
        // If the type is a union, we need to wrap it in parentheses
        baseType = `(${baseType})`;
      }
      const finalType = isArray ? `${baseType}[]` : baseType;
      const optionalMark = optional ? '?' : '';

      // Add JSDoc for property
      lines.push(this.generateJSDoc(attr, '  '));

      // Add property
      lines.push(`  ${attrName}${optionalMark}: ${finalType}`);
      lines.push('');
    }

    lines.push('}');
    return lines.join('\n');
  }

  /**
   * Generate all TypeScript interfaces and union types
   */
  public generate(): string {
    const output: string[] = [];

    // Add header
    output.push('// Auto-generated TypeScript interfaces from schema');
    output.push('// Generated on: ' + new Date().toISOString());
    output.push('');

    // Generate all entities (both abstract and concrete)
    const allEntities = Object.keys(this.schema);
    
    // Use topological sort to ensure correct order
    const sorted = this.topologicalSort(allEntities);

    // Generate each interface
    for (const name of sorted) {
      if (!this.generatedInterfaces.has(name)) {
        output.push(this.generateInterface(name, this.schema[name]));
        output.push('');
        this.generatedInterfaces.add(name);
      }
    }

    // Generate union type aliases for abstract classes
    if (this.abstractClassUnions.size > 0) {
      output.push('// Union types for abstract classes');
      for (const [abstractName, subClasses] of this.abstractClassUnions) {
        output.push(`export type ${abstractName} = ${subClasses.join(' | ')};`);
      }
      output.push('');
    }

    return output.join('\n');
  }
}

class ZodSchemaGenerator {
  private schema: Schema;
  private generatedSchemas: Set<string> = new Set();
  private generationOrder: string[] = [];
  private abstractClassUnions: Map<string, string[]> = new Map();

  constructor(schema: Schema) {
    this.schema = schema;
    this.buildAbstractClassUnions();
  }

  /**
   * Build a map of abstract classes to their concrete subclasses
   */
  private buildAbstractClassUnions(): void {
    for (const [entityName, entity] of Object.entries(this.schema)) {
      if (entity.Modifier === 'Abstract' && entity['Sub Classes']) {
        const subClassNames = entity['Sub Classes'].map(ref => ref.$ref.replace('#/', ''));
        this.abstractClassUnions.set(entityName, subClassNames);
      }
    }
  }

  /**
   * Check if a reference is a forward reference (not yet generated)
   */
  private isForwardReference(refType: string): boolean {
    return !this.generationOrder.includes(refType);
  }

  /**
   * Parse cardinality to determine if field is optional and/or array
   */
  private parseCardinality(cardinality: string): { optional: boolean; isArray: boolean; min?: number; max?: number } {
    const optional = cardinality.startsWith('0');
    const isArray = cardinality.includes('*') ||
      (cardinality.includes('..') && !cardinality.endsWith('..1'));

    let min: number | undefined;
    let max: number | undefined;

    if (cardinality.includes('..')) {
      const [minStr, maxStr] = cardinality.split('..');
      min = minStr === '' ? 0 : parseInt(minStr);
      max = maxStr === '*' ? undefined : parseInt(maxStr);
    } else if (cardinality === '*') {
      min = 0;
      max = undefined;
    } else if (cardinality.match(/^\d+$/)) {
      min = max = parseInt(cardinality);
    }

    return { optional, isArray, min, max };
  }

  /**
   * Check if a type reference creates a circular dependency
   */
  private hasCircularReference(entityName: string, referencedType: string, visited: Set<string> = new Set()): boolean {
    if (entityName === referencedType) return true;
    if (visited.has(entityName)) return false;

    visited.add(entityName);
    const entity = this.schema[entityName];
    if (!entity) return false;

    // Check all attribute types
    for (const attr of Object.values(entity.Attributes)) {
      for (const type of attr.Type) {
        if (typeof type === 'object' && type.$ref) {
          const refName = type.$ref.replace('#/', '');
          if (refName === referencedType) return true;
          if (!PRIMITIVE_TYPES.includes(refName as PrimitiveType) && this.schema[refName]) {
            if (this.hasCircularReference(refName, referencedType, new Set(visited))) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  /**
   * Convert schema type to Zod schema, handling abstract class unions
   */
  private convertTypeToZod(
    types: Array<string | { $ref: string }>,
    cardinality: { optional: boolean; isArray: boolean; min?: number; max?: number },
    currentEntity?: string
  ): string {
    const zodTypes = types.map(type => {
      if (typeof type === 'string') {
        switch (type) {
          case 'string': return 'z.string()';
          case 'float': return 'z.number()';
          case 'integer': return 'z.number().int()';
          case 'boolean': return 'z.boolean()';
          case 'date': return 'z.date()';
          case 'datetime': return 'z.date()';
          default: return 'z.unknown()';
        }
      } else if (type.$ref) {
        const refType = type.$ref.replace('#/', '');
        
        // Check if this is a primitive type reference
        if (PRIMITIVE_TYPES.includes(refType as PrimitiveType)) {
          switch (refType) {
            case 'string': return 'z.string()';
            case 'float': return 'z.number()';
            case 'integer': return 'z.number().int()';
            case 'boolean': return 'z.boolean()';
            case 'date': return 'z.date()';
            case 'datetime': return 'z.date()';
            default: return 'z.unknown()';
          }
        }

        // For both abstract and concrete classes, use consistent naming
        // Check for circular references or self-references
        if (currentEntity && this.needsLazyEvaluation(currentEntity, refType)) {
          return `z.lazy(() => ${refType}Schema)`;
        }

        // Regular schema reference - works for both concrete classes and abstract unions
        return `${refType}Schema`;
      }
      return 'z.unknown()';
    });

    // Create union if multiple types
    let baseSchema = zodTypes.length > 1
      ? `z.union([${zodTypes.join(', ')}])`
      : zodTypes[0];

    // Handle arrays
    if (cardinality.isArray) {
      baseSchema = `z.array(${baseSchema})`;
      if (cardinality.min !== undefined) {
        baseSchema += `.min(${cardinality.min})`;
      }
      if (cardinality.max !== undefined) {
        baseSchema += `.max(${cardinality.max})`;
      }
    }

    // Handle optional
    if (cardinality.optional && !cardinality.isArray) {
      baseSchema += '.optional()';
    } else if (cardinality.optional && cardinality.isArray && cardinality.min === 0) {
      baseSchema += '.optional()';
    }

    return baseSchema;
  }

  /**
   * Check if a type reference creates a circular dependency or self-reference
   */
  private needsLazyEvaluation(currentEntity: string, referencedType: string): boolean {
    // Self-reference always needs lazy
    if (currentEntity === referencedType) return true;

    // Check for circular reference
    return this.hasCircularReference(currentEntity, referencedType);
  }

  /**
   * Generate JSDoc comment for schema
   */
  private generateSchemaJSDoc(entity: SchemaEntity): string {
    const lines: string[] = [];
    lines.push('/**');

    if (entity.Definition) {
      lines.push(` * ${entity.Definition.trim()}`);
    }

    if (entity['Preferred Term']) {
      lines.push(` * @preferredTerm ${entity['Preferred Term']}`);
    }

    if (entity['NCI C-Code']) {
      lines.push(` * @nciCode ${entity['NCI C-Code']}`);
    }

    lines.push(' */');
    return lines.join('\n');
  }

  /**
   * Get all attributes including inherited ones
   */
  private getAllAttributes(entityName: string, visited: Set<string> = new Set()): Record<string, SchemaAttribute> {
    if (visited.has(entityName)) {
      console.warn(`Circular inheritance detected for ${entityName}`);
      return {};
    }
    visited.add(entityName);

    const entity = this.schema[entityName];
    if (!entity) return {};

    let attributes: Record<string, SchemaAttribute> = {};

    // Get inherited attributes first
    if (entity['Super Classes']) {
      for (const superRef of entity['Super Classes']) {
        const superName = superRef.$ref.replace('#/', '');
        const superAttrs = this.getAllAttributes(superName, new Set(visited)); // Create new Set to avoid mutation
        attributes = { ...attributes, ...superAttrs };
      }
    }

    // Override with own attributes
    attributes = { ...attributes, ...entity.Attributes };

    return attributes;
  }

  /**
   * Generate a single Zod schema
   */
  private generateSchema(name: string, entity: SchemaEntity): string {
    const lines: string[] = [];

    // Add JSDoc
    lines.push(this.generateSchemaJSDoc(entity));

    // Get all attributes including inherited
    const allAttributes = this.getAllAttributes(name);

    // Start schema definition with explicit type
    lines.push(`export const ${name}Schema: z.ZodSchema<${name}> = z.object({`);

    // Generate properties
    for (const [attrName, attr] of Object.entries(allAttributes)) {
      const cardinalityInfo = this.parseCardinality(attr.Cardinality);
      const zodType = this.convertTypeToZod(attr.Type, cardinalityInfo, name);

      // Add description as comment
      if (attr.Definition) {
        lines.push(`  // ${attr.Definition.trim()}`);
      }

      lines.push(`  ${attrName}: ${zodType},`);
    }

    lines.push(`})`);
    lines.push('');

    // Generate type inference
    // lines.push(`export type ${name} = z.infer<typeof ${name}Schema>;`);

    return lines.join('\n');
  }

  /**
   * Generate all Zod schemas
   */
  public generate(): string {
    const output: string[] = [];

    // Add header
    output.push('// Auto-generated Zod schemas from schema');
    output.push('// Generated on: ' + new Date().toISOString());
    output.push('');
    output.push("import { z } from \"zod\"");

    // Only generate schemas for concrete classes
    const concreteEntities = Object.keys(this.schema).filter(name => 
      this.schema[name].Modifier !== 'Abstract'
    );

    output.push('// Import types for schema inference');
    output.push('import {');
    // Import concrete types and union types
    concreteEntities.forEach(name => {
      output.push(`  ${name},`);
    });
    // Import union types for abstract classes
    for (const abstractName of this.abstractClassUnions.keys()) {
      output.push(`  ${abstractName},`);
    }
    output.push("} from \"./types\"");
    output.push('');

    // Sort concrete entities to ensure dependencies are generated first
    const sorted = this.topologicalSort(concreteEntities);

    // Generate each schema (only concrete classes)
    for (const name of sorted) {
      if (!this.generatedSchemas.has(name)) {
        output.push(this.generateSchema(name, this.schema[name]));
        this.generatedSchemas.add(name);
        this.generationOrder.push(name);
      }
    }

    // Generate union schemas for abstract classes with consistent naming
    if (this.abstractClassUnions.size > 0) {
      output.push('// Union schemas for abstract classes');
      for (const [abstractName, subClasses] of this.abstractClassUnions) {
        const subSchemas = subClasses.map(subName => `${subName}Schema`);
        
        // Generate JSDoc for the union schema
        const abstractEntity = this.schema[abstractName];
        if (abstractEntity) {
          output.push(this.generateSchemaJSDoc(abstractEntity));
        }
        
        // Use consistent naming: QuantityRangeSchema validates QuantityRange
        output.push(`export const ${abstractName}Schema: z.ZodUnion<[${subSchemas.map(s => `typeof ${s}`).join(', ')}]> = z.union([${subSchemas.join(', ')}]);`);
        output.push('');
      }
    }

    // Generate a master schema object
    output.push('// Master schema object for easy access');
    output.push('export const schemas: Record<string, z.ZodTypeAny> = {');
    for (const name of sorted) {
      output.push(`  ${name}: ${name}Schema,`);
    }
    // Add union schemas to master object
    for (const abstractName of this.abstractClassUnions.keys()) {
      output.push(`  ${abstractName}: ${abstractName}Schema,`);
    }
    output.push('};');

    return output.join('\n');
  }

  /**
   * Topological sort for dependency order (only concrete entities)
   */
  private topologicalSort(entities: string[]): string[] {
    const visited = new Set<string>();
    const visiting = new Set<string>(); // For cycle detection
    const result: string[] = [];

    const visit = (name: string) => {
      if (visited.has(name)) return;

      if (visiting.has(name)) {
        console.warn(`Circular dependency detected involving ${name}`);
        return;
      }

      visiting.add(name);

      const entity = this.schema[name];
      if (!entity) {
        visiting.delete(name);
        return;
      }

      // Visit super classes first (but only if they're concrete)
      if (entity['Super Classes']) {
        for (const superRef of entity['Super Classes']) {
          const superName = superRef.$ref.replace('#/', '');
          if (this.schema[superName] && 
              this.schema[superName].Modifier !== 'Abstract' && // Only visit concrete super classes
              !visited.has(superName)) {
            visit(superName);
          }
        }
      }

      // Visit referenced types in attributes (but only concrete ones)
      for (const attr of Object.values(entity.Attributes)) {
        for (const type of attr.Type) {
          if (typeof type === 'object' && type.$ref) {
            const refName = type.$ref.replace('#/', '');
            // Only visit if it's not a primitive type, exists in schema, is concrete, and not visited
            if (!PRIMITIVE_TYPES.includes(refName as PrimitiveType) && 
                this.schema[refName] && 
                this.schema[refName].Modifier !== 'Abstract' &&
                !visited.has(refName)) {
              visit(refName);
            }
          }
        }
      }

      visiting.delete(name);
      visited.add(name);
      result.push(name);
    };

    // Visit all entities (only concrete ones should be in the input)
    for (const name of entities) {
      if (!visited.has(name)) {
        visit(name);
      }
    }

    return result;
  }
}

/**
 * Main function to parse schema file and generate TypeScript interfaces
 */
/**
 * Main function to parse schema file and generate TypeScript interfaces
 */
export async function generateInterfacesFromSchema(
  inputPath: string,
  outputPath: string
): Promise<void> {
  try {
    // Read the schema file
    const fileContent = await fs.readFile(inputPath, 'utf-8');

    // Parse YAML
    const schema = yaml.parse(fileContent) as Schema;

    // Generate TypeScript interfaces
    const generator = new TypeScriptInterfaceGenerator(schema);
    const generatedCode = generator.generate();

    // Write to output file
    await fs.writeFile(outputPath, generatedCode);

    console.log(`✅ Successfully generated TypeScript interfaces to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating interfaces:', error);
    throw error;
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
    const fileContent = await fs.readFile(inputPath, 'utf-8');

    // Parse YAML
    const schema = yaml.parse(fileContent) as Schema;

    // Generate Zod schemas
    const generator = new ZodSchemaGenerator(schema);
    const generatedCode = generator.generate();

    // Write to output file
    await fs.writeFile(outputPath, generatedCode);

    console.log(`✅ Successfully generated Zod schemas to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating Zod schemas:', error);
    throw error;
  }
}

/**
 * Generate both TypeScript interfaces and Zod schemas
 */
export async function generateAllFromSchema(
  inputPath: string,
  options: {
    interfacesOutput?: string;
    zodOutput?: string;
  } = {}
): Promise<void> {
  const dir = path.dirname(inputPath);

  const interfacesPath = options.interfacesOutput || path.join(dir, `src/generated/types.ts`);
  const zodPath = options.zodOutput || path.join(dir, `src/generated/zod.ts`);

  await Promise.all([
    generateInterfacesFromSchema(inputPath, interfacesPath),
    generateZodSchemasFromSchema(inputPath, zodPath)
  ]);
}

await generateAllFromSchema("./src/dataStructure.yml", {
  interfacesOutput: "src/generated/types.ts",
  zodOutput: "src/generated/zod.ts"
});