// Auto-generated - do not edit

import type { AliasCode } from "./AliasCode"
import type { BiomedicalConceptProperty } from "./BiomedicalConceptProperty"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A unit of biomedical knowledge created from a unique combination of characteristics that include implementation details like variables and terminologies, used as building blocks for standardized, hierarchically structured clinical research information.
 * @preferredTerm Biomedical Concept
 * @nciCode C201345
 * @modifier Concrete
 */
export interface BiomedicalConcept {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept.
   * @preferredTerm Biomedical Concept Name
   * @nciCode C201312
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept.
   * @preferredTerm Biomedical Concept Label
   * @nciCode C207470
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A word or an expression that serves as a figurative, symbolic, or exact substitute for a biomedical concept, and which has the same meaning.
   * @preferredTerm Biomedical Concept Synonym
   * @nciCode C201314
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName synonyms
   * @modelRepresentation Attribute
   */
  synonyms?: string[]

  /**
   * A citation to an authoritative source for a biomedical concept.
   * @preferredTerm Biomedical Concept Reference
   * @nciCode C201313
   * @cardinality 1
   * @relationshipType Value
   * @modelName reference
   * @modelRepresentation Attribute
   */
  reference: string

  /**
   * A concept unique identifier assigned to a biomedical concept that points to the meaning of that biomedical concept.
   * @preferredTerm Biomedical Concept Concept Code
   * @nciCode C207469
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: AliasCode

  /**
   * A brief written record relevant to the biomedical concept.
   * @preferredTerm Biomedical Concept Notes
   * @nciCode C215530
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the BiomedicalConcept and BiomedicalConceptProperty classes which identifies the set of properties associated with the biomedical concept.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName properties
   * @modelRepresentation Relationship
   */
  properties?: BiomedicalConceptProperty[]

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
