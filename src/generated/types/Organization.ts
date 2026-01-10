// Auto-generated - do not edit

import type { Address } from "./Address"
import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudySite } from "./StudySite"

/**
 * A formalized group of persons or other organizations collected together for a common purpose (such as administrative, legal, political) and the infrastructure to carry out that purpose. (BRIDG)
 * @preferredTerm Organization
 * @nciCode C19711
 * @modifier Concrete
 */
export interface Organization {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the organization.
   * @preferredTerm Organization Name
   * @nciCode C93874
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the organization.
   * @preferredTerm Organization Label
   * @nciCode C207514
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A unique symbol that establishes identity of the organization. (BRIDG)
   * @preferredTerm Organization Identifier
   * @nciCode C93401
   * @cardinality 1
   * @relationshipType Value
   * @modelName identifier
   * @modelRepresentation Attribute
   */
  identifier: string

  /**
   * The name of the organization that provides the identifier for the entity.
   * @preferredTerm Identifier Provider Organization Name
   * @nciCode C188819
   * @cardinality 1
   * @relationshipType Value
   * @modelName identifierScheme
   * @modelRepresentation Attribute
   */
  identifierScheme: string

  /**
   * A characterization or classification of the formalized group of persons or other organizations collected together for a common purpose (such as administrative, legal, political) and the infrastructure to carry out that purpose.
   * @preferredTerm Organization Type
   * @nciCode C188820
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A USDM relationship between the Organization and Address classes which provides the legal address for an organization.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName legalAddress
   * @modelRepresentation Relationship
   */
  legalAddress?: Address

  /**
   * A USDM relationship between the Organization and StudySite classes which identifies the set of study sites managed by the organization.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName managedSites
   * @modelRepresentation Relationship
   */
  managedSites?: StudySite[]

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
