// Auto-generated TypeScript interfaces from schema
// Generated on: 2026-01-09T01:49:35.134Z

/**
 * The total amount (number), or the limits (minimum and maximum) of a variation.
 * @preferredTerm Quantity or Range
 * @nciCode C217000
 * @modifier Abstract
 * @subClasses Quantity, Range
 */
export interface QuantityRangeAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

}

/**
 * An alternative symbol or combination of symbols which is assigned to the members of a collection.
 * @preferredTerm Alias Code
 * @nciCode C201344
 * @modifier Concrete
 */
export interface AliasCode {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A combination of symbols that is used to represent the standard code.
   * @preferredTerm Standard Code
   * @nciCode C215528
   * @cardinality 1
   * @relationshipType Value
   * @modelName standardCode
   * @modelRepresentation Attribute
   */
  standardCode: Code

  /**
   * Alternative combinations of symbols used to represent aliases or alternatives to the standard code.
   * @preferredTerm Standard Code Aliases
   * @nciCode C215529
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName standardCodeAliases
   * @modelRepresentation Attribute
   */
  standardCodeAliases?: Code[]

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

/**
 * How much there is of something that can be measured; the total amount or number.
 * @preferredTerm Quantity
 * @nciCode C25256
 * @modifier Concrete
 * @extends QuantityRange
 */
export interface Quantity extends QuantityRangeAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom QuantityRange
   */
  id: string

  /**
   * A numerical quantity measured or assigned or computed.
   * @preferredTerm Quantity Value
   * @nciCode C25712
   * @cardinality 1
   * @relationshipType Value
   * @modelName value
   * @modelRepresentation Attribute
   */
  value: number

  /**
   * The type of unit of measure being used to express a quantity.
   * @preferredTerm Quantity Unit
   * @nciCode C44258
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName unit
   * @modelRepresentation Attribute
   */
  unit?: AliasCode

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

/**
 * An expression that defines the lower and upper limits of a variation.
 * @preferredTerm Range
 * @nciCode C38013
 * @modifier Concrete
 * @extends QuantityRange
 */
export interface Range extends QuantityRangeAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom QuantityRange
   */
  id: string

  /**
   * The smallest value in quantity or degree in a set of values.
   * @preferredTerm Minimum Value
   * @nciCode C25570
   * @cardinality 1
   * @relationshipType Value
   * @modelName minValue
   * @modelRepresentation Attribute
   */
  minValue: Quantity

  /**
   * The largest value in quantity or degree in a set of values.
   * @preferredTerm Maximum Value
   * @nciCode C25564
   * @cardinality 1
   * @relationshipType Value
   * @modelName maxValue
   * @modelRepresentation Attribute
   */
  maxValue: Quantity

  /**
   * An indication as to whether the value range is almost, but not quite, exact.
   * @preferredTerm Value Range is Approximate Indicator
   * @nciCode C207525
   * @cardinality 1
   * @relationshipType Value
   * @modelName isApproximate
   * @modelRepresentation Attribute
   */
  isApproximate: boolean

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

/**
 * @modifier Concrete
 */
export interface ExtensionClass {
  /**
   * @cardinality 1
   * @relationshipType Value
   */
  id: string

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  url: string

  /**
   * @cardinality 1..*
   * @relationshipType Value
   */
  extensionAttributes: ExtensionAttribute[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}

/**
 * @modifier Concrete
 */
export interface ExtensionAttribute {
  /**
   * @cardinality 1
   * @relationshipType Value
   */
  id: string

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  url: string

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueString?: string

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueBoolean?: boolean

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueInteger?: number

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueId?: string

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueQuantity?: Quantity

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueRange?: Range

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueCode?: Code

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueAliasCode?: AliasCode

  /**
   * @cardinality 0..1
   * @relationshipType Value
   */
  valueExtensionClass?: ExtensionClass

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

/**
 * A symbol or combination of symbols which is assigned to the members of a collection.
 * @preferredTerm Code
 * @nciCode C25162
 * @modifier Concrete
 */
export interface Code {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal value of a code.
   * @preferredTerm Code Value
   * @nciCode C188858
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: string

  /**
   * The literal identifier (i.e., distinctive designation) of the system used to assign and/or manage codes.
   * @preferredTerm Code System Name
   * @nciCode C188859
   * @cardinality 1
   * @relationshipType Value
   * @modelName codeSystem
   * @modelRepresentation Attribute
   */
  codeSystem: string

  /**
   * The version of the code system.
   * @preferredTerm Code System Version
   * @nciCode C188868
   * @cardinality 1
   * @relationshipType Value
   * @modelName codeSystemVersion
   * @modelRepresentation Attribute
   */
  codeSystemVersion: string

  /**
   * Standardized or dictionary-derived human readable text associated with a code.
   * @preferredTerm Decode
   * @nciCode C188861
   * @cardinality 1
   * @relationshipType Value
   * @modelName decode
   * @modelRepresentation Attribute
   */
  decode: string

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

/**
 * An explanatory or critical comment, or other in-context information (e.g., pattern, motif, link), that has been associated with data or other types of information.
 * @preferredTerm Comment Annotation
 * @nciCode C44272
 * @modifier Concrete
 */
export interface CommentAnnotation {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the comment annotation.
   * @preferredTerm Comment Annotation Text
   * @nciCode C215555
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * A symbol or combination of symbols which is assigned to the comment annotation.
   * @preferredTerm Comment Annotation Code
   * @nciCode C215556
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

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

/**
 * A set of letters that are drawn from a word or from a sequence of words and that are used for brevity in place of the full word or phrase. (CDISC Glossary)
 * @preferredTerm Abbreviation
 * @nciCode C42610
 * @modifier Concrete
 */
export interface Abbreviation {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal value of an instance of unstructured text that is used as the abbreviation.
   * @preferredTerm Text Abbreviation Value
   * @nciCode C215487
   * @cardinality 1
   * @relationshipType Value
   * @modelName abbreviatedText
   * @modelRepresentation Attribute
   */
  abbreviatedText: string

  /**
   * The full literal representation of the abbreviation.
   * @preferredTerm Abbreviation Long Name
   * @nciCode C215569
   * @cardinality 1
   * @relationshipType Value
   * @modelName expandedText
   * @modelRepresentation Attribute
   */
  expandedText: string

  /**
   * A brief written record relevant to the abbreviation.
   * @preferredTerm Abbreviation Notes
   * @nciCode C215570
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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

/**
 * The length of time during which something continues.
 * @preferredTerm Duration
 * @nciCode C25330
 * @modifier Concrete
 */
export interface Duration {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the event duration.
   * @preferredTerm Duration Text
   * @nciCode C217008
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text?: string

  /**
   * The value representing the amount of time over which the event occurs.
   * @preferredTerm Duration Quantity Value
   * @nciCode C217011
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName quantity
   * @modelRepresentation Attribute
   */
  quantity?: QuantityRange

  /**
   * An indication as to whether the event duration is planned to vary within and/or across subjects.
   * @preferredTerm Duration Will Vary Indicator
   * @nciCode C217009
   * @cardinality 1
   * @relationshipType Value
   * @modelName durationWillVary
   * @modelRepresentation Attribute
   */
  durationWillVary: boolean

  /**
   * The explanation for why the event duration will vary within and/or across subjects.
   * @preferredTerm Reason Duration Will Vary
   * @nciCode C217010
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName reasonDurationWillVary
   * @modelRepresentation Attribute
   */
  reasonDurationWillVary?: string

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

/**
 * One or more characters used to identify, name, or characterize the nature, properties, or contents of a thing.
 * @preferredTerm Identifier
 * @nciCode C25364
 * @modifier Abstract
 * @subClasses AdministrableProductIdentifier, MedicalDeviceIdentifier, ReferenceIdentifier, StudyIdentifier
 */
export interface IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of structured text that represents the administrable product.
   * @preferredTerm Administrable Product Identifier Text
   * @nciCode C215581
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * A USDM relationship between the AdministrableProductIdentifier and Organization class which provides the details associated with which provides the details associated with each organization that has assigned the administrable product identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   */
  scopeId: Organization

}

/**
 * A sequence of characters used to identify, name, or characterize the administrable product.
 * @preferredTerm Administrable Product Identifier
 * @nciCode C215493
 * @modifier Concrete
 * @extends Identifier
 */
export interface AdministrableProductIdentifier extends IdentifierAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  id: string

  /**
   * An instance of structured text that represents the administrable product.
   * @preferredTerm Administrable Product Identifier Text
   * @nciCode C215581
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom Identifier
   */
  text: string

  /**
   * A USDM relationship between the AdministrableProductIdentifier and Organization class which provides the details associated with which provides the details associated with each organization that has assigned the administrable product identifier.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName scope
   * @modelRepresentation Relationship
   * @inheritedFrom Identifier
   */
  scopeId: Organization

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

/**
 * A characteristic from a set of characteristics used to define an administrable product.
 * @preferredTerm Administrable Product Property
 * @nciCode C215494
 * @modifier Concrete
 */
export interface AdministrableProductProperty {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the administrable product property.
   * @preferredTerm Administrable Product Property Name
   * @nciCode C215582
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * A characterization or classification of the administrable product property.
   * @preferredTerm Administrable Product Property Type
   * @nciCode C215585
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * An instance of structured text that represents the administrable product property.
   * @preferredTerm Administrable Product Property Text
   * @nciCode C215583
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * The numeric value associated with an administrable product property.
   * @preferredTerm Administrable Product Property Quantity Value
   * @nciCode C215584
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName quantity
   * @modelRepresentation Attribute
   */
  quantity?: Quantity

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

/**
 * The content of an substance expressed quantitatively per dosage unit, per unit of volume, or per unit of weight, according to the pharmaceutical dose form of the product.
 * @preferredTerm Substance Strength
 * @nciCode C215495
 * @modifier Concrete
 */
export interface Strength {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the substance strength.
   * @preferredTerm Substance Strength Name
   * @nciCode C215590
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the substance strength.
   * @preferredTerm Substance Strength Label
   * @nciCode C215592
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the substance strength.
   * @preferredTerm Substance Strength Description
   * @nciCode C215591
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The dividend of a fraction.
   * @preferredTerm Numerator
   * @nciCode C80490
   * @cardinality 1
   * @relationshipType Value
   * @modelName numerator
   * @modelRepresentation Attribute
   */
  numerator: QuantityRange

  /**
   * The divisor of a fraction.
   * @preferredTerm Denominator
   * @nciCode C80489
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName denominator
   * @modelRepresentation Attribute
   */
  denominator?: Quantity

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

/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 * @preferredTerm Substance
 * @nciCode C45306
 * @modifier Concrete
 */
export interface Substance {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the substance.
   * @preferredTerm Substance Name
   * @nciCode C215586
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the substance.
   * @preferredTerm Substance Label
   * @nciCode C215588
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the substance.
   * @preferredTerm Substance Description
   * @nciCode C215587
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the substance.
   * @preferredTerm Substance Code
   * @nciCode C215589
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

  /**
   * A USDM relationship between the Substance and Strength class which provides the values of the strengths of the substance.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName strengths
   * @modelRepresentation Relationship
   */
  strengths: Strength[]

  /**
   * A USDM relationship within the Substance class that identifies the association between two substances, one of which is used as a reference for the other.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName referenceSubstance
   * @modelRepresentation Relationship
   */
  referenceSubstance?: Substance

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

/**
 * Any component that constitutes a part of a compounded substance or mixture.
 * @preferredTerm Ingredient
 * @nciCode C51981
 * @modifier Concrete
 */
export interface Ingredient {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The intended use of the ingredient within the context of the compounded substance or mixture.
   * @preferredTerm Ingredient Role
   * @nciCode C215595
   * @cardinality 1
   * @relationshipType Value
   * @modelName role
   * @modelRepresentation Attribute
   */
  role: Code

  /**
   * A USDM relationship between the Ingredient and Substance classes that identifies the substance associated with the ingredient.
   * @cardinality 1
   * @relationshipType Value
   * @modelName substance
   * @modelRepresentation Relationship
   */
  substance: Substance

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

/**
 * Any study product that is formulated and presented in the form that is suitable for administration to a study participant.
 * @preferredTerm Administrable Product
 * @nciCode C215492
 * @modifier Concrete
 */
export interface AdministrableProduct {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the administrable product.
   * @preferredTerm Administrable Product Definition Name
   * @nciCode C215573
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the administrable product.
   * @preferredTerm Administrable Product Definition Label
   * @nciCode C215575
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the administrable product.
   * @preferredTerm Administrable Product Definition Description
   * @nciCode C215574
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The physical form in which formulated ingredient(s) are presented in the administrable product.
   * @preferredTerm Administrable Product Dose Form
   * @nciCode C215576
   * @cardinality 1
   * @relationshipType Value
   * @modelName administrableDoseForm
   * @modelRepresentation Attribute
   */
  administrableDoseForm: AliasCode

  /**
   * An indication as to whether the administrable product is obtained from a local or central source.
   * @preferredTerm Administrable Product Sourcing
   * @nciCode C215578
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sourcing
   * @modelRepresentation Attribute
   */
  sourcing?: Code

  /**
   * An indication as to whether the administrable product is an investigational medicinal product or an auxiliary medicinal product.
   * @preferredTerm Administrable Product Product Designation
   * @nciCode C215579
   * @cardinality 1
   * @relationshipType Value
   * @modelName productDesignation
   * @modelRepresentation Attribute
   */
  productDesignation: Code

  /**
   * The pharmacological class of the administrable product.
   * @preferredTerm Administrable Product Pharmacologic Class
   * @nciCode C215577
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName pharmacologicClass
   * @modelRepresentation Attribute
   */
  pharmacologicClass?: Code

  /**
   * A brief written record relevant to the administrable product.
   * @preferredTerm Administrable Product Notes
   * @nciCode C215580
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the AdministrableProduct and AdministrableProductIdentifier classes which provides the set of identifiers related to the administrable product.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName identifiers
   * @modelRepresentation Relationship
   */
  identifiers?: AdministrableProductIdentifier[]

  /**
   * A USDM relationship between the AdministrableProduct and AdministrableProductProperty classes which provides the set of properties related to the administrable product.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName properties
   * @modelRepresentation Relationship
   */
  properties?: AdministrableProductProperty[]

  /**
   * A USDM relationship between the AdministrableProduct and Ingredient classes which provides the set of ingredients related to the administrable product.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName ingredients
   * @modelRepresentation Relationship
   */
  ingredients?: Ingredient[]

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
  scopeId: Organization

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
  embeddedProductId?: AdministrableProduct

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

/**
 * The act of dispensing, applying, or tendering a product, agent, or therapy.
 * @preferredTerm Administration
 * @nciCode C25409
 * @modifier Concrete
 */
export interface Administration {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) for the administration of a product, agent, or therapy.
   * @preferredTerm Administration Name
   * @nciCode C207465
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the administration of a product, agent, or therapy.
   * @preferredTerm Administration Label
   * @nciCode C207464
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation for the administration of a product, agent, or therapy.
   * @preferredTerm Administration Description
   * @nciCode C207463
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The value representing the amount of an agent given to an individual at one time.
   * @preferredTerm Administration Dose
   * @nciCode C167190
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName dose
   * @modelRepresentation Attribute
   */
  dose?: Quantity

  /**
   * The number of doses administered per a specific interval.
   * @preferredTerm Dosing Frequency
   * @nciCode C89081
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName frequency
   * @modelRepresentation Attribute
   */
  frequency?: AliasCode

  /**
   * The pathway by which a substance is administered in order to reach the site of action in the body.
   * @preferredTerm Route of Administration
   * @nciCode C38114
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName route
   * @modelRepresentation Attribute
   */
  route?: AliasCode

  /**
   * The amount of time elapsed during the administration of an agent.
   * @preferredTerm Administration Duration
   * @nciCode C69282
   * @cardinality 1
   * @relationshipType Value
   * @modelName duration
   * @modelRepresentation Attribute
   */
  duration: Duration

  /**
   * A brief written record relevant to the administration of the product, agent, or therapy.
   * @preferredTerm Administration Notes
   * @nciCode C215544
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Administration and AdministrableProductDefinition classes which identifies the administrable product associated with the administration of the product, agent, or therapy.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName administrableProduct
   * @modelRepresentation Relationship
   */
  administrableProductId?: AdministrableProduct

  /**
   * A USDM relationship between the Administration and MedicalDevice classes which identifies the medical device associated with an instance of product, agent, or therapy administration.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName medicalDevice
   * @modelRepresentation Relationship
   */
  medicalDeviceId?: MedicalDevice

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

/**
 * Any agent, device, or procedure being tested or used as a reference or comparator in the conduct of a clinical trial.
 * @preferredTerm Study Intervention
 * @nciCode C207649
 * @modifier Concrete
 */
export interface StudyIntervention {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study intervention.
   * @preferredTerm Study Intervention Name
   * @nciCode C207558
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study intervention.
   * @preferredTerm Study Intervention Label
   * @nciCode C207556
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study intervention.
   * @preferredTerm Study Intervention Description
   * @nciCode C207647
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The intended use of the trial intervention within the context of the study design.
   * @preferredTerm Study Intervention Role
   * @nciCode C207560
   * @cardinality 1
   * @relationshipType Value
   * @modelName role
   * @modelRepresentation Attribute
   */
  role: Code

  /**
   * The kind of product or procedure studied in a trial.
   * @preferredTerm Study Intervention Type
   * @nciCode C98747
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A symbol or combination of symbols which is assigned to the study intervention.
   * @preferredTerm Study Intervention Code
   * @nciCode C207648
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

  /**
   * The value representing the minimum amount of time required to meet the criteria for response to study intervention.
   * @preferredTerm Study Intervention Minimum Response Duration
   * @nciCode C207557
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName minimumResponseDuration
   * @modelRepresentation Attribute
   */
  minimumResponseDuration?: Quantity

  /**
   * A brief written record relevant to the study intervention.
   * @preferredTerm Study Intervention Notes
   * @nciCode C215543
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyIntervention and AgentAdministration classes which identifies the set of agent administrations associated with the study intervention.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName administrations
   * @modelRepresentation Relationship
   */
  administrations?: Administration[]

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

/**
 * Any activity performed by manual and/or instrumental means for the purpose of diagnosis, assessment, therapy, prevention, or palliative care.
 * @preferredTerm Procedure
 * @nciCode C98769
 * @modifier Concrete
 */
export interface Procedure {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the procedure.
   * @preferredTerm Procedure Name
   * @nciCode C201325
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the procedure.
   * @preferredTerm Procedure Label
   * @nciCode C207524
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the procedure.
   * @preferredTerm Procedure Description
   * @nciCode C201324
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study procedure.
   * @preferredTerm Procedure Type
   * @nciCode C188848
   * @cardinality 1
   * @relationshipType Value
   * @modelName procedureType
   * @modelRepresentation Attribute
   */
  procedureType: string

  /**
   * A symbol or combination of symbols which is assigned to medical procedure.
   * @preferredTerm Procedure Code
   * @nciCode C154626
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

  /**
   * A brief written record relevant to the procedure.
   * @preferredTerm Procedure Notes
   * @nciCode C215520
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Procedure and StudyInterventionclasses which provides the details associated with an instance of an intervention performed during the conduct of a procedure.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName studyIntervention
   * @modelRepresentation Relationship
   */
  studyInterventionId?: StudyIntervention

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

/**
 * A symbol or combination of symbols representing the response to the question.
 * @preferredTerm Response Code
 * @nciCode C201347
 * @modifier Concrete
 */
export interface ResponseCode {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the response code.
   * @preferredTerm Response Code Name
   * @nciCode C216998
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the response code.
   * @preferredTerm Response Code Label
   * @nciCode C216999
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * An indication as to whether the response code is activated for use within a given usage context.
   * @preferredTerm Response Code Enabled Indicator
   * @nciCode C201330
   * @cardinality 1
   * @relationshipType Value
   * @modelName isEnabled
   * @modelRepresentation Attribute
   */
  isEnabled: boolean

  /**
   * The literal value of a response code.
   * @preferredTerm Response Code Value
   * @nciCode C217013
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

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

/**
 * A characteristic from a set of characteristics used to define a biomedical concept.
 * @preferredTerm Biomedical Concept Property
 * @nciCode C202493
 * @modifier Concrete
 */
export interface BiomedicalConceptProperty {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept property.
   * @preferredTerm Biomedical Concept Property Name
   * @nciCode C202494
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept property.
   * @preferredTerm Biomedical Concept Property Label
   * @nciCode C207472
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * An indication as to whether the biomedical concept property is required.
   * @preferredTerm Biomedical Concept Property Required Indicator
   * @nciCode C202495
   * @cardinality 1
   * @relationshipType Value
   * @modelName isRequired
   * @modelRepresentation Attribute
   */
  isRequired: boolean

  /**
   * An indication as to whether the biomedical concept property is activated for use within a given usage context for a biomedical concept.
   * @preferredTerm Biomedical Concept Property Enabled Indicator
   * @nciCode C202496
   * @cardinality 1
   * @relationshipType Value
   * @modelName isEnabled
   * @modelRepresentation Attribute
   */
  isEnabled: boolean

  /**
   * The structural format of the biomedical concept property response value. The datatype is carried in the attribute and influences the set of allowable values the attribute may assume. (After HL7)
   * @preferredTerm Biomedical Concept Property Response Data Type
   * @nciCode C201319
   * @cardinality 1
   * @relationshipType Value
   * @modelName datatype
   * @modelRepresentation Attribute
   */
  datatype: string

  /**
   * A concept unique identifier assigned to a biomedical concept property that points to the meaning of that biomedical concept property.
   * @preferredTerm Biomedical Concept Property Concept Code
   * @nciCode C201318
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: AliasCode

  /**
   * A brief written record relevant to the biomedical concept property.
   * @preferredTerm Biomedical Concept Property Notes
   * @nciCode C215531
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the BiomedicalConceptProperty and ResponseCode classes which identifies the set of response codes associated with the biomedical concept property.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName responseCodes
   * @modelRepresentation Relationship
   */
  responseCodes?: ResponseCode[]

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

/**
 * A unit of biomedical knowledge created from a unique combination of characteristics that include implementation details like variables and terminologies, used as building blocks for standardized, hierarchically structured clinical research information.
 * @preferredTerm Biomedical Concept
 * @nciCode C201345
 * @modifier Concrete
 */
export interface BiomedicalConcept {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept.
   * @preferredTerm Biomedical Concept Name
   * @nciCode C201312
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept.
   * @preferredTerm Biomedical Concept Label
   * @nciCode C207470
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A word or an expression that serves as a figurative, symbolic, or exact substitute for a biomedical concept, and which has the same meaning.
   * @preferredTerm Biomedical Concept Synonym
   * @nciCode C201314
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName synonyms
   * @modelRepresentation Attribute
   */
  synonyms?: string[]

  /**
   * A citation to an authoritative source for a biomedical concept.
   * @preferredTerm Biomedical Concept Reference
   * @nciCode C201313
   * @cardinality 1
   * @relationshipType Value
   * @modelName reference
   * @modelRepresentation Attribute
   */
  reference: string

  /**
   * A concept unique identifier assigned to a biomedical concept that points to the meaning of that biomedical concept.
   * @preferredTerm Biomedical Concept Concept Code
   * @nciCode C207469
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: AliasCode

  /**
   * A brief written record relevant to the biomedical concept.
   * @preferredTerm Biomedical Concept Notes
   * @nciCode C215530
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the BiomedicalConcept and BiomedicalConceptProperty classes which identifies the set of properties associated with the biomedical concept.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName properties
   * @modelRepresentation Relationship
   */
  properties?: BiomedicalConceptProperty[]

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

/**
 * A named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
 * @preferredTerm Study Epoch
 * @nciCode C71738
 * @modifier Concrete
 */
export interface StudyEpoch {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study epoch, i.e., the named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
   * @preferredTerm Study Epoch Name
   * @nciCode C93825
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study epoch.
   * @preferredTerm Study Epoch Label
   * @nciCode C207555
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study epoch.
   * @preferredTerm Study Epoch Description
   * @nciCode C93824
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study epoch, i.e., the named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
   * @preferredTerm Study Epoch Type
   * @nciCode C188830
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A brief written record relevant to the study epoch.
   * @preferredTerm Study Epoch Notes
   * @nciCode C215516
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship within the StudyEpoch class which identifies the study epoch that chronologically precedes the current study epoch.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: StudyEpoch

  /**
   * A USDM relationship within the StudyEpoch class which identifies the study epoch that chronologically follows the current study epoch.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: StudyEpoch

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

/**
 * A scheduled occurrence of a temporal event.
 * @preferredTerm Scheduled Instance
 * @nciCode C201299
 * @modifier Abstract
 * @subClasses ScheduledActivityInstance, ScheduledDecisionInstance
 */
export interface ScheduledInstanceAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Name
   * @nciCode C207533
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Label
   * @nciCode C207532
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Description
   * @nciCode C207531
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A USDM relationship within the ScheduledActivityInstance class which identifies the default condition within a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName defaultCondition
   * @modelRepresentation Relationship
   */
  defaultConditionId?: ScheduledInstance

  /**
   * A USDM relationship between the ScheduledActivityInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   */
  epochId?: StudyEpoch

}

/**
 * To go out of or leave the schedule timeline.
 * @preferredTerm Schedule Timeline Exit
 * @nciCode C201349
 * @modifier Concrete
 */
export interface ScheduleTimelineExit {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

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

/**
 * The chronological relationship between temporal events.
 * @preferredTerm Timing
 * @nciCode C80484
 * @modifier Concrete
 */
export interface Timing {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the timing.
   * @preferredTerm Timing Name
   * @nciCode C207584
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the timing.
   * @preferredTerm Timing Label
   * @nciCode C207583
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the chronological relationship between temporal events.
   * @preferredTerm Timing Description
   * @nciCode C164648
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the chronological relationship between temporal events.
   * @preferredTerm Timing Type
   * @nciCode C201298
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The name of the reference event used to define the temporal relationship with another event.
   * @preferredTerm Timing Relative To From
   * @nciCode C201297
   * @cardinality 1
   * @relationshipType Value
   * @modelName relativeToFrom
   * @modelRepresentation Attribute
   */
  relativeToFrom: Code

  /**
   * The temporal value of the chronological relationship between temporal events.
   * @preferredTerm Timing Value
   * @nciCode C201341
   * @cardinality 1
   * @relationshipType Value
   * @modelName value
   * @modelRepresentation Attribute
   */
  value: string

  /**
   * The short descriptive designation for the timing value.
   * @preferredTerm Timing Value Label
   * @nciCode C207585
   * @cardinality 1
   * @relationshipType Value
   * @modelName valueLabel
   * @modelRepresentation Attribute
   */
  valueLabel: string

  /**
   * The short descriptive designation for a time period, or other type of interval, during which a temporal event may be achieved, obtained, or observed.
   * @preferredTerm Timing Window Label
   * @nciCode C207586
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName windowLabel
   * @modelRepresentation Attribute
   */
  windowLabel?: string

  /**
   * The earliest chronological value of an allowable period of time during which a temporal event takes place.
   * @preferredTerm Timing Window, Lower
   * @nciCode C201342
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName windowLower
   * @modelRepresentation Attribute
   */
  windowLower?: string

  /**
   * The latest chronological value of an allowable period of time during which a temporal event takes place.
   * @preferredTerm Timing Window, Upper
   * @nciCode C201343
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName windowUpper
   * @modelRepresentation Attribute
   */
  windowUpper?: string

  /**
   * A USDM relationship between the Timing and ScheduledInstance classes which identifies the scheduled instance (e.g., scheduled activity instances or scheduled decision instances) to which the timing is relative to.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName relativeToScheduledInstance
   * @modelRepresentation Relationship
   */
  relativeToScheduledInstanceId?: ScheduledInstance

  /**
   * A USDM relationship between the Timing and ScheduledInstance classes which identifies the scheduled instance (e.g., scheduled activity instances or scheduled decision instances) to which the timing applies.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName relativeFromScheduledInstance
   * @modelRepresentation Relationship
   */
  relativeFromScheduledInstanceId: ScheduledInstance

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

/**
 * A chronological schedule of planned temporal events.
 * @preferredTerm Schedule Timeline
 * @nciCode C201348
 * @modifier Concrete
 */
export interface ScheduleTimeline {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the schedule timeline.
   * @preferredTerm Schedule Timeline Name
   * @nciCode C201334
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the schedule timeline.
   * @preferredTerm Schedule Timeline Label
   * @nciCode C207530
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the schedule timeline.
   * @preferredTerm Schedule Timeline Description
   * @nciCode C201332
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A logical evaluation on which rests the validity of entry into a schedule timeline.
   * @preferredTerm Schedule Timeline Entry Condition
   * @nciCode C201333
   * @cardinality 1
   * @relationshipType Value
   * @modelName entryCondition
   * @modelRepresentation Attribute
   */
  entryCondition: string

  /**
   * An indication as to whether the timeline or timeline component is part of the central or principal timeline.
   * @preferredTerm Main Timeline Indicator
   * @nciCode C201331
   * @cardinality 1
   * @relationshipType Value
   * @modelName mainTimeline
   * @modelRepresentation Attribute
   */
  mainTimeline: boolean

  /**
   * The period of time over which the scheduled timeline is intended to take place.
   * @preferredTerm Schedule Timeline Planned Duration
   * @nciCode C217012
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedDuration
   * @modelRepresentation Attribute
   */
  plannedDuration?: Duration

  /**
   * A USDM relationship between the ScheduleTimeline and ScheduledInstance classes which identifies the set of scheduled instances (e.g., scheduled activity instances or scheduled decision instances) associated with the scheduled timeline.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName instances
   * @modelRepresentation Relationship
   */
  instances?: ScheduledInstance[]

  /**
   * A USDM relationship between the ScheduleTimeline and ScheduledInstance classes which defines the entry into a scheduled instance (e.g., scheduled activity instances or scheduled decision instances) for a timeline.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName entry
   * @modelRepresentation Relationship
   */
  entryId: ScheduledInstance

  /**
   * A USDM relationship between the ScheduleTimeline and ScheduleTimelineExit classes which identifies the set of exits from the scheduled timeline.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName exits
   * @modelRepresentation Relationship
   */
  exits?: ScheduleTimelineExit[]

  /**
   * A USDM relationship between the ScheduleTimeline and Timing classes which identifies the set of timings associated with the scheduled timeline.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName timings
   * @modelRepresentation Relationship
   */
  timings?: Timing[]

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

/**
 * A concept that substitutes for a standard biomedical concept from the designated source.
 * @preferredTerm Biomedical Concept Surrogate
 * @nciCode C207590
 * @modifier Concrete
 */
export interface BiomedicalConceptSurrogate {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Name
   * @nciCode C207474
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Label
   * @nciCode C207473
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Description
   * @nciCode C201320
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A citation to an authoritative source for a biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Reference
   * @nciCode C201321
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName reference
   * @modelRepresentation Attribute
   */
  reference?: string

  /**
   * A brief written record relevant to the biomedical concept surrogate.
   * @preferredTerm Biomedical Concept Surrogate Notes
   * @nciCode C215532
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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

/**
 * A grouping of biomedical concepts based on some commonality or by user defined characteristics.
 * @preferredTerm Biomedical Concept Category
 * @nciCode C201346
 * @modifier Concrete
 */
export interface BiomedicalConceptCategory {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Name
   * @nciCode C201317
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Label
   * @nciCode C207471
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Description
   * @nciCode C201316
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Code
   * @nciCode C201315
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code?: AliasCode

  /**
   * A brief written record relevant to the biomedical concept category.
   * @preferredTerm Biomedical Concept Category Notes
   * @nciCode C215533
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the BiomedicalConceptCategory and BiomedicalConcept classes which identifies the set of biomedical concept members associated with the biomedical concept category.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName members
   * @modelRepresentation Relationship
   */
  memberIds?: BiomedicalConcept[]

  /**
   * A USDM relationship within the BiomedicalConceptCategory class which identifies the set of child categories of a biomedical concept.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: BiomedicalConceptCategory[]

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

/**
 * An action, undertaking, or event, which is anticipated to be performed or observed, or was performed or observed, according to the study protocol during the execution of the study.
 * @preferredTerm Study Activity
 * @nciCode C71473
 * @modifier Concrete
 */
export interface Activity {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study activity.
   * @preferredTerm Study Activity Name
   * @nciCode C188842
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study activity.
   * @preferredTerm Study Activity Label
   * @nciCode C207458
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study activity.
   * @preferredTerm Study Activity Description
   * @nciCode C70960
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the activity.
   * @preferredTerm Activity Notes
   * @nciCode C215519
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Activity and Procedure classes which identifies the set of defined procedures associated with the activity.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName definedProcedures
   * @modelRepresentation Relationship
   */
  definedProcedures?: Procedure[]

  /**
   * A USDM relationship between the Activity and BiomedicalConcept classes which identifies the set of biomedical concepts associated with the activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName biomedicalConcepts
   * @modelRepresentation Relationship
   */
  biomedicalConceptIds?: BiomedicalConcept[]

  /**
   * A USDM relationship within the Activity class which identifies the activity that follows the current activity in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: Activity

  /**
   * A USDM relationship between the Activity and ScheduleTimeline classes which provides the details associated with an instance of the scheduled timeline related to the activity.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName timeline
   * @modelRepresentation Relationship
   */
  timelineId?: ScheduleTimeline

  /**
   * A USDM relationship within the Activity class which identifies the set of child activities associated with an activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: Activity[]

  /**
   * A USDM relationship within the Activity class which identifies the activity that precedes the current activity in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: Activity

  /**
   * A USDM relationship between the Activity and BiomedicalConceptSurrogate classes which identifies the set of biomedical concept surrogates associated with the activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName bcSurrogates
   * @modelRepresentation Relationship
   */
  bcSurrogateIds?: BiomedicalConceptSurrogate[]

  /**
   * A USDM relationship between the Activity and BiomedicalConceptCategory classes which identifies the set of biomedical concept categories associated with the activity.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName bcCategories
   * @modelRepresentation Relationship
   */
  bcCategoryIds?: BiomedicalConceptCategory[]

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

/**
 * The paired name and value for a given parameter.
 * @preferredTerm Parameter Map
 * @nciCode C207456
 * @modifier Concrete
 */
export interface ParameterMap {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * Character strings bounded by angle brackets that act as containers for programming language elements.
   * @preferredTerm Programming Tag
   * @nciCode C207515
   * @cardinality 1
   * @relationshipType Value
   * @modelName tag
   * @modelRepresentation Attribute
   */
  tag: string

  /**
   * The reference for a tag used in programming languages, such as a markup language (e.g., HTML, XML), to store attributes and elements.
   * @preferredTerm Programming Tag Reference
   * @nciCode C207516
   * @cardinality 1
   * @relationshipType Value
   * @modelName reference
   * @modelRepresentation Attribute
   */
  reference: string

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

/**
 * A standardized pattern used for the arrangement of words and phrases to create well-formed, structured sentences.
 * @preferredTerm Syntax Template
 * @nciCode C207596
 * @modifier Abstract
 * @subClasses Characteristic, Condition, EligibilityCriterionItem, Endpoint, IntercurrentEvent, Objective
 */
export interface SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the characteristic.
   * @preferredTerm Characteristic Name
   * @nciCode C207477
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the characteristic.
   * @preferredTerm Characteristic Label
   * @nciCode C207476
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the characteristic.
   * @preferredTerm Characteristic Description
   * @nciCode C207475
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An instance of structured text that represents the characteristic.
   * @preferredTerm Characteristic Text
   * @nciCode C207478
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * A brief written record relevant to the characteristic.
   * @preferredTerm Characteristic Notes
   * @nciCode C215548
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Characteristic and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to characteristics.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   */
  dictionaryId?: SyntaxTemplateDictionary

}

/**
 * An individual item within the container that holds an instance of an eligibility criterion.
 * @preferredTerm Eligibility Criterion Item
 * @nciCode C215506
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface EligibilityCriterionItem extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Name
   * @nciCode C215647
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Label
   * @nciCode C215650
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Description
   * @nciCode C215649
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Text
   * @nciCode C215648
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the eligibility criterion item.
   * @preferredTerm Eligibility Criterion Item Notes
   * @nciCode C215651
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the EligibilityCriterionItem and SyntaxTemplateDictionary classes which provides the dictionary entry associated with a eligibility criterion item.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

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

/**
 * Characteristics which are necessary to allow a subject to participate in a clinical study, as outlined in the study protocol. The concept covers inclusion and exclusion criteria.
 * @preferredTerm Study Eligibility Criterion
 * @nciCode C16112
 * @modifier Concrete
 */
export interface EligibilityCriterion {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study eligibility criterion.
   * @preferredTerm Study Eligibility Criterion Name
   * @nciCode C207488
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study eligibility criterion.
   * @preferredTerm Study Eligibility Criterion Label
   * @nciCode C207487
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study eligibility criterion.
   * @preferredTerm Study Eligibility Criterion Description
   * @nciCode C207486
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A sequence of characters used to identify, name, or characterize the inclusion or exclusion criterion.
   * @preferredTerm Study Eligibility Criterion Identifier
   * @nciCode C207489
   * @cardinality 1
   * @relationshipType Value
   * @modelName identifier
   * @modelRepresentation Attribute
   */
  identifier: string

  /**
   * A classification of the inclusion exclusion criterion.
   * @preferredTerm Study Eligibility Criterion Category
   * @nciCode C83016
   * @cardinality 1
   * @relationshipType Value
   * @modelName category
   * @modelRepresentation Attribute
   */
  category: Code

  /**
   * A brief written record relevant to the eligibility criterion.
   * @preferredTerm Eligibility Criterion Notes
   * @nciCode C215537
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the EligibilityCriterion and EligibilityCriterionItem classes which identifies the item belonging to the eligibility criterion.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName criterionItem
   * @modelRepresentation Relationship
   */
  criterionItemId: EligibilityCriterionItem

  /**
   * A USDM relationship within the EligibilityCriterion class which identifies the eligibility criterion that follows the current eligibility criterion in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: EligibilityCriterion

  /**
   * A USDM relationship within the EligibilityCriterion class which identifies the eligibility criterion that precedes the current eligibility criterion in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: EligibilityCriterion

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

/**
 * A concise explanation of the meaning of a population.
 * @preferredTerm Population Definition
 * @nciCode C207593
 * @modifier Abstract
 * @subClasses StudyCohort, StudyDesignPopulation
 */
export interface PopulationDefinitionAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study cohort.
   * @preferredTerm Study Cohort Name
   * @nciCode C207544
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study cohort.
   * @preferredTerm Study Cohort Label
   * @nciCode C207543
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study cohort.
   * @preferredTerm Study Cohort Description
   * @nciCode C207542
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The protocol-defined sex within the study cohort.
   * @preferredTerm Study Cohort Planned Sex
   * @nciCode C207541
   * @cardinality 0..2
   * @relationshipType Value
   * @modelName plannedSex
   * @modelRepresentation Attribute
   */
  plannedSex?: Code[]

  /**
   * An indication as to whether the study cohort includes healthy subjects, that is, subjects without the disease or condition under study.
   * @preferredTerm Study Cohort Includes Healthy Subjects Indicator
   * @nciCode C207480
   * @cardinality 1
   * @relationshipType Value
   * @modelName includesHealthySubjects
   * @modelRepresentation Attribute
   */
  includesHealthySubjects: boolean

  /**
   * The anticipated age of subjects within the study cohort.
   * @preferredTerm Study Cohort Planned Age
   * @nciCode C207545
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedAge
   * @modelRepresentation Attribute
   */
  plannedAge?: Range

  /**
   * The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study cohort.
   * @preferredTerm Study Cohort Planned Completion Number
   * @nciCode C207546
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedCompletionNumber
   * @modelRepresentation Attribute
   */
  plannedCompletionNumber?: QuantityRange

  /**
   * The value representing the planned number of subjects to be entered in a clinical trial, within the study cohort.
   * @preferredTerm Study Cohort Planned Enrollment Number
   * @nciCode C207702
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedEnrollmentNumber
   * @modelRepresentation Attribute
   */
  plannedEnrollmentNumber?: QuantityRange

  /**
   * A brief written record relevant to the study cohort.
   * @preferredTerm Study Cohort Notes
   * @nciCode C215547
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyCohort and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName criteria
   * @modelRepresentation Relationship
   */
  criterionIds?: EligibilityCriterion[]

}

/**
 * A target study population on which an analysis is performed. These may be represented by the entire study population, a subgroup defined by a particular characteristic measured at baseline, or a principal stratum defined by the occurrence (or non-occurrence, depending on context) of a specific intercurrent event. (ICH E9 R1 Addendum)
 * @preferredTerm Analysis Population
 * @nciCode C188814
 * @modifier Concrete
 */
export interface AnalysisPopulation {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the analysis population.
   * @preferredTerm Analysis Population Text
   * @nciCode C207468
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * The literal identifier (i.e., distinctive designation) of the analysis population.
   * @preferredTerm Analysis Population Name
   * @nciCode C207467
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the analysis population.
   * @preferredTerm Analysis Population Label
   * @nciCode C207466
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the analysis population.
   * @preferredTerm Analysis Population Description
   * @nciCode C188854
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the analysis population.
   * @preferredTerm Analysis Population Notes
   * @nciCode C215525
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the AnalysisPopulation and PopulationDefinition classes which identifies the population definition of which the analysis population is a subset.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName subsetOf
   * @modelRepresentation Relationship
   */
  subsetOfIds?: PopulationDefinition[]

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

/**
 * An individual person who is allotted or appointed to a particular role, function, or other entity.
 * @preferredTerm Assigned Person
 * @nciCode C215496
 * @modifier Concrete
 */
export interface AssignedPerson {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the assigned person.
   * @preferredTerm Assigned Person Name
   * @nciCode C215596
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the assigned person.
   * @preferredTerm Assigned Person Label
   * @nciCode C215598
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the assigned person.
   * @preferredTerm Assigned Person Description
   * @nciCode C215597
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A word or group of words indicating the identity of an assigned person usually consisting of a first (personal) name and a last (family) name with an optional middle name. In some cultural traditions the family name comes first.
   * @preferredTerm Assigned Person Person Name
   * @nciCode C216993
   * @cardinality 1
   * @relationshipType Value
   * @modelName personName
   * @modelRepresentation Attribute
   */
  personName: PersonName

  /**
   * An identifying designation related to the assigned person's occupation.
   * @preferredTerm Assigned Person Job Title
   * @nciCode C215599
   * @cardinality 1
   * @relationshipType Value
   * @modelName jobTitle
   * @modelRepresentation Attribute
   */
  jobTitle: string

  /**
   * A USDM relationship between the AssignedPerson and Organization classes that identifies that organization to which the assigned person belongs.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName organization
   * @modelRepresentation Relationship
   */
  organizationId?: Organization

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

/**
 * The continued possession, cataloging, and storage of collected biological specimens beyond their initial use.
 * @preferredTerm Biospecimen Retention
 * @nciCode C215505
 * @modifier Concrete
 */
export interface BiospecimenRetention {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the biospecimen retention.
   * @preferredTerm Biospecimen Retention Name
   * @nciCode C215645
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the biospecimen retention.
   * @preferredTerm Biospecimen Retention Label
   * @nciCode C215646
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the biospecimen retention.
   * @preferredTerm Biospecimen Retention Description
   * @nciCode C181231
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An indication as to whether biospecimens were retained.
   * @preferredTerm Biospecimen Retention Indicator
   * @nciCode C164620
   * @cardinality 1
   * @relationshipType Value
   * @modelName isRetained
   * @modelRepresentation Attribute
   */
  isRetained: boolean

  /**
   * An indication as to whether retained biospecimens contain DNA.
   * @preferredTerm Biospecimen Retention Includes DNA Indicator
   * @nciCode C127777
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName includesDNA
   * @modelRepresentation Attribute
   */
  includesDNA?: boolean

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

/**
 * The distinguishing qualities or prominent aspects of an entity.
 * @preferredTerm Characteristic
 * @nciCode C25447
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Characteristic extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the characteristic.
   * @preferredTerm Characteristic Name
   * @nciCode C207477
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the characteristic.
   * @preferredTerm Characteristic Label
   * @nciCode C207476
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the characteristic.
   * @preferredTerm Characteristic Description
   * @nciCode C207475
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the characteristic.
   * @preferredTerm Characteristic Text
   * @nciCode C207478
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the characteristic.
   * @preferredTerm Characteristic Notes
   * @nciCode C215548
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Characteristic and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to characteristics.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

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

/**
 * A guide that governs the allocation of subjects to operational options at a discrete decision point or branch (e.g., assignment to a particular arm, discontinuation) within a clinical trial plan.
 * @preferredTerm Transition Rule
 * @nciCode C82567
 * @modifier Concrete
 */
export interface TransitionRule {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the transition rule.
   * @preferredTerm Transition Rule Name
   * @nciCode C207588
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the transition rule.
   * @preferredTerm Transition Rule Label
   * @nciCode C207587
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the transition rule.
   * @preferredTerm Transition Rule Description
   * @nciCode C188835
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An instance of unstructured text that represents the transition rule.
   * @preferredTerm Transition Rule Text
   * @nciCode C207589
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

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

/**
 * Any physical or virtual contact between two or more parties involved in a study, at which an assessment or activity takes place.
 * @preferredTerm Study Encounter
 * @nciCode C215488
 * @modifier Concrete
 */
export interface Encounter {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) for a protocol-defined study encounter.
   * @preferredTerm Study Encounter Name
   * @nciCode C171010
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study encounter.
   * @preferredTerm Study Encounter Label
   * @nciCode C207490
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the protocol-defined study encounter.
   * @preferredTerm Study Encounter Description
   * @nciCode C188836
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study encounter.
   * @preferredTerm Study Encounter Type
   * @nciCode C188839
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The environment/setting where the event, intervention, or finding occurred.
   * @preferredTerm Environmental Setting
   * @nciCode C188840
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName environmentalSettings
   * @modelRepresentation Attribute
   */
  environmentalSettings?: Code[]

  /**
   * The means by which an interaction occurs between the subject/participant and person or entity (e.g., a device).
   * @preferredTerm Contact Mode
   * @nciCode C188841
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName contactModes
   * @modelRepresentation Attribute
   */
  contactModes?: Code[]

  /**
   * A brief written record relevant to the study encounter.
   * @preferredTerm Encounter Notes
   * @nciCode C215518
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Encounter and TransitionRule classes which provides the details associated with a transition rule used to trigger the end of an encounter.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionEndRule
   * @modelRepresentation Relationship
   */
  transitionEndRule?: TransitionRule

  /**
   * A USDM relationship within the Encounter class which identifies the encounter that chronologically follows the current encounter.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: Encounter

  /**
   * A USDM relationship between the Encounter and TransitionRule classes which provides the details associated with a transition rule used to trigger the start of an encounter.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionStartRule
   * @modelRepresentation Relationship
   */
  transitionStartRule?: TransitionRule

  /**
   * A USDM relationship between the Encounter and Timing classes which provides information related to the scheduled timing of an encounter.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName scheduledAt
   * @modelRepresentation Relationship
   */
  scheduledAtId?: Timing

  /**
   * A USDM relationship within the Encounter class which identifies the encounter that chronologically precedes the current encounter.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: Encounter

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

/**
 * A scheduled occurrence of an activity event.
 * @preferredTerm Scheduled Activity Instance
 * @nciCode C201350
 * @modifier Concrete
 * @extends ScheduledInstance
 */
export interface ScheduledActivityInstance extends ScheduledInstanceAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Name
   * @nciCode C207533
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  name: string

  /**
   * The short descriptive designation for the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Label
   * @nciCode C207532
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  label?: string

  /**
   * A narrative representation of the scheduled activity instance.
   * @preferredTerm Scheduled Activity Instance Description
   * @nciCode C207531
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  description?: string

  /**
   * A USDM relationship within the ScheduledActivityInstance class which identifies the default condition within a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName defaultCondition
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  defaultConditionId?: ScheduledInstance

  /**
   * A USDM relationship between the ScheduledActivityInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  epochId?: StudyEpoch

  /**
   * A USDM relationship between the ScheduledActivityInstance and Activity classes which identifies the set of activities associated with a scheduled activity instance.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName activities
   * @modelRepresentation Relationship
   */
  activityIds?: Activity[]

  /**
   * A USDM relationship between the ScheduledActivityInstance and Encounter classes which defines the subject encounter associated with the ScheduleActivityInstance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName encounter
   * @modelRepresentation Relationship
   */
  encounterId?: Encounter

  /**
   * A USDM relationship between the ScheduledActivityInstance and ScheduleTimeline classes which provides the details associated with an instance of a scheduled timeline related to a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName timeline
   * @modelRepresentation Relationship
   */
  timelineId?: ScheduleTimeline

  /**
   * A USDM relationship between the ScheduledActivityInstance and ScheduleTimelineExit classes which provides the details associated with the exit from a timeline related to a scheduled activity instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName timelineExit
   * @modelRepresentation Relationship
   */
  timelineExitId?: ScheduleTimelineExit

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

/**
 * A state of being.
 * @preferredTerm Condition
 * @nciCode C25457
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Condition extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the condition.
   * @preferredTerm Condition Name
   * @nciCode C207483
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the condition.
   * @preferredTerm Condition Label
   * @nciCode C207482
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the condition.
   * @preferredTerm Condition Description
   * @nciCode C207481
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the condition.
   * @preferredTerm Condition Text
   * @nciCode C207484
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the condition.
   * @preferredTerm Condition Notes
   * @nciCode C215552
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Condition and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to conditions.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

  /**
   * A USDM relationship between the Condition and the ScheduledActivityInstance or Activity classes which identifies the scheduled activity instance or activity to which the condition belongs.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName context
   * @modelRepresentation Relationship
   */
  contextIds?: (Activity | ScheduledActivityInstance)[]

  /**
   * A USDM relationship between the Condition and the Activity, Procedure, BiomedicalConcept, BiomedicalConceptSurrogate, or BiomedicalConceptCategory classes which identifies the procedure, activity, biomedical concept, biomedical concept surrogate, or biomedical concept category that applies to the condition.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToIds?: (BiomedicalConceptCategory | Procedure | Activity | BiomedicalConcept | BiomedicalConceptSurrogate)[]

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

/**
 * An allotting or appointment to a condition or set of conditions that are to be met in order to make a logical decision.
 * @preferredTerm Condition Assignment
 * @nciCode C201335
 * @modifier Concrete
 */
export interface ConditionAssignment {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An assumption on which rests the validity or effect of something else.
   * @preferredTerm Logical Condition
   * @nciCode C47953
   * @cardinality 1
   * @relationshipType Value
   * @modelName condition
   * @modelRepresentation Attribute
   */
  condition: string

  /**
   * A USDM relationship between the ConditionAssignment and ScheduledInstance classes which identifies the scheduled instance associated with the condition assignment.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName conditionTarget
   * @modelRepresentation Relationship
   */
  conditionTargetId: ScheduledInstance

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

/**
 * The extent or range related to the physical location of an entity.
 * @preferredTerm Geographic Scope
 * @nciCode C207591
 * @modifier Concrete
 */
export interface GeographicScope {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A characterization or classification of the geographic scope.
   * @preferredTerm Geographic Scope Type
   * @nciCode C207495
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A symbol or combination of symbols which is assigned to the geographic scope.
   * @preferredTerm Geographic Scope Code
   * @nciCode C207494
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code?: AliasCode

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

/**
 * An individual item within the container that holds an instance of unstructured text and which may include objects such as tables, figures, and images.
 * @preferredTerm Narrative Content Item
 * @nciCode C215489
 * @modifier Concrete
 */
export interface NarrativeContentItem {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the narrative content item.
   * @preferredTerm Narrative Content Item Name
   * @nciCode C215557
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * An instance of unstructured text that represents the narrative content item.
   * @preferredTerm Narrative Content Item Text
   * @nciCode C215558
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

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

/**
 * The container that holds an instance of unstructured text and which may include objects such as tables, figures, and images.
 * @preferredTerm Narrative Content
 * @nciCode C207592
 * @modifier Concrete
 */
export interface NarrativeContent {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the narrative content.
   * @preferredTerm Narrative Content Name
   * @nciCode C207507
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The numeric identifier assigned to a particular document section containing narrative content.
   * @preferredTerm Narrative Content Section Number
   * @nciCode C207509
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sectionNumber
   * @modelRepresentation Attribute
   */
  sectionNumber?: string

  /**
   * An identifying designation for the document section containing narrative content.
   * @preferredTerm Narrative Content Section Title
   * @nciCode C207510
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName sectionTitle
   * @modelRepresentation Attribute
   */
  sectionTitle?: string

  /**
   * An indication as to whether the section title is to be displayed in the document containing narrative content.
   * @preferredTerm Narrative Content Section Title Display Indicator
   * @nciCode C215534
   * @cardinality 1
   * @relationshipType Value
   * @modelName displaySectionTitle
   * @modelRepresentation Attribute
   */
  displaySectionTitle: boolean

  /**
   * An indication as to whether the section number is to be displayed in the document containing narrative content.
   * @preferredTerm Narrative Content Section Number Display Indicator
   * @nciCode C215535
   * @cardinality 1
   * @relationshipType Value
   * @modelName displaySectionNumber
   * @modelRepresentation Attribute
   */
  displaySectionNumber: boolean

  /**
   * A USDM relationship between the NarrativeContent and NarrativeContentItem classes which identifies the content item associated with the narrative content.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName contentItem
   * @modelRepresentation Relationship
   */
  contentItemId?: NarrativeContentItem

  /**
   * A USDM relationship within the NarrativeContent class which identifies the narrative content that precedes the current narrative content in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: NarrativeContent

  /**
   * A USDM relationship within the NarrativeContent class which identifies the narrative content that follows the current narrative content in the display order.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName next
   * @modelRepresentation Relationship
   */
  nextId?: NarrativeContent

  /**
   * A USDM relationship within the NarrativeContent class which identifies the set of child content associated with an instance of narrative content.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: NarrativeContent[]

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

/**
 * A representation of a particular edition or snapshot of the study definition document as it exists at a particular point in time.
 * @preferredTerm Study Definition Document Version
 * @nciCode C215491
 * @modifier Concrete
 */
export interface StudyDefinitionDocumentVersion {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A condition of the study definition document at a point in time with respect to its state of readiness for implementation.
   * @preferredTerm Study Definition Document Status
   * @nciCode C215567
   * @cardinality 1
   * @relationshipType Value
   * @modelName status
   * @modelRepresentation Attribute
   */
  status: Code

  /**
   * A sequence of characters used to identify the version of the study definition document.
   * @preferredTerm Study Definition Document Version Identifier
   * @nciCode C215566
   * @cardinality 1
   * @relationshipType Value
   * @modelName version
   * @modelRepresentation Attribute
   */
  version: string

  /**
   * A brief written record relevant to the study definition document version.
   * @preferredTerm Study Definition Document Version Notes
   * @nciCode C215568
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyDefinitionDocumentVersion and GovernanceDate classes which provides the set of governance dates associated with the study definition document version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName dateValues
   * @modelRepresentation Relationship
   */
  dateValues?: GovernanceDate[]

  /**
   * A USDM relationship between the StudyDefinitionDocumentVersion and NarrativeContent classes which identifies the set of narrative content associated with the version of the study definition document.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName contents
   * @modelRepresentation Relationship
   */
  contents?: NarrativeContent[]

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

/**
 * Any physical or electronic document that is related to defining a study or part of a study.
 * @preferredTerm Study Definition Document
 * @nciCode C215490
 * @modifier Concrete
 */
export interface StudyDefinitionDocument {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study definition document.
   * @preferredTerm Study Definition Document Name
   * @nciCode C215559
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study definition document.
   * @preferredTerm Study Definition Document Label
   * @nciCode C215561
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study definition document.
   * @preferredTerm Study Definition Document Description
   * @nciCode C215560
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study definition document.
   * @preferredTerm Study Definition Document Type
   * @nciCode C215564
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * The literal identifier (i.e., distinctive designation) of the study definition document template.
   * @preferredTerm Study Definition Document Template Name
   * @nciCode C215562
   * @cardinality 1
   * @relationshipType Value
   * @modelName templateName
   * @modelRepresentation Attribute
   */
  templateName: string

  /**
   * The language in which the study definition document is written.
   * @preferredTerm Study Definition Document Language
   * @nciCode C215563
   * @cardinality 1
   * @relationshipType Value
   * @modelName language
   * @modelRepresentation Attribute
   */
  language: Code

  /**
   * A brief written record relevant to the study definition document.
   * @preferredTerm Study Definition Document Notes
   * @nciCode C215565
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship within the StudyDefinitionDocument class which identifies the set of child documents of a study definition document.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName children
   * @modelRepresentation Relationship
   */
  childIds?: StudyDefinitionDocument[]

  /**
   * A USDM relationship between the StudyDefinitionDocument and StudyDefinitionDocumentVersion classes which identifies the set of versions associated with the study definition document.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName versions
   * @modelRepresentation Relationship
   */
  versions?: StudyDefinitionDocumentVersion[]

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

/**
 * A citation pointing to the location of specific content within a document.
 * @preferredTerm Document Content Reference
 * @nciCode C215499
 * @modifier Concrete
 */
export interface DocumentContentReference {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The numeric identifier of a particular section for the document content reference.
   * @preferredTerm Document Content Reference Section Number
   * @nciCode C215609
   * @cardinality 1
   * @relationshipType Value
   * @modelName sectionNumber
   * @modelRepresentation Attribute
   */
  sectionNumber: string

  /**
   * An identifying designation for a particular section for the document content reference.
   * @preferredTerm Document Content Reference Section Title
   * @nciCode C215610
   * @cardinality 1
   * @relationshipType Value
   * @modelName sectionTitle
   * @modelRepresentation Attribute
   */
  sectionTitle: string

  /**
   * A USDM relationship between the DocumentContentReference and StudyDefinitionDocument classes which identifies the study definition document to which the document content reference applies.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToId: StudyDefinitionDocument

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

/**
 * A defined variable intended to reflect an outcome of interest that is statistically analyzed to address a particular research question. NOTE: A precise definition of an endpoint typically specifies the type of assessments made, the timing of those assessments, the assessment tools used, and possibly other details, as applicable, such as how multiple assessments within an individual are to be combined. [After BEST Resource] (CDISC Glossary)
 * @preferredTerm Study Endpoint
 * @nciCode C25212
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Endpoint extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study endpoint.
   * @preferredTerm Study Endpoint Name
   * @nciCode C207492
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the study endpoint.
   * @preferredTerm Study Endpoint Label
   * @nciCode C207491
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the study endpoint.
   * @preferredTerm Study Endpoint Description
   * @nciCode C188824
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the study endpoint.
   * @preferredTerm Study Endpoint Text
   * @nciCode C207493
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the study endpoint.
   * @preferredTerm Endpoint Notes
   * @nciCode C215514
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Endpoint and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to study endpoints.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

  /**
   * A characterization or classification of the study endpoint that determines its category of importance relative to other study endpoints.
   * @preferredTerm Study Endpoint Level
   * @nciCode C188826
   * @cardinality 1
   * @relationshipType Value
   * @modelName level
   * @modelRepresentation Attribute
   */
  level: Code

  /**
   * The textual representation of the study endpoint purpose.
   * @preferredTerm Study Endpoint Purpose Description
   * @nciCode C188825
   * @cardinality 1
   * @relationshipType Value
   * @modelName purpose
   * @modelRepresentation Attribute
   */
  purpose: string

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

/**
 * An event(s) occurring after treatment initiation that affects either the interpretation or the existence of the measurements associated with the clinical question of interest. (ICH E9 Addendum on Estimands)
 * @preferredTerm Intercurrent Event
 * @nciCode C188815
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface IntercurrentEvent extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the intercurrent event.
   * @preferredTerm Intercurrent Event Name
   * @nciCode C188855
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the intercurrent event.
   * @preferredTerm Intercurrent Event Label
   * @nciCode C207504
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the intercurrent event.
   * @preferredTerm Intercurrent Event Description
   * @nciCode C188856
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the intercurrent event.
   * @preferredTerm Intercurrent Event Text
   * @nciCode C215526
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the intercurrent event.
   * @preferredTerm Intercurrent Event Notes
   * @nciCode C215527
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the IntercurrentEvent and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to the intercurrent event.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

  /**
   * A textual description of the planned strategy to manage and/or mitigate intercurrent events.
   * @preferredTerm Intercurrent Event Strategy
   * @nciCode C188857
   * @cardinality 1
   * @relationshipType Value
   * @modelName strategy
   * @modelRepresentation Attribute
   */
  strategy: string

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

/**
 * A precise description of the treatment effect reflecting the clinical question posed by a given clinical trial objective. It summarises at a population level what the outcomes would be in the same patients under different treatment conditions being compared. (ICH E9 R1 Addendum)
 * @preferredTerm Estimand
 * @nciCode C188813
 * @modifier Concrete
 */
export interface Estimand {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A synopsis of the clinical endpoint of interest within the analysis target study population.
   * @preferredTerm Population-Level Summary
   * @nciCode C188853
   * @cardinality 1
   * @relationshipType Value
   * @modelName populationSummary
   * @modelRepresentation Attribute
   */
  populationSummary: string

  /**
   * The literal identifier (i.e., distinctive designation) of the estimand.
   * @preferredTerm Estimand Name
   * @nciCode C215522
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the estimand.
   * @preferredTerm Estimand Label
   * @nciCode C215524
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the estimand.
   * @preferredTerm Estimand Description
   * @nciCode C215523
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the study estimand.
   * @preferredTerm Estimand Notes
   * @nciCode C215521
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Estimand and AnalysisPopulation classes which provides the details associated with an instance of the analysis population used to partially define a study estimand.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName analysisPopulation
   * @modelRepresentation Relationship
   */
  analysisPopulationId: AnalysisPopulation

  /**
   * A USDM relationship between the Estimand and Endpoint classes which provides the details associated with an instance of the variable of interest within a study endpoint used to partially define a study estimand.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName variableOfInterest
   * @modelRepresentation Relationship
   */
  variableOfInterestId: Endpoint

  /**
   * A USDM relationship between the Estimand and IntercurrentEvent classes which identifies the set of intercurrent events associated with a study estimand.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName intercurrentEvents
   * @modelRepresentation Relationship
   */
  intercurrentEvents: IntercurrentEvent[]

  /**
   * A USDM relationship between the Estimand and StudyIntervention classes which identifies the set of study interventions associated with the Estimand.
   * @cardinality 1..*
   * @relationshipType Ref
   * @modelName interventions
   * @modelRepresentation Relationship
   */
  interventionIds: StudyIntervention[]

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

/**
 * The disease or condition the intervention will diagnose, treat, prevent, cure, or mitigate.
 * @preferredTerm Disease/Condition Indication
 * @nciCode C41184
 * @modifier Concrete
 */
export interface Indication {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the disease/condition indication.
   * @preferredTerm Disease/Condition Indication Name
   * @nciCode C207503
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the disease/condition indication.
   * @preferredTerm Disease/Condition Indication Label
   * @nciCode C207502
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the condition, disease or disorder that the clinical trial is intended to investigate or address.
   * @preferredTerm Disease/Condition Indication Description
   * @nciCode C112038
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An indication as to whether the disease/condition indication under study is considered a rare disease.
   * @preferredTerm Disease/Condition Indication Is Rare Disease Indicator
   * @nciCode C207501
   * @cardinality 1
   * @relationshipType Value
   * @modelName isRareDisease
   * @modelRepresentation Attribute
   */
  isRareDisease: boolean

  /**
   * A short sequence of characters that represents the disease/condition indication.
   * @preferredTerm Disease/Condition Indication Code
   * @nciCode C188822
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName codes
   * @modelRepresentation Attribute
   */
  codes?: Code[]

  /**
   * A brief written record relevant to the disease/condition indication.
   * @preferredTerm Indication Notes
   * @nciCode C215509
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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

/**
 * The reason for performing a study in terms of the scientific questions to be answered by the analysis of data collected during the study.
 * @preferredTerm Study Objective
 * @nciCode C142450
 * @modifier Concrete
 * @extends SyntaxTemplate
 */
export interface Objective extends SyntaxTemplateAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study objective.
   * @preferredTerm Study Objective Name
   * @nciCode C207512
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  name: string

  /**
   * The short descriptive designation for the study objective.
   * @preferredTerm Study Objective Label
   * @nciCode C207511
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  label?: string

  /**
   * A narrative representation of the study objective. (BRIDG)
   * @preferredTerm Study Objective Description
   * @nciCode C94090
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  description?: string

  /**
   * An instance of structured text that represents the study objective.
   * @preferredTerm Study Objective Text
   * @nciCode C207513
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  text: string

  /**
   * A brief written record relevant to the study objective.
   * @preferredTerm Objective Notes
   * @nciCode C215513
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom SyntaxTemplate
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the Objective and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to study objectives.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName dictionary
   * @modelRepresentation Relationship
   * @inheritedFrom SyntaxTemplate
   */
  dictionaryId?: SyntaxTemplateDictionary

  /**
   * A characterization or classification of the study objective that determines its category of importance relative to other study objectives.
   * @preferredTerm Study Objective Level
   * @nciCode C188823
   * @cardinality 1
   * @relationshipType Value
   * @modelName level
   * @modelRepresentation Attribute
   */
  level: Code

  /**
   * A USDM relationship between the Objective and Endpoint classes which identifies the set of endpoints associated with the study objective.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName endpoints
   * @modelRepresentation Relationship
   */
  endpoints?: Endpoint[]

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

/**
 * A planned pathway assigned to the subject as they progress through the study, usually referred to by a name that reflects one or more treatments, exposures, and/or controls included in the path.
 * @preferredTerm Study Arm
 * @nciCode C174447
 * @modifier Concrete
 */
export interface StudyArm {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study arm.
   * @preferredTerm Study Arm Name
   * @nciCode C170984
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study arm.
   * @preferredTerm Study Arm Label
   * @nciCode C172456
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study arm.
   * @preferredTerm Study Arm Description
   * @nciCode C93728
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A characterization or classification of the study arm.
   * @preferredTerm Study Arm Type
   * @nciCode C172457
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A characterization or classification of the study arm with respect to where the study arm data originates.
   * @preferredTerm Study Arm Data Origin Type
   * @nciCode C188829
   * @cardinality 1
   * @relationshipType Value
   * @modelName dataOriginType
   * @modelRepresentation Attribute
   */
  dataOriginType: Code

  /**
   * The textual representation of the study arm data origin.
   * @preferredTerm Study Arm Data Origin Description
   * @nciCode C188828
   * @cardinality 1
   * @relationshipType Value
   * @modelName dataOriginDescription
   * @modelRepresentation Attribute
   */
  dataOriginDescription: string

  /**
   * A brief written record relevant to the study arm.
   * @preferredTerm Study Arm Notes
   * @nciCode C215515
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyArm and PopulationDefinition classes which identifies the set of populations associated with the study arm.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName populations
   * @modelRepresentation Relationship
   */
  populationIds?: PopulationDefinition[]

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

/**
 * A basic building block for time within a clinical study comprising the following characteristics: a description of what happens to the subject during the element; a definition of the start of the element; a rule for ending the element.
 * @preferredTerm Study Design Element
 * @nciCode C142735
 * @modifier Concrete
 */
export interface StudyElement {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study design element.
   * @preferredTerm Study Design Element Name
   * @nciCode C188833
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study design element.
   * @preferredTerm Study Design Element Label
   * @nciCode C207554
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study design element.
   * @preferredTerm Study Design Element Description
   * @nciCode C188834
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A brief written record relevant to the study element.
   * @preferredTerm Study Element Notes
   * @nciCode C215517
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyElement and TransitionRule classes which provides the details associated with a transition rule used to trigger the end of a study element.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionEndRule
   * @modelRepresentation Relationship
   */
  transitionEndRule?: TransitionRule

  /**
   * A USDM relationship between the StudyElement and StudyIntervention classes which identifies the set of study interventions associated with the study element.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   */
  studyInterventionIds?: StudyIntervention[]

  /**
   * A USDM relationship between the StudyElement and TransitionRule classes which provides the details associated with a transition rule used to trigger the start of a study element.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName transitionStartRule
   * @modelRepresentation Relationship
   */
  transitionStartRule?: TransitionRule

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

/**
 * A partitioning of a study arm into individual pieces, which are associated with an epoch and any number of sequential elements within that epoch.
 * @preferredTerm Study Design Cell
 * @nciCode C188810
 * @modifier Concrete
 */
export interface StudyCell {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A USDM relationship between the StudyCell and StudyArm classes which identifies the study arm associated with a study cell.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName arm
   * @modelRepresentation Relationship
   */
  armId: StudyArm

  /**
   * A USDM relationship between the StudyCell and StudyEpoch classes which identifies the study epoch associated with a study cell.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   */
  epochId: StudyEpoch

  /**
   * A USDM relationship between the StudyCell and StudyElement classes which identifies the set of study elements associated with the study cell.
   * @cardinality 1..*
   * @relationshipType Ref
   * @modelName elements
   * @modelRepresentation Relationship
   */
  elementIds: StudyElement[]

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

/**
 * A group of individuals who share a set of characteristics (e.g., exposures, experiences, attributes), which logically defines a population under study.
 * @preferredTerm Study Cohort
 * @nciCode C61512
 * @modifier Concrete
 * @extends PopulationDefinition
 */
export interface StudyCohort extends PopulationDefinitionAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study cohort.
   * @preferredTerm Study Cohort Name
   * @nciCode C207544
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  name: string

  /**
   * The short descriptive designation for the study cohort.
   * @preferredTerm Study Cohort Label
   * @nciCode C207543
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  label?: string

  /**
   * A narrative representation of the study cohort.
   * @preferredTerm Study Cohort Description
   * @nciCode C207542
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  description?: string

  /**
   * The protocol-defined sex within the study cohort.
   * @preferredTerm Study Cohort Planned Sex
   * @nciCode C207541
   * @cardinality 0..2
   * @relationshipType Value
   * @modelName plannedSex
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedSex?: Code[]

  /**
   * An indication as to whether the study cohort includes healthy subjects, that is, subjects without the disease or condition under study.
   * @preferredTerm Study Cohort Includes Healthy Subjects Indicator
   * @nciCode C207480
   * @cardinality 1
   * @relationshipType Value
   * @modelName includesHealthySubjects
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  includesHealthySubjects: boolean

  /**
   * The anticipated age of subjects within the study cohort.
   * @preferredTerm Study Cohort Planned Age
   * @nciCode C207545
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedAge
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedAge?: Range

  /**
   * The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study cohort.
   * @preferredTerm Study Cohort Planned Completion Number
   * @nciCode C207546
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedCompletionNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedCompletionNumber?: QuantityRange

  /**
   * The value representing the planned number of subjects to be entered in a clinical trial, within the study cohort.
   * @preferredTerm Study Cohort Planned Enrollment Number
   * @nciCode C207702
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedEnrollmentNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedEnrollmentNumber?: QuantityRange

  /**
   * A brief written record relevant to the study cohort.
   * @preferredTerm Study Cohort Notes
   * @nciCode C215547
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyCohort and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName criteria
   * @modelRepresentation Relationship
   * @inheritedFrom PopulationDefinition
   */
  criterionIds?: EligibilityCriterion[]

  /**
   * A USDM relationship between the StudyCohort and Characteristic classes which identifies the set of subject characteristics associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Relationship
   */
  characteristics?: Characteristic[]

  /**
   * A USDM relationship between the StudyCohort and Indication classes which identifies the set of indications associated with the study cohort.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName indications
   * @modelRepresentation Relationship
   */
  indicationIds?: Indication[]

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

/**
 * The population within the general population to which the study results can be generalized.
 * @preferredTerm Study Design Population
 * @nciCode C142728
 * @modifier Concrete
 * @extends PopulationDefinition
 */
export interface StudyDesignPopulation extends PopulationDefinitionAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study design population.
   * @preferredTerm Study Design Population Name
   * @nciCode C207553
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  name: string

  /**
   * The short descriptive designation for the study design population.
   * @preferredTerm Study Design Population Label
   * @nciCode C207550
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  label?: string

  /**
   * A narrative representation of the study design population.
   * @preferredTerm Study Design Population Description
   * @nciCode C70834
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  description?: string

  /**
   * The protocol-defined sex within the study design population.
   * @preferredTerm Study Design Population Planned Sex
   * @nciCode C207551
   * @cardinality 0..2
   * @relationshipType Value
   * @modelName plannedSex
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedSex?: Code[]

  /**
   * An indication as to whether the study design population includes healthy subjects, that is, subjects without the disease or condition under study.
   * @preferredTerm Study Design Population Includes Healthy Subjects Indicator
   * @nciCode C207549
   * @cardinality 1
   * @relationshipType Value
   * @modelName includesHealthySubjects
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  includesHealthySubjects: boolean

  /**
   * The anticipated age of subjects within the study design population.
   * @preferredTerm Study Design Population Planned Age
   * @nciCode C207450
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedAge
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedAge?: Range

  /**
   * The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study design population.
   * @preferredTerm Study Design Population Planned Completion Number
   * @nciCode C207451
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedCompletionNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedCompletionNumber?: QuantityRange

  /**
   * The value representing the planned number of subjects to be entered in a clinical trial, within the study design population.
   * @preferredTerm Study Design Population Planned Enrollment Number
   * @nciCode C207452
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName plannedEnrollmentNumber
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  plannedEnrollmentNumber?: QuantityRange

  /**
   * A brief written record relevant to the study design population.
   * @preferredTerm Study Design Population Notes
   * @nciCode C215512
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom PopulationDefinition
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyDesignPopulation and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study design population.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName criteria
   * @modelRepresentation Relationship
   * @inheritedFrom PopulationDefinition
   */
  criterionIds?: EligibilityCriterion[]

  /**
   * A USDM relationship between the StudyDesignPopulation and StudyCohort classes which identifies the set of study cohorts associated with the study design population.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName cohorts
   * @modelRepresentation Relationship
   */
  cohorts?: StudyCohort[]

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

/**
 * A plan detailing how a study will be performed in order to represent the phenomenon under examination, to answer the research questions that have been asked, and informing the statistical approach.
 * @preferredTerm Study Design
 * @nciCode C15320
 * @modifier Abstract
 * @subClasses InterventionalStudyDesign, ObservationalStudyDesign
 */
export interface StudyDesignAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the interventional study design.
   * @preferredTerm Interventional Study Design Name
   * @nciCode C215626
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the interventional study design.
   * @preferredTerm Interventional Study Design Label
   * @nciCode C215628
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the interventional study design.
   * @preferredTerm Interventional Study Design Description
   * @nciCode C215627
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * Reason(s) for choosing the interventional study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
   * @preferredTerm Interventional Study Design Rationale
   * @nciCode C215629
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   */
  rationale: string

  /**
   * A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the interventional study design.
   * @preferredTerm Interventional Study Design Therapeutic Areas
   * @nciCode C215633
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName therapeuticAreas
   * @modelRepresentation Attribute
   */
  therapeuticAreas?: Code[]

  /**
   * The study type associated with the interventional study design.
   * @preferredTerm Interventional Study Design Study Type
   * @nciCode C215631
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyType
   * @modelRepresentation Attribute
   */
  studyType?: Code

  /**
   * The distinguishing qualities or prominent aspects of an interventional study design.
   * @preferredTerm Interventional Study Design Characteristics
   * @nciCode C215632
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Attribute
   */
  characteristics?: Code[]

  /**
   * The study phase associated with the interventional study design.
   * @preferredTerm Interventional Study Design Study Phase
   * @nciCode C215630
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyPhase
   * @modelRepresentation Attribute
   */
  studyPhase?: AliasCode

  /**
   * A brief written record relevant to the interventional study design.
   * @preferredTerm Interventional Study Design Notes
   * @nciCode C215634
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Activity classes which identifies the set of activities associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName activities
   * @modelRepresentation Relationship
   */
  activities?: Activity[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName biospecimenRetentions
   * @modelRepresentation Relationship
   */
  biospecimenRetentions?: BiospecimenRetention[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName eligibilityCriteria
   * @modelRepresentation Relationship
   */
  eligibilityCriteria: EligibilityCriterion[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Encounter classes which identifies the set of encounters associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName encounters
   * @modelRepresentation Relationship
   */
  encounters?: Encounter[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Estimand classes which identifies the set of estimands associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName estimands
   * @modelRepresentation Relationship
   */
  estimands?: Estimand[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Indication classes which identifies the set of indications associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName indications
   * @modelRepresentation Relationship
   */
  indications?: Indication[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Objective classes which identifies the set of objectives associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName objectives
   * @modelRepresentation Relationship
   */
  objectives?: Objective[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName scheduleTimelines
   * @modelRepresentation Relationship
   */
  scheduleTimelines?: ScheduleTimeline[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyArm classes which identifies the set of study arms associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName arms
   * @modelRepresentation Relationship
   */
  arms: StudyArm[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyCell classes which identifies the set of study cells associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName studyCells
   * @modelRepresentation Relationship
   */
  studyCells: StudyCell[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName documentVersions
   * @modelRepresentation Relationship
   */
  documentVersionIds?: StudyDefinitionDocumentVersion[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyElement classes which identifies the set of study elements associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName elements
   * @modelRepresentation Relationship
   */
  elements?: StudyElement[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with interventional study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   */
  studyInterventionIds?: StudyIntervention[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName epochs
   * @modelRepresentation Relationship
   */
  epochs: StudyEpoch[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the interventional study design.
   * @cardinality 1
   * @relationshipType Value
   * @modelName population
   * @modelRepresentation Relationship
   */
  population: StudyDesignPopulation

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  analysisPopulations?: AnalysisPopulation[]

}

/**
 * The strategy that specifies the structure of an interventional trial in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study.
 * @preferredTerm Interventional Study Design
 * @nciCode C215503
 * @modifier Concrete
 * @extends StudyDesign
 */
export interface InterventionalStudyDesign extends StudyDesignAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the interventional study design.
   * @preferredTerm Interventional Study Design Name
   * @nciCode C215626
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  name: string

  /**
   * The short descriptive designation for the interventional study design.
   * @preferredTerm Interventional Study Design Label
   * @nciCode C215628
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  label?: string

  /**
   * A narrative representation of the interventional study design.
   * @preferredTerm Interventional Study Design Description
   * @nciCode C215627
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  description?: string

  /**
   * Reason(s) for choosing the interventional study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
   * @preferredTerm Interventional Study Design Rationale
   * @nciCode C215629
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  rationale: string

  /**
   * A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the interventional study design.
   * @preferredTerm Interventional Study Design Therapeutic Areas
   * @nciCode C215633
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName therapeuticAreas
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  therapeuticAreas?: Code[]

  /**
   * The study type associated with the interventional study design.
   * @preferredTerm Interventional Study Design Study Type
   * @nciCode C215631
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyType
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  studyType?: Code

  /**
   * The distinguishing qualities or prominent aspects of an interventional study design.
   * @preferredTerm Interventional Study Design Characteristics
   * @nciCode C215632
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  characteristics?: Code[]

  /**
   * The study phase associated with the interventional study design.
   * @preferredTerm Interventional Study Design Study Phase
   * @nciCode C215630
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyPhase
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  studyPhase?: AliasCode

  /**
   * A brief written record relevant to the interventional study design.
   * @preferredTerm Interventional Study Design Notes
   * @nciCode C215634
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Activity classes which identifies the set of activities associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName activities
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  activities?: Activity[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName biospecimenRetentions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  biospecimenRetentions?: BiospecimenRetention[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName eligibilityCriteria
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  eligibilityCriteria: EligibilityCriterion[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Encounter classes which identifies the set of encounters associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName encounters
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  encounters?: Encounter[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Estimand classes which identifies the set of estimands associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName estimands
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  estimands?: Estimand[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Indication classes which identifies the set of indications associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName indications
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  indications?: Indication[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and Objective classes which identifies the set of objectives associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName objectives
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  objectives?: Objective[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName scheduleTimelines
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  scheduleTimelines?: ScheduleTimeline[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyArm classes which identifies the set of study arms associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName arms
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  arms: StudyArm[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyCell classes which identifies the set of study cells associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName studyCells
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  studyCells: StudyCell[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName documentVersions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  documentVersionIds?: StudyDefinitionDocumentVersion[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyElement classes which identifies the set of study elements associated with the interventional study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName elements
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  elements?: StudyElement[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with interventional study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  studyInterventionIds?: StudyIntervention[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the interventional study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName epochs
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  epochs: StudyEpoch[]

  /**
   * A USDM relationship between the InterventionalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the interventional study design.
   * @cardinality 1
   * @relationshipType Value
   * @modelName population
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  population: StudyDesignPopulation

  /**
   * The general design of the strategy for assigning interventions to subjects in a clinical study. (clinicaltrials.gov)
   * @preferredTerm Intervention Model Type
   * @nciCode C98746
   * @cardinality 1
   * @relationshipType Value
   * @modelName model
   * @modelRepresentation Attribute
   */
  model: Code

  /**
   * The nature of the interventional study for which information is being collected.
   * @preferredTerm Trial Type
   * @nciCode C49660
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName subTypes
   * @modelRepresentation Attribute
   */
  subTypes?: Code[]

  /**
   * The type of experimental design used to describe the level of awareness of the study subjects and/ or study personnel as it relates to the respective intervention(s) or assessments being observed, received or administered.
   * @preferredTerm Trial Blinding Schema
   * @nciCode C49658
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName blindingSchema
   * @modelRepresentation Attribute
   */
  blindingSchema?: AliasCode

  /**
   * The planned purpose of the therapy, device, or agent under study in the clinical trial.
   * @preferredTerm Trial Intent Type
   * @nciCode C49652
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName intentTypes
   * @modelRepresentation Attribute
   */
  intentTypes?: Code[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  extensionAttributes?: ExtensionAttribute[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  analysisPopulations?: AnalysisPopulation[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}

/**
 * The mechanism used to obscure the distinctive characteristics of the study intervention or procedure to make it indistinguishable from a comparator. (CDISC Glossary)
 * @preferredTerm Masking
 * @nciCode C191278
 * @modifier Concrete
 */
export interface Masking {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents how the masking is performed and maintained.
   * @preferredTerm Masking Text
   * @nciCode C215553
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * An indication as to whether the study role is masked.
   * @preferredTerm Masked Indicator
   * @nciCode C215554
   * @cardinality 1
   * @relationshipType Value
   * @modelName isMasked
   * @modelRepresentation Attribute
   */
  isMasked: boolean

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

/**
 * The strategy that specifies the structure of an observational study in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study.
 * @preferredTerm Observational Study Design
 * @nciCode C215504
 * @modifier Concrete
 * @extends StudyDesign
 */
export interface ObservationalStudyDesign extends StudyDesignAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the observational study design.
   * @preferredTerm Observational Study Design Name
   * @nciCode C215636
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  name: string

  /**
   * The short descriptive designation for the observational study design.
   * @preferredTerm Observational Study Design Label
   * @nciCode C215638
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  label?: string

  /**
   * A narrative representation of the observational study design.
   * @preferredTerm Observational Study Design Description
   * @nciCode C215637
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  description?: string

  /**
   * Reason(s) for choosing the observational study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
   * @preferredTerm Observational Study Design Rationale
   * @nciCode C215639
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  rationale: string

  /**
   * A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the observational study design.
   * @preferredTerm Observational Study Design Therapeutic Areas
   * @nciCode C215643
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName therapeuticAreas
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  therapeuticAreas?: Code[]

  /**
   * The study type associated with the observational study design.
   * @preferredTerm Observational Study Design Study Type
   * @nciCode C215641
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyType
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  studyType?: Code

  /**
   * The distinguishing qualities or prominent aspects of an observational study design.
   * @preferredTerm Observational Study Design Characteristics
   * @nciCode C215642
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName characteristics
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  characteristics?: Code[]

  /**
   * The study phase associated with the observational study design.
   * @preferredTerm Observational Study Design Study Phase
   * @nciCode C215640
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName studyPhase
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  studyPhase?: AliasCode

  /**
   * A brief written record relevant to the observational study design.
   * @preferredTerm Observational Study Design Notes
   * @nciCode C215644
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   * @inheritedFrom StudyDesign
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Activity classes which identifies the set of activities associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName activities
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  activities?: Activity[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName biospecimenRetentions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  biospecimenRetentions?: BiospecimenRetention[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName eligibilityCriteria
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  eligibilityCriteria: EligibilityCriterion[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Encounter classes which identifies the set of encounters associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName encounters
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  encounters?: Encounter[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Estimand classes which identifies the set of estimands associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName estimands
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  estimands?: Estimand[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Indication classes which identifies the set of indications associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName indications
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  indications?: Indication[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and Objective classes which identifies the set of objectives associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName objectives
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  objectives?: Objective[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName scheduleTimelines
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  scheduleTimelines?: ScheduleTimeline[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyArm classes which identifies the set of study arms associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName arms
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  arms: StudyArm[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyCell classes which identifies the set of study cells associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName studyCells
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  studyCells: StudyCell[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName documentVersions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  documentVersionIds?: StudyDefinitionDocumentVersion[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyElement classes which identifies the set of study elements associated with the observational study design.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName elements
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  elements?: StudyElement[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with observational study design.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName studyInterventions
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  studyInterventionIds?: StudyIntervention[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the observational study design.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName epochs
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  epochs: StudyEpoch[]

  /**
   * A USDM relationship between the ObservationalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the observational study design.
   * @cardinality 1
   * @relationshipType Value
   * @modelName population
   * @modelRepresentation Relationship
   * @inheritedFrom StudyDesign
   */
  population: StudyDesignPopulation

  /**
   * The general design of the strategy for identifying and following up with participants during observational studies. (clinicaltrials.gov)
   * @preferredTerm Observation Study Design Model Type
   * @nciCode C147138
   * @cardinality 1
   * @relationshipType Value
   * @modelName model
   * @modelRepresentation Attribute
   */
  model: Code

  /**
   * The nature of the observational study for which information is being collected.
   * @preferredTerm Observational Study Type
   * @nciCode C215635
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName subTypes
   * @modelRepresentation Attribute
   */
  subTypes?: Code[]

  /**
   * The temporal relationship between the observation period and time of subject enrollment. (ClinicalTrials.gov)
   * @preferredTerm Observational Time Perspective
   * @nciCode C126065
   * @cardinality 1
   * @relationshipType Value
   * @modelName timePerspective
   * @modelRepresentation Attribute
   */
  timePerspective: Code

  /**
   * The sampling method used to assign study participants into groups or cohorts within an observational study.
   * @preferredTerm Observational Study Sampling Method
   * @nciCode C126067
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName samplingMethod
   * @modelRepresentation Attribute
   */
  samplingMethod?: Code

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  extensionAttributes?: ExtensionAttribute[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  analysisPopulations?: AnalysisPopulation[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}

/**
 * A designation that identifies the function of an organization within the context of the product.
 * @preferredTerm Product Organization Role
 * @nciCode C215502
 * @modifier Concrete
 */
export interface ProductOrganizationRole {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the product organization role.
   * @preferredTerm Product Organization Role Name
   * @nciCode C215622
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the product organization role.
   * @preferredTerm Product Organization Role Label
   * @nciCode C215624
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the product organization role.
   * @preferredTerm Product Organization Role Description
   * @nciCode C215623
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the product organization role.
   * @preferredTerm Product Organization Role Code
   * @nciCode C215625
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

  /**
   * A USDM relationship between the ProductOrganizationRole and either the AdministrableProduct or MedicalDevice class that identifies the administrable product or medical device to which the product organization role applies.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToIds?: (AdministrableProduct | MedicalDevice)[]

  /**
   * A USDM relationship between the ProductOrganizationRole and Organization classes which identifies the organization associated with the product organization role.
   * @cardinality 1
   * @relationshipType Ref
   * @modelName organization
   * @modelRepresentation Relationship
   */
  organizationId: Organization

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

/**
 * A scheduled occurrence of a decision event.
 * @preferredTerm Scheduled Decision Instance
 * @nciCode C201351
 * @modifier Concrete
 * @extends ScheduledInstance
 */
export interface ScheduledDecisionInstance extends ScheduledInstanceAbstract {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the scheduled Decision instance.
   * @preferredTerm Scheduled Decision Instance Name
   * @nciCode C207536
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  name: string

  /**
   * The short descriptive designation for the scheduled Decision instance.
   * @preferredTerm Scheduled Decision Instance Label
   * @nciCode C207535
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  label?: string

  /**
   * A narrative representation of the scheduled Decision instance.
   * @preferredTerm Scheduled Decision Instance Description
   * @nciCode C207534
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   * @inheritedFrom ScheduledInstance
   */
  description?: string

  /**
   * A USDM relationship within the ScheduledDecisionInstance class which identifies the default condition within a scheduled decision instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName defaultCondition
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  defaultConditionId?: ScheduledInstance

  /**
   * A USDM relationship between the ScheduledDecisionInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled decision instance.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName epoch
   * @modelRepresentation Relationship
   * @inheritedFrom ScheduledInstance
   */
  epochId?: StudyEpoch

  /**
   * A USDM relationship between the ScheduledDecisionInstance and ConditionAssignment classes which identifies the set of condition assignments associated with a scheduled decision instance.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName conditionAssignments
   * @modelRepresentation Relationship
   */
  conditionAssignments: ConditionAssignment[]

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

/**
 * The effect or consequence of an amendment on some aspect of the study.
 * @preferredTerm Study Amendment Impact
 * @nciCode C215500
 * @modifier Concrete
 */
export interface StudyAmendmentImpact {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * An instance of unstructured text that represents the study amendment impact.
   * @preferredTerm Study Amendment Impact Text
   * @nciCode C215611
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

  /**
   * An indication as to whether the study amendment's impact on the study is substantial.
   * @preferredTerm Study Amendment Impact Substantial Indicator
   * @nciCode C207538
   * @cardinality 1
   * @relationshipType Value
   * @modelName isSubstantial
   * @modelRepresentation Attribute
   */
  isSubstantial: boolean

  /**
   * A characterization or classification of the study amendment impact.
   * @preferredTerm Study Amendment Impact Type
   * @nciCode C215612
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * A brief written record relevant to the study amendment impact.
   * @preferredTerm Study Amendment Impact Notes
   * @nciCode C215613
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

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

/**
 * The act of enrolling subjects into a study. The subject will have met the inclusion/exclusion criteria to participate in the trial and will have signed an informed consent form. (CDISC Glossary)
 * @preferredTerm Subject Enrollment
 * @nciCode C37948
 * @modifier Concrete
 */
export interface SubjectEnrollment {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the subject enrollment.
   * @preferredTerm Subject Enrollment Name
   * @nciCode C215540
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the subject enrollment..
   * @preferredTerm Subject Enrollment Label
   * @nciCode C215542
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the subject enrollment.
   * @preferredTerm Subject Enrollment Description
   * @nciCode C215541
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * The value representing the number of individuals enrolled in a study.
   * @preferredTerm Subject Enrollment Quantity Value
   * @nciCode C207573
   * @cardinality 1
   * @relationshipType Value
   * @modelName quantity
   * @modelRepresentation Attribute
   */
  quantity: Quantity

  /**
   * A USDM relationship between the SubjectEnrollment and GeographicScope classes which identifies the geographic scope to which the subject enrollment applies.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName forGeographicScope
   * @modelRepresentation Relationship
   */
  forGeographicScope?: GeographicScope

  /**
   * A USDM relationship between the SubjectEnrollment and StudyCohort classes which identifies the study cohort to which the subject enrollment applies.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName forStudyCohort
   * @modelRepresentation Relationship
   */
  forStudyCohortId?: StudyCohort

  /**
   * A USDM relationship between the SubjectEnrollment and StudySite classes which identifies the study site to which the subject enrollment applies.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName forStudySite
   * @modelRepresentation Relationship
   */
  forStudySiteId?: StudySite

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

/**
 * The rationale for the change(s) to, or formal clarification of, a protocol.
 * @preferredTerm Study Amendment Reason
 * @nciCode C207457
 * @modifier Concrete
 */
export interface StudyAmendmentReason {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The rationale for the change(s) to, or formal clarification of, a protocol that is not otherwise specified.
   * @preferredTerm Other Reason for Study Amendment
   * @nciCode C207539
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName otherReason
   * @modelRepresentation Attribute
   */
  otherReason?: string

  /**
   * A symbol or combination of symbols which is assigned to the study amendment reason.
   * @preferredTerm Study Amendment Reason Code
   * @nciCode C207540
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

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

/**
 * The act of alteration or modification to a study.
 * @preferredTerm Study Change
 * @nciCode C215498
 * @modifier Concrete
 */
export interface StudyChange {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study change.
   * @preferredTerm Study Change Name
   * @nciCode C215604
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study change.
   * @preferredTerm Study Change Label
   * @nciCode C215606
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study change.
   * @preferredTerm Study Change Description
   * @nciCode C215605
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * An explanation as to the logical reasons for why a study change has occurred.
   * @preferredTerm Study Change Rationale
   * @nciCode C215608
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   */
  rationale: string

  /**
   * A short narrative representation describing the changes introduced in the current version of the study.
   * @preferredTerm Study Change Summary
   * @nciCode C215607
   * @cardinality 1
   * @relationshipType Value
   * @modelName summary
   * @modelRepresentation Attribute
   */
  summary: string

  /**
   * A USDM relationship between the StudyChange and DocumentContentReference class which provides the set of changed document sections related to the study change.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName changedSections
   * @modelRepresentation Relationship
   */
  changedSections: DocumentContentReference[]

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

/**
 * A written description of a change(s) to, or formal clarification of, a study.
 * @preferredTerm Study Amendment
 * @nciCode C207594
 * @modifier Concrete
 */
export interface StudyAmendment {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study amendment.
   * @preferredTerm Study Amendment Name
   * @nciCode C216995
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study amendment.
   * @preferredTerm Study Amendment Label
   * @nciCode C216997
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study amendment.
   * @preferredTerm Study Amendment Description
   * @nciCode C216996
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A string of numerals that uniquely identifies a protocol amendment.
   * @preferredTerm Study Amendment Number
   * @nciCode C207537
   * @cardinality 1
   * @relationshipType Value
   * @modelName number
   * @modelRepresentation Attribute
   */
  number: string

  /**
   * A brief written record relevant to the study amendment.
   * @preferredTerm Study Amendment Notes
   * @nciCode C215538
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A short narrative representation describing the changes introduced in the current version of the protocol.
   * @preferredTerm Study Amendment Summary
   * @nciCode C115627
   * @cardinality 1
   * @relationshipType Value
   * @modelName summary
   * @modelRepresentation Attribute
   */
  summary: string

  /**
   * A USDM relationship between the StudyAmendment and GeographicScope classes which identifies the set of geographic scopes associated with the study amendment.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName geographicScopes
   * @modelRepresentation Relationship
   */
  geographicScopes: GeographicScope[]

  /**
   * A USDM relationship between the StudyAmendment and GovernanceDate classes which provides the set of governance dates associated with the study amendment.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName dateValues
   * @modelRepresentation Relationship
   */
  dateValues?: GovernanceDate[]

  /**
   * A USDM relationship between the StudyAmendment and StudyAmendmentImpact classes which identifies the set of impacts that the study amendment has on the study or study subjects.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName impacts
   * @modelRepresentation Relationship
   */
  impacts?: StudyAmendmentImpact[]

  /**
   * A USDM relationship between the StudyAmendment and SubjectEnrollment classes which provides the set of subject enrollments associated with the study amendment.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName enrollments
   * @modelRepresentation Relationship
   */
  enrollments?: SubjectEnrollment[]

  /**
   * A USDM relationship between the StudyAmendment and StudyAmendmentReason classes which identifies the set of secondary reasons for issuing the study amendment.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName secondaryReasons
   * @modelRepresentation Relationship
   */
  secondaryReasons?: StudyAmendmentReason[]

  /**
   * A USDM relationship between the StudyAmendment and  StudyChange classes which identifies the set of changes associated with the study amendment.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName changes
   * @modelRepresentation Relationship
   */
  changes: StudyChange[]

  /**
   * A USDM relationship within the StudyAmendment class which identifies the study amendment that chronologically precedes the current study amendment.
   * @cardinality 0..1
   * @relationshipType Ref
   * @modelName previous
   * @modelRepresentation Relationship
   */
  previousId?: StudyAmendment

  /**
   * A USDM relationship between the StudyAmendment and StudyAmendmentReason classes which identifies the primary reason for issuing the study amendment.
   * @cardinality 1
   * @relationshipType Value
   * @modelName primaryReason
   * @modelRepresentation Relationship
   */
  primaryReason: StudyAmendmentReason

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
  scopeId: Organization

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

/**
 * The sponsor-defined name of the clinical study.
 * @preferredTerm Study Title
 * @nciCode C49802
 * @modifier Concrete
 */
export interface StudyTitle {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A characterization or classification of the study title.
   * @preferredTerm Study Title Type
   * @nciCode C207568
   * @cardinality 1
   * @relationshipType Value
   * @modelName type
   * @modelRepresentation Attribute
   */
  type: Code

  /**
   * An instance of unstructured text that represents the study title.
   * @preferredTerm Study Title Text
   * @nciCode C207567
   * @cardinality 1
   * @relationshipType Value
   * @modelName text
   * @modelRepresentation Attribute
   */
  text: string

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

/**
 * A designation that identifies the function of study personnel or an organization within the context of the study.
 * @preferredTerm Study Role
 * @nciCode C215497
 * @modifier Concrete
 */
export interface StudyRole {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the study role.
   * @preferredTerm Study Role Name
   * @nciCode C215600
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the study role.
   * @preferredTerm Study Role Label
   * @nciCode C215602
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the study role.
   * @preferredTerm Study Role Description
   * @nciCode C215601
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A symbol or combination of symbols which is assigned to the study role.
   * @preferredTerm Study Role Code
   * @nciCode C215603
   * @cardinality 1
   * @relationshipType Value
   * @modelName code
   * @modelRepresentation Attribute
   */
  code: Code

  /**
   * A brief written record relevant to the study role.
   * @preferredTerm Study Role Notes
   * @nciCode C216994
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyRole and AssignedPerson classes that identifies the set of individuals that are assigned to fill a particular role within the study.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName assignedPersons
   * @modelRepresentation Relationship
   */
  assignedPersons?: AssignedPerson[]

  /**
   * A USDM relationship between the StudyRole and Masking classes which describes the masking associated with the study role.
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName masking
   * @modelRepresentation Relationship
   */
  masking?: Masking

  /**
   * A USDM relationship between the StudyRole and Organization classes which identifies the set of organizations associated with the study role.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName organizations
   * @modelRepresentation Relationship
   */
  organizationIds?: Organization[]

  /**
   * A USDM relationship between the StudyRole and either StudyVersion or StudyDesign classes that identifies the study version or study design to which the study role applies.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName appliesTo
   * @modelRepresentation Relationship
   */
  appliesToIds?: (StudyVersion | StudyDesign)[]

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

/**
 * A plan at a particular point in time for a study.
 * @preferredTerm Study Version
 * @nciCode C188816
 * @modifier Concrete
 */
export interface StudyVersion {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * A sequence of characters used to identify, name, or characterize the study version.
   * @preferredTerm Study Version Identifier
   * @nciCode C207570
   * @cardinality 1
   * @relationshipType Value
   * @modelName versionIdentifier
   * @modelRepresentation Attribute
   */
  versionIdentifier: string

  /**
   * A therapeutic area classification based on the structure and operations of the business unit.
   * @preferredTerm Business Therapeutic Areas
   * @nciCode C201322
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName businessTherapeuticAreas
   * @modelRepresentation Attribute
   */
  businessTherapeuticAreas?: Code[]

  /**
   * A statement describing the overall rationale of the study. This field describes the contribution of this study to product development, i.e., what knowledge is being contributed from the conduct of this study.
   * @preferredTerm Study Rationale
   * @nciCode C94122
   * @cardinality 1
   * @relationshipType Value
   * @modelName rationale
   * @modelRepresentation Attribute
   */
  rationale: string

  /**
   * A brief written record relevant to the study version.
   * @preferredTerm Study Version Notes
   * @nciCode C215539
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName notes
   * @modelRepresentation Attribute
   */
  notes?: CommentAnnotation[]

  /**
   * A USDM relationship between the StudyVersion and Abbreviation classes which provides the set of abbreviations associated with the study version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName abbreviations
   * @modelRepresentation Relationship
   */
  abbreviations?: Abbreviation[]

  /**
   * A USDM relationship between the StudyVersion and GovernanceDate classes which provides the set of governance dates associated with the study version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName dateValues
   * @modelRepresentation Relationship
   */
  dateValues?: GovernanceDate[]

  /**
   * A USDM relationship between the StudyVersion and ReferenceIdentifier classes which identifies the set of reference identifiers associated with the study version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName referenceIdentifiers
   * @modelRepresentation Relationship
   */
  referenceIdentifiers?: ReferenceIdentifier[]

  /**
   * A USDM relationship between the StudyVersion and StudyAmendment classes which identifies the set of study amendments associated with the study version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName amendments
   * @modelRepresentation Relationship
   */
  amendments?: StudyAmendment[]

  /**
   * A USDM relationship between the StudyVersion and StudyDefinitionDocumentVersion classes which identifies the version of the study definition document associated with the study version.
   * @cardinality 0..*
   * @relationshipType Ref
   * @modelName documentVersions
   * @modelRepresentation Relationship
   */
  documentVersionIds?: StudyDefinitionDocumentVersion[]

  /**
   * A USDM relationship between the StudyVersion and StudyDesign classes which identifies the set of study designs associated with the study version.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName studyDesigns
   * @modelRepresentation Relationship
   */
  studyDesigns?: StudyDesign[]

  /**
   * A USDM relationship between the StudyVersion and StudyIdentifier classes which identifies the set of study identifiers associated with the study version.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName studyIdentifiers
   * @modelRepresentation Relationship
   */
  studyIdentifiers: StudyIdentifier[]

  /**
   * A USDM relationship between the StudyVersion and StudyTitle classes which identifies the set of study titles associated with the study version.
   * @cardinality 1..*
   * @relationshipType Value
   * @modelName titles
   * @modelRepresentation Relationship
   */
  titles: StudyTitle[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  extensionAttributes?: ExtensionAttribute[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  eligibilityCriterionItems?: EligibilityCriterionItem[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  narrativeContentItems?: NarrativeContentItem[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  roles?: StudyRole[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  organizations?: Organization[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  studyInterventions?: StudyIntervention[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  administrableProducts?: AdministrableProduct[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  medicalDevices?: MedicalDevice[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  productOrganizationRoles?: ProductOrganizationRole[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  biomedicalConcepts?: BiomedicalConcept[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  bcCategories?: BiomedicalConceptCategory[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  bcSurrogates?: BiomedicalConceptSurrogate[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  dictionaries?: SyntaxTemplateDictionary[]

  /**
   * @cardinality 0..*
   * @relationshipType Value
   */
  conditions?: Condition[]

  /**
   * @cardinality 1
   * @relationshipType Value
   */
  instanceType: string

}

/**
 * A clinical study involves research using human volunteers (also called participants) that is intended to add to medical knowledge. There are two main types of clinical studies: clinical trials (also called interventional studies) and observational studies. (CDISC Glossary)
 * @preferredTerm Clinical Study
 * @nciCode C15206
 * @modifier Concrete
 */
export interface Study {
  /**
   * @cardinality 1
   * @relationshipType Value
   * @modelName id
   * @modelRepresentation Attribute
   */
  id: string

  /**
   * The literal identifier (i.e., distinctive designation) of the clinical study.
   * @preferredTerm Clinical Study Name
   * @nciCode C68631
   * @cardinality 1
   * @relationshipType Value
   * @modelName name
   * @modelRepresentation Attribute
   */
  name: string

  /**
   * The short descriptive designation for the clinical study.
   * @preferredTerm Clinical Study Label
   * @nciCode C207479
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName label
   * @modelRepresentation Attribute
   */
  label?: string

  /**
   * A narrative representation of the clinical study.
   * @preferredTerm Clinical Study Description
   * @nciCode C142704
   * @cardinality 0..1
   * @relationshipType Value
   * @modelName description
   * @modelRepresentation Attribute
   */
  description?: string

  /**
   * A USDM relationship between the Study and StudyVersion classes which identifies the set of versions associated with the study.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName versions
   * @modelRepresentation Relationship
   */
  versions?: StudyVersion[]

  /**
   * A USDM relationship between the Study and StudyDefinitionDocument classes signifying that the study is documented in a study definition document.
   * @cardinality 0..*
   * @relationshipType Value
   * @modelName documentedBy
   * @modelRepresentation Relationship
   */
  documentedBy?: StudyDefinitionDocument[]

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

// Union types for abstract classes
export type Identifier = AdministrableProductIdentifier | MedicalDeviceIdentifier | ReferenceIdentifier | StudyIdentifier
export type PopulationDefinition = StudyCohort | StudyDesignPopulation
export type QuantityRange = Quantity | Range
export type ScheduledInstance = ScheduledActivityInstance | ScheduledDecisionInstance
export type StudyDesign = InterventionalStudyDesign | ObservationalStudyDesign
export type SyntaxTemplate = Characteristic | Condition | EligibilityCriterionItem | Endpoint | IntercurrentEvent | Objective
