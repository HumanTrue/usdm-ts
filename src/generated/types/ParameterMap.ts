// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The paired name and value for a given parameter.
 * @preferredTerm Parameter Map
 * @nciCode C207456
 * @modifier Concrete
 */
export interface ParameterMap {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * Character strings bounded by angle brackets that act as containers for programming language elements.
   * @preferredTerm Programming Tag
   * @nciCode C207515
   * @cardinality 1
   * @relationshipType Value
   * @modelName tag
   * @modelRepresentation Attribute
   */
  tag: string

  /**
   * The reference for a tag used in programming languages, such as a markup language (e.g., HTML, XML), to store attributes and elements.
   * @preferredTerm Programming Tag Reference
   * @nciCode C207516
   * @cardinality 1
   * @relationshipType Value
   * @modelName reference
   * @modelRepresentation Attribute
   */
  reference: string

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
