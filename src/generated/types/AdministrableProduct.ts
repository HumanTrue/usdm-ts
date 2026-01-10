// Auto-generated - do not edit

import type { AdministrableProductIdentifier } from "./AdministrableProductIdentifier"
import type { AdministrableProductProperty } from "./AdministrableProductProperty"
import type { AliasCode } from "./AliasCode"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Ingredient } from "./Ingredient"

/**
 * Any study product that is formulated and presented in the form that is suitable for administration to a study participant.
 * @preferredTerm Administrable Product
 * @nciCode C215492
 * @modifier Concrete
 */
export interface AdministrableProduct {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the administrable product.
   * @preferredTerm Administrable Product Definition Name
   * @nciCode C215573
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the administrable product.
   * @preferredTerm Administrable Product Definition Label
   * @nciCode C215575
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the administrable product.
   * @preferredTerm Administrable Product Definition Description
   * @nciCode C215574
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The physical form in which formulated ingredient(s) are presented in the administrable product.
   * @preferredTerm Administrable Product Dose Form
   * @nciCode C215576
   * @cardinality 1
   * @relationshipType Value
   * @modelName administrableDoseForm
   * @modelRepresentation Attribute
   */
  administrableDoseForm: AliasCode

  /**
   * An indication as to whether the administrable product is obtained from a local or central source.
   * @preferredTerm Administrable Product Sourcing
   * @nciCode C215578
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sourcing
   * @modelRepresentation Attribute
   */
  sourcing?: Code

  /**
   * An indication as to whether the administrable product is an investigational medicinal product or an auxiliary medicinal product.
   * @preferredTerm Administrable Product Product Designation
   * @nciCode C215579
   * @cardinality 1
   * @relationshipType Value
   * @modelName productDesignation
   * @modelRepresentation Attribute
   */
  productDesignation: Code

  /**
   * The pharmacological class of the administrable product.
   * @preferredTerm Administrable Product Pharmacologic Class
   * @nciCode C215577
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName pharmacologicClass
   * @modelRepresentation Attribute
   */
  pharmacologicClass?: Code

  /**
   * A brief written record relevant to the administrable product.
   * @preferredTerm Administrable Product Notes
   * @nciCode C215580
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the AdministrableProduct and AdministrableProductIdentifier classes which provides the set of identifiers related to the administrable product.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName identifiers
   * @modelRepresentation Relationship
   */
  identifiers?: AdministrableProductIdentifier[]

  /**
   * A USDM relationship between the AdministrableProduct and AdministrableProductProperty classes which provides the set of properties related to the administrable product.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName properties
   * @modelRepresentation Relationship
   */
  properties?: AdministrableProductProperty[]

  /**
   * A USDM relationship between the AdministrableProduct and Ingredient classes which provides the set of ingredients related to the administrable product.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName ingredients
   * @modelRepresentation Relationship
   */
  ingredients?: Ingredient[]

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
