/**
 * Re-export of codelist_index.json with proper import assertion for Node.js 20+
 * This file is used during development. During build, it gets replaced with embedded data.
 * @packageDocumentation
 */

import codelistIndexJson from "./codelist_index.json" with { type: "json" }

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

const codelistIndex: CodelistIndex = codelistIndexJson as CodelistIndex
export default codelistIndex
