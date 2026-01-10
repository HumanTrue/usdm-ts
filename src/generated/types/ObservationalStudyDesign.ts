// Auto-generated - do not edit

import type { Activity } from "./Activity"
import type { AliasCode } from "./AliasCode"
import type { AnalysisPopulation } from "./AnalysisPopulation"
import type { BiospecimenRetention } from "./BiospecimenRetention"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { EligibilityCriterion } from "./EligibilityCriterion"
import type { Encounter } from "./Encounter"
import type { Estimand } from "./Estimand"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Indication } from "./Indication"
import type { Objective } from "./Objective"
import type { ScheduleTimeline } from "./ScheduleTimeline"
import type { StudyArm } from "./StudyArm"
import type { StudyCell } from "./StudyCell"
import type { StudyDefinitionDocumentVersion } from "./StudyDefinitionDocumentVersion"
import type { StudyDesignAbstract } from "./StudyDesignAbstract"
import type { StudyDesignPopulation } from "./StudyDesignPopulation"
import type { StudyElement } from "./StudyElement"
import type { StudyEpoch } from "./StudyEpoch"
import type { StudyIntervention } from "./StudyIntervention"

/**
 * The strategy that specifies the structure of an observational study in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study.
 * @preferredTerm Observational Study Design
 * @nciCode C215504
 * @modifier Concrete
 * @extends StudyDesign
 */
export interface ObservationalStudyDesign extends StudyDesignAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the observational study design.
   * @preferredTerm Observational Study Design Name
   * @nciCode C215636
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  name: string

  /**
   * The short descriptive designation for the observational study design.
   * @preferredTerm Observational Study Design Label
   * @nciCode C215638
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  label?: string

  /**
   * A narrative representation of the observational study design.
   * @preferredTerm Observational Study Design Description
   * @nciCode C215637
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  description?: string

  /**
   * Reason(s) for choosing the observational study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
   * @preferredTerm Observational Study Design Rationale
   * @nciCode C215639
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  rationale: string

  /**
   * A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the observational study design.
   * @preferredTerm Observational Study Design Therapeutic Areas
   * @nciCode C215643
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName therapeuticAreas
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  therapeuticAreas?: Code[]

  /**
   * The study type associated with the observational study design.
   * @preferredTerm Observational Study Design Study Type
   * @nciCode C215641
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyType
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  studyType?: Code

  /**
   * The distinguishing qualities or prominent aspects of an observational study design.
   * @preferredTerm Observational Study Design Characteristics
   * @nciCode C215642
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  characteristics?: Code[]

  /**
   * The study phase associated with the observational study design.
   * @preferredTerm Observational Study Design Study Phase
   * @nciCode C215640
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyPhase
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  studyPhase?: AliasCode

  /**
   * A brief written record relevant to the observational study design.
   * @preferredTerm Observational Study Design Notes
   * @nciCode C215644
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Activity classes which identifies the set of activities associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName activities
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  activities?: Activity[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName biospecimenRetentions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  biospecimenRetentions?: BiospecimenRetention[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName eligibilityCriteria
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  eligibilityCriteria: EligibilityCriterion[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Encounter classes which identifies the set of encounters associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName encounters
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  encounters?: Encounter[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Estimand classes which identifies the set of estimands associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName estimands
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  estimands?: Estimand[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Indication classes which identifies the set of indications associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName indications
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  indications?: Indication[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Objective classes which identifies the set of objectives associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName objectives
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  objectives?: Objective[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName scheduleTimelines
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  scheduleTimelines?: ScheduleTimeline[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyArm classes which identifies the set of study arms associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName arms
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  arms: StudyArm[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyCell classes which identifies the set of study cells associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName studyCells
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  studyCells: StudyCell[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName documentVersions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  documentVersionIds?: StudyDefinitionDocumentVersion[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyElement classes which identifies the set of study elements associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName elements
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  elements?: StudyElement[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with observational study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  studyInterventionIds?: StudyIntervention[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName epochs
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  epochs: StudyEpoch[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the observational study design.
   * @cardinality 1
   * @relationshipType Value
   * @modelName population
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  population: StudyDesignPopulation

  /**
   * The general design of the strategy for identifying and following up with participants during observational studies. (clinicaltrials.gov)
   * @preferredTerm Observation Study Design Model Type
   * @nciCode C147138
   * @cardinality 1
   * @relationshipType Value
   * @modelName model
   * @modelRepresentation Attribute
   */
  model: Code

  /**
   * The nature of the observational study for which information is being collected.
   * @preferredTerm Observational Study Type
   * @nciCode C215635
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName subTypes
   * @modelRepresentation Attribute
   */
  subTypes?: Code[]

  /**
   * The temporal relationship between the observation period and time of subject enrollment. (ClinicalTrials.gov)
   * @preferredTerm Observational Time Perspective
   * @nciCode C126065
   * @cardinality 1
   * @relationshipType Value
   * @modelName timePerspective
   * @modelRepresentation Attribute
   */
  timePerspective: Code

  /**
   * The sampling method used to assign study participants into groups or cohorts within an observational study.
   * @preferredTerm Observational Study Sampling Method
   * @nciCode C126067
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName samplingMethod
   * @modelRepresentation Attribute
   */
  samplingMethod?: Code

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  extensionAttributes?: ExtensionAttribute[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  analysisPopulations?: AnalysisPopulation[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}
