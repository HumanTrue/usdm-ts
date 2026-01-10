// Auto-generated - do not edit

import type { Activity } from "./Activity"
import type { BiomedicalConcept } from "./BiomedicalConcept"
import type { BiomedicalConceptCategory } from "./BiomedicalConceptCategory"
import type { BiomedicalConceptSurrogate } from "./BiomedicalConceptSurrogate"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Procedure } from "./Procedure"
import type { ScheduledActivityInstance } from "./ScheduledActivityInstance"
import type { SyntaxTemplateAbstract } from "./SyntaxTemplateAbstract"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"

/**
 * A state of being.
 * @preferredTerm Condition
 * @nciCode C25457
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Condition extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the condition.
   * @preferredTerm Condition Name
   * @nciCode C207483
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the condition.
   * @preferredTerm Condition Label
   * @nciCode C207482
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the condition.
   * @preferredTerm Condition Description
   * @nciCode C207481
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the condition.
   * @preferredTerm Condition Text
   * @nciCode C207484
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the condition.
   * @preferredTerm Condition Notes
   * @nciCode C215552
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Condition and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to conditions.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

  /**
   * A USDM relationship between the Condition and the ScheduledActivityInstance or Activity classes which identifies the scheduled activity instance or activity to which the condition belongs.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName context
   * @modelRepresentation Relationship
   */
  contextIds?: (Activity | ScheduledActivityInstance)[]

  /**
   * A USDM relationship between the Condition and the Activity, Procedure, BiomedicalConcept, BiomedicalConceptSurrogate, or BiomedicalConceptCategory classes which identifies the procedure, activity, biomedical concept, biomedical concept surrogate, or biomedical concept category that applies to the condition.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToIds?: (BiomedicalConceptCategory | Procedure | Activity | BiomedicalConcept | BiomedicalConceptSurrogate)[]

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
