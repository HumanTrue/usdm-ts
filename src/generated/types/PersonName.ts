// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * A word or group of words indicating the identity of a person usually consisting of a first (personal) name and a last (family) name with an optional middle name. In some cultural traditions the family name comes first.
 * @preferredTerm Person Name
 * @nciCode C25191
 * @modifier Concrete
 */
export interface PersonName {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of structured text that represents the person's full name.
   * @preferredTerm Person Name Text
   * @nciCode C217001
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text?: string

  /**
   * A word or group of words indicating a person's last (family) name.
   * @preferredTerm Person Family Name
   * @nciCode C40975
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName familyName
   * @modelRepresentation Attribute
   */
  familyName?: string

  /**
   * A word or group of words indicating a person's first (personal or given) name; the name that precedes the surname.
   * @preferredTerm Person Given Name
   * @nciCode C40974
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName givenNames
   * @modelRepresentation Attribute
   */
  givenNames?: string[]

  /**
   * An affix occurring at the start of the person name string, usually denoting a title or honorific.
   * @preferredTerm Person Name Prefix
   * @nciCode C217002
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName prefixes
   * @modelRepresentation Attribute
   */
  prefixes?: string[]

  /**
   * An affix occurring at the end of the person name, usually denoting educational or professional degrees and certifications, and/or filial rank.
   * @preferredTerm Person Name Suffix
   * @nciCode C217003
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName suffixes
   * @modelRepresentation Attribute
   */
  suffixes?: string[]

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
