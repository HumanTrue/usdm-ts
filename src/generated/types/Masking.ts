// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The mechanism used to obscure the distinctive characteristics of the study intervention or procedure to make it indistinguishable from a comparator. (CDISC Glossary)
 * @preferredTerm Masking
 * @nciCode C191278
 * @modifier Concrete
 */
export interface Masking {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents how the masking is performed and maintained.
   * @preferredTerm Masking Text
   * @nciCode C215553
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * An indication as to whether the study role is masked.
   * @preferredTerm Masked Indicator
   * @nciCode C215554
   * @cardinality 1
   * @relationshipType Value
   * @modelName isMasked
   * @modelRepresentation Attribute
   */
  isMasked: boolean

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
