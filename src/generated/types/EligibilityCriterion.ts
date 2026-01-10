// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { EligibilityCriterionItem } from "./EligibilityCriterionItem"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * Characteristics which are necessary to allow a subject to participate in a clinical study, as outlined in the study protocol. The concept covers inclusion and exclusion criteria.
 * @preferredTerm Study Eligibility Criterion
 * @nciCode C16112
 * @modifier Concrete
 */
export interface EligibilityCriterion {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study eligibility criterion.
   * @preferredTerm Study Eligibility Criterion Name
   * @nciCode C207488
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study eligibility criterion.
   * @preferredTerm Study Eligibility Criterion Label
   * @nciCode C207487
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study eligibility criterion.
   * @preferredTerm Study Eligibility Criterion Description
   * @nciCode C207486
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A sequence of characters used to identify, name, or characterize the inclusion or exclusion criterion.
   * @preferredTerm Study Eligibility Criterion Identifier
   * @nciCode C207489
   * @cardinality 1
   * @relationshipType Value
   * @modelName identifier
   * @modelRepresentation Attribute
   */
  identifier: string

  /**
   * A classification of the inclusion exclusion criterion.
   * @preferredTerm Study Eligibility Criterion Category
   * @nciCode C83016
   * @cardinality 1
   * @relationshipType Value
   * @modelName category
   * @modelRepresentation Attribute
   */
  category: Code

  /**
   * A brief written record relevant to the eligibility criterion.
   * @preferredTerm Eligibility Criterion Notes
   * @nciCode C215537
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the EligibilityCriterion and EligibilityCriterionItem classes which identifies the item belonging to the eligibility criterion.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName criterionItem
   * @modelRepresentation Relationship
   */
  criterionItemId: EligibilityCriterionItem

  /**
   * A USDM relationship within the EligibilityCriterion class which identifies the eligibility criterion that follows the current eligibility criterion in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: EligibilityCriterion

  /**
   * A USDM relationship within the EligibilityCriterion class which identifies the eligibility criterion that precedes the current eligibility criterion in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: EligibilityCriterion

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
