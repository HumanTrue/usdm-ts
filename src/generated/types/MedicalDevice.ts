// Auto-generated - do not edit

import type { AdministrableProduct } from "./AdministrableProduct"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { MedicalDeviceIdentifier } from "./MedicalDeviceIdentifier"

/**
 * Any instrument, apparatus, implement, machine, appliance, implant, reagent for in vitro use, software, material or other similar or related article, intended by the manufacturer to be used, alone or in combination for, one or more specific medical purpose(s). [After REGULATION (EU) 2017/745 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 5 April 2017 on medical devices]
 * @preferredTerm Medical Device
 * @nciCode C16830
 * @modifier Concrete
 */
export interface MedicalDevice {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the medical device.
   * @preferredTerm Medical Device Name
   * @nciCode C215614
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the medical device.
   * @preferredTerm Medical Device Label
   * @nciCode C215616
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the medical device.
   * @preferredTerm Medical Device Description
   * @nciCode C215615
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A form or variant of hardware; one of a sequence of copies of the physical components from which a computer is constructed, each incorporating new modifications.
   * @preferredTerm Hardware Version
   * @nciCode C215617
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName hardwareVersion
   * @modelRepresentation Attribute
   */
  hardwareVersion?: string

  /**
   * A form or variant of software; one of a sequence of copies of a software program, each incorporating new modifications. (NCI)
   * @preferredTerm Software Version
   * @nciCode C111093
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName softwareVersion
   * @modelRepresentation Attribute
   */
  softwareVersion?: string

  /**
   * An indication as to whether the medical device is obtained from a local or central source.
   * @preferredTerm Medical Device Sourcing
   * @nciCode C215619
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sourcing
   * @modelRepresentation Attribute
   */
  sourcing?: Code

  /**
   * A brief written record relevant to the medical device.
   * @preferredTerm Medical Device Notes
   * @nciCode C215618
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the MedicalDevice and AdministrableProduct classes which identifies the administrable product that is an integral component of the medical device.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName embeddedProduct
   * @modelRepresentation Relationship
   */
  embeddedProductId?: (string | AdministrableProduct)

  /**
   * A USDM relationship between the MedicalDevice and MedicalDeviceIdentifier classes which provides the set of identifiers related to the medical device.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName identifiers
   * @modelRepresentation Relationship
   */
  identifiers?: MedicalDeviceIdentifier[]

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
