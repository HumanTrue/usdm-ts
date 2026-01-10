// Auto-generated - do not edit

import type { AliasCode } from "./AliasCode"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ResponseCode } from "./ResponseCode"

/**
 * A characteristic from a set of characteristics used to define a biomedical concept.
 * @preferredTerm Biomedical Concept Property
 * @nciCode C202493
 * @modifier Concrete
 */
export interface BiomedicalConceptProperty {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept property.
   * @preferredTerm Biomedical Concept Property Name
   * @nciCode C202494
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept property.
   * @preferredTerm Biomedical Concept Property Label
   * @nciCode C207472
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * An indication as to whether the biomedical concept property is required.
   * @preferredTerm Biomedical Concept Property Required Indicator
   * @nciCode C202495
   * @cardinality 1
   * @relationshipType Value
   * @modelName isRequired
   * @modelRepresentation Attribute
   */
  isRequired: boolean

  /**
   * An indication as to whether the biomedical concept property is activated for use within a given usage context for a biomedical concept.
   * @preferredTerm Biomedical Concept Property Enabled Indicator
   * @nciCode C202496
   * @cardinality 1
   * @relationshipType Value
   * @modelName isEnabled
   * @modelRepresentation Attribute
   */
  isEnabled: boolean

  /**
   * The structural format of the biomedical concept property response value. The datatype is carried in the attribute and influences the set of allowable values the attribute may assume. (After HL7)
   * @preferredTerm Biomedical Concept Property Response Data Type
   * @nciCode C201319
   * @cardinality 1
   * @relationshipType Value
   * @modelName datatype
   * @modelRepresentation Attribute
   */
  datatype: string

  /**
   * A concept unique identifier assigned to a biomedical concept property that points to the meaning of that biomedical concept property.
   * @preferredTerm Biomedical Concept Property Concept Code
   * @nciCode C201318
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: AliasCode

  /**
   * A brief written record relevant to the biomedical concept property.
   * @preferredTerm Biomedical Concept Property Notes
   * @nciCode C215531
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the BiomedicalConceptProperty and ResponseCode classes which identifies the set of response codes associated with the biomedical concept property.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName responseCodes
   * @modelRepresentation Relationship
   */
  responseCodes?: ResponseCode[]

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
