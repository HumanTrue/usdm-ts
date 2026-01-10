// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Quantity } from "./Quantity"
import type { QuantityRange } from "./index"

/**
 * The content of an substance expressed quantitatively per dosage unit, per unit of volume, or per unit of weight, according to the pharmaceutical dose form of the product.
 * @preferredTerm Substance Strength
 * @nciCode C215495
 * @modifier Concrete
 */
export interface Strength {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the substance strength.
   * @preferredTerm Substance Strength Name
   * @nciCode C215590
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the substance strength.
   * @preferredTerm Substance Strength Label
   * @nciCode C215592
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the substance strength.
   * @preferredTerm Substance Strength Description
   * @nciCode C215591
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The dividend of a fraction.
   * @preferredTerm Numerator
   * @nciCode C80490
   * @cardinality 1
   * @relationshipType Value
   * @modelName numerator
   * @modelRepresentation Attribute
   */
  numerator: QuantityRange

  /**
   * The divisor of a fraction.
   * @preferredTerm Denominator
   * @nciCode C80489
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName denominator
   * @modelRepresentation Attribute
   */
  denominator?: Quantity

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
