// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudyArm } from "./StudyArm"
import type { StudyElement } from "./StudyElement"
import type { StudyEpoch } from "./StudyEpoch"

/**
 * A partitioning of a study arm into individual pieces, which are associated with an epoch and any number of sequential elements within that epoch.
 * @preferredTerm Study Design Cell
 * @nciCode C188810
 * @modifier Concrete
 */
export interface StudyCell {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A USDM relationship between the StudyCell and StudyArm classes which identifies the study arm associated with a study cell.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName arm
   * @modelRepresentation Relationship
   */
  armId: (string | StudyArm)

  /**
   * A USDM relationship between the StudyCell and StudyEpoch classes which identifies the study epoch associated with a study cell.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   */
  epochId: (string | StudyEpoch)

  /**
   * A USDM relationship between the StudyCell and StudyElement classes which identifies the set of study elements associated with the study cell.
   * @cardinality 1..*
   * @relationshipType Ref
   * @modelName elements
   * @modelRepresentation Relationship
   */
  elementIds: (string | StudyElement)[]

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
