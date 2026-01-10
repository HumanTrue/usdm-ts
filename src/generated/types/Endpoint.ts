// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { SyntaxTemplateAbstract } from "./SyntaxTemplateAbstract"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"

/**
 * A defined variable intended to reflect an outcome of interest that is statistically analyzed to address a particular research question. NOTE: A precise definition of an endpoint typically specifies the type of assessments made, the timing of those assessments, the assessment tools used, and possibly other details, as applicable, such as how multiple assessments within an individual are to be combined. [After BEST Resource] (CDISC Glossary)
 * @preferredTerm Study Endpoint
 * @nciCode C25212
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Endpoint extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study endpoint.
   * @preferredTerm Study Endpoint Name
   * @nciCode C207492
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the study endpoint.
   * @preferredTerm Study Endpoint Label
   * @nciCode C207491
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the study endpoint.
   * @preferredTerm Study Endpoint Description
   * @nciCode C188824
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the study endpoint.
   * @preferredTerm Study Endpoint Text
   * @nciCode C207493
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the study endpoint.
   * @preferredTerm Endpoint Notes
   * @nciCode C215514
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Endpoint and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to study endpoints.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

  /**
   * A characterization or classification of the study endpoint that determines its category of importance relative to other study endpoints.
   * @preferredTerm Study Endpoint Level
   * @nciCode C188826
   * @cardinality 1
   * @relationshipType Value
   * @modelName level
   * @modelRepresentation Attribute
   */
  level: Code

  /**
   * The textual representation of the study endpoint purpose.
   * @preferredTerm Study Endpoint Purpose Description
   * @nciCode C188825
   * @cardinality 1
   * @relationshipType Value
   * @modelName purpose
   * @modelRepresentation Attribute
   */
  purpose: string

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
