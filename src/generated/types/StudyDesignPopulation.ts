// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { EligibilityCriterion } from "./EligibilityCriterion"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { PopulationDefinitionAbstract } from "./PopulationDefinitionAbstract"
import type { Range } from "./Range"
import type { StudyCohort } from "./StudyCohort"
import type { QuantityRange } from "./index"

/**
 * The population within the general population to which the study results can be generalized.
 * @preferredTerm Study Design Population
 * @nciCode C142728
 * @modifier Concrete
 * @extends PopulationDefinition
 */
export interface StudyDesignPopulation extends PopulationDefinitionAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study design population.
   * @preferredTerm Study Design Population Name
   * @nciCode C207553
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  name: string

  /**
   * The short descriptive designation for the study design population.
   * @preferredTerm Study Design Population Label
   * @nciCode C207550
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  label?: string

  /**
   * A narrative representation of the study design population.
   * @preferredTerm Study Design Population Description
   * @nciCode C70834
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  description?: string

  /**
   * The protocol-defined sex within the study design population.
   * @preferredTerm Study Design Population Planned Sex
   * @nciCode C207551
   * @cardinality 0..2
   * @relationshipType Value
   * @modelName plannedSex
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedSex?: Code[]

  /**
   * An indication as to whether the study design population includes healthy subjects, that is, subjects without the disease or condition under study.
   * @preferredTerm Study Design Population Includes Healthy Subjects Indicator
   * @nciCode C207549
   * @cardinality 1
   * @relationshipType Value
   * @modelName includesHealthySubjects
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  includesHealthySubjects: boolean

  /**
   * The anticipated age of subjects within the study design population.
   * @preferredTerm Study Design Population Planned Age
   * @nciCode C207450
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedAge
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedAge?: Range

  /**
   * The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study design population.
   * @preferredTerm Study Design Population Planned Completion Number
   * @nciCode C207451
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedCompletionNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedCompletionNumber?: QuantityRange

  /**
   * The value representing the planned number of subjects to be entered in a clinical trial, within the study design population.
   * @preferredTerm Study Design Population Planned Enrollment Number
   * @nciCode C207452
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedEnrollmentNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedEnrollmentNumber?: QuantityRange

  /**
   * A brief written record relevant to the study design population.
   * @preferredTerm Study Design Population Notes
   * @nciCode C215512
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyDesignPopulation and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study design population.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName criteria
   * @modelRepresentation Relationship
   * @inheritedFrom PopulationDefinition
   */
  criterionIds?: (string | EligibilityCriterion)[]

  /**
   * A USDM relationship between the StudyDesignPopulation and StudyCohort classes which identifies the set of study cohorts associated with the study design population.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName cohorts
   * @modelRepresentation Relationship
   */
  cohorts?: StudyCohort[]

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
