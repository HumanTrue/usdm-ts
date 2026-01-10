// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * To go out of or leave the schedule timeline.
 * @preferredTerm Schedule Timeline Exit
 * @nciCode C201349
 * @modifier Concrete
 */
export interface ScheduleTimelineExit {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

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
