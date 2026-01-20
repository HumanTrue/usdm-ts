// Auto-generated - do not edit

import type { AdministrableProduct } from "./AdministrableProduct"
import type { AliasCode } from "./AliasCode"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { Duration } from "./Duration"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { MedicalDevice } from "./MedicalDevice"
import type { Quantity } from "./Quantity"

/**
 * The act of dispensing, applying, or tendering a product, agent, or therapy.
 * @preferredTerm Administration
 * @nciCode C25409
 * @modifier Concrete
 */
export interface Administration {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) for the administration of a product, agent, or therapy.
   * @preferredTerm Administration Name
   * @nciCode C207465
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the administration of a product, agent, or therapy.
   * @preferredTerm Administration Label
   * @nciCode C207464
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation for the administration of a product, agent, or therapy.
   * @preferredTerm Administration Description
   * @nciCode C207463
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The value representing the amount of an agent given to an individual at one time.
   * @preferredTerm Administration Dose
   * @nciCode C167190
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName dose
   * @modelRepresentation Attribute
   */
  dose?: Quantity

  /**
   * The number of doses administered per a specific interval.
   * @preferredTerm Dosing Frequency
   * @nciCode C89081
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName frequency
   * @modelRepresentation Attribute
   */
  frequency?: AliasCode

  /**
   * The pathway by which a substance is administered in order to reach the site of action in the body.
   * @preferredTerm Route of Administration
   * @nciCode C38114
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName route
   * @modelRepresentation Attribute
   */
  route?: AliasCode

  /**
   * The amount of time elapsed during the administration of an agent.
   * @preferredTerm Administration Duration
   * @nciCode C69282
   * @cardinality 1
   * @relationshipType Value
   * @modelName duration
   * @modelRepresentation Attribute
   */
  duration: Duration

  /**
   * A brief written record relevant to the administration of the product, agent, or therapy.
   * @preferredTerm Administration Notes
   * @nciCode C215544
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Administration and AdministrableProductDefinition classes which identifies the administrable product associated with the administration of the product, agent, or therapy.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName administrableProduct
   * @modelRepresentation Relationship
   */
  administrableProductId?: (string | AdministrableProduct)

  /**
   * A USDM relationship between the Administration and MedicalDevice classes which identifies the medical device associated with an instance of product, agent, or therapy administration.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName medicalDevice
   * @modelRepresentation Relationship
   */
  medicalDeviceId?: (string | MedicalDevice)

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
