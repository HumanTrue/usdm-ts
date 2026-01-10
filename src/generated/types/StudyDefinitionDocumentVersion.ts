// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { GovernanceDate } from "./GovernanceDate"
import type { NarrativeContent } from "./NarrativeContent"

/**
 * A representation of a particular edition or snapshot of the study definition document as it exists at a particular point in time.
 * @preferredTerm Study Definition Document Version
 * @nciCode C215491
 * @modifier Concrete
 */
export interface StudyDefinitionDocumentVersion {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A condition of the study definition document at a point in time with respect to its state of readiness for implementation.
   * @preferredTerm Study Definition Document Status
   * @nciCode C215567
   * @cardinality 1
   * @relationshipType Value
   * @modelName status
   * @modelRepresentation Attribute
   */
  status: Code

  /**
   * A sequence of characters used to identify the version of the study definition document.
   * @preferredTerm Study Definition Document Version Identifier
   * @nciCode C215566
   * @cardinality 1
   * @relationshipType Value
   * @modelName version
   * @modelRepresentation Attribute
   */
  version: string

  /**
   * A brief written record relevant to the study definition document version.
   * @preferredTerm Study Definition Document Version Notes
   * @nciCode C215568
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyDefinitionDocumentVersion and GovernanceDate classes which provides the set of governance dates associated with the study definition document version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName dateValues
   * @modelRepresentation Relationship
   */
  dateValues?: GovernanceDate[]

  /**
   * A USDM relationship between the StudyDefinitionDocumentVersion and NarrativeContent classes which identifies the set of narrative content associated with the version of the study definition document.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName contents
   * @modelRepresentation Relationship
   */
  contents?: NarrativeContent[]

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
