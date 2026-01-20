// Auto-generated - do not edit

import type { BiomedicalConcept } from "./BiomedicalConcept"
import type { BiomedicalConceptCategory } from "./BiomedicalConceptCategory"
import type { BiomedicalConceptSurrogate } from "./BiomedicalConceptSurrogate"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Procedure } from "./Procedure"
import type { ScheduleTimeline } from "./ScheduleTimeline"

/**
 * An action, undertaking, or event, which is anticipated to be performed or observed, or was performed or observed, according to the study protocol during the execution of the study.
 * @preferredTerm Study Activity
 * @nciCode C71473
 * @modifier Concrete
 */
export interface Activity {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study activity.
   * @preferredTerm Study Activity Name
   * @nciCode C188842
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study activity.
   * @preferredTerm Study Activity Label
   * @nciCode C207458
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study activity.
   * @preferredTerm Study Activity Description
   * @nciCode C70960
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the activity.
   * @preferredTerm Activity Notes
   * @nciCode C215519
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Activity and Procedure classes which identifies the set of defined procedures associated with the activity.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName definedProcedures
   * @modelRepresentation Relationship
   */
  definedProcedures?: Procedure[]

  /**
   * A USDM relationship between the Activity and BiomedicalConcept classes which identifies the set of biomedical concepts associated with the activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName biomedicalConcepts
   * @modelRepresentation Relationship
   */
  biomedicalConceptIds?: (string | BiomedicalConcept)[]

  /**
   * A USDM relationship within the Activity class which identifies the activity that follows the current activity in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: (string | Activity)

  /**
   * A USDM relationship between the Activity and ScheduleTimeline classes which provides the details associated with an instance of the scheduled timeline related to the activity.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName timeline
   * @modelRepresentation Relationship
   */
  timelineId?: (string | ScheduleTimeline)

  /**
   * A USDM relationship within the Activity class which identifies the set of child activities associated with an activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: (string | Activity)[]

  /**
   * A USDM relationship within the Activity class which identifies the activity that precedes the current activity in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: (string | Activity)

  /**
   * A USDM relationship between the Activity and BiomedicalConceptSurrogate classes which identifies the set of biomedical concept surrogates associated with the activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName bcSurrogates
   * @modelRepresentation Relationship
   */
  bcSurrogateIds?: (string | BiomedicalConceptSurrogate)[]

  /**
   * A USDM relationship between the Activity and BiomedicalConceptCategory classes which identifies the set of biomedical concept categories associated with the activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName bcCategories
   * @modelRepresentation Relationship
   */
  bcCategoryIds?: (string | BiomedicalConceptCategory)[]

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
