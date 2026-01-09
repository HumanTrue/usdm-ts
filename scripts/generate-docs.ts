import * as fs from "fs/promises";
import * as path from "path";

interface ExampleInfo {
  name: string;
  code: string;
}

interface TypeInfo {
  name: string;
  description: string;
  preferredTerm?: string;
  nciCode?: string;
  modifier?: string;
}

/**
 * Parse types.ts to extract interface and type information
 */
async function parseTypes(typesPath: string): Promise<TypeInfo[]> {
  const content = await fs.readFile(typesPath, "utf-8");
  const types: TypeInfo[] = [];

  // Match complete JSDoc block followed by export interface or export type
  // The pattern uses [^*]|(\*(?!/)) to match any char except *, or * not followed by /
  // This prevents matching across multiple JSDoc blocks
  const pattern = /\/\*\*((?:[^*]|\*(?!\/))*)\*\/\s*export\s+(interface|type)\s+(\w+)/g;
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const jsdocContent = match[1];
    const name = match[3];

    // Skip Abstract versions - we'll use the union types instead
    if (name.endsWith("Abstract")) {
      continue;
    }

    // Parse JSDoc content - extract description from lines before any @tag
    // Each line in JSDoc starts with " * " (space, asterisk, space)
    const lines = jsdocContent.split("\n");
    const descriptionLines: string[] = [];
    let foundDescription = false;

    for (const line of lines) {
      // Match the JSDoc line pattern: optional whitespace, asterisk, optional space, then content
      const lineMatch = line.match(/^\s*\*\s?(.*)/);
      if (!lineMatch) continue;

      const lineContent = lineMatch[1].trim();

      // Skip empty lines at the start
      if (!lineContent && !foundDescription) {
        continue;
      }

      // Stop at the first @tag
      if (lineContent.startsWith("@")) {
        break;
      }

      if (lineContent) {
        foundDescription = true;
        descriptionLines.push(lineContent);
      }
    }

    const description = descriptionLines.join(" ");

    const preferredTermMatch = jsdocContent.match(/@preferredTerm\s+(.+)/);
    const preferredTerm = preferredTermMatch?.[1]?.trim();

    const nciCodeMatch = jsdocContent.match(/@nciCode\s+(\S+)/);
    const nciCode = nciCodeMatch?.[1]?.trim();

    const modifierMatch = jsdocContent.match(/@modifier\s+(\S+)/);
    const modifier = modifierMatch?.[1]?.trim();

    types.push({
      name,
      description,
      preferredTerm,
      nciCode,
      modifier,
    });
  }

  // Sort alphabetically
  types.sort((a, b) => a.name.localeCompare(b.name));

  return types;
}

/**
 * Parse examples file to extract code between markers
 */
async function parseExamples(examplesPath: string): Promise<ExampleInfo[]> {
  const content = await fs.readFile(examplesPath, "utf-8");
  const examples: ExampleInfo[] = [];

  // Match code between README_EXAMPLE_START and README_EXAMPLE_END markers
  const pattern = /\/\/\s*README_EXAMPLE_(\w+)_START\n([\s\S]*?)\/\/\s*README_EXAMPLE_\1_END/g;
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const name = match[1];
    const code = match[2].trim();
    examples.push({ name, code });
  }

  // Also support a single unnamed example with simpler markers
  const simplePattern = /\/\/\s*README_EXAMPLE_START\n([\s\S]*?)\/\/\s*README_EXAMPLE_END/g;
  let simpleMatch;

  while ((simpleMatch = simplePattern.exec(content)) !== null) {
    const code = simpleMatch[1].trim();
    examples.push({ name: "USAGE", code });
  }

  return examples;
}

/**
 * Generate markdown code block from example
 * Prepends the standard import for USAGE examples
 */
function generateExampleMarkdown(example: ExampleInfo): string {
  let code = example.code;

  // For USAGE examples, prepend the package import
  if (example.name === "USAGE") {
    code = "import type { Study } from \"usdm-ts/types\"\n\n" + code;
  }

  return "```typescript\n" + code + "\n```";
}

/**
 * Generate markdown table from type info
 */
function generateMarkdownTable(types: TypeInfo[]): string {
  const lines: string[] = [];

  lines.push("| Type | Description | NCI Code |");
  lines.push("|------|-------------|----------|");

  for (const type of types) {
    const name = type.name;
    const desc = type.description || type.preferredTerm || "-";
    const nciCode = type.nciCode
      ? `[${type.nciCode}](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=${type.nciCode})`
      : "-";

    // Escape pipe characters in description
    const escapedDesc = desc.replace(/\|/g, "\\|");

    lines.push(`| \`${name}\` | ${escapedDesc} | ${nciCode} |`);
  }

  return lines.join("\n");
}

/**
 * Update README.md with generated documentation
 */
async function updateReadme(readmePath: string, content: string): Promise<void> {
  const readme = await fs.readFile(readmePath, "utf-8");

  const startMarker = "<!-- GENERATED_TYPES_START -->";
  const endMarker = "<!-- GENERATED_TYPES_END -->";

  const startIndex = readme.indexOf(startMarker);
  const endIndex = readme.indexOf(endMarker);

  let updatedReadme: string;

  if (startIndex === -1 || endIndex === -1) {
    // Markers don't exist - append to end
    console.log("Markers not found in README.md - appending section");
    updatedReadme =
      readme.trimEnd() +
      "\n\n" +
      startMarker +
      "\n# Generated Types\n\n" +
      content +
      "\n" +
      endMarker +
      "\n";
  }
  else {
    // Replace content between markers
    updatedReadme =
      readme.slice(0, startIndex + startMarker.length) +
      "\n## Generated Types\n\n" +
      content +
      "\n" +
      readme.slice(endIndex);
  }

  await fs.writeFile(readmePath, updatedReadme);
}

/**
 * Update README.md with example code between markers
 */
async function updateReadmeExamples(
  readmePath: string,
  examples: ExampleInfo[]
): Promise<void> {
  let readme = await fs.readFile(readmePath, "utf-8");

  for (const example of examples) {
    const startMarker = `<!-- EXAMPLE_${example.name}_START -->`;
    const endMarker = `<!-- EXAMPLE_${example.name}_END -->`;

    const startIndex = readme.indexOf(startMarker);
    const endIndex = readme.indexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
      console.log(`Markers for example "${example.name}" not found in README.md - skipping`);
      continue;
    }

    const markdown = generateExampleMarkdown(example);
    readme =
      readme.slice(0, startIndex + startMarker.length) +
      "\n" +
      markdown +
      "\n" +
      readme.slice(endIndex);
  }

  await fs.writeFile(readmePath, readme);
}

/**
 * Main function
 */
async function main(): Promise<void> {
  const projectRoot = path.resolve(import.meta.dirname, "..");
  const typesPath = path.join(projectRoot, "src/generated/types.ts");
  const examplesPath = path.join(projectRoot, "src/examples/readme.ts");
  const readmePath = path.join(projectRoot, "README.md");

  console.log("Parsing types from:", typesPath);
  const types = await parseTypes(typesPath);
  console.log(`Found ${types.length} types`);

  const markdown = generateMarkdownTable(types);

  console.log("Updating README.md with types...");
  await updateReadme(readmePath, markdown);

  console.log("Parsing examples from:", examplesPath);
  const examples = await parseExamples(examplesPath);
  console.log(`Found ${examples.length} examples`);

  if (examples.length > 0) {
    console.log("Updating README.md with examples...");
    await updateReadmeExamples(readmePath, examples);
  }

  console.log("Documentation generated successfully!");
}

main().catch((error) => {
  console.error("Error generating documentation:", error);
  process.exit(1);
});
