// Auto-generated - do not edit

import type { AliasCode } from "./AliasCode"
import type { BiomedicalConcept } from "./BiomedicalConcept"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A grouping of biomedical concepts based on some commonality or by user defined characteristics.
 * @preferredTerm Biomedical Concept Category
 * @nciCode C201346
 * @modifier Concrete
 */
export interface BiomedicalConceptCategory {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Name
   * @nciCode C201317
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Label
   * @nciCode C207471
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Description
   * @nciCode C201316
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Code
   * @nciCode C201315
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code?: AliasCode

  /**
   * A brief written record relevant to the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Notes
   * @nciCode C215533
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the BiomedicalConceptCategory and BiomedicalConcept classes which identifies the set of biomedical concept members associated with the biomedical concept category.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName members
   * @modelRepresentation Relationship
   */
  memberIds?: BiomedicalConcept[]

  /**
   * A USDM relationship within the BiomedicalConceptCategory class which identifies the set of child categories of a biomedical concept.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: BiomedicalConceptCategory[]

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
