// Auto-generated - do not edit

import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A concept that substitutes for a standard biomedical concept from the designated source.
 * @preferredTerm Biomedical Concept Surrogate
 * @nciCode C207590
 * @modifier Concrete
 */
export interface BiomedicalConceptSurrogate {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Name
   * @nciCode C207474
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Label
   * @nciCode C207473
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Description
   * @nciCode C201320
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A citation to an authoritative source for a biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Reference
   * @nciCode C201321
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName reference
   * @modelRepresentation Attribute
   */
  reference?: string

  /**
   * A brief written record relevant to the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Notes
   * @nciCode C215532
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
