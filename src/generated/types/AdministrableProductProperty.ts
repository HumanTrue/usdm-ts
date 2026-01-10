// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Quantity } from "./Quantity"

/**
 * A characteristic from a set of characteristics used to define an administrable product.
 * @preferredTerm Administrable Product Property
 * @nciCode C215494
 * @modifier Concrete
 */
export interface AdministrableProductProperty {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the administrable product property.
   * @preferredTerm Administrable Product Property Name
   * @nciCode C215582
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * A characterization or classification of the administrable product property.
   * @preferredTerm Administrable Product Property Type
   * @nciCode C215585
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * An instance of structured text that represents the administrable product property.
   * @preferredTerm Administrable Product Property Text
   * @nciCode C215583
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * The numeric value associated with an administrable product property.
   * @preferredTerm Administrable Product Property Quantity Value
   * @nciCode C215584
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName quantity
   * @modelRepresentation Attribute
   */
  quantity?: Quantity

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
