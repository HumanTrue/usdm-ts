#!/usr/bin/env tsx

/**
 * XSD to JSON Schema Converter
 *
 * Converts XML Schema Definition (XSD) files to JSON Schema format.
 * This is useful for validating JSON documents against schemas originally defined in XSD.
 *
 * Usage:
 *   pnpm schema <input.xsd> <output.json>
 *   pnpm schema src/schemas/USDM.xsd src/schemas/USDM-schema.json
 *
 * The script:
 * 1. Parses the XSD file using fast-xml-parser
 * 2. Extracts complexType and element definitions
 * 3. Converts XSD types to JSON Schema types
 * 4. Generates a JSON Schema with all entity definitions
 * 5. Writes the output to the specified file
 */

import { readFile, writeFile } from "fs/promises";
import { XMLParser } from "fast-xml-parser";
import { resolve } from "path";

interface XSDElement {
  "@_name"?: string;
  "@_type"?: string;
  "@_minOccurs"?: string;
  "@_maxOccurs"?: string;
  "xs:sequence"?: { "xs:element"?: XSDElement | XSDElement[] };
  "xs:complexType"?: XSDComplexType;
}

interface XSDComplexType {
  "@_name"?: string;
  "xs:sequence"?: { "xs:element"?: XSDElement | XSDElement[] };
}

interface JSONSchemaProperty {
  type?: string | string[];
  items?: JSONSchemaProperty;
  $ref?: string;
  description?: string;
}

interface JSONSchema {
  $schema: string;
  $id: string;
  title: string;
  description: string;
  type: "object";
  definitions: Record<string, {
    type: "object";
    properties: Record<string, JSONSchemaProperty>;
    required?: string[];
    additionalProperties?: boolean;
  }>;
}

/**
 * Convert PascalCase to camelCase
 * USDM XSD uses PascalCase element names, but JSON documents use camelCase
 */
function toCamelCase(str: string): string {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Map XSD types to JSON Schema types
 */
function xsdTypeToJsonType(xsdType: string): string {
  const typeMap: Record<string, string> = {
    "xs:string": "string",
    "xs:integer": "integer",
    "xs:int": "integer",
    "xs:decimal": "number",
    "xs:double": "number",
    "xs:float": "number",
    "xs:boolean": "boolean",
    "xs:date": "string",
    "xs:dateTime": "string",
    "xs:time": "string",
  };

  return typeMap[xsdType] || "object";
}

/**
 * Convert XSD element to JSON Schema property
 */
function convertElement(element: XSDElement): {
  property: JSONSchemaProperty;
  isRequired: boolean;
  propertyName: string;
} {
  const name = element["@_name"] || "";
  const type = element["@_type"] || "";
  const minOccurs = parseInt(element["@_minOccurs"] || "1", 10);
  const maxOccurs = element["@_maxOccurs"];
  const isRequired = minOccurs > 0;

  let property: JSONSchemaProperty = {};

  // Handle arrays (maxOccurs = unbounded or > 1)
  const isArray = maxOccurs === "unbounded" || (maxOccurs && parseInt(maxOccurs, 10) > 1);

  if (type.startsWith("xs:")) {
    // Built-in XSD type
    const jsonType = xsdTypeToJsonType(type);
    if (isArray) {
      property = {
        type: "array",
        items: { type: jsonType }
      };
    }
    else {
      property = { type: jsonType };
    }
  }
  else if (type) {
    // Reference to another complex type
    if (isArray) {
      property = {
        type: "array",
        items: { $ref: `#/definitions/${type}` }
      };
    }
    else {
      property = { $ref: `#/definitions/${type}` };
    }
  }
  else {
    // Inline complex type
    property = { type: "object" };
  }

  return { property, isRequired, propertyName: toCamelCase(name) };
}

/**
 * Convert XSD complexType to JSON Schema definition
 */
function convertComplexType(complexType: XSDComplexType): {
  type: "object";
  properties: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties: boolean;
} {
  const properties: Record<string, JSONSchemaProperty> = {};
  const required: string[] = [];

  // Add common USDM properties that exist on all entities
  properties.id = { type: "string" };
  properties.instanceType = { type: "string" };
  required.push("id", "instanceType");

  const sequence = complexType["xs:sequence"];
  if (sequence && sequence["xs:element"]) {
    const elements = Array.isArray(sequence["xs:element"])
      ? sequence["xs:element"]
      : [sequence["xs:element"]];

    for (const element of elements) {
      const { property, isRequired, propertyName } = convertElement(element);
      // Don't overwrite id or instanceType if they came from XSD
      if (propertyName !== "id" && propertyName !== "instanceType") {
        properties[propertyName] = property;
      }
      // Only add to required if not already present
      if (isRequired && !required.includes(propertyName)) {
        required.push(propertyName);
      }
    }
  }

  return {
    type: "object",
    properties,
    required: required.length > 0 ? required : undefined,
    additionalProperties: false,
  };
}

/**
 * Main conversion function
 */
async function convertXsdToJsonSchema(
  inputPath: string,
  outputPath: string
): Promise<void> {
  console.log(`Converting XSD to JSON Schema...`);
  console.log(`  Input:  ${inputPath}`);
  console.log(`  Output: ${outputPath}`);

  // Read XSD file
  const xsdContent = await readFile(inputPath, "utf-8");

  // Parse XML
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    parseAttributeValue: false,
  });

  const parsed = parser.parse(xsdContent);
  const schema = parsed["xs:schema"];

  if (!schema) {
    throw new Error("Invalid XSD file: no xs:schema root element found");
  }

  // Initialize JSON Schema
  const jsonSchema: JSONSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: `urn:usdm:schema:${outputPath.split("/").pop()?.replace(".json", "")}`,
    title: "USDM Schema",
    description: "Generated from XSD schema definition",
    type: "object",
    definitions: {},
  };

  // Extract complex types
  const complexTypes = schema["xs:complexType"];
  if (complexTypes) {
    const types = Array.isArray(complexTypes) ? complexTypes : [complexTypes];

    for (const complexType of types) {
      const name = complexType["@_name"];
      if (name) {
        console.log(`  Converting type: ${name}`);
        jsonSchema.definitions[name] = convertComplexType(complexType);
      }
    }
  }

  // Extract top-level elements
  const elements = schema["xs:element"];
  if (elements) {
    const elementList = Array.isArray(elements) ? elements : [elements];

    for (const element of elementList) {
      const name = element["@_name"];
      const type = element["@_type"];

      if (name && type && !name.startsWith("xs:")) {
        console.log(`  Converting element: ${name} (type: ${type})`);
        // Top-level elements are typically just references to complex types
        // We've already converted the complex types above
      }
    }
  }

  // Write JSON Schema
  const output = JSON.stringify(jsonSchema, null, 2);
  await writeFile(outputPath, output, "utf-8");

  const typeCount = Object.keys(jsonSchema.definitions).length;
  console.log(`\n✓ Conversion complete!`);
  console.log(`  ${typeCount} type definitions converted`);
  console.log(`  Output written to: ${outputPath}`);
}

/**
 * CLI entry point
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: pnpm schema <input.xsd> <output.json>");
    console.error("");
    console.error("Example:");
    console.error("  pnpm schema src/schemas/USDM.xsd src/schemas/USDM-schema.json");
    process.exit(1);
  }

  const [inputPath, outputPath] = args.map(p => resolve(p));

  try {
    await convertXsdToJsonSchema(inputPath, outputPath);
  }
  catch (error) {
    console.error(`\nError: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

main();
