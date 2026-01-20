// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudyDefinitionDocument } from "./StudyDefinitionDocument"

/**
 * A citation pointing to the location of specific content within a document.
 * @preferredTerm Document Content Reference
 * @nciCode C215499
 * @modifier Concrete
 */
export interface DocumentContentReference {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The numeric identifier of a particular section for the document content reference.
   * @preferredTerm Document Content Reference Section Number
   * @nciCode C215609
   * @cardinality 1
   * @relationshipType Value
   * @modelName sectionNumber
   * @modelRepresentation Attribute
   */
  sectionNumber: string

  /**
   * An identifying designation for a particular section for the document content reference.
   * @preferredTerm Document Content Reference Section Title
   * @nciCode C215610
   * @cardinality 1
   * @relationshipType Value
   * @modelName sectionTitle
   * @modelRepresentation Attribute
   */
  sectionTitle: string

  /**
   * A USDM relationship between the DocumentContentReference and StudyDefinitionDocument classes which identifies the study definition document to which the document content reference applies.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToId: (string | StudyDefinitionDocument)

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
