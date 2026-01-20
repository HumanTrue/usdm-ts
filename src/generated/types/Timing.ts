// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ScheduledInstance } from "./index"

/**
 * The chronological relationship between temporal events.
 * @preferredTerm Timing
 * @nciCode C80484
 * @modifier Concrete
 */
export interface Timing {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the timing.
   * @preferredTerm Timing Name
   * @nciCode C207584
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the timing.
   * @preferredTerm Timing Label
   * @nciCode C207583
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the chronological relationship between temporal events.
   * @preferredTerm Timing Description
   * @nciCode C164648
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the chronological relationship between temporal events.
   * @preferredTerm Timing Type
   * @nciCode C201298
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The name of the reference event used to define the temporal relationship with another event.
   * @preferredTerm Timing Relative To From
   * @nciCode C201297
   * @cardinality 1
   * @relationshipType Value
   * @modelName relativeToFrom
   * @modelRepresentation Attribute
   */
  relativeToFrom: Code

  /**
   * The temporal value of the chronological relationship between temporal events.
   * @preferredTerm Timing Value
   * @nciCode C201341
   * @cardinality 1
   * @relationshipType Value
   * @modelName value
   * @modelRepresentation Attribute
   */
  value: string

  /**
   * The short descriptive designation for the timing value.
   * @preferredTerm Timing Value Label
   * @nciCode C207585
   * @cardinality 1
   * @relationshipType Value
   * @modelName valueLabel
   * @modelRepresentation Attribute
   */
  valueLabel: string

  /**
   * The short descriptive designation for a time period, or other type of interval, during which a temporal event may be achieved, obtained, or observed.
   * @preferredTerm Timing Window Label
   * @nciCode C207586
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName windowLabel
   * @modelRepresentation Attribute
   */
  windowLabel?: string

  /**
   * The earliest chronological value of an allowable period of time during which a temporal event takes place.
   * @preferredTerm Timing Window, Lower
   * @nciCode C201342
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName windowLower
   * @modelRepresentation Attribute
   */
  windowLower?: string

  /**
   * The latest chronological value of an allowable period of time during which a temporal event takes place.
   * @preferredTerm Timing Window, Upper
   * @nciCode C201343
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName windowUpper
   * @modelRepresentation Attribute
   */
  windowUpper?: string

  /**
   * A USDM relationship between the Timing and ScheduledInstance classes which identifies the scheduled instance (e.g., scheduled activity instances or scheduled decision instances) to which the timing is relative to.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName relativeToScheduledInstance
   * @modelRepresentation Relationship
   */
  relativeToScheduledInstanceId?: (string | ScheduledInstance)

  /**
   * A USDM relationship between the Timing and ScheduledInstance classes which identifies the scheduled instance (e.g., scheduled activity instances or scheduled decision instances) to which the timing applies.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName relativeFromScheduledInstance
   * @modelRepresentation Relationship
   */
  relativeFromScheduledInstanceId: (string | ScheduledInstance)

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
