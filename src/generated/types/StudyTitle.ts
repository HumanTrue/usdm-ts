// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The sponsor-defined name of the clinical study.
 * @preferredTerm Study Title
 * @nciCode C49802
 * @modifier Concrete
 */
export interface StudyTitle {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A characterization or classification of the study title.
   * @preferredTerm Study Title Type
   * @nciCode C207568
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * An instance of unstructured text that represents the study title.
   * @preferredTerm Study Title Text
   * @nciCode C207567
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
