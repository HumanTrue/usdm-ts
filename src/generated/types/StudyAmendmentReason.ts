// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The rationale for the change(s) to, or formal clarification of, a protocol.
 * @preferredTerm Study Amendment Reason
 * @nciCode C207457
 * @modifier Concrete
 */
export interface StudyAmendmentReason {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The rationale for the change(s) to, or formal clarification of, a protocol that is not otherwise specified.
   * @preferredTerm Other Reason for Study Amendment
   * @nciCode C207539
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName otherReason
   * @modelRepresentation Attribute
   */
  otherReason?: string

  /**
   * A symbol or combination of symbols which is assigned to the study amendment reason.
   * @preferredTerm Study Amendment Reason Code
   * @nciCode C207540
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
