// Auto-generated - do not edit

import type { Code } from "./Code"
import type { ExtensionAttribute } from "./ExtensionAttribute"

/**
 * The location at which a study investigator conducts study activities.
 * @preferredTerm Study Site
 * @nciCode C80403
 * @modifier Concrete
 */
export interface StudySite {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study site.
   * @preferredTerm Study Site Name
   * @nciCode C207566
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study site.
   * @preferredTerm Study Site Label
   * @nciCode C207565
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study site.
   * @preferredTerm Study Site Description
   * @nciCode C207564
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The country in which the study site is located.
   * @preferredTerm Country of Study Site
   * @nciCode C170990
   * @cardinality 1
   * @relationshipType Value
   * @modelName country
   * @modelRepresentation Attribute
   */
  country: Code

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
