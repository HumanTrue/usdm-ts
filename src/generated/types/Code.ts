// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A symbol or combination of symbols which is assigned to the members of a collection.
 * @preferredTerm Code
 * @nciCode C25162
 * @modifier Concrete
 */
export interface Code {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal value of a code.
   * @preferredTerm Code Value
   * @nciCode C188858
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: string

  /**
   * The literal identifier (i.e., distinctive designation) of the system used to assign and/or manage codes.
   * @preferredTerm Code System Name
   * @nciCode C188859
   * @cardinality 1
   * @relationshipType Value
   * @modelName codeSystem
   * @modelRepresentation Attribute
   */
  codeSystem: string

  /**
   * The version of the code system.
   * @preferredTerm Code System Version
   * @nciCode C188868
   * @cardinality 1
   * @relationshipType Value
   * @modelName codeSystemVersion
   * @modelRepresentation Attribute
   */
  codeSystemVersion: string

  /**
   * Standardized or dictionary-derived human readable text associated with a code.
   * @preferredTerm Decode
   * @nciCode C188861
   * @cardinality 1
   * @relationshipType Value
   * @modelName decode
   * @modelRepresentation Attribute
   */
  decode: string

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
