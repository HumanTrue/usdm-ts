// Auto-generated - do not edit

import type { AliasCode } from "./AliasCode"
import type { Code } from "./Code"
import type { ExtensionClass } from "./ExtensionClass"
import type { Quantity } from "./Quantity"
import type { Range } from "./Range"

/**
 * @modifier Concrete
 */
export interface ExtensionAttribute {
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
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueString?: string

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueBoolean?: boolean

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueInteger?: number

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueId?: string

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueQuantity?: Quantity

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueRange?: Range

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueCode?: Code

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueAliasCode?: AliasCode

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueExtensionClass?: ExtensionClass

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  extensionAttributes?: ExtensionAttribute[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}
