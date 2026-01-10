// Auto-generated - do not edit

import type { AnalysisPopulation } from "./AnalysisPopulation"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { Endpoint } from "./Endpoint"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { IntercurrentEvent } from "./IntercurrentEvent"
import type { StudyIntervention } from "./StudyIntervention"

/**
 * A precise description of the treatment effect reflecting the clinical question posed by a given clinical trial objective. It summarises at a population level what the outcomes would be in the same patients under different treatment conditions being compared. (ICH E9 R1 Addendum)
 * @preferredTerm Estimand
 * @nciCode C188813
 * @modifier Concrete
 */
export interface Estimand {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A synopsis of the clinical endpoint of interest within the analysis target study population.
   * @preferredTerm Population-Level Summary
   * @nciCode C188853
   * @cardinality 1
   * @relationshipType Value
   * @modelName populationSummary
   * @modelRepresentation Attribute
   */
  populationSummary: string

  /**
   * The literal identifier (i.e., distinctive designation) of the estimand.
   * @preferredTerm Estimand Name
   * @nciCode C215522
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the estimand.
   * @preferredTerm Estimand Label
   * @nciCode C215524
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the estimand.
   * @preferredTerm Estimand Description
   * @nciCode C215523
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the study estimand.
   * @preferredTerm Estimand Notes
   * @nciCode C215521
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Estimand and AnalysisPopulation classes which provides the details associated with an instance of the analysis population used to partially define a study estimand.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName analysisPopulation
   * @modelRepresentation Relationship
   */
  analysisPopulationId: AnalysisPopulation

  /**
   * A USDM relationship between the Estimand and Endpoint classes which provides the details associated with an instance of the variable of interest within a study endpoint used to partially define a study estimand.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName variableOfInterest
   * @modelRepresentation Relationship
   */
  variableOfInterestId: Endpoint

  /**
   * A USDM relationship between the Estimand and IntercurrentEvent classes which identifies the set of intercurrent events associated with a study estimand.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName intercurrentEvents
   * @modelRepresentation Relationship
   */
  intercurrentEvents: IntercurrentEvent[]

  /**
   * A USDM relationship between the Estimand and StudyIntervention classes which identifies the set of study interventions associated with the Estimand.
   * @cardinality 1..*
   * @relationshipType Ref
   * @modelName interventions
   * @modelRepresentation Relationship
   */
  interventionIds: StudyIntervention[]

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
