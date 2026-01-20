// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { Endpoint } from "./Endpoint"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { SyntaxTemplateAbstract } from "./SyntaxTemplateAbstract"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"

/**
 * The reason for performing a study in terms of the scientific questions to be answered by the analysis of data collected during the study.
 * @preferredTerm Study Objective
 * @nciCode C142450
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Objective extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study objective.
   * @preferredTerm Study Objective Name
   * @nciCode C207512
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the study objective.
   * @preferredTerm Study Objective Label
   * @nciCode C207511
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the study objective. (BRIDG)
   * @preferredTerm Study Objective Description
   * @nciCode C94090
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the study objective.
   * @preferredTerm Study Objective Text
   * @nciCode C207513
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the study objective.
   * @preferredTerm Objective Notes
   * @nciCode C215513
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Objective and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to study objectives.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: (string | SyntaxTemplateDictionary)

  /**
   * A characterization or classification of the study objective that determines its category of importance relative to other study objectives.
   * @preferredTerm Study Objective Level
   * @nciCode C188823
   * @cardinality 1
   * @relationshipType Value
   * @modelName level
   * @modelRepresentation Attribute
   */
  level: Code

  /**
   * A USDM relationship between the Objective and Endpoint classes which identifies the set of endpoints associated with the study objective.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName endpoints
   * @modelRepresentation Relationship
   */
  endpoints?: Endpoint[]

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
