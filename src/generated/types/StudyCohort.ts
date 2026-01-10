// Auto-generated - do not edit

import type { Characteristic } from "./Characteristic"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { EligibilityCriterion } from "./EligibilityCriterion"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Indication } from "./Indication"
import type { PopulationDefinitionAbstract } from "./PopulationDefinitionAbstract"
import type { Range } from "./Range"
import type { QuantityRange } from "./index"

/**
 * A group of individuals who share a set of characteristics (e.g., exposures, experiences, attributes), which logically defines a population under study.
 * @preferredTerm Study Cohort
 * @nciCode C61512
 * @modifier Concrete
 * @extends PopulationDefinition
 */
export interface StudyCohort extends PopulationDefinitionAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study cohort.
   * @preferredTerm Study Cohort Name
   * @nciCode C207544
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  name: string

  /**
   * The short descriptive designation for the study cohort.
   * @preferredTerm Study Cohort Label
   * @nciCode C207543
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  label?: string

  /**
   * A narrative representation of the study cohort.
   * @preferredTerm Study Cohort Description
   * @nciCode C207542
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  description?: string

  /**
   * The protocol-defined sex within the study cohort.
   * @preferredTerm Study Cohort Planned Sex
   * @nciCode C207541
   * @cardinality 0..2
   * @relationshipType Value
   * @modelName plannedSex
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedSex?: Code[]

  /**
   * An indication as to whether the study cohort includes healthy subjects, that is, subjects without the disease or condition under study.
   * @preferredTerm Study Cohort Includes Healthy Subjects Indicator
   * @nciCode C207480
   * @cardinality 1
   * @relationshipType Value
   * @modelName includesHealthySubjects
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  includesHealthySubjects: boolean

  /**
   * The anticipated age of subjects within the study cohort.
   * @preferredTerm Study Cohort Planned Age
   * @nciCode C207545
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedAge
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedAge?: Range

  /**
   * The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study cohort.
   * @preferredTerm Study Cohort Planned Completion Number
   * @nciCode C207546
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedCompletionNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedCompletionNumber?: QuantityRange

  /**
   * The value representing the planned number of subjects to be entered in a clinical trial, within the study cohort.
   * @preferredTerm Study Cohort Planned Enrollment Number
   * @nciCode C207702
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedEnrollmentNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedEnrollmentNumber?: QuantityRange

  /**
   * A brief written record relevant to the study cohort.
   * @preferredTerm Study Cohort Notes
   * @nciCode C215547
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyCohort and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName criteria
   * @modelRepresentation Relationship
   * @inheritedFrom PopulationDefinition
   */
  criterionIds?: EligibilityCriterion[]

  /**
   * A USDM relationship between the StudyCohort and Characteristic classes which identifies the set of subject characteristics associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Relationship
   */
  characteristics?: Characteristic[]

  /**
   * A USDM relationship between the StudyCohort and Indication classes which identifies the set of indications associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName indications
   * @modelRepresentation Relationship
   */
  indicationIds?: Indication[]

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
