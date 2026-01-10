// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { PopulationDefinition } from "./index"

/**
 * A planned pathway assigned to the subject as they progress through the study, usually referred to by a name that reflects one or more treatments, exposures, and/or controls included in the path.
 * @preferredTerm Study Arm
 * @nciCode C174447
 * @modifier Concrete
 */
export interface StudyArm {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study arm.
   * @preferredTerm Study Arm Name
   * @nciCode C170984
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study arm.
   * @preferredTerm Study Arm Label
   * @nciCode C172456
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study arm.
   * @preferredTerm Study Arm Description
   * @nciCode C93728
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study arm.
   * @preferredTerm Study Arm Type
   * @nciCode C172457
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A characterization or classification of the study arm with respect to where the study arm data originates.
   * @preferredTerm Study Arm Data Origin Type
   * @nciCode C188829
   * @cardinality 1
   * @relationshipType Value
   * @modelName dataOriginType
   * @modelRepresentation Attribute
   */
  dataOriginType: Code

  /**
   * The textual representation of the study arm data origin.
   * @preferredTerm Study Arm Data Origin Description
   * @nciCode C188828
   * @cardinality 1
   * @relationshipType Value
   * @modelName dataOriginDescription
   * @modelRepresentation Attribute
   */
  dataOriginDescription: string

  /**
   * A brief written record relevant to the study arm.
   * @preferredTerm Study Arm Notes
   * @nciCode C215515
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyArm and PopulationDefinition classes which identifies the set of populations associated with the study arm.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName populations
   * @modelRepresentation Relationship
   */
  populationIds?: PopulationDefinition[]

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
