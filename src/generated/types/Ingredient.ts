// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Substance } from "./Substance"

/**
 * Any component that constitutes a part of a compounded substance or mixture.
 * @preferredTerm Ingredient
 * @nciCode C51981
 * @modifier Concrete
 */
export interface Ingredient {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The intended use of the ingredient within the context of the compounded substance or mixture.
   * @preferredTerm Ingredient Role
   * @nciCode C215595
   * @cardinality 1
   * @relationshipType Value
   * @modelName role
   * @modelRepresentation Attribute
   */
  role: Code

  /**
   * A USDM relationship between the Ingredient and Substance classes that identifies the substance associated with the ingredient.
   * @cardinality 1
   * @relationshipType Value
   * @modelName substance
   * @modelRepresentation Relationship
   */
  substance: Substance

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
