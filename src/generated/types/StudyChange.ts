// Auto-generated - do not edit

import type { DocumentContentReference } from "./DocumentContentReference"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The act of alteration or modification to a study.
 * @preferredTerm Study Change
 * @nciCode C215498
 * @modifier Concrete
 */
export interface StudyChange {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study change.
   * @preferredTerm Study Change Name
   * @nciCode C215604
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study change.
   * @preferredTerm Study Change Label
   * @nciCode C215606
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study change.
   * @preferredTerm Study Change Description
   * @nciCode C215605
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An explanation as to the logical reasons for why a study change has occurred.
   * @preferredTerm Study Change Rationale
   * @nciCode C215608
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   */
  rationale: string

  /**
   * A short narrative representation describing the changes introduced in the current version of the study.
   * @preferredTerm Study Change Summary
   * @nciCode C215607
   * @cardinality 1
   * @relationshipType Value
   * @modelName summary
   * @modelRepresentation Attribute
   */
  summary: string

  /**
   * A USDM relationship between the StudyChange and DocumentContentReference class which provides the set of changed document sections related to the study change.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName changedSections
   * @modelRepresentation Relationship
   */
  changedSections: DocumentContentReference[]

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
