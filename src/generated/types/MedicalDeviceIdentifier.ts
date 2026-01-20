// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { IdentifierAbstract } from "./IdentifierAbstract"
import type { Organization } from "./Organization"

/**
 * A sequence of characters used to identify, name, or characterize the medical device.
 * @preferredTerm Medical Device Identifier
 * @nciCode C215501
 * @modifier Concrete
 * @extends Identifier
 */
export interface MedicalDeviceIdentifier extends IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  id: string

  /**
   * An instance of structured text that represents the medical device identifier.
   * @preferredTerm Medical Device Identifier Text
   * @nciCode C215620
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  text: string

  /**
   * A USDM relationship between the MedicalDeviceIdentifier and Organization classes which provides the details associated with each organization that has assigned the identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   * @inheritedFrom Identifier
   */
  scopeId: (string | Organization)

  /**
   * A characterization or classification of the medical device identifier.
   * @preferredTerm Medical Device Identifier Type
   * @nciCode C215621
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
