// Auto-generated - do not edit

import type { Organization } from "./Organization"

/**
 * One or more characters used to identify, name, or characterize the nature, properties, or contents of a thing.
 * @preferredTerm Identifier
 * @nciCode C25364
 * @modifier Abstract
 * @subClasses AdministrableProductIdentifier, MedicalDeviceIdentifier, ReferenceIdentifier, StudyIdentifier
 */
export interface IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
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
   */
  text: string

  /**
   * A USDM relationship between the AdministrableProductIdentifier and Organization class which provides the details associated with which provides the details associated with each organization that has assigned the administrable product identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   */
  scopeId: (string | Organization)

}
