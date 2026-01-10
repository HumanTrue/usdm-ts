// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Organization } from "./Organization"
import type { PersonName } from "./PersonName"

/**
 * An individual person who is allotted or appointed to a particular role, function, or other entity.
 * @preferredTerm Assigned Person
 * @nciCode C215496
 * @modifier Concrete
 */
export interface AssignedPerson {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the assigned person.
   * @preferredTerm Assigned Person Name
   * @nciCode C215596
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the assigned person.
   * @preferredTerm Assigned Person Label
   * @nciCode C215598
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the assigned person.
   * @preferredTerm Assigned Person Description
   * @nciCode C215597
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A word or group of words indicating the identity of an assigned person usually consisting of a first (personal) name and a last (family) name with an optional middle name. In some cultural traditions the family name comes first.
   * @preferredTerm Assigned Person Person Name
   * @nciCode C216993
   * @cardinality 1
   * @relationshipType Value
   * @modelName personName
   * @modelRepresentation Attribute
   */
  personName: PersonName

  /**
   * An identifying designation related to the assigned person's occupation.
   * @preferredTerm Assigned Person Job Title
   * @nciCode C215599
   * @cardinality 1
   * @relationshipType Value
   * @modelName jobTitle
   * @modelRepresentation Attribute
   */
  jobTitle: string

  /**
   * A USDM relationship between the AssignedPerson and Organization classes that identifies that organization to which the assigned person belongs.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName organization
   * @modelRepresentation Relationship
   */
  organizationId?: Organization

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
