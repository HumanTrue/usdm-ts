// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Timing } from "./Timing"
import type { TransitionRule } from "./TransitionRule"

/**
 * Any physical or virtual contact between two or more parties involved in a study, at which an assessment or activity takes place.
 * @preferredTerm Study Encounter
 * @nciCode C215488
 * @modifier Concrete
 */
export interface Encounter {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) for a protocol-defined study encounter.
   * @preferredTerm Study Encounter Name
   * @nciCode C171010
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study encounter.
   * @preferredTerm Study Encounter Label
   * @nciCode C207490
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the protocol-defined study encounter.
   * @preferredTerm Study Encounter Description
   * @nciCode C188836
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study encounter.
   * @preferredTerm Study Encounter Type
   * @nciCode C188839
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The environment/setting where the event, intervention, or finding occurred.
   * @preferredTerm Environmental Setting
   * @nciCode C188840
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName environmentalSettings
   * @modelRepresentation Attribute
   */
  environmentalSettings?: Code[]

  /**
   * The means by which an interaction occurs between the subject/participant and person or entity (e.g., a device).
   * @preferredTerm Contact Mode
   * @nciCode C188841
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName contactModes
   * @modelRepresentation Attribute
   */
  contactModes?: Code[]

  /**
   * A brief written record relevant to the study encounter.
   * @preferredTerm Encounter Notes
   * @nciCode C215518
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Encounter and TransitionRule classes which provides the details associated with a transition rule used to trigger the end of an encounter.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionEndRule
   * @modelRepresentation Relationship
   */
  transitionEndRule?: TransitionRule

  /**
   * A USDM relationship within the Encounter class which identifies the encounter that chronologically follows the current encounter.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: (string | Encounter)

  /**
   * A USDM relationship between the Encounter and TransitionRule classes which provides the details associated with a transition rule used to trigger the start of an encounter.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionStartRule
   * @modelRepresentation Relationship
   */
  transitionStartRule?: TransitionRule

  /**
   * A USDM relationship between the Encounter and Timing classes which provides information related to the scheduled timing of an encounter.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName scheduledAt
   * @modelRepresentation Relationship
   */
  scheduledAtId?: (string | Timing)

  /**
   * A USDM relationship within the Encounter class which identifies the encounter that chronologically precedes the current encounter.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: (string | Encounter)

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
