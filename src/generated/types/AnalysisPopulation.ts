// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { PopulationDefinition } from "./index"

/**
 * A target study population on which an analysis is performed. These may be represented by the entire study population, a subgroup defined by a particular characteristic measured at baseline, or a principal stratum defined by the occurrence (or non-occurrence, depending on context) of a specific intercurrent event. (ICH E9 R1 Addendum)
 * @preferredTerm Analysis Population
 * @nciCode C188814
 * @modifier Concrete
 */
export interface AnalysisPopulation {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the analysis population.
   * @preferredTerm Analysis Population Text
   * @nciCode C207468
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * The literal identifier (i.e., distinctive designation) of the analysis population.
   * @preferredTerm Analysis Population Name
   * @nciCode C207467
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the analysis population.
   * @preferredTerm Analysis Population Label
   * @nciCode C207466
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the analysis population.
   * @preferredTerm Analysis Population Description
   * @nciCode C188854
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the analysis population.
   * @preferredTerm Analysis Population Notes
   * @nciCode C215525
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the AnalysisPopulation and PopulationDefinition classes which identifies the population definition of which the analysis population is a subset.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName subsetOf
   * @modelRepresentation Relationship
   */
  subsetOfIds?: PopulationDefinition[]

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
