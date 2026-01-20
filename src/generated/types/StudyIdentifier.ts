// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { IdentifierAbstract } from "./IdentifierAbstract"
import type { Organization } from "./Organization"

/**
 * A sequence of characters used to identify, name, or characterize the study.
 * @preferredTerm Study Identifier
 * @nciCode C83082
 * @modifier Concrete
 * @extends Identifier
 */
export interface StudyIdentifier extends IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  id: string

  /**
   * An instance of structured text that represents the study identifier.
   * @preferredTerm Study Identifier Text
   * @nciCode C215507
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  text: string

  /**
   * A USDM relationship between the StudyIdentifier and Organization classes which provides the details associated with each organization that has assigned the study identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   * @inheritedFrom Identifier
   */
  scopeId: (string | Organization)

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
