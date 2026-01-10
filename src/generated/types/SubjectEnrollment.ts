// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { GeographicScope } from "./GeographicScope"
import type { Quantity } from "./Quantity"
import type { StudyCohort } from "./StudyCohort"
import type { StudySite } from "./StudySite"

/**
 * The act of enrolling subjects into a study. The subject will have met the inclusion/exclusion criteria to participate in the trial and will have signed an informed consent form. (CDISC Glossary)
 * @preferredTerm Subject Enrollment
 * @nciCode C37948
 * @modifier Concrete
 */
export interface SubjectEnrollment {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the subject enrollment.
   * @preferredTerm Subject Enrollment Name
   * @nciCode C215540
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the subject enrollment..
   * @preferredTerm Subject Enrollment Label
   * @nciCode C215542
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the subject enrollment.
   * @preferredTerm Subject Enrollment Description
   * @nciCode C215541
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The value representing the number of individuals enrolled in a study.
   * @preferredTerm Subject Enrollment Quantity Value
   * @nciCode C207573
   * @cardinality 1
   * @relationshipType Value
   * @modelName quantity
   * @modelRepresentation Attribute
   */
  quantity: Quantity

  /**
   * A USDM relationship between the SubjectEnrollment and GeographicScope classes which identifies the geographic scope to which the subject enrollment applies.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName forGeographicScope
   * @modelRepresentation Relationship
   */
  forGeographicScope?: GeographicScope

  /**
   * A USDM relationship between the SubjectEnrollment and StudyCohort classes which identifies the study cohort to which the subject enrollment applies.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName forStudyCohort
   * @modelRepresentation Relationship
   */
  forStudyCohortId?: StudyCohort

  /**
   * A USDM relationship between the SubjectEnrollment and StudySite classes which identifies the study site to which the subject enrollment applies.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName forStudySite
   * @modelRepresentation Relationship
   */
  forStudySiteId?: StudySite

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
