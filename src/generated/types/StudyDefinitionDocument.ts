// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudyDefinitionDocumentVersion } from "./StudyDefinitionDocumentVersion"

/**
 * Any physical or electronic document that is related to defining a study or part of a study.
 * @preferredTerm Study Definition Document
 * @nciCode C215490
 * @modifier Concrete
 */
export interface StudyDefinitionDocument {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study definition document.
   * @preferredTerm Study Definition Document Name
   * @nciCode C215559
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study definition document.
   * @preferredTerm Study Definition Document Label
   * @nciCode C215561
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study definition document.
   * @preferredTerm Study Definition Document Description
   * @nciCode C215560
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study definition document.
   * @preferredTerm Study Definition Document Type
   * @nciCode C215564
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The literal identifier (i.e., distinctive designation) of the study definition document template.
   * @preferredTerm Study Definition Document Template Name
   * @nciCode C215562
   * @cardinality 1
   * @relationshipType Value
   * @modelName templateName
   * @modelRepresentation Attribute
   */
  templateName: string

  /**
   * The language in which the study definition document is written.
   * @preferredTerm Study Definition Document Language
   * @nciCode C215563
   * @cardinality 1
   * @relationshipType Value
   * @modelName language
   * @modelRepresentation Attribute
   */
  language: Code

  /**
   * A brief written record relevant to the study definition document.
   * @preferredTerm Study Definition Document Notes
   * @nciCode C215565
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship within the StudyDefinitionDocument class which identifies the set of child documents of a study definition document.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: StudyDefinitionDocument[]

  /**
   * A USDM relationship between the StudyDefinitionDocument and StudyDefinitionDocumentVersion classes which identifies the set of versions associated with the study definition document.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName versions
   * @modelRepresentation Relationship
   */
  versions?: StudyDefinitionDocumentVersion[]

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
