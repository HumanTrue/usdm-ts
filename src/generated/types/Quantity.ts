// Auto-generated - do not edit

import type { AliasCode } from "./AliasCode"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { QuantityRangeAbstract } from "./QuantityRangeAbstract"

/**
 * How much there is of something that can be measured; the total amount or number.
 * @preferredTerm Quantity
 * @nciCode C25256
 * @modifier Concrete
 * @extends QuantityRange
 */
export interface Quantity extends QuantityRangeAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom QuantityRange
   */
  id: string

  /**
   * A numerical quantity measured or assigned or computed.
   * @preferredTerm Quantity Value
   * @nciCode C25712
   * @cardinality 1
   * @relationshipType Value
   * @modelName value
   * @modelRepresentation Attribute
   */
  value: number

  /**
   * The type of unit of measure being used to express a quantity.
   * @preferredTerm Quantity Unit
   * @nciCode C44258
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName unit
   * @modelRepresentation Attribute
   */
  unit?: AliasCode

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
