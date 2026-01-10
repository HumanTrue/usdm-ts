/**
 * Example code for README.md
 *
 * This file is type-checked at build time. The code between the marker comments
 * is automatically extracted and injected into the README by `pnpm docs`.
 *
 * The script prepends `import type { Study } from "usdm-ts/types"` when
 * injecting into the README.
 */

import type { Study } from "@/types"

// README_EXAMPLE_START
const study: Study = {
  instanceType: "Study",
  id: "study-123",
  name: "Example Clinical Trial",
  description: "A clinical trial to test the efficacy of a new drug.",
  label: "TRIAL-001",
  versions: [],
}
// README_EXAMPLE_END

export { study }
