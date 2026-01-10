// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudyIntervention } from "./StudyIntervention"
import type { TransitionRule } from "./TransitionRule"

/**
 * A basic building block for time within a clinical study comprising the following characteristics: a description of what happens to the subject during the element; a definition of the start of the element; a rule for ending the element.
 * @preferredTerm Study Design Element
 * @nciCode C142735
 * @modifier Concrete
 */
export interface StudyElement {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study design element.
   * @preferredTerm Study Design Element Name
   * @nciCode C188833
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study design element.
   * @preferredTerm Study Design Element Label
   * @nciCode C207554
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study design element.
   * @preferredTerm Study Design Element Description
   * @nciCode C188834
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the study element.
   * @preferredTerm Study Element Notes
   * @nciCode C215517
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyElement and TransitionRule classes which provides the details associated with a transition rule used to trigger the end of a study element.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionEndRule
   * @modelRepresentation Relationship
   */
  transitionEndRule?: TransitionRule

  /**
   * A USDM relationship between the StudyElement and StudyIntervention classes which identifies the set of study interventions associated with the study element.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   */
  studyInterventionIds?: StudyIntervention[]

  /**
   * A USDM relationship between the StudyElement and TransitionRule classes which provides the details associated with a transition rule used to trigger the start of a study element.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionStartRule
   * @modelRepresentation Relationship
   */
  transitionStartRule?: TransitionRule

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
