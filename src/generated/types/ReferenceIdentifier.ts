// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { IdentifierAbstract } from "./IdentifierAbstract"
import type { Organization } from "./Organization"

/**
 * A sequence of characters used to identify, name, or characterize the reference.
 * @preferredTerm Reference Identifier
 * @nciCode C82531
 * @modifier Concrete
 * @extends Identifier
 */
export interface ReferenceIdentifier extends IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  id: string

  /**
   * An instance of structured text that represents the reference identifier.
   * @preferredTerm Reference Identifier Text
   * @nciCode C215572
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  text: string

  /**
   * A USDM relationship between the ReferenceIdentifier and Organization classes which provides the details associated with each organization that has assigned the reference identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   * @inheritedFrom Identifier
   */
  scopeId: Organization

  /**
   * A characterization or classification of the reference identifier.
   * @preferredTerm Reference Identifier Type
   * @nciCode C215571
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

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
