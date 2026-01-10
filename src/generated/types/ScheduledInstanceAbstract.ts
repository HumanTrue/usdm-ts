// Auto-generated - do not edit

import type { StudyEpoch } from "./StudyEpoch"
import type { ScheduledInstance } from "./index"

/**
 * A scheduled occurrence of a temporal event.
 * @preferredTerm Scheduled Instance
 * @nciCode C201299
 * @modifier Abstract
 * @subClasses ScheduledActivityInstance, ScheduledDecisionInstance
 */
export interface ScheduledInstanceAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
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
   */
  description?: string

  /**
   * A USDM relationship within the ScheduledActivityInstance class which identifies the default condition within a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName defaultCondition
   * @modelRepresentation Relationship
   */
  defaultConditionId?: ScheduledInstance

  /**
   * A USDM relationship between the ScheduledActivityInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   */
  epochId?: StudyEpoch

}
