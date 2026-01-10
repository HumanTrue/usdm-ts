// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * An individual item within the container that holds an instance of unstructured text and which may include objects such as tables, figures, and images.
 * @preferredTerm Narrative Content Item
 * @nciCode C215489
 * @modifier Concrete
 */
export interface NarrativeContentItem {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the narrative content item.
   * @preferredTerm Narrative Content Item Name
   * @nciCode C215557
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * An instance of unstructured text that represents the narrative content item.
   * @preferredTerm Narrative Content Item Text
   * @nciCode C215558
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

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
