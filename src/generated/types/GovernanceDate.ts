// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { GeographicScope } from "./GeographicScope"

/**
 * Any of the dates associated with event milestones within a clinical study's oversight and management framework.
 * @preferredTerm Study Governance Date
 * @nciCode C207595
 * @modifier Concrete
 */
export interface GovernanceDate {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study governance date
   * @preferredTerm Study Governance Date Name
   * @nciCode C207499
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study governance date.
   * @preferredTerm Study Governance Date Label
   * @nciCode C207498
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study governance date.
   * @preferredTerm Study Governance Date Description
   * @nciCode C207497
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study governance date.
   * @preferredTerm Study Governance Date Type
   * @nciCode C207496
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The information contained in the date field.
   * @preferredTerm Study Governance Date Value
   * @nciCode C207500
   * @cardinality 1
   * @relationshipType Value
   * @modelName dateValue
   * @modelRepresentation Attribute
   */
  dateValue: Date

  /**
   * A USDM relationship between the GovernanceDate and GeographicScope classes which identifies the set of geographic scopes associated with the governance date.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName geographicScopes
   * @modelRepresentation Relationship
   */
  geographicScopes: GeographicScope[]

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
