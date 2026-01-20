// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { SyntaxTemplateAbstract } from "./SyntaxTemplateAbstract"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"

/**
 * An event(s) occurring after treatment initiation that affects either the interpretation or the existence of the measurements associated with the clinical question of interest. (ICH E9 Addendum on Estimands)
 * @preferredTerm Intercurrent Event
 * @nciCode C188815
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface IntercurrentEvent extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the intercurrent event.
   * @preferredTerm Intercurrent Event Name
   * @nciCode C188855
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the intercurrent event.
   * @preferredTerm Intercurrent Event Label
   * @nciCode C207504
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the intercurrent event.
   * @preferredTerm Intercurrent Event Description
   * @nciCode C188856
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the intercurrent event.
   * @preferredTerm Intercurrent Event Text
   * @nciCode C215526
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the intercurrent event.
   * @preferredTerm Intercurrent Event Notes
   * @nciCode C215527
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the IntercurrentEvent and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to the intercurrent event.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: (string | SyntaxTemplateDictionary)

  /**
   * A textual description of the planned strategy to manage and/or mitigate intercurrent events.
   * @preferredTerm Intercurrent Event Strategy
   * @nciCode C188857
   * @cardinality 1
   * @relationshipType Value
   * @modelName strategy
   * @modelRepresentation Attribute
   */
  strategy: string

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
