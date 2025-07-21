import * as yaml from 'yaml';
import * as fs from 'fs/promises';
import * as path from 'path';
import {fileURLToPath} from "url";
import {dirname} from "path";

// Types
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

interface CardinalityInfo {
  optional: boolean;
  isArray: boolean;
  min?: number;
  max?: number;
}

// Constants
const PRIMITIVE_TYPES = ['string', 'float', 'integer', 'boolean', 'date', 'datetime'] as const;
type PrimitiveType = typeof PRIMITIVE_TYPES[number];

// Shared utilities
function parseCardinality(cardinality: string): CardinalityInfo {
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

function extractRefName(ref: string): string {
  return ref.replace('#/', '');
}

function isPrimitiveType(type: string): boolean {
  return PRIMITIVE_TYPES.includes(type as PrimitiveType);
}

// Base generator class with shared functionality
abstract class BaseSchemaGenerator<T> {
  protected schema: Schema;
  protected generatedItems = new Set<string>();

  constructor(schema: Schema) {
    this.schema = schema;
  }

  protected topologicalSort(entities: string[]): string[] {
    const visited = new Set<string>();
    const visiting = new Set<string>();
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
      entity['Super Classes']?.forEach(superRef => {
        const superName = extractRefName(superRef.$ref);
        if (this.schema[superName] && !visited.has(superName)) {
          visit(superName);
        }
      });

      // Visit referenced types in attributes
      Object.values(entity.Attributes).forEach(attr => {
        attr.Type.forEach(type => {
          if (typeof type === 'object' && type.$ref) {
            const refName = extractRefName(type.$ref);
            if (!isPrimitiveType(refName) && this.schema[refName] && !visited.has(refName)) {
              visit(refName);
            }
          }
        });
      });

      visiting.delete(name);
      visited.add(name);
      result.push(name);
    };

    entities.forEach(name => {
      if (!visited.has(name)) {
        visit(name);
      }
    });

    return result;
  }

  protected hasCircularReference(
      startEntity: string,
      targetEntity: string,
      visited = new Set<string>()
  ): boolean {
    if (startEntity === targetEntity) return true;
    if (visited.has(startEntity)) return false;

    visited.add(startEntity);
    const entity = this.schema[startEntity];
    if (!entity) return false;

    // Check all attribute types for references to target
    for (const attr of Object.values(entity.Attributes)) {
      for (const type of attr.Type) {
        if (typeof type === 'object' && type.$ref) {
          const refName = extractRefName(type.$ref);
          if (refName === targetEntity) return true;

          if (!isPrimitiveType(refName) && this.schema[refName]) {
            if (this.hasCircularReference(refName, targetEntity, new Set(visited))) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  abstract generate(): string;
}

// TypeScript Interface Generator
class TypeScriptInterfaceGenerator extends BaseSchemaGenerator<string> {
  private convertType(types: Array<string | { $ref: string }>): string {
    const tsTypes = types.map(type => {
      if (typeof type === 'string') {
        return this.mapPrimitiveType(type);
      } else if (type.$ref) {
        const refType = extractRefName(type.$ref);
        return isPrimitiveType(refType) ? this.mapPrimitiveType(refType) : refType;
      }
      return 'unknown';
    });

    return tsTypes.length > 1 ? tsTypes.join(' | ') : tsTypes[0];
  }

  private mapPrimitiveType(type: string): string {
    const typeMap: Record<string, string> = {
      'string': 'string',
      'float': 'number',
      'integer': 'number',
      'boolean': 'boolean',
      'date': 'Date',
      'datetime': 'Date'
    };
    return typeMap[type] || type;
  }

  private generateJSDoc(attr: SchemaAttribute, indent = ''): string {
    const lines: string[] = [`${indent}/**`];

    if (attr.Definition) {
      lines.push(`${indent} * ${attr.Definition}`);
    }

    const metadata = [
      ['preferredTerm', attr['Preferred Term']],
      ['nciCode', attr['NCI C-Code']],
      ['cardinality', attr.Cardinality],
      ['relationshipType', attr['Relationship Type']],
      ['modelName', attr['Model Name']],
      ['modelRepresentation', attr['Model Representation']]
    ];

    metadata.forEach(([tag, value]) => {
      if (value) lines.push(`${indent} * @${tag} ${value}`);
    });

    if (attr['Inherited From']) {
      const inherited = attr['Inherited From']
          .map(ref => extractRefName(ref.$ref))
          .join(', ');
      lines.push(`${indent} * @inheritedFrom ${inherited}`);
    }

    lines.push(`${indent} */`);
    return lines.join('\n');
  }

  private generateInterfaceJSDoc(entity: SchemaEntity): string {
    const lines: string[] = ['/**'];

    if (entity.Definition) {
      lines.push(` * ${entity.Definition}`);
    }

    const metadata = [
      ['preferredTerm', entity['Preferred Term']],
      ['nciCode', entity['NCI C-Code']],
      ['modifier', entity.Modifier]
    ];

    metadata.forEach(([tag, value]) => {
      if (value) lines.push(` * @${tag} ${value}`);
    });

    if (entity['Super Classes']) {
      const supers = entity['Super Classes']
          .map(ref => extractRefName(ref.$ref))
          .join(', ');
      lines.push(` * @extends ${supers}`);
    }

    if (entity['Sub Classes']) {
      const subs = entity['Sub Classes']
          .map(ref => extractRefName(ref.$ref))
          .join(', ');
      lines.push(` * @subClasses ${subs}`);
    }

    lines.push(' */');
    return lines.join('\n');
  }

  private generateInterface(name: string, entity: SchemaEntity): string {
    const lines: string[] = [];

    lines.push(this.generateInterfaceJSDoc(entity));

    // Handle inheritance
    const superClasses = entity['Super Classes']
        ?.map(ref => extractRefName(ref.$ref)) || [];
    const extendsClause = superClasses.length > 0
        ? ` extends ${superClasses.join(', ')}`
        : '';

    lines.push(`export interface ${name}${extendsClause} {`);

    // Generate properties
    Object.entries(entity.Attributes).forEach(([attrName, attr]) => {
      const { optional, isArray } = parseCardinality(attr.Cardinality);
      const baseType = this.convertType(attr.Type);
      const finalType = isArray ? `${baseType}[]` : baseType;
      const optionalMark = optional ? '?' : '';

      lines.push(this.generateJSDoc(attr, '  '));
      lines.push(`  ${attrName}${optionalMark}: ${finalType};`);
      lines.push('');
    });

    lines.push('}');
    return lines.join('\n');
  }

  generate(): string {
    const output: string[] = [
      '// Auto-generated TypeScript interfaces from usdm-ts',
      `// Generated on: ${new Date().toISOString()}`,
      ''
    ];

    const sorted = this.topologicalSort(Object.keys(this.schema));

    sorted.forEach(name => {
      if (!this.generatedItems.has(name)) {
        output.push(this.generateInterface(name, this.schema[name]));
        output.push('');
        this.generatedItems.add(name);
      }
    });

    return output.join('\n');
  }
}

// Zod Schema Generator
class ZodSchemaGenerator extends BaseSchemaGenerator<string> {
  private generationOrder: string[] = [];

  private needsLazyEvaluation(currentEntity: string, referencedType: string): boolean {
    // Self-reference always needs lazy
    if (currentEntity === referencedType) return true;

    // Forward reference needs lazy
    if (!this.generationOrder.includes(referencedType)) return true;

    // Check for circular reference
    return this.hasCircularReference(referencedType, currentEntity);
  }

  private convertTypeToZod(
      types: Array<string | { $ref: string }>,
      cardinality: CardinalityInfo,
      currentEntity?: string
  ): string {
    const zodTypes = types.map(type => {
      if (typeof type === 'string') {
        return this.mapPrimitiveToZod(type);
      } else if (type.$ref) {
        const refType = extractRefName(type.$ref);

        if (isPrimitiveType(refType)) {
          return this.mapPrimitiveToZod(refType);
        }

        if (currentEntity && this.needsLazyEvaluation(currentEntity, refType)) {
          return `z.lazy(() => ${refType}Schema)`;
        }

        return `${refType}Schema`;
      }
      return 'z.unknown()';
    });

    let baseSchema = zodTypes.length > 1
        ? `z.union([${zodTypes.join(', ')}])`
        : zodTypes[0];

    if (cardinality.isArray) {
      baseSchema = `z.array(${baseSchema})`;
      if (cardinality.min !== undefined) {
        baseSchema += `.min(${cardinality.min})`;
      }
      if (cardinality.max !== undefined) {
        baseSchema += `.max(${cardinality.max})`;
      }
    }

    if (cardinality.optional && (!cardinality.isArray || cardinality.min === 0)) {
      baseSchema += '.optional()';
    }

    return baseSchema;
  }

  private mapPrimitiveToZod(type: string): string {
    const typeMap: Record<string, string> = {
      'string': 'z.string()',
      'float': 'z.number()',
      'integer': 'z.number().int()',
      'boolean': 'z.boolean()',
      'date': 'z.date()',
      'datetime': 'z.date()'
    };
    return typeMap[type] || 'z.unknown()';
  }

  private getAllAttributes(entityName: string, visited = new Set<string>()): Record<string, SchemaAttribute> {
    if (visited.has(entityName)) {
      console.warn(`Circular inheritance detected for ${entityName}`);
      return {};
    }
    visited.add(entityName);

    const entity = this.schema[entityName];
    if (!entity) return {};

    let attributes: Record<string, SchemaAttribute> = {};

    // Get inherited attributes first
    entity['Super Classes']?.forEach(superRef => {
      const superName = extractRefName(superRef.$ref);
      const superAttrs = this.getAllAttributes(superName, new Set(visited));
      attributes = { ...attributes, ...superAttrs };
    });

    // Override with own attributes
    attributes = { ...attributes, ...entity.Attributes };

    return attributes;
  }

  private generateSchemaJSDoc(entity: SchemaEntity): string {
    const lines: string[] = ['/**'];

    if (entity.Definition) {
      lines.push(` * ${entity.Definition}`);
    }

    const metadata = [
      ['preferredTerm', entity['Preferred Term']],
      ['nciCode', entity['NCI C-Code']]
    ];

    metadata.forEach(([tag, value]) => {
      if (value) lines.push(` * @${tag} ${value}`);
    });

    lines.push(' */');
    return lines.join('\n');
  }

  private generateSchema(name: string, entity: SchemaEntity): string {
    this.generationOrder.push(name);

    const lines: string[] = [];

    lines.push(this.generateSchemaJSDoc(entity));

    const allAttributes = this.getAllAttributes(name);

    lines.push(`export const ${name}Schema: z.ZodObject<any> = z.object({`);

    Object.entries(allAttributes).forEach(([attrName, attr]) => {
      if (attr.Definition) {
        lines.push(`  // ${attr.Definition}`);
      }

      const cardinalityInfo = parseCardinality(attr.Cardinality);
      const zodType = this.convertTypeToZod(attr.Type, cardinalityInfo, name);

      lines.push(`  ${attrName}: ${zodType},`);
    });

    lines.push('});');
    lines.push('');
    lines.push(`export type ${name} = z.infer<typeof ${name}Schema>;`);

    return lines.join('\n');
  }

  generate(): string {
    const output: string[] = [
      '// Auto-generated Zod schemas from schema',
      `// Generated on: ${new Date().toISOString()}`,
      '',
      "import { z } from 'zod';",
      ''
    ];

    const sorted = this.topologicalSort(Object.keys(this.schema));

    // Generate schemas
    sorted.forEach(name => {
      if (!this.generatedItems.has(name)) {
        output.push(this.generateSchema(name, this.schema[name]));
        output.push('');
        this.generatedItems.add(name);
      }
    });

    // Generate discriminated unions for abstract classes
    const abstractClasses = sorted.filter(name =>
        this.schema[name].Modifier === 'Abstract' && this.schema[name]['Sub Classes']
    );

    if (abstractClasses.length > 0) {
      output.push('// Discriminated unions for abstract classes');
      output.push('// These are defined after all schemas to avoid forward reference issues');
      output.push('');

      abstractClasses.forEach(name => {
        const entity = this.schema[name];
        if (entity['Sub Classes']) {
          output.push(`// Discriminated union for ${name} subclasses`);
          const subSchemas = entity['Sub Classes']
              .map(ref => `${extractRefName(ref.$ref)}Schema`);
          const typeList = subSchemas.map(s => `typeof ${s}`).join(', ');
          output.push(`export const ${name}UnionSchema: z.ZodUnion<[${typeList}]> = z.union([${subSchemas.join(', ')}]);`);
          output.push(`export type ${name}Union = z.infer<typeof ${name}UnionSchema>;`);
          output.push('');
        }
      });
    }

    // Generate master schema object
    output.push('// Master schema object for easy access');
    output.push('export const schemas: Record<string, z.ZodTypeAny> = {');
    sorted.forEach(name => {
      output.push(`  ${name}: ${name}Schema,`);
    });
    output.push('};');

    return output.join('\n');
  }
}

// Main functions
export async function generateInterfacesFromSchema(
    inputPath: string,
    outputPath: string
): Promise<void> {
  try {
    const fileContent = await fs.readFile(inputPath, 'utf-8');
    const schema = yaml.parse(fileContent) as Schema;

    const generator = new TypeScriptInterfaceGenerator(schema);
    const generatedCode = generator.generate();

    await fs.writeFile(outputPath, generatedCode);
    console.log(`✅ Successfully generated TypeScript interfaces to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating interfaces:', error);
    throw error;
  }
}

export async function generateZodSchemasFromSchema(
    inputPath: string,
    outputPath: string
): Promise<void> {
  try {
    const fileContent = await fs.readFile(inputPath, 'utf-8');
    const schema = yaml.parse(fileContent) as Schema;

    const generator = new ZodSchemaGenerator(schema);
    const generatedCode = generator.generate();

    await fs.writeFile(outputPath, generatedCode);
    console.log(`✅ Successfully generated Zod schemas to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating Zod schemas:', error);
    throw error;
  }
}

export async function generateAllFromSchema(
    options: {
      interfacesOutput?: string;
      zodOutput?: string;
    } = {}
): Promise<void> {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

    const inputPath = path.join(__dirname, './dataStructure.yml');

  const interfacesPath = options.interfacesOutput || path.join(__dirname, './generated/types.ts');
  const zodPath = options.zodOutput || path.join(__dirname, './generated/zod.ts');

  await Promise.all([
    generateInterfacesFromSchema(inputPath, interfacesPath),
    generateZodSchemasFromSchema(inputPath, zodPath)
  ]);
}

await generateAllFromSchema();