// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
 * @preferredTerm Study Epoch
 * @nciCode C71738
 * @modifier Concrete
 */
export interface StudyEpoch {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study epoch, i.e., the named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
   * @preferredTerm Study Epoch Name
   * @nciCode C93825
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study epoch.
   * @preferredTerm Study Epoch Label
   * @nciCode C207555
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study epoch.
   * @preferredTerm Study Epoch Description
   * @nciCode C93824
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study epoch, i.e., the named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
   * @preferredTerm Study Epoch Type
   * @nciCode C188830
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A brief written record relevant to the study epoch.
   * @preferredTerm Study Epoch Notes
   * @nciCode C215516
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship within the StudyEpoch class which identifies the study epoch that chronologically precedes the current study epoch.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: StudyEpoch

  /**
   * A USDM relationship within the StudyEpoch class which identifies the study epoch that chronologically follows the current study epoch.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: StudyEpoch

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
