// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { NarrativeContentItem } from "./NarrativeContentItem"

/**
 * The container that holds an instance of unstructured text and which may include objects such as tables, figures, and images.
 * @preferredTerm Narrative Content
 * @nciCode C207592
 * @modifier Concrete
 */
export interface NarrativeContent {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the narrative content.
   * @preferredTerm Narrative Content Name
   * @nciCode C207507
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The numeric identifier assigned to a particular document section containing narrative content.
   * @preferredTerm Narrative Content Section Number
   * @nciCode C207509
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sectionNumber
   * @modelRepresentation Attribute
   */
  sectionNumber?: string

  /**
   * An identifying designation for the document section containing narrative content.
   * @preferredTerm Narrative Content Section Title
   * @nciCode C207510
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sectionTitle
   * @modelRepresentation Attribute
   */
  sectionTitle?: string

  /**
   * An indication as to whether the section title is to be displayed in the document containing narrative content.
   * @preferredTerm Narrative Content Section Title Display Indicator
   * @nciCode C215534
   * @cardinality 1
   * @relationshipType Value
   * @modelName displaySectionTitle
   * @modelRepresentation Attribute
   */
  displaySectionTitle: boolean

  /**
   * An indication as to whether the section number is to be displayed in the document containing narrative content.
   * @preferredTerm Narrative Content Section Number Display Indicator
   * @nciCode C215535
   * @cardinality 1
   * @relationshipType Value
   * @modelName displaySectionNumber
   * @modelRepresentation Attribute
   */
  displaySectionNumber: boolean

  /**
   * A USDM relationship between the NarrativeContent and NarrativeContentItem classes which identifies the content item associated with the narrative content.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName contentItem
   * @modelRepresentation Relationship
   */
  contentItemId?: NarrativeContentItem

  /**
   * A USDM relationship within the NarrativeContent class which identifies the narrative content that precedes the current narrative content in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: NarrativeContent

  /**
   * A USDM relationship within the NarrativeContent class which identifies the narrative content that follows the current narrative content in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: NarrativeContent

  /**
   * A USDM relationship within the NarrativeContent class which identifies the set of child content associated with an instance of narrative content.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: NarrativeContent[]

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
