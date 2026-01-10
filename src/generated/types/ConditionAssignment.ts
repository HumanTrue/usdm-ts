// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ScheduledInstance } from "./index"

/**
 * An allotting or appointment to a condition or set of conditions that are to be met in order to make a logical decision.
 * @preferredTerm Condition Assignment
 * @nciCode C201335
 * @modifier Concrete
 */
export interface ConditionAssignment {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An assumption on which rests the validity or effect of something else.
   * @preferredTerm Logical Condition
   * @nciCode C47953
   * @cardinality 1
   * @relationshipType Value
   * @modelName condition
   * @modelRepresentation Attribute
   */
  condition: string

  /**
   * A USDM relationship between the ConditionAssignment and ScheduledInstance classes which identifies the scheduled instance associated with the condition assignment.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName conditionTarget
   * @modelRepresentation Relationship
   */
  conditionTargetId: ScheduledInstance

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
