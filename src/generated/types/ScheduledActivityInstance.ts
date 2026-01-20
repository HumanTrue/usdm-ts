// Auto-generated - do not edit

import type { Activity } from "./Activity"
import type { Encounter } from "./Encounter"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ScheduleTimeline } from "./ScheduleTimeline"
import type { ScheduleTimelineExit } from "./ScheduleTimelineExit"
import type { ScheduledInstanceAbstract } from "./ScheduledInstanceAbstract"
import type { StudyEpoch } from "./StudyEpoch"
import type { ScheduledInstance } from "./index"

/**
 * A scheduled occurrence of an activity event.
 * @preferredTerm Scheduled Activity Instance
 * @nciCode C201350
 * @modifier Concrete
 * @extends ScheduledInstance
 */
export interface ScheduledActivityInstance extends ScheduledInstanceAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Name
   * @nciCode C207533
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  name: string

  /**
   * The short descriptive designation for the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Label
   * @nciCode C207532
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  label?: string

  /**
   * A narrative representation of the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Description
   * @nciCode C207531
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  description?: string

  /**
   * A USDM relationship within the ScheduledActivityInstance class which identifies the default condition within a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName defaultCondition
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  defaultConditionId?: (string | ScheduledInstance)

  /**
   * A USDM relationship between the ScheduledActivityInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  epochId?: (string | StudyEpoch)

  /**
   * A USDM relationship between the ScheduledActivityInstance and Activity classes which identifies the set of activities associated with a scheduled activity instance.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName activities
   * @modelRepresentation Relationship
   */
  activityIds?: (string | Activity)[]

  /**
   * A USDM relationship between the ScheduledActivityInstance and Encounter classes which defines the subject encounter associated with the ScheduleActivityInstance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName encounter
   * @modelRepresentation Relationship
   */
  encounterId?: (string | Encounter)

  /**
   * A USDM relationship between the ScheduledActivityInstance and ScheduleTimeline classes which provides the details associated with an instance of a scheduled timeline related to a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName timeline
   * @modelRepresentation Relationship
   */
  timelineId?: (string | ScheduleTimeline)

  /**
   * A USDM relationship between the ScheduledActivityInstance and ScheduleTimelineExit classes which provides the details associated with the exit from a timeline related to a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName timelineExit
   * @modelRepresentation Relationship
   */
  timelineExitId?: (string | ScheduleTimelineExit)

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
