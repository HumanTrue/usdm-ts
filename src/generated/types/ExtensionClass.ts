// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * @modifier Concrete
 */
export interface ExtensionClass {
  /**
   * @cardinality 1
   * @relationshipType Value
   */
  id: string

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  url: string

  /**
   * @cardinality 1..*
   * @relationshipType Value
   */
  extensionAttributes: ExtensionAttribute[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}
