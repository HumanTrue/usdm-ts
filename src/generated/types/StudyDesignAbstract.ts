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
import type { Indication } from "./Indication"
import type { Objective } from "./Objective"
import type { ScheduleTimeline } from "./ScheduleTimeline"
import type { StudyArm } from "./StudyArm"
import type { StudyCell } from "./StudyCell"
import type { StudyDefinitionDocumentVersion } from "./StudyDefinitionDocumentVersion"
import type { StudyDesignPopulation } from "./StudyDesignPopulation"
import type { StudyElement } from "./StudyElement"
import type { StudyEpoch } from "./StudyEpoch"
import type { StudyIntervention } from "./StudyIntervention"

/**
 * A plan detailing how a study will be performed in order to represent the phenomenon under examination, to answer the research questions that have been asked, and informing the statistical approach.
 * @preferredTerm Study Design
 * @nciCode C15320
 * @modifier Abstract
 * @subClasses InterventionalStudyDesign, ObservationalStudyDesign
 */
export interface StudyDesignAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the interventional study design.
   * @preferredTerm Interventional Study Design Name
   * @nciCode C215626
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the interventional study design.
   * @preferredTerm Interventional Study Design Label
   * @nciCode C215628
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the interventional study design.
   * @preferredTerm Interventional Study Design Description
   * @nciCode C215627
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * Reason(s) for choosing the interventional study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
   * @preferredTerm Interventional Study Design Rationale
   * @nciCode C215629
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   */
  rationale: string

  /**
   * A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the interventional study design.
   * @preferredTerm Interventional Study Design Therapeutic Areas
   * @nciCode C215633
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName therapeuticAreas
   * @modelRepresentation Attribute
   */
  therapeuticAreas?: Code[]

  /**
   * The study type associated with the interventional study design.
   * @preferredTerm Interventional Study Design Study Type
   * @nciCode C215631
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyType
   * @modelRepresentation Attribute
   */
  studyType?: Code

  /**
   * The distinguishing qualities or prominent aspects of an interventional study design.
   * @preferredTerm Interventional Study Design Characteristics
   * @nciCode C215632
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Attribute
   */
  characteristics?: Code[]

  /**
   * The study phase associated with the interventional study design.
   * @preferredTerm Interventional Study Design Study Phase
   * @nciCode C215630
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyPhase
   * @modelRepresentation Attribute
   */
  studyPhase?: AliasCode

  /**
   * A brief written record relevant to the interventional study design.
   * @preferredTerm Interventional Study Design Notes
   * @nciCode C215634
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Activity classes which identifies the set of activities associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName activities
   * @modelRepresentation Relationship
   */
  activities?: Activity[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName biospecimenRetentions
   * @modelRepresentation Relationship
   */
  biospecimenRetentions?: BiospecimenRetention[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName eligibilityCriteria
   * @modelRepresentation Relationship
   */
  eligibilityCriteria: EligibilityCriterion[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Encounter classes which identifies the set of encounters associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName encounters
   * @modelRepresentation Relationship
   */
  encounters?: Encounter[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Estimand classes which identifies the set of estimands associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName estimands
   * @modelRepresentation Relationship
   */
  estimands?: Estimand[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Indication classes which identifies the set of indications associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName indications
   * @modelRepresentation Relationship
   */
  indications?: Indication[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Objective classes which identifies the set of objectives associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName objectives
   * @modelRepresentation Relationship
   */
  objectives?: Objective[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName scheduleTimelines
   * @modelRepresentation Relationship
   */
  scheduleTimelines?: ScheduleTimeline[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyArm classes which identifies the set of study arms associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName arms
   * @modelRepresentation Relationship
   */
  arms: StudyArm[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyCell classes which identifies the set of study cells associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName studyCells
   * @modelRepresentation Relationship
   */
  studyCells: StudyCell[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName documentVersions
   * @modelRepresentation Relationship
   */
  documentVersionIds?: (string | StudyDefinitionDocumentVersion)[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyElement classes which identifies the set of study elements associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName elements
   * @modelRepresentation Relationship
   */
  elements?: StudyElement[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with interventional study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   */
  studyInterventionIds?: (string | StudyIntervention)[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName epochs
   * @modelRepresentation Relationship
   */
  epochs: StudyEpoch[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the interventional study design.
   * @cardinality 1
   * @relationshipType Value
   * @modelName population
   * @modelRepresentation Relationship
   */
  population: StudyDesignPopulation

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  analysisPopulations?: AnalysisPopulation[]

}
