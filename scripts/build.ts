import { execSync } from "child_process"
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs"
import { join } from "path"

const distDir = "dist"
const tempDistDir = "dist-temp"

// Directories to keep entirely (for generated types)
const dirsToKeep = [
  "generated/types"  // Keep all individual type definition files
]

// Specific files to keep in dist (based on package.json exports)
const filesToKeep = [
  "generated/zod.js",
  "generated/zod.d.ts",
  "generated/zod.js.map",
  "generated/zod.d.ts.map",
  "schema.js",
  "schema.d.ts",
  "schema.js.map",
  "schema.d.ts.map",
  "codelists.js",
  "codelists.d.ts",
  "codelists.js.map",
  "codelists.d.ts.map"
]

console.log("Embedding schema data...")
// Save original schema.ts content before replacing
const originalSchemaSource = readFileSync("src/schema.ts", "utf-8")

const schemaData = JSON.parse(readFileSync("src/USDM_schema_4_0.json", "utf-8"))
const schemaSource = `/**
 * USDM Schema with embedded data
 * This file is auto-generated during the build process
 * @packageDocumentation
 */

export interface USDMSchema {
  $schema: string
  $id: string
  definitions: Record<string, {
    type?: string | string[]
    properties?: Record<string, any>
    required?: string[]
    additionalProperties?: boolean
    [key: string]: any
  }>
  [key: string]: any
}

const usdmSchema: USDMSchema = ${JSON.stringify(schemaData, null, 2)}

export default usdmSchema
`
writeFileSync("src/schema.ts", schemaSource)

console.log("Embedding codelist data...")
// Save original codelists.ts content before replacing
const originalCodelistsSource = readFileSync("src/codelists.ts", "utf-8")

const codelistData = JSON.parse(readFileSync("src/codelist_index.json", "utf-8"))
const codelistsSource = `/**
 * Codelist index with embedded data
 * This file is auto-generated during the build process
 * @packageDocumentation
 */

export interface CodelistValue {
  code: string
  term: string
  synonyms?: string | null
  definition: string
  [key: string]: any
}

export interface CodelistEntry {
  codelist_code: string
  extensible: boolean
  values: CodelistValue[]
  [key: string]: any
}

export interface CodelistIndex {
  [key: string]: CodelistEntry
}

const codelistIndex: CodelistIndex = ${JSON.stringify(codelistData, null, 2)}

export default codelistIndex
`
writeFileSync("src/codelists.ts", codelistsSource)

console.log("Building TypeScript...")
execSync("tsc", { stdio: "inherit" })

console.log("Restoring source files for development...")
writeFileSync("src/schema.ts", originalSchemaSource)
writeFileSync("src/codelists.ts", originalCodelistsSource)

console.log("Cleaning dist directory to keep only exported files...")

// Create temp directory and move files we want to keep
if (existsSync(tempDistDir)) {
  rmSync(tempDistDir, { recursive: true, force: true })
}
mkdirSync(tempDistDir, { recursive: true })

// Copy entire directories to temp
for (const dir of dirsToKeep) {
  const sourcePath = join(distDir, dir)
  const destPath = join(tempDistDir, dir)

  if (existsSync(sourcePath)) {
    cpSync(sourcePath, destPath, { recursive: true })
  } else {
    console.warn(`Warning: Expected directory not found: ${sourcePath}`)
  }
}

// Copy individual files to temp directory
for (const file of filesToKeep) {
  const sourcePath = join(distDir, file)
  const destPath = join(tempDistDir, file)

  if (existsSync(sourcePath)) {
    const destDir = join(tempDistDir, file.split("/").slice(0, -1).join("/"))
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true })
    }
    cpSync(sourcePath, destPath)
  } else {
    console.warn(`Warning: Expected file not found: ${sourcePath}`)
  }
}

// Remove old dist and rename temp
rmSync(distDir, { recursive: true, force: true })
cpSync(tempDistDir, distDir, { recursive: true })
rmSync(tempDistDir, { recursive: true, force: true })

console.log("Build complete! Only exported files remain in dist/")
