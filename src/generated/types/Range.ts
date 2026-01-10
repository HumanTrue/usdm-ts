// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Quantity } from "./Quantity"
import type { QuantityRangeAbstract } from "./QuantityRangeAbstract"

/**
 * An expression that defines the lower and upper limits of a variation.
 * @preferredTerm Range
 * @nciCode C38013
 * @modifier Concrete
 * @extends QuantityRange
 */
export interface Range extends QuantityRangeAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom QuantityRange
   */
  id: string

  /**
   * The smallest value in quantity or degree in a set of values.
   * @preferredTerm Minimum Value
   * @nciCode C25570
   * @cardinality 1
   * @relationshipType Value
   * @modelName minValue
   * @modelRepresentation Attribute
   */
  minValue: Quantity

  /**
   * The largest value in quantity or degree in a set of values.
   * @preferredTerm Maximum Value
   * @nciCode C25564
   * @cardinality 1
   * @relationshipType Value
   * @modelName maxValue
   * @modelRepresentation Attribute
   */
  maxValue: Quantity

  /**
   * An indication as to whether the value range is almost, but not quite, exact.
   * @preferredTerm Value Range is Approximate Indicator
   * @nciCode C207525
   * @cardinality 1
   * @relationshipType Value
   * @modelName isApproximate
   * @modelRepresentation Attribute
   */
  isApproximate: boolean

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
