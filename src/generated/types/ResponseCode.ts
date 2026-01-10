// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A symbol or combination of symbols representing the response to the question.
 * @preferredTerm Response Code
 * @nciCode C201347
 * @modifier Concrete
 */
export interface ResponseCode {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the response code.
   * @preferredTerm Response Code Name
   * @nciCode C216998
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the response code.
   * @preferredTerm Response Code Label
   * @nciCode C216999
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * An indication as to whether the response code is activated for use within a given usage context.
   * @preferredTerm Response Code Enabled Indicator
   * @nciCode C201330
   * @cardinality 1
   * @relationshipType Value
   * @modelName isEnabled
   * @modelRepresentation Attribute
   */
  isEnabled: boolean

  /**
   * The literal value of a response code.
   * @preferredTerm Response Code Value
   * @nciCode C217013
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

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
