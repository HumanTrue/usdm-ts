// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * An alternative symbol or combination of symbols which is assigned to the members of a collection.
 * @preferredTerm Alias Code
 * @nciCode C201344
 * @modifier Concrete
 */
export interface AliasCode {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A combination of symbols that is used to represent the standard code.
   * @preferredTerm Standard Code
   * @nciCode C215528
   * @cardinality 1
   * @relationshipType Value
   * @modelName standardCode
   * @modelRepresentation Attribute
   */
  standardCode: Code

  /**
   * Alternative combinations of symbols used to represent aliases or alternatives to the standard code.
   * @preferredTerm Standard Code Aliases
   * @nciCode C215529
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName standardCodeAliases
   * @modelRepresentation Attribute
   */
  standardCodeAliases?: Code[]

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
