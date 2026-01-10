// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { QuantityRange } from "./index"

/**
 * The length of time during which something continues.
 * @preferredTerm Duration
 * @nciCode C25330
 * @modifier Concrete
 */
export interface Duration {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the event duration.
   * @preferredTerm Duration Text
   * @nciCode C217008
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text?: string

  /**
   * The value representing the amount of time over which the event occurs.
   * @preferredTerm Duration Quantity Value
   * @nciCode C217011
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName quantity
   * @modelRepresentation Attribute
   */
  quantity?: QuantityRange

  /**
   * An indication as to whether the event duration is planned to vary within and/or across subjects.
   * @preferredTerm Duration Will Vary Indicator
   * @nciCode C217009
   * @cardinality 1
   * @relationshipType Value
   * @modelName durationWillVary
   * @modelRepresentation Attribute
   */
  durationWillVary: boolean

  /**
   * The explanation for why the event duration will vary within and/or across subjects.
   * @preferredTerm Reason Duration Will Vary
   * @nciCode C217010
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName reasonDurationWillVary
   * @modelRepresentation Attribute
   */
  reasonDurationWillVary?: string

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
