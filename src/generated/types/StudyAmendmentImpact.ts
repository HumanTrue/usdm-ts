// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The effect or consequence of an amendment on some aspect of the study.
 * @preferredTerm Study Amendment Impact
 * @nciCode C215500
 * @modifier Concrete
 */
export interface StudyAmendmentImpact {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the study amendment impact.
   * @preferredTerm Study Amendment Impact Text
   * @nciCode C215611
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * An indication as to whether the study amendment's impact on the study is substantial.
   * @preferredTerm Study Amendment Impact Substantial Indicator
   * @nciCode C207538
   * @cardinality 1
   * @relationshipType Value
   * @modelName isSubstantial
   * @modelRepresentation Attribute
   */
  isSubstantial: boolean

  /**
   * A characterization or classification of the study amendment impact.
   * @preferredTerm Study Amendment Impact Type
   * @nciCode C215612
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A brief written record relevant to the study amendment impact.
   * @preferredTerm Study Amendment Impact Notes
   * @nciCode C215613
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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
