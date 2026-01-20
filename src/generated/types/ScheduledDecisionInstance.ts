// Auto-generated - do not edit

import type { ConditionAssignment } from "./ConditionAssignment"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ScheduledInstanceAbstract } from "./ScheduledInstanceAbstract"
import type { StudyEpoch } from "./StudyEpoch"
import type { ScheduledInstance } from "./index"

/**
 * A scheduled occurrence of a decision event.
 * @preferredTerm Scheduled Decision Instance
 * @nciCode C201351
 * @modifier Concrete
 * @extends ScheduledInstance
 */
export interface ScheduledDecisionInstance extends ScheduledInstanceAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the scheduled Decision instance.
   * @preferredTerm Scheduled Decision Instance Name
   * @nciCode C207536
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  name: string

  /**
   * The short descriptive designation for the scheduled Decision instance.
   * @preferredTerm Scheduled Decision Instance Label
   * @nciCode C207535
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  label?: string

  /**
   * A narrative representation of the scheduled Decision instance.
   * @preferredTerm Scheduled Decision Instance Description
   * @nciCode C207534
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  description?: string

  /**
   * A USDM relationship within the ScheduledDecisionInstance class which identifies the default condition within a scheduled decision instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName defaultCondition
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  defaultConditionId?: (string | ScheduledInstance)

  /**
   * A USDM relationship between the ScheduledDecisionInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled decision instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  epochId?: (string | StudyEpoch)

  /**
   * A USDM relationship between the ScheduledDecisionInstance and ConditionAssignment classes which identifies the set of condition assignments associated with a scheduled decision instance.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName conditionAssignments
   * @modelRepresentation Relationship
   */
  conditionAssignments: ConditionAssignment[]

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
