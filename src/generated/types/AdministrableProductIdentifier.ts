// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { IdentifierAbstract } from "./IdentifierAbstract"
import type { Organization } from "./Organization"

/**
 * A sequence of characters used to identify, name, or characterize the administrable product.
 * @preferredTerm Administrable Product Identifier
 * @nciCode C215493
 * @modifier Concrete
 * @extends Identifier
 */
export interface AdministrableProductIdentifier extends IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  id: string

  /**
   * An instance of structured text that represents the administrable product.
   * @preferredTerm Administrable Product Identifier Text
   * @nciCode C215581
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  text: string

  /**
   * A USDM relationship between the AdministrableProductIdentifier and Organization class which provides the details associated with which provides the details associated with each organization that has assigned the administrable product identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   * @inheritedFrom Identifier
   */
  scopeId: Organization

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
