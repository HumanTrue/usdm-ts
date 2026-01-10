// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { GeographicScope } from "./GeographicScope"
import type { GovernanceDate } from "./GovernanceDate"
import type { StudyAmendmentImpact } from "./StudyAmendmentImpact"
import type { StudyAmendmentReason } from "./StudyAmendmentReason"
import type { StudyChange } from "./StudyChange"
import type { SubjectEnrollment } from "./SubjectEnrollment"

/**
 * A written description of a change(s) to, or formal clarification of, a study.
 * @preferredTerm Study Amendment
 * @nciCode C207594
 * @modifier Concrete
 */
export interface StudyAmendment {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study amendment.
   * @preferredTerm Study Amendment Name
   * @nciCode C216995
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study amendment.
   * @preferredTerm Study Amendment Label
   * @nciCode C216997
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study amendment.
   * @preferredTerm Study Amendment Description
   * @nciCode C216996
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A string of numerals that uniquely identifies a protocol amendment.
   * @preferredTerm Study Amendment Number
   * @nciCode C207537
   * @cardinality 1
   * @relationshipType Value
   * @modelName number
   * @modelRepresentation Attribute
   */
  number: string

  /**
   * A brief written record relevant to the study amendment.
   * @preferredTerm Study Amendment Notes
   * @nciCode C215538
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A short narrative representation describing the changes introduced in the current version of the protocol.
   * @preferredTerm Study Amendment Summary
   * @nciCode C115627
   * @cardinality 1
   * @relationshipType Value
   * @modelName summary
   * @modelRepresentation Attribute
   */
  summary: string

  /**
   * A USDM relationship between the StudyAmendment and GeographicScope classes which identifies the set of geographic scopes associated with the study amendment.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName geographicScopes
   * @modelRepresentation Relationship
   */
  geographicScopes: GeographicScope[]

  /**
   * A USDM relationship between the StudyAmendment and GovernanceDate classes which provides the set of governance dates associated with the study amendment.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName dateValues
   * @modelRepresentation Relationship
   */
  dateValues?: GovernanceDate[]

  /**
   * A USDM relationship between the StudyAmendment and StudyAmendmentImpact classes which identifies the set of impacts that the study amendment has on the study or study subjects.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName impacts
   * @modelRepresentation Relationship
   */
  impacts?: StudyAmendmentImpact[]

  /**
   * A USDM relationship between the StudyAmendment and SubjectEnrollment classes which provides the set of subject enrollments associated with the study amendment.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName enrollments
   * @modelRepresentation Relationship
   */
  enrollments?: SubjectEnrollment[]

  /**
   * A USDM relationship between the StudyAmendment and StudyAmendmentReason classes which identifies the set of secondary reasons for issuing the study amendment.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName secondaryReasons
   * @modelRepresentation Relationship
   */
  secondaryReasons?: StudyAmendmentReason[]

  /**
   * A USDM relationship between the StudyAmendment and  StudyChange classes which identifies the set of changes associated with the study amendment.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName changes
   * @modelRepresentation Relationship
   */
  changes: StudyChange[]

  /**
   * A USDM relationship within the StudyAmendment class which identifies the study amendment that chronologically precedes the current study amendment.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: StudyAmendment

  /**
   * A USDM relationship between the StudyAmendment and StudyAmendmentReason classes which identifies the primary reason for issuing the study amendment.
   * @cardinality 1
   * @relationshipType Value
   * @modelName primaryReason
   * @modelRepresentation Relationship
   */
  primaryReason: StudyAmendmentReason

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
