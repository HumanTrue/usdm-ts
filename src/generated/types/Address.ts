// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A standardized representation of the location of a person, business, building, or organization. (NCI)
 * @preferredTerm Address
 * @nciCode C25407
 * @modifier Concrete
 */
export interface Address {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A standardized representation of the complete set of components denoting the physical address of the person, business, building, or organization.
   * @preferredTerm Address Full Text
   * @nciCode C201311
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text?: string

  /**
   * The street name and number, building number, apartment or unit number, or post office box number where an entity is physically located.
   * @preferredTerm Address Line
   * @nciCode C25690
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName lines
   * @modelRepresentation Attribute
   */
  lines?: string[]

  /**
   * An administrative or territorial division of a city, town, county, parish, state, country, or other locality based on a shared characteristic.
   * @preferredTerm District
   * @nciCode C176229
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName district
   * @modelRepresentation Attribute
   */
  district?: string

  /**
   * A relatively large and/or densely populated area of human habitation with administrative or legal status that may be specified as a component of a postal address.
   * @preferredTerm City
   * @nciCode C25160
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName city
   * @modelRepresentation Attribute
   */
  city?: string

  /**
   * An alphanumeric code assigned to a mail delivery area.
   * @preferredTerm Postal Code
   * @nciCode C25621
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName postalCode
   * @modelRepresentation Attribute
   */
  postalCode?: string

  /**
   * A sub-division of a country that forms part of a federal union. States are usually, but not always, more autonomous than provinces and may have different laws from the central government.
   * @preferredTerm State
   * @nciCode C87194
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName state
   * @modelRepresentation Attribute
   */
  state?: string

  /**
   * A sovereign nation occupying a distinct territory and ruled by an autonomous government.
   * @preferredTerm Country
   * @nciCode C25464
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName country
   * @modelRepresentation Attribute
   */
  country?: Code

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
