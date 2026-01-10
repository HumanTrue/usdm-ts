// Auto-generated - do not edit

import type { AliasCode } from "./AliasCode"
import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The extent or range related to the physical location of an entity.
 * @preferredTerm Geographic Scope
 * @nciCode C207591
 * @modifier Concrete
 */
export interface GeographicScope {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A characterization or classification of the geographic scope.
   * @preferredTerm Geographic Scope Type
   * @nciCode C207495
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A symbol or combination of symbols which is assigned to the geographic scope.
   * @preferredTerm Geographic Scope Code
   * @nciCode C207494
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code?: AliasCode

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
