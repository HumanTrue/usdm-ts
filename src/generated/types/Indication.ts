// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The disease or condition the intervention will diagnose, treat, prevent, cure, or mitigate.
 * @preferredTerm Disease/Condition Indication
 * @nciCode C41184
 * @modifier Concrete
 */
export interface Indication {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the disease/condition indication.
   * @preferredTerm Disease/Condition Indication Name
   * @nciCode C207503
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the disease/condition indication.
   * @preferredTerm Disease/Condition Indication Label
   * @nciCode C207502
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the condition, disease or disorder that the clinical trial is intended to investigate or address.
   * @preferredTerm Disease/Condition Indication Description
   * @nciCode C112038
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An indication as to whether the disease/condition indication under study is considered a rare disease.
   * @preferredTerm Disease/Condition Indication Is Rare Disease Indicator
   * @nciCode C207501
   * @cardinality 1
   * @relationshipType Value
   * @modelName isRareDisease
   * @modelRepresentation Attribute
   */
  isRareDisease: boolean

  /**
   * A short sequence of characters that represents the disease/condition indication.
   * @preferredTerm Disease/Condition Indication Code
   * @nciCode C188822
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

  /**
   * A brief written record relevant to the disease/condition indication.
   * @preferredTerm Indication Notes
   * @nciCode C215509
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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
