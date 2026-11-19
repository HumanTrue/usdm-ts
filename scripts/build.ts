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
  "codelists.d.ts.map",
  "ct-packages.js",
  "ct-packages.d.ts",
  "ct-packages.js.map",
  "ct-packages.d.ts.map"
]

// Source files that import a JSON data file. dist/ keeps only the exported .js
// files, so for the build each JSON import is replaced with the data itself.
const embeds = [
  { source: "src/schema.ts", json: "src/USDM_schema_4_0.json" },
  { source: "src/codelists.ts", json: "src/codelist_index.json" },
  { source: "src/ct-packages.ts", json: "src/ct_packages.json" }
]

const importPattern = /^import (\w+) from "\.\/([\w.-]+\.json)" with \{ type: "json" \}$/m

console.log("Embedding JSON data...")
const originalSources = new Map<string, string>()
try {
  for (const { source, json } of embeds) {
    const original = readFileSync(source, "utf-8")
    const match = importPattern.exec(original)
    if (!match || `src/${match[2]}` !== json) {
      throw new Error(`${source}: expected a JSON import of ${json}`)
    }
    const data = JSON.stringify(JSON.parse(readFileSync(json, "utf-8")))
    originalSources.set(source, original)
    // Replacer function, so "$" in the data is not read as a replacement pattern
    writeFileSync(source, original.replace(importPattern, () => `const ${match[1]} = ${data}`))
  }

  console.log("Building TypeScript...")
  execSync("tsc", { stdio: "inherit" })
} finally {
  // Restore even when tsc fails, so the embedded data never stays in src/
  console.log("Restoring source files for development...")
  for (const [source, original] of originalSources) {
    writeFileSync(source, original)
  }
}

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
