// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"

/**
 * A standardized pattern used for the arrangement of words and phrases to create well-formed, structured sentences.
 * @preferredTerm Syntax Template
 * @nciCode C207596
 * @modifier Abstract
 * @subClasses Characteristic, Condition, EligibilityCriterionItem, Endpoint, IntercurrentEvent, Objective
 */
export interface SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the characteristic.
   * @preferredTerm Characteristic Name
   * @nciCode C207477
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the characteristic.
   * @preferredTerm Characteristic Label
   * @nciCode C207476
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the characteristic.
   * @preferredTerm Characteristic Description
   * @nciCode C207475
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An instance of structured text that represents the characteristic.
   * @preferredTerm Characteristic Text
   * @nciCode C207478
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * A brief written record relevant to the characteristic.
   * @preferredTerm Characteristic Notes
   * @nciCode C215548
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Characteristic and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to characteristics.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   */
  dictionaryId?: SyntaxTemplateDictionary

}
