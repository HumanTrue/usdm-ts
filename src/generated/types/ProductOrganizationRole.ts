// Auto-generated - do not edit

import type { AdministrableProduct } from "./AdministrableProduct"
import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { MedicalDevice } from "./MedicalDevice"
import type { Organization } from "./Organization"

/**
 * A designation that identifies the function of an organization within the context of the product.
 * @preferredTerm Product Organization Role
 * @nciCode C215502
 * @modifier Concrete
 */
export interface ProductOrganizationRole {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the product organization role.
   * @preferredTerm Product Organization Role Name
   * @nciCode C215622
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the product organization role.
   * @preferredTerm Product Organization Role Label
   * @nciCode C215624
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the product organization role.
   * @preferredTerm Product Organization Role Description
   * @nciCode C215623
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the product organization role.
   * @preferredTerm Product Organization Role Code
   * @nciCode C215625
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

  /**
   * A USDM relationship between the ProductOrganizationRole and either the AdministrableProduct or MedicalDevice class that identifies the administrable product or medical device to which the product organization role applies.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToIds?: (AdministrableProduct | MedicalDevice)[]

  /**
   * A USDM relationship between the ProductOrganizationRole and Organization classes which identifies the organization associated with the product organization role.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName organization
   * @modelRepresentation Relationship
   */
  organizationId: Organization

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
