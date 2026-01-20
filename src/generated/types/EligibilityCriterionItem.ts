// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { SyntaxTemplateAbstract } from "./SyntaxTemplateAbstract"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"

/**
 * An individual item within the container that holds an instance of an eligibility criterion.
 * @preferredTerm Eligibility Criterion Item
 * @nciCode C215506
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface EligibilityCriterionItem extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Name
   * @nciCode C215647
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Label
   * @nciCode C215650
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Description
   * @nciCode C215649
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Text
   * @nciCode C215648
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Notes
   * @nciCode C215651
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the EligibilityCriterionItem and SyntaxTemplateDictionary classes which provides the dictionary entry associated with a eligibility criterion item.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: (string | SyntaxTemplateDictionary)

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
