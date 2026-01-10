// Auto-generated - do not edit

import type { Duration } from "./Duration"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ScheduleTimelineExit } from "./ScheduleTimelineExit"
import type { Timing } from "./Timing"
import type { ScheduledInstance } from "./index"

/**
 * A chronological schedule of planned temporal events.
 * @preferredTerm Schedule Timeline
 * @nciCode C201348
 * @modifier Concrete
 */
export interface ScheduleTimeline {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the schedule timeline.
   * @preferredTerm Schedule Timeline Name
   * @nciCode C201334
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the schedule timeline.
   * @preferredTerm Schedule Timeline Label
   * @nciCode C207530
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the schedule timeline.
   * @preferredTerm Schedule Timeline Description
   * @nciCode C201332
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A logical evaluation on which rests the validity of entry into a schedule timeline.
   * @preferredTerm Schedule Timeline Entry Condition
   * @nciCode C201333
   * @cardinality 1
   * @relationshipType Value
   * @modelName entryCondition
   * @modelRepresentation Attribute
   */
  entryCondition: string

  /**
   * An indication as to whether the timeline or timeline component is part of the central or principal timeline.
   * @preferredTerm Main Timeline Indicator
   * @nciCode C201331
   * @cardinality 1
   * @relationshipType Value
   * @modelName mainTimeline
   * @modelRepresentation Attribute
   */
  mainTimeline: boolean

  /**
   * The period of time over which the scheduled timeline is intended to take place.
   * @preferredTerm Schedule Timeline Planned Duration
   * @nciCode C217012
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedDuration
   * @modelRepresentation Attribute
   */
  plannedDuration?: Duration

  /**
   * A USDM relationship between the ScheduleTimeline and ScheduledInstance classes which identifies the set of scheduled instances (e.g., scheduled activity instances or scheduled decision instances) associated with the scheduled timeline.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName instances
   * @modelRepresentation Relationship
   */
  instances?: ScheduledInstance[]

  /**
   * A USDM relationship between the ScheduleTimeline and ScheduledInstance classes which defines the entry into a scheduled instance (e.g., scheduled activity instances or scheduled decision instances) for a timeline.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName entry
   * @modelRepresentation Relationship
   */
  entryId: ScheduledInstance

  /**
   * A USDM relationship between the ScheduleTimeline and ScheduleTimelineExit classes which identifies the set of exits from the scheduled timeline.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName exits
   * @modelRepresentation Relationship
   */
  exits?: ScheduleTimelineExit[]

  /**
   * A USDM relationship between the ScheduleTimeline and Timing classes which identifies the set of timings associated with the scheduled timeline.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName timings
   * @modelRepresentation Relationship
   */
  timings?: Timing[]

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
