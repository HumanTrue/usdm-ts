// Auto-generated - do not edit

import type { Administration } from "./Administration"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Quantity } from "./Quantity"

/**
 * Any agent, device, or procedure being tested or used as a reference or comparator in the conduct of a clinical trial.
 * @preferredTerm Study Intervention
 * @nciCode C207649
 * @modifier Concrete
 */
export interface StudyIntervention {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study intervention.
   * @preferredTerm Study Intervention Name
   * @nciCode C207558
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study intervention.
   * @preferredTerm Study Intervention Label
   * @nciCode C207556
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study intervention.
   * @preferredTerm Study Intervention Description
   * @nciCode C207647
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The intended use of the trial intervention within the context of the study design.
   * @preferredTerm Study Intervention Role
   * @nciCode C207560
   * @cardinality 1
   * @relationshipType Value
   * @modelName role
   * @modelRepresentation Attribute
   */
  role: Code

  /**
   * The kind of product or procedure studied in a trial.
   * @preferredTerm Study Intervention Type
   * @nciCode C98747
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A symbol or combination of symbols which is assigned to the study intervention.
   * @preferredTerm Study Intervention Code
   * @nciCode C207648
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

  /**
   * The value representing the minimum amount of time required to meet the criteria for response to study intervention.
   * @preferredTerm Study Intervention Minimum Response Duration
   * @nciCode C207557
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName minimumResponseDuration
   * @modelRepresentation Attribute
   */
  minimumResponseDuration?: Quantity

  /**
   * A brief written record relevant to the study intervention.
   * @preferredTerm Study Intervention Notes
   * @nciCode C215543
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyIntervention and AgentAdministration classes which identifies the set of agent administrations associated with the study intervention.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName administrations
   * @modelRepresentation Relationship
   */
  administrations?: Administration[]

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
