// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * An explanatory or critical comment, or other in-context information (e.g., pattern, motif, link), that has been associated with data or other types of information.
 * @preferredTerm Comment Annotation
 * @nciCode C44272
 * @modifier Concrete
 */
export interface CommentAnnotation {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the comment annotation.
   * @preferredTerm Comment Annotation Text
   * @nciCode C215555
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * A symbol or combination of symbols which is assigned to the comment annotation.
   * @preferredTerm Comment Annotation Code
   * @nciCode C215556
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

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
