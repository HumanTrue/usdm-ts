// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A set of letters that are drawn from a word or from a sequence of words and that are used for brevity in place of the full word or phrase. (CDISC Glossary)
 * @preferredTerm Abbreviation
 * @nciCode C42610
 * @modifier Concrete
 */
export interface Abbreviation {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal value of an instance of unstructured text that is used as the abbreviation.
   * @preferredTerm Text Abbreviation Value
   * @nciCode C215487
   * @cardinality 1
   * @relationshipType Value
   * @modelName abbreviatedText
   * @modelRepresentation Attribute
   */
  abbreviatedText: string

  /**
   * The full literal representation of the abbreviation.
   * @preferredTerm Abbreviation Long Name
   * @nciCode C215569
   * @cardinality 1
   * @relationshipType Value
   * @modelName expandedText
   * @modelRepresentation Attribute
   */
  expandedText: string

  /**
   * A brief written record relevant to the abbreviation.
   * @preferredTerm Abbreviation Notes
   * @nciCode C215570
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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
