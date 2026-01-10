// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { ParameterMap } from "./ParameterMap"

/**
 * A reference source that provides a listing of valid parameter names and values used in syntax template text strings.
 * @preferredTerm Syntax Template Dictionary
 * @nciCode C207597
 * @modifier Concrete
 */
export interface SyntaxTemplateDictionary {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the syntax template dictionary.
   * @preferredTerm Syntax Template Dictionary Name
   * @nciCode C207581
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the syntax template dictionary.
   * @preferredTerm Syntax Template Dictionary Label
   * @nciCode C207580
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the syntax template dictionary.
   * @preferredTerm Syntax Template Dictionary Description
   * @nciCode C207579
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A USDM relationship between the SyntaxTemplateDictionary and ParameterMap classes which identifies the set of parameter maps (parameter map entries) associated with a syntax template dictionary.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName parameterMaps
   * @modelRepresentation Relationship
   */
  parameterMaps: ParameterMap[]

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
