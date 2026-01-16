/**
 * Re-export of USDM_schema_4_0.json with proper import assertion for Node.js 20+
 * This file is used during development. During build, it gets replaced with embedded data.
 * @packageDocumentation
 */

import usdmSchemaJson from "./USDM_schema_4_0.json" with { type: "json" }

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

const usdmSchema: USDMSchema = usdmSchemaJson as USDMSchema
export default usdmSchema
