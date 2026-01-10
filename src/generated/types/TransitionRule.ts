// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A guide that governs the allocation of subjects to operational options at a discrete decision point or branch (e.g., assignment to a particular arm, discontinuation) within a clinical trial plan.
 * @preferredTerm Transition Rule
 * @nciCode C82567
 * @modifier Concrete
 */
export interface TransitionRule {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the transition rule.
   * @preferredTerm Transition Rule Name
   * @nciCode C207588
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the transition rule.
   * @preferredTerm Transition Rule Label
   * @nciCode C207587
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the transition rule.
   * @preferredTerm Transition Rule Description
   * @nciCode C188835
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An instance of unstructured text that represents the transition rule.
   * @preferredTerm Transition Rule Text
   * @nciCode C207589
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

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
