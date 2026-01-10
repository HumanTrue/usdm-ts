// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Strength } from "./Strength"

/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 * @preferredTerm Substance
 * @nciCode C45306
 * @modifier Concrete
 */
export interface Substance {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the substance.
   * @preferredTerm Substance Name
   * @nciCode C215586
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the substance.
   * @preferredTerm Substance Label
   * @nciCode C215588
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the substance.
   * @preferredTerm Substance Description
   * @nciCode C215587
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the substance.
   * @preferredTerm Substance Code
   * @nciCode C215589
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

  /**
   * A USDM relationship between the Substance and Strength class which provides the values of the strengths of the substance.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName strengths
   * @modelRepresentation Relationship
   */
  strengths: Strength[]

  /**
   * A USDM relationship within the Substance class that identifies the association between two substances, one of which is used as a reference for the other.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName referenceSubstance
   * @modelRepresentation Relationship
   */
  referenceSubstance?: Substance

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
