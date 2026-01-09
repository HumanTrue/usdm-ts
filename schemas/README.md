# USDM Schemas

Source: https://www.cdisc.org/ddf#standard__Versions

This directory contains schema definitions for the Unified Study Definitions Model (USDM).

## Files

### USDM 4.0 Schemas
- **USDM_4_0.xsd** - XML Schema Definition for USDM 4.0
- **USDM_schema_4_0.json** - JSON Schema for USDM 4.0 (generated from XSD)
- **USDM_UML_4_0.xmi** - UML model in XMI format for USDM 4.0
- **USDM_API_4_0.json** - OpenAPI specification with embedded schemas
- **USDM_API.yaml** - OpenAPI specification in YAML format
- **USDM_UML_4_0.png** - Visual diagram of the UML model
- **USDM_CORE_Rules_4_0.xlsx** - Validation rules for USDM 4.0
- **USDM_CT_4_0.xlsx** - Controlled terminology for USDM 4.0

### USDM 3.0 Schemas
- **USDM_UML_3_0.xmi** - UML model in XMI format for USDM 3.0

### Supporting Files
- **codelist_index.json** - Index of controlled terminology codelists

## Converting XSD to JSON Schema

To convert an XSD file to JSON Schema format, use the `schema` script:

```bash
pnpm schema <input.xsd> <output.json>
```

### Example

```bash
pnpm schema schemas/USDM_4_0.xsd schemas/USDM_schema_4_0.json
```

This will:
1. Parse the XSD file
2. Convert XSD types to JSON Schema types
3. Extract all `complexType` definitions
4. Generate a JSON Schema with all entity definitions
5. Write the output to the specified file

### Supported XSD Features

The converter handles:
- Simple types (string, integer, boolean, etc.)
- Complex types with sequences
- Required/optional elements (minOccurs/maxOccurs)
- Arrays (maxOccurs > 1 or unbounded)
- References to other complex types
- Nested element definitions

### Limitations

- Does not support XSD choice, all, or group elements
- Does not support XSD restrictions or extensions
- Does not support XSD attributes (only elements)
- Best suited for USDM-style schemas with simple structure

## Using the Schema

### Import in TypeScript/JavaScript

```typescript
import usdmSchema from "usdm-ts/schema";
```

### Using JSON Schema for Validation

The generated JSON Schema can be used with validation libraries like `ajv`:

```typescript
import Ajv from "ajv";
import usdmSchema from "usdm-ts/schema";

const ajv = new Ajv();
const validate = ajv.compile(usdmSchema.definitions.Study);

const isValid = validate(myStudyData);
if (!isValid) {
  console.error(validate.errors);
}
```

## Regenerating Schemas

When CDISC releases a new version of the USDM specification:

1. Download the new XSD file
2. Place it in this directory
3. Run the converter:
   ```bash
   pnpm schema schemas/USDM_NEW_VERSION.xsd schemas/USDM_NEW_VERSION_schema.json
   ```
4. Update exports in package.json as needed
