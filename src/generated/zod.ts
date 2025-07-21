// Auto-generated Zod schemas from schema
// Generated on: 2025-07-21T23:26:59.969Z

import { z } from 'zod';

/**
 * The total amount (number), or the limits (minimum and maximum) of a variation.
 * @preferredTerm Quantity or Range
 * @nciCode C217000
 */
export const QuantityRangeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
});

export type QuantityRange = z.infer<typeof QuantityRangeSchema>;

/**
 * An alternative symbol or combination of symbols which is assigned to the members of a collection.
 * @preferredTerm Alias Code
 * @nciCode C201344
 */
export const AliasCodeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A combination of symbols that is used to represent the standard code.
  standardCode: z.lazy(() => CodeSchema),
  // Alternative combinations of symbols used to represent aliases or alternatives to the standard code.
  standardCodeAliases: z.array(z.lazy(() => CodeSchema)).min(0).optional(),
  extensionAttributes: z.array(z.lazy(() => ExtensionAttributeSchema)).min(0).optional(),
  instanceType: z.string(),
});

export type AliasCode = z.infer<typeof AliasCodeSchema>;

/**
 * How much there is of something that can be measured; the total amount or number.
 * @preferredTerm Quantity
 * @nciCode C25256
 */
export const QuantitySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A numerical quantity measured or assigned or computed.
  value: z.number(),
  // The type of unit of measure being used to express a quantity.
  unit: z.lazy(() => AliasCodeSchema).optional(),
  extensionAttributes: z.array(z.lazy(() => ExtensionAttributeSchema)).min(0).optional(),
  instanceType: z.string(),
});

export type Quantity = z.infer<typeof QuantitySchema>;

/**
 * An expression that defines the lower and upper limits of a variation.
 * @preferredTerm Range
 * @nciCode C38013
 */
export const RangeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The smallest value in quantity or degree in a set of values.
  minValue: z.lazy(() => QuantitySchema),
  // The largest value in quantity or degree in a set of values.
  maxValue: z.lazy(() => QuantitySchema),
  // An indication as to whether the value range is almost, but not quite, exact.
  isApproximate: z.boolean(),
  extensionAttributes: z.array(z.lazy(() => ExtensionAttributeSchema)).min(0).optional(),
  instanceType: z.string(),
});

export type Range = z.infer<typeof RangeSchema>;

/**
 */
export const ExtensionClassSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  url: z.string(),
  extensionAttributes: z.array(z.lazy(() => ExtensionAttributeSchema)).min(1),
  instanceType: z.string(),
});

export type ExtensionClass = z.infer<typeof ExtensionClassSchema>;

/**
 */
export const ExtensionAttributeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  url: z.string(),
  valueString: z.string().optional(),
  valueBoolean: z.boolean().optional(),
  valueInteger: z.number().int().optional(),
  valueId: z.string().optional(),
  valueQuantity: z.lazy(() => QuantitySchema).optional(),
  valueRange: z.lazy(() => RangeSchema).optional(),
  valueCode: z.lazy(() => CodeSchema).optional(),
  valueAliasCode: z.lazy(() => AliasCodeSchema).optional(),
  valueExtensionClass: z.lazy(() => ExtensionClassSchema).optional(),
  extensionAttributes: z.array(z.lazy(() => ExtensionAttributeSchema)).min(0).optional(),
  instanceType: z.string(),
});

export type ExtensionAttribute = z.infer<typeof ExtensionAttributeSchema>;

/**
 * A symbol or combination of symbols which is assigned to the members of a collection.
 * @preferredTerm Code
 * @nciCode C25162
 */
export const CodeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal value of a code.
  code: z.string(),
  // The literal identifier (i.e., distinctive designation) of the system used to assign and/or manage codes.
  codeSystem: z.string(),
  // The version of the code system.
  codeSystemVersion: z.string(),
  // Standardized or dictionary-derived human readable text associated with a code.
  decode: z.string(),
  extensionAttributes: z.array(z.lazy(() => ExtensionAttributeSchema)).min(0).optional(),
  instanceType: z.string(),
});

export type Code = z.infer<typeof CodeSchema>;

/**
 * An explanatory or critical comment, or other in-context information (e.g., pattern, motif, link), that has been associated with data or other types of information.
 * @preferredTerm Comment Annotation
 * @nciCode C44272
 */
export const CommentAnnotationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of unstructured text that represents the comment annotation.
  text: z.string(),
  // A symbol or combination of symbols which is assigned to the comment annotation.
  codes: z.array(CodeSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type CommentAnnotation = z.infer<typeof CommentAnnotationSchema>;

/**
 * A set of letters that are drawn from a word or from a sequence of words and that are used for brevity in place of the full word or phrase. (CDISC Glossary)
 * @preferredTerm Abbreviation
 * @nciCode C42610
 */
export const AbbreviationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal value of an instance of unstructured text that is used as the abbreviation.
  abbreviatedText: z.string(),
  // The full literal representation of the abbreviation.
  expandedText: z.string(),
  // A brief written record relevant to the abbreviation.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Abbreviation = z.infer<typeof AbbreviationSchema>;

/**
 * The length of time during which something continues.
 * @preferredTerm Duration
 * @nciCode C25330
 */
export const DurationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of unstructured text that represents the event duration.
  text: z.string().optional(),
  // The value representing the amount of time over which the event occurs.
  quantity: QuantityRangeSchema.optional(),
  // An indication as to whether the event duration is planned to vary within and/or across subjects.
  durationWillVary: z.boolean(),
  // The explanation for why the event duration will vary within and/or across subjects.
  reasonDurationWillVary: z.string().optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Duration = z.infer<typeof DurationSchema>;

/**
 * A standardized representation of the location of a person, business, building, or organization. (NCI)
 * @preferredTerm Address
 * @nciCode C25407
 */
export const AddressSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A standardized representation of the complete set of components denoting the physical address of the person, business, building, or organization.
  text: z.string().optional(),
  // The street name and number, building number, apartment or unit number, or post office box number where an entity is physically located.
  lines: z.array(z.string()).min(0).optional(),
  // An administrative or territorial division of a city, town, county, parish, state, country, or other locality based on a shared characteristic.
  district: z.string().optional(),
  // A relatively large and/or densely populated area of human habitation with administrative or legal status that may be specified as a component of a postal address.
  city: z.string().optional(),
  // An alphanumeric code assigned to a mail delivery area.
  postalCode: z.string().optional(),
  // A sub-division of a country that forms part of a federal union. States are usually, but not always, more autonomous than provinces and may have different laws from the central government.
  state: z.string().optional(),
  // A sovereign nation occupying a distinct territory and ruled by an autonomous government.
  country: CodeSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Address = z.infer<typeof AddressSchema>;

/**
 * The location at which a study investigator conducts study activities.
 * @preferredTerm Study Site
 * @nciCode C80403
 */
export const StudySiteSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study site.
  name: z.string(),
  // The short descriptive designation for the study site.
  label: z.string().optional(),
  // A narrative representation of the study site.
  description: z.string().optional(),
  // The country in which the study site is located.
  country: CodeSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudySite = z.infer<typeof StudySiteSchema>;

/**
 * A formalized group of persons or other organizations collected together for a common purpose (such as administrative, legal, political) and the infrastructure to carry out that purpose. (BRIDG)
 * @preferredTerm Organization
 * @nciCode C19711
 */
export const OrganizationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the organization.
  name: z.string(),
  // The short descriptive designation for the organization.
  label: z.string().optional(),
  // A unique symbol that establishes identity of the organization. (BRIDG)
  identifier: z.string(),
  // The name of the organization that provides the identifier for the entity.
  identifierScheme: z.string(),
  // A characterization or classification of the formalized group of persons or other organizations collected together for a common purpose (such as administrative, legal, political) and the infrastructure to carry out that purpose.
  type: CodeSchema,
  // A USDM relationship between the Organization and Address classes which provides the legal address for an organization.
  legalAddress: AddressSchema.optional(),
  // A USDM relationship between the Organization and StudySite classes which identifies the set of study sites managed by the organization.
  managedSites: z.array(StudySiteSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Organization = z.infer<typeof OrganizationSchema>;

/**
 * One or more characters used to identify, name, or characterize the nature, properties, or contents of a thing.
 * @preferredTerm Identifier
 * @nciCode C25364
 */
export const IdentifierSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of structured text that represents the administrable product.
  text: z.string(),
  // A USDM relationship between the AdministrableProductIdentifier and Organization class which provides the details associated with which provides the details associated with each organization that has assigned the administrable product identifier.
  scopeId: OrganizationSchema,
});

export type Identifier = z.infer<typeof IdentifierSchema>;

/**
 * A sequence of characters used to identify, name, or characterize the administrable product.
 * @preferredTerm Administrable Product Identifier
 * @nciCode C215493
 */
export const AdministrableProductIdentifierSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of structured text that represents the administrable product.
  text: z.string(),
  // A USDM relationship between the AdministrableProductIdentifier and Organization class which provides the details associated with which provides the details associated with each organization that has assigned the administrable product identifier.
  scopeId: OrganizationSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type AdministrableProductIdentifier = z.infer<typeof AdministrableProductIdentifierSchema>;

/**
 * A characteristic from a set of characteristics used to define an administrable product.
 * @preferredTerm Administrable Product Property
 * @nciCode C215494
 */
export const AdministrableProductPropertySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the administrable product property.
  name: z.string(),
  // A characterization or classification of the administrable product property.
  type: CodeSchema,
  // An instance of structured text that represents the administrable product property.
  text: z.string(),
  // The numeric value associated with an administrable product property.
  quantity: QuantitySchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type AdministrableProductProperty = z.infer<typeof AdministrableProductPropertySchema>;

/**
 * The content of an substance expressed quantitatively per dosage unit, per unit of volume, or per unit of weight, according to the pharmaceutical dose form of the product.
 * @preferredTerm Substance Strength
 * @nciCode C215495
 */
export const StrengthSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the substance strength.
  name: z.string(),
  // The short descriptive designation for the substance strength.
  label: z.string().optional(),
  // A narrative representation of the substance strength.
  description: z.string().optional(),
  // The dividend of a fraction.
  numerator: QuantityRangeSchema,
  // The divisor of a fraction.
  denominator: QuantitySchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Strength = z.infer<typeof StrengthSchema>;

/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 * @preferredTerm Substance
 * @nciCode C45306
 */
export const SubstanceSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the substance.
  name: z.string(),
  // The short descriptive designation for the substance.
  label: z.string().optional(),
  // A narrative representation of the substance.
  description: z.string().optional(),
  // A symbol or combination of symbols which is assigned to the substance.
  codes: z.array(CodeSchema).min(0).optional(),
  // A USDM relationship between the Substance and Strength class which provides the values of the strengths of the substance.
  strengths: z.array(StrengthSchema).min(1),
  // A USDM relationship within the Substance class that identifies the association between two substances, one of which is used as a reference for the other.
  referenceSubstance: z.lazy(() => SubstanceSchema).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Substance = z.infer<typeof SubstanceSchema>;

/**
 * Any component that constitutes a part of a compounded substance or mixture.
 * @preferredTerm Ingredient
 * @nciCode C51981
 */
export const IngredientSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The intended use of the ingredient within the context of the compounded substance or mixture.
  role: CodeSchema,
  // A USDM relationship between the Ingredient and Substance classes that identifies the substance associated with the ingredient.
  substance: SubstanceSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Ingredient = z.infer<typeof IngredientSchema>;

/**
 * Any study product that is formulated and presented in the form that is suitable for administration to a study participant.
 * @preferredTerm Administrable Product
 * @nciCode C215492
 */
export const AdministrableProductSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the administrable product.
  name: z.string(),
  // The short descriptive designation for the administrable product.
  label: z.string().optional(),
  // A narrative representation of the administrable product.
  description: z.string().optional(),
  // The physical form in which formulated ingredient(s) are presented in the administrable product.
  administrableDoseForm: AliasCodeSchema,
  // An indication as to whether the administrable product is obtained from a local or central source.
  sourcing: CodeSchema.optional(),
  // An indication as to whether the administrable product is an investigational medicinal product or an auxiliary medicinal product.
  productDesignation: CodeSchema,
  // The pharmacological class of the administrable product.
  pharmacologicClass: CodeSchema.optional(),
  // A brief written record relevant to the administrable product.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the AdministrableProduct and AdministrableProductIdentifier classes which provides the set of identifiers related to the administrable product.
  identifiers: z.array(AdministrableProductIdentifierSchema).min(0).optional(),
  // A USDM relationship between the AdministrableProduct and AdministrableProductProperty classes which provides the set of properties related to the administrable product.
  properties: z.array(AdministrableProductPropertySchema).min(0).optional(),
  // A USDM relationship between the AdministrableProduct and Ingredient classes which provides the set of ingredients related to the administrable product.
  ingredients: z.array(IngredientSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type AdministrableProduct = z.infer<typeof AdministrableProductSchema>;

/**
 * A sequence of characters used to identify, name, or characterize the medical device.
 * @preferredTerm Medical Device Identifier
 * @nciCode C215501
 */
export const MedicalDeviceIdentifierSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of structured text that represents the medical device identifier.
  text: z.string(),
  // A USDM relationship between the MedicalDeviceIdentifier and Organization classes which provides the details associated with each organization that has assigned the identifier.
  scopeId: OrganizationSchema,
  // A characterization or classification of the medical device identifier.
  type: CodeSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type MedicalDeviceIdentifier = z.infer<typeof MedicalDeviceIdentifierSchema>;

/**
 * Any instrument, apparatus, implement, machine, appliance, implant, reagent for in vitro use, software, material or other similar or related article, intended by the manufacturer to be used, alone or in combination for, one or more specific medical purpose(s). [After REGULATION (EU) 2017/745 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 5 April 2017 on medical devices]
 * @preferredTerm Medical Device
 * @nciCode C16830
 */
export const MedicalDeviceSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the medical device.
  name: z.string(),
  // The short descriptive designation for the medical device.
  label: z.string().optional(),
  // A narrative representation of the medical device.
  description: z.string().optional(),
  // A form or variant of hardware; one of a sequence of copies of the physical components from which a computer is constructed, each incorporating new modifications.
  hardwareVersion: z.string().optional(),
  // A form or variant of software; one of a sequence of copies of a software program, each incorporating new modifications. (NCI)
  softwareVersion: z.string().optional(),
  // An indication as to whether the medical device is obtained from a local or central source.
  sourcing: CodeSchema.optional(),
  // A brief written record relevant to the medical device.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the MedicalDevice and AdministrableProduct classes which identifies the administrable product that is an integral component of the medical device.
  embeddedProductId: AdministrableProductSchema.optional(),
  // A USDM relationship between the MedicalDevice and MedicalDeviceIdentifier classes which provides the set of identifiers related to the medical device.
  identifiers: z.array(MedicalDeviceIdentifierSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type MedicalDevice = z.infer<typeof MedicalDeviceSchema>;

/**
 * The act of dispensing, applying, or tendering a product, agent, or therapy.
 * @preferredTerm Administration
 * @nciCode C25409
 */
export const AdministrationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) for the administration of a product, agent, or therapy.
  name: z.string(),
  // The short descriptive designation for the administration of a product, agent, or therapy.
  label: z.string().optional(),
  // A narrative representation for the administration of a product, agent, or therapy.
  description: z.string().optional(),
  // The value representing the amount of an agent given to an individual at one time.
  dose: QuantitySchema.optional(),
  // The number of doses administered per a specific interval.
  frequency: AliasCodeSchema.optional(),
  // The pathway by which a substance is administered in order to reach the site of action in the body.
  route: AliasCodeSchema.optional(),
  // The amount of time elapsed during the administration of an agent.
  duration: DurationSchema,
  // A brief written record relevant to the administration of the product, agent, or therapy.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Administration and AdministrableProductDefinition classes which identifies the administrable product associated with the administration of the product, agent, or therapy.
  administrableProductId: AdministrableProductSchema.optional(),
  // A USDM relationship between the Administration and MedicalDevice classes which identifies the medical device associated with an instance of product, agent, or therapy administration.
  medicalDeviceId: MedicalDeviceSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Administration = z.infer<typeof AdministrationSchema>;

/**
 * Any agent, device, or procedure being tested or used as a reference or comparator in the conduct of a clinical trial.
 * @preferredTerm Study Intervention
 * @nciCode C207649
 */
export const StudyInterventionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study intervention.
  name: z.string(),
  // The short descriptive designation for the study intervention.
  label: z.string().optional(),
  // A narrative representation of the study intervention.
  description: z.string().optional(),
  // The intended use of the trial intervention within the context of the study design.
  role: CodeSchema,
  // The kind of product or procedure studied in a trial.
  type: CodeSchema,
  // A symbol or combination of symbols which is assigned to the study intervention.
  codes: z.array(CodeSchema).min(0).optional(),
  // The value representing the minimum amount of time required to meet the criteria for response to study intervention.
  minimumResponseDuration: QuantitySchema.optional(),
  // A brief written record relevant to the study intervention.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyIntervention and AgentAdministration classes which identifies the set of agent administrations associated with the study intervention.
  administrations: z.array(AdministrationSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyIntervention = z.infer<typeof StudyInterventionSchema>;

/**
 * Any activity performed by manual and/or instrumental means for the purpose of diagnosis, assessment, therapy, prevention, or palliative care.
 * @preferredTerm Procedure
 * @nciCode C98769
 */
export const ProcedureSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the procedure.
  name: z.string(),
  // The short descriptive designation for the procedure.
  label: z.string().optional(),
  // A narrative representation of the procedure.
  description: z.string().optional(),
  // A characterization or classification of the study procedure.
  procedureType: z.string(),
  // A symbol or combination of symbols which is assigned to medical procedure.
  code: CodeSchema,
  // A brief written record relevant to the procedure.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Procedure and StudyInterventionclasses which provides the details associated with an instance of an intervention performed during the conduct of a procedure.
  studyInterventionId: StudyInterventionSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Procedure = z.infer<typeof ProcedureSchema>;

/**
 * A symbol or combination of symbols representing the response to the question.
 * @preferredTerm Response Code
 * @nciCode C201347
 */
export const ResponseCodeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the response code.
  name: z.string(),
  // The short descriptive designation for the response code.
  label: z.string().optional(),
  // An indication as to whether the response code is activated for use within a given usage context.
  isEnabled: z.boolean(),
  // The literal value of a response code.
  code: CodeSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ResponseCode = z.infer<typeof ResponseCodeSchema>;

/**
 * A characteristic from a set of characteristics used to define a biomedical concept.
 * @preferredTerm Biomedical Concept Property
 * @nciCode C202493
 */
export const BiomedicalConceptPropertySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the biomedical concept property.
  name: z.string(),
  // The short descriptive designation for the biomedical concept property.
  label: z.string().optional(),
  // An indication as to whether the biomedical concept property is required.
  isRequired: z.boolean(),
  // An indication as to whether the biomedical concept property is activated for use within a given usage context for a biomedical concept.
  isEnabled: z.boolean(),
  // The structural format of the biomedical concept property response value. The datatype is carried in the attribute and influences the set of allowable values the attribute may assume. (After HL7)
  datatype: z.string(),
  // A concept unique identifier assigned to a biomedical concept property that points to the meaning of that biomedical concept property.
  code: AliasCodeSchema,
  // A brief written record relevant to the biomedical concept property.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the BiomedicalConceptProperty and ResponseCode classes which identifies the set of response codes associated with the biomedical concept property.
  responseCodes: z.array(ResponseCodeSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type BiomedicalConceptProperty = z.infer<typeof BiomedicalConceptPropertySchema>;

/**
 * A unit of biomedical knowledge created from a unique combination of characteristics that include implementation details like variables and terminologies, used as building blocks for standardized, hierarchically structured clinical research information.
 * @preferredTerm Biomedical Concept
 * @nciCode C201345
 */
export const BiomedicalConceptSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the biomedical concept.
  name: z.string(),
  // The short descriptive designation for the biomedical concept.
  label: z.string().optional(),
  // A word or an expression that serves as a figurative, symbolic, or exact substitute for a biomedical concept, and which has the same meaning.
  synonyms: z.array(z.string()).min(0).optional(),
  // A citation to an authoritative source for a biomedical concept.
  reference: z.string(),
  // A concept unique identifier assigned to a biomedical concept that points to the meaning of that biomedical concept.
  code: AliasCodeSchema,
  // A brief written record relevant to the biomedical concept.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the BiomedicalConcept and BiomedicalConceptProperty classes which identifies the set of properties associated with the biomedical concept.
  properties: z.array(BiomedicalConceptPropertySchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type BiomedicalConcept = z.infer<typeof BiomedicalConceptSchema>;

/**
 * A named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
 * @preferredTerm Study Epoch
 * @nciCode C71738
 */
export const StudyEpochSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study epoch, i.e., the named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
  name: z.string(),
  // The short descriptive designation for the study epoch.
  label: z.string().optional(),
  // A narrative representation of the study epoch.
  description: z.string().optional(),
  // A characterization or classification of the study epoch, i.e., the named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose.
  type: CodeSchema,
  // A brief written record relevant to the study epoch.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship within the StudyEpoch class which identifies the study epoch that chronologically precedes the current study epoch.
  previousId: z.lazy(() => StudyEpochSchema).optional(),
  // A USDM relationship within the StudyEpoch class which identifies the study epoch that chronologically follows the current study epoch.
  nextId: z.lazy(() => StudyEpochSchema).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyEpoch = z.infer<typeof StudyEpochSchema>;

/**
 * A scheduled occurrence of a temporal event.
 * @preferredTerm Scheduled Instance
 * @nciCode C201299
 */
export const ScheduledInstanceSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the scheduled activity instance.
  name: z.string(),
  // The short descriptive designation for the scheduled activity instance.
  label: z.string().optional(),
  // A narrative representation of the scheduled activity instance.
  description: z.string().optional(),
  // A USDM relationship within the ScheduledActivityInstance class which identifies the default condition within a scheduled activity instance.
  defaultConditionId: z.lazy(() => ScheduledInstanceSchema).optional(),
  // A USDM relationship between the ScheduledActivityInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled activity instance.
  epochId: StudyEpochSchema.optional(),
});

export type ScheduledInstance = z.infer<typeof ScheduledInstanceSchema>;

/**
 * To go out of or leave the schedule timeline.
 * @preferredTerm Schedule Timeline Exit
 * @nciCode C201349
 */
export const ScheduleTimelineExitSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ScheduleTimelineExit = z.infer<typeof ScheduleTimelineExitSchema>;

/**
 * The chronological relationship between temporal events.
 * @preferredTerm Timing
 * @nciCode C80484
 */
export const TimingSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the timing.
  name: z.string(),
  // The short descriptive designation for the timing.
  label: z.string().optional(),
  // A narrative representation of the chronological relationship between temporal events.
  description: z.string().optional(),
  // A characterization or classification of the chronological relationship between temporal events.
  type: CodeSchema,
  // The name of the reference event used to define the temporal relationship with another event.
  relativeToFrom: CodeSchema,
  // The temporal value of the chronological relationship between temporal events.
  value: z.string(),
  // The short descriptive designation for the timing value.
  valueLabel: z.string(),
  // The short descriptive designation for a time period, or other type of interval, during which a temporal event may be achieved, obtained, or observed.
  windowLabel: z.string().optional(),
  // The earliest chronological value of an allowable period of time during which a temporal event takes place.
  windowLower: z.string().optional(),
  // The latest chronological value of an allowable period of time during which a temporal event takes place.
  windowUpper: z.string().optional(),
  // A USDM relationship between the Timing and ScheduledInstance classes which identifies the scheduled instance (e.g., scheduled activity instances or scheduled decision instances) to which the timing is relative to.
  relativeToScheduledInstanceId: ScheduledInstanceSchema.optional(),
  // A USDM relationship between the Timing and ScheduledInstance classes which identifies the scheduled instance (e.g., scheduled activity instances or scheduled decision instances) to which the timing applies.
  relativeFromScheduledInstanceId: ScheduledInstanceSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Timing = z.infer<typeof TimingSchema>;

/**
 * A chronological schedule of planned temporal events.
 * @preferredTerm Schedule Timeline
 * @nciCode C201348
 */
export const ScheduleTimelineSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the schedule timeline.
  name: z.string(),
  // The short descriptive designation for the schedule timeline.
  label: z.string().optional(),
  // A narrative representation of the schedule timeline.
  description: z.string().optional(),
  // A logical evaluation on which rests the validity of entry into a schedule timeline.
  entryCondition: z.string(),
  // An indication as to whether the timeline or timeline component is part of the central or principal timeline.
  mainTimeline: z.boolean(),
  // The period of time over which the scheduled timeline is intended to take place.
  plannedDuration: DurationSchema.optional(),
  // A USDM relationship between the ScheduleTimeline and ScheduledInstance classes which identifies the set of scheduled instances (e.g., scheduled activity instances or scheduled decision instances) associated with the scheduled timeline.
  instances: z.array(ScheduledInstanceSchema).min(0).optional(),
  // A USDM relationship between the ScheduleTimeline and ScheduledInstance classes which defines the entry into a scheduled instance (e.g., scheduled activity instances or scheduled decision instances) for a timeline.
  entryId: ScheduledInstanceSchema,
  // A USDM relationship between the ScheduleTimeline and ScheduleTimelineExit classes which identifies the set of exits from the scheduled timeline.
  exits: z.array(ScheduleTimelineExitSchema).min(0).optional(),
  // A USDM relationship between the ScheduleTimeline and Timing classes which identifies the set of timings associated with the scheduled timeline.
  timings: z.array(TimingSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ScheduleTimeline = z.infer<typeof ScheduleTimelineSchema>;

/**
 * A concept that substitutes for a standard biomedical concept from the designated source.
 * @preferredTerm Biomedical Concept Surrogate
 * @nciCode C207590
 */
export const BiomedicalConceptSurrogateSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the biomedical concept surrogate.
  name: z.string(),
  // The short descriptive designation for the biomedical concept surrogate.
  label: z.string().optional(),
  // A narrative representation of the biomedical concept surrogate.
  description: z.string().optional(),
  // A citation to an authoritative source for a biomedical concept surrogate.
  reference: z.string().optional(),
  // A brief written record relevant to the biomedical concept surrogate.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type BiomedicalConceptSurrogate = z.infer<typeof BiomedicalConceptSurrogateSchema>;

/**
 * A grouping of biomedical concepts based on some commonality or by user defined characteristics.
 * @preferredTerm Biomedical Concept Category
 * @nciCode C201346
 */
export const BiomedicalConceptCategorySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the biomedical concept category.
  name: z.string(),
  // The short descriptive designation for the biomedical concept category.
  label: z.string().optional(),
  // A narrative representation of the biomedical concept category.
  description: z.string().optional(),
  // A symbol or combination of symbols which is assigned to the biomedical concept category.
  code: AliasCodeSchema.optional(),
  // A brief written record relevant to the biomedical concept category.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the BiomedicalConceptCategory and BiomedicalConcept classes which identifies the set of biomedical concept members associated with the biomedical concept category.
  memberIds: z.array(BiomedicalConceptSchema).min(0).optional(),
  // A USDM relationship within the BiomedicalConceptCategory class which identifies the set of child categories of a biomedical concept.
  childIds: z.array(z.lazy(() => BiomedicalConceptCategorySchema)).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type BiomedicalConceptCategory = z.infer<typeof BiomedicalConceptCategorySchema>;

/**
 * An action, undertaking, or event, which is anticipated to be performed or observed, or was performed or observed, according to the study protocol during the execution of the study.
 * @preferredTerm Study Activity
 * @nciCode C71473
 */
export const ActivitySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study activity.
  name: z.string(),
  // The short descriptive designation for the study activity.
  label: z.string().optional(),
  // A narrative representation of the study activity.
  description: z.string().optional(),
  // A brief written record relevant to the activity.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Activity and Procedure classes which identifies the set of defined procedures associated with the activity.
  definedProcedures: z.array(ProcedureSchema).min(0).optional(),
  // A USDM relationship between the Activity and BiomedicalConcept classes which identifies the set of biomedical concepts associated with the activity.
  biomedicalConceptIds: z.array(BiomedicalConceptSchema).min(0).optional(),
  // A USDM relationship within the Activity class which identifies the activity that follows the current activity in the display order.
  nextId: z.lazy(() => ActivitySchema).optional(),
  // A USDM relationship between the Activity and ScheduleTimeline classes which provides the details associated with an instance of the scheduled timeline related to the activity.
  timelineId: ScheduleTimelineSchema.optional(),
  // A USDM relationship within the Activity class which identifies the set of child activities associated with an activity.
  childIds: z.array(z.lazy(() => ActivitySchema)).min(0).optional(),
  // A USDM relationship within the Activity class which identifies the activity that precedes the current activity in the display order.
  previousId: z.lazy(() => ActivitySchema).optional(),
  // A USDM relationship between the Activity and BiomedicalConceptSurrogate classes which identifies the set of biomedical concept surrogates associated with the activity.
  bcSurrogateIds: z.array(BiomedicalConceptSurrogateSchema).min(0).optional(),
  // A USDM relationship between the Activity and BiomedicalConceptCategory classes which identifies the set of biomedical concept categories associated with the activity.
  bcCategoryIds: z.array(BiomedicalConceptCategorySchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Activity = z.infer<typeof ActivitySchema>;

/**
 * The paired name and value for a given parameter.
 * @preferredTerm Parameter Map
 * @nciCode C207456
 */
export const ParameterMapSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // Character strings bounded by angle brackets that act as containers for programming language elements.
  tag: z.string(),
  // The reference for a tag used in programming languages, such as a markup language (e.g., HTML, XML), to store attributes and elements.
  reference: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ParameterMap = z.infer<typeof ParameterMapSchema>;

/**
 * A reference source that provides a listing of valid parameter names and values used in syntax template text strings.
 * @preferredTerm Syntax Template Dictionary
 * @nciCode C207597
 */
export const SyntaxTemplateDictionarySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the syntax template dictionary.
  name: z.string(),
  // The short descriptive designation for the syntax template dictionary.
  label: z.string().optional(),
  // A narrative representation of the syntax template dictionary.
  description: z.string().optional(),
  // A USDM relationship between the SyntaxTemplateDictionary and ParameterMap classes which identifies the set of parameter maps (parameter map entries) associated with a syntax template dictionary.
  parameterMaps: z.array(ParameterMapSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type SyntaxTemplateDictionary = z.infer<typeof SyntaxTemplateDictionarySchema>;

/**
 * A standardized pattern used for the arrangement of words and phrases to create well-formed, structured sentences.
 * @preferredTerm Syntax Template
 * @nciCode C207596
 */
export const SyntaxTemplateSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the characteristic.
  name: z.string(),
  // The short descriptive designation for the characteristic.
  label: z.string().optional(),
  // A narrative representation of the characteristic.
  description: z.string().optional(),
  // An instance of structured text that represents the characteristic.
  text: z.string(),
  // A brief written record relevant to the characteristic.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Characteristic and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to characteristics.
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
});

export type SyntaxTemplate = z.infer<typeof SyntaxTemplateSchema>;

/**
 * An individual item within the container that holds an instance of an eligibility criterion.
 * @preferredTerm Eligibility Criterion Item
 * @nciCode C215506
 */
export const EligibilityCriterionItemSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the eligibility criterion item.
  name: z.string(),
  // The short descriptive designation for the eligibility criterion item.
  label: z.string().optional(),
  // A narrative representation of the eligibility criterion item.
  description: z.string().optional(),
  // An instance of structured text that represents the eligibility criterion item.
  text: z.string(),
  // A brief written record relevant to the eligibility criterion item.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the EligibilityCriterionItem and SyntaxTemplateDictionary classes which provides the dictionary entry associated with a eligibility criterion item. 
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type EligibilityCriterionItem = z.infer<typeof EligibilityCriterionItemSchema>;

/**
 * Characteristics which are necessary to allow a subject to participate in a clinical study, as outlined in the study protocol. The concept covers inclusion and exclusion criteria.
 * @preferredTerm Study Eligibility Criterion
 * @nciCode C16112
 */
export const EligibilityCriterionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study eligibility criterion.
  name: z.string(),
  // The short descriptive designation for the study eligibility criterion.
  label: z.string().optional(),
  // A narrative representation of the study eligibility criterion.
  description: z.string().optional(),
  // A sequence of characters used to identify, name, or characterize the inclusion or exclusion criterion.
  identifier: z.string(),
  // A classification of the inclusion exclusion criterion.
  category: CodeSchema,
  // A brief written record relevant to the eligibility criterion.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the EligibilityCriterion and EligibilityCriterionItem classes which identifies the item belonging to the eligibility criterion.
  criterionItemId: EligibilityCriterionItemSchema,
  // A USDM relationship within the EligibilityCriterion class which identifies the eligibility criterion that follows the current eligibility criterion in the display order.
  nextId: z.lazy(() => EligibilityCriterionSchema).optional(),
  // A USDM relationship within the EligibilityCriterion class which identifies the eligibility criterion that precedes the current eligibility criterion in the display order.
  previousId: z.lazy(() => EligibilityCriterionSchema).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type EligibilityCriterion = z.infer<typeof EligibilityCriterionSchema>;

/**
 * A concise explanation of the meaning of a population.
 * @preferredTerm Population Definition
 * @nciCode C207593
 */
export const PopulationDefinitionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study cohort.
  name: z.string(),
  // The short descriptive designation for the study cohort.
  label: z.string().optional(),
  // A narrative representation of the study cohort.
  description: z.string().optional(),
  // The protocol-defined sex within the study cohort.
  plannedSex: z.array(CodeSchema).min(0).max(2).optional(),
  // An indication as to whether the study cohort includes healthy subjects, that is, subjects without the disease or condition under study.
  includesHealthySubjects: z.boolean(),
  // The anticipated age of subjects within the study cohort.
  plannedAge: RangeSchema.optional(),
  // The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study cohort.
  plannedCompletionNumber: QuantityRangeSchema.optional(),
  // The value representing the planned number of subjects to be entered in a clinical trial, within the study cohort.
  plannedEnrollmentNumber: QuantityRangeSchema.optional(),
  // A brief written record relevant to the study cohort.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyCohort and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study cohort.
  criterionIds: z.array(EligibilityCriterionSchema).min(0).optional(),
});

export type PopulationDefinition = z.infer<typeof PopulationDefinitionSchema>;

/**
 * A target study population on which an analysis is performed. These may be represented by the entire study population, a subgroup defined by a particular characteristic measured at baseline, or a principal stratum defined by the occurrence (or non-occurrence, depending on context) of a specific intercurrent event. (ICH E9 R1 Addendum)
 * @preferredTerm Analysis Population
 * @nciCode C188814
 */
export const AnalysisPopulationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of unstructured text that represents the analysis population.
  text: z.string(),
  // The literal identifier (i.e., distinctive designation) of the analysis population.
  name: z.string(),
  // The short descriptive designation for the analysis population.
  label: z.string().optional(),
  // A narrative representation of the analysis population.
  description: z.string().optional(),
  // A brief written record relevant to the analysis population.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the AnalysisPopulation and PopulationDefinition classes which identifies the population definition of which the analysis population is a subset.
  subsetOfIds: z.array(PopulationDefinitionSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type AnalysisPopulation = z.infer<typeof AnalysisPopulationSchema>;

/**
 * A word or group of words indicating the identity of a person usually consisting of a first (personal) name and a last (family) name with an optional middle name. In some cultural traditions the family name comes first.
 * @preferredTerm Person Name
 * @nciCode C25191
 */
export const PersonNameSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of structured text that represents the person's full name.
  text: z.string().optional(),
  // A word or group of words indicating a person's last (family) name.
  familyName: z.string().optional(),
  // A word or group of words indicating a person's first (personal or given) name; the name that precedes the surname.
  givenNames: z.array(z.string()).min(0).optional(),
  // An affix occurring at the start of the person name string, usually denoting a title or honorific.
  prefixes: z.array(z.string()).min(0).optional(),
  // An affix occurring at the end of the person name, usually denoting educational or professional degrees and certifications, and/or filial rank.
  suffixes: z.array(z.string()).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type PersonName = z.infer<typeof PersonNameSchema>;

/**
 * An individual person who is allotted or appointed to a particular role, function, or other entity.
 * @preferredTerm Assigned Person
 * @nciCode C215496
 */
export const AssignedPersonSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the assigned person.
  name: z.string(),
  // The short descriptive designation for the assigned person.
  label: z.string().optional(),
  // A narrative representation of the assigned person.
  description: z.string().optional(),
  // A word or group of words indicating the identity of an assigned person usually consisting of a first (personal) name and a last (family) name with an optional middle name. In some cultural traditions the family name comes first.
  personName: PersonNameSchema,
  // An identifying designation related to the assigned person's occupation.
  jobTitle: z.string(),
  // A USDM relationship between the AssignedPerson and Organization classes that identifies that organization to which the assigned person belongs.
  organizationId: OrganizationSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type AssignedPerson = z.infer<typeof AssignedPersonSchema>;

/**
 * The continued possession, cataloging, and storage of collected biological specimens beyond their initial use.
 * @preferredTerm Biospecimen Retention
 * @nciCode C215505
 */
export const BiospecimenRetentionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the biospecimen retention.
  name: z.string(),
  // The short descriptive designation for the biospecimen retention.
  label: z.string().optional(),
  // A narrative representation of the biospecimen retention.
  description: z.string().optional(),
  // An indication as to whether biospecimens were retained.
  isRetained: z.boolean(),
  // An indication as to whether retained biospecimens contain DNA.
  includesDNA: z.boolean().optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type BiospecimenRetention = z.infer<typeof BiospecimenRetentionSchema>;

/**
 * The distinguishing qualities or prominent aspects of an entity.
 * @preferredTerm Characteristic
 * @nciCode C25447
 */
export const CharacteristicSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the characteristic.
  name: z.string(),
  // The short descriptive designation for the characteristic.
  label: z.string().optional(),
  // A narrative representation of the characteristic.
  description: z.string().optional(),
  // An instance of structured text that represents the characteristic.
  text: z.string(),
  // A brief written record relevant to the characteristic.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Characteristic and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to characteristics.
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Characteristic = z.infer<typeof CharacteristicSchema>;

/**
 * A guide that governs the allocation of subjects to operational options at a discrete decision point or branch (e.g., assignment to a particular arm, discontinuation) within a clinical trial plan.
 * @preferredTerm Transition Rule
 * @nciCode C82567
 */
export const TransitionRuleSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the transition rule.
  name: z.string(),
  // The short descriptive designation for the transition rule.
  label: z.string().optional(),
  // A narrative representation of the transition rule.
  description: z.string().optional(),
  // An instance of unstructured text that represents the transition rule.
  text: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type TransitionRule = z.infer<typeof TransitionRuleSchema>;

/**
 * Any physical or virtual contact between two or more parties involved in a study, at which an assessment or activity takes place.
 * @preferredTerm Study Encounter
 * @nciCode C215488
 */
export const EncounterSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) for a protocol-defined study encounter.
  name: z.string(),
  // The short descriptive designation for the study encounter.
  label: z.string().optional(),
  // A narrative representation of the protocol-defined study encounter.
  description: z.string().optional(),
  // A characterization or classification of the study encounter.
  type: CodeSchema,
  // The environment/setting where the event, intervention, or finding occurred.
  environmentalSettings: z.array(CodeSchema).min(0).optional(),
  // The means by which an interaction occurs between the subject/participant and person or entity (e.g., a device).
  contactModes: z.array(CodeSchema).min(0).optional(),
  // A brief written record relevant to the study encounter.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Encounter and TransitionRule classes which provides the details associated with a transition rule used to trigger the end of an encounter.
  transitionEndRule: TransitionRuleSchema.optional(),
  // A USDM relationship within the Encounter class which identifies the encounter that chronologically follows the current encounter.
  nextId: z.lazy(() => EncounterSchema).optional(),
  // A USDM relationship between the Encounter and TransitionRule classes which provides the details associated with a transition rule used to trigger the start of an encounter.
  transitionStartRule: TransitionRuleSchema.optional(),
  // A USDM relationship between the Encounter and Timing classes which provides information related to the scheduled timing of an encounter.
  scheduledAtId: TimingSchema.optional(),
  // A USDM relationship within the Encounter class which identifies the encounter that chronologically precedes the current encounter.
  previousId: z.lazy(() => EncounterSchema).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Encounter = z.infer<typeof EncounterSchema>;

/**
 * A scheduled occurrence of an activity event.
 * @preferredTerm Scheduled Activity Instance
 * @nciCode C201350
 */
export const ScheduledActivityInstanceSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the scheduled activity instance.
  name: z.string(),
  // The short descriptive designation for the scheduled activity instance.
  label: z.string().optional(),
  // A narrative representation of the scheduled activity instance.
  description: z.string().optional(),
  // A USDM relationship within the ScheduledActivityInstance class which identifies the default condition within a scheduled activity instance.
  defaultConditionId: ScheduledInstanceSchema.optional(),
  // A USDM relationship between the ScheduledActivityInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled activity instance.
  epochId: StudyEpochSchema.optional(),
  // A USDM relationship between the ScheduledActivityInstance and Activity classes which identifies the set of activities associated with a scheduled activity instance.
  activityIds: z.array(ActivitySchema).min(0).optional(),
  // A USDM relationship between the ScheduledActivityInstance and Encounter classes which defines the subject encounter associated with the ScheduleActivityInstance.
  encounterId: EncounterSchema.optional(),
  // A USDM relationship between the ScheduledActivityInstance and ScheduleTimeline classes which provides the details associated with an instance of a scheduled timeline related to a scheduled activity instance.
  timelineId: ScheduleTimelineSchema.optional(),
  // A USDM relationship between the ScheduledActivityInstance and ScheduleTimelineExit classes which provides the details associated with the exit from a timeline related to a scheduled activity instance.
  timelineExitId: ScheduleTimelineExitSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ScheduledActivityInstance = z.infer<typeof ScheduledActivityInstanceSchema>;

/**
 * A state of being.
 * @preferredTerm Condition
 * @nciCode C25457
 */
export const ConditionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the condition.
  name: z.string(),
  // The short descriptive designation for the condition.
  label: z.string().optional(),
  // A narrative representation of the condition.
  description: z.string().optional(),
  // An instance of structured text that represents the condition.
  text: z.string(),
  // A brief written record relevant to the condition.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Condition and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to conditions.
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
  // A USDM relationship between the Condition and the ScheduledActivityInstance or Activity classes which identifies the scheduled activity instance or activity to which the condition belongs.
  contextIds: z.array(z.union([ActivitySchema, ScheduledActivityInstanceSchema])).min(0).optional(),
  // A USDM relationship between the Condition and the Activity, Procedure, BiomedicalConcept, BiomedicalConceptSurrogate, or BiomedicalConceptCategory classes which identifies the procedure, activity, biomedical concept, biomedical concept surrogate, or biomedical concept category that applies to the condition.
  appliesToIds: z.array(z.union([BiomedicalConceptCategorySchema, ProcedureSchema, ActivitySchema, BiomedicalConceptSchema, BiomedicalConceptSurrogateSchema])).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Condition = z.infer<typeof ConditionSchema>;

/**
 * An allotting or appointment to a condition or set of conditions that are to be met in order to make a logical decision.
 * @preferredTerm Condition Assignment
 * @nciCode C201335
 */
export const ConditionAssignmentSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An assumption on which rests the validity or effect of something else.
  condition: z.string(),
  // A USDM relationship between the ConditionAssignment and ScheduledInstance classes which identifies the scheduled instance associated with the condition assignment.
  conditionTargetId: ScheduledInstanceSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ConditionAssignment = z.infer<typeof ConditionAssignmentSchema>;

/**
 * The extent or range related to the physical location of an entity.
 * @preferredTerm Geographic Scope
 * @nciCode C207591
 */
export const GeographicScopeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A characterization or classification of the geographic scope.
  type: CodeSchema,
  // A symbol or combination of symbols which is assigned to the geographic scope.
  code: AliasCodeSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type GeographicScope = z.infer<typeof GeographicScopeSchema>;

/**
 * Any of the dates associated with event milestones within a clinical study's oversight and management framework.
 * @preferredTerm Study Governance Date
 * @nciCode C207595
 */
export const GovernanceDateSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study governance date
  name: z.string(),
  // The short descriptive designation for the study governance date.
  label: z.string().optional(),
  // A narrative representation of the study governance date.
  description: z.string().optional(),
  // A characterization or classification of the study governance date.
  type: CodeSchema,
  // The information contained in the date field.
  dateValue: z.date(),
  // A USDM relationship between the GovernanceDate and GeographicScope classes which identifies the set of geographic scopes associated with the governance date.
  geographicScopes: z.array(GeographicScopeSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type GovernanceDate = z.infer<typeof GovernanceDateSchema>;

/**
 * An individual item within the container that holds an instance of unstructured text and which may include objects such as tables, figures, and images.
 * @preferredTerm Narrative Content Item
 * @nciCode C215489
 */
export const NarrativeContentItemSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the narrative content item.
  name: z.string(),
  // An instance of unstructured text that represents the narrative content item.
  text: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type NarrativeContentItem = z.infer<typeof NarrativeContentItemSchema>;

/**
 * The container that holds an instance of unstructured text and which may include objects such as tables, figures, and images.
 * @preferredTerm Narrative Content
 * @nciCode C207592
 */
export const NarrativeContentSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the narrative content.
  name: z.string(),
  // The numeric identifier assigned to a particular document section containing narrative content.
  sectionNumber: z.string().optional(),
  // An identifying designation for the document section containing narrative content.
  sectionTitle: z.string().optional(),
  // An indication as to whether the section title is to be displayed in the document containing narrative content.
  displaySectionTitle: z.boolean(),
  // An indication as to whether the section number is to be displayed in the document containing narrative content.
  displaySectionNumber: z.boolean(),
  // A USDM relationship between the NarrativeContent and NarrativeContentItem classes which identifies the content item associated with the narrative content.
  contentItemId: NarrativeContentItemSchema.optional(),
  // A USDM relationship within the NarrativeContent class which identifies the narrative content that precedes the current narrative content in the display order.
  previousId: z.lazy(() => NarrativeContentSchema).optional(),
  // A USDM relationship within the NarrativeContent class which identifies the narrative content that follows the current narrative content in the display order.
  nextId: z.lazy(() => NarrativeContentSchema).optional(),
  // A USDM relationship within the NarrativeContent class which identifies the set of child content associated with an instance of narrative content.
  childIds: z.array(z.lazy(() => NarrativeContentSchema)).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type NarrativeContent = z.infer<typeof NarrativeContentSchema>;

/**
 * A representation of a particular edition or snapshot of the study definition document as it exists at a particular point in time.
 * @preferredTerm Study Definition Document Version
 * @nciCode C215491
 */
export const StudyDefinitionDocumentVersionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A condition of the study definition document at a point in time with respect to its state of readiness for implementation.
  status: CodeSchema,
  // A sequence of characters used to identify the version of the study definition document.
  version: z.string(),
  // A brief written record relevant to the study definition document version.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyDefinitionDocumentVersion and GovernanceDate classes which provides the set of governance dates associated with the study definition document version.
  dateValues: z.array(GovernanceDateSchema).min(0).optional(),
  // A USDM relationship between the StudyDefinitionDocumentVersion and NarrativeContent classes which identifies the set of narrative content associated with the version of the study definition document.
  contents: z.array(NarrativeContentSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyDefinitionDocumentVersion = z.infer<typeof StudyDefinitionDocumentVersionSchema>;

/**
 * Any physical or electronic document that is related to defining a study or part of a study.
 * @preferredTerm Study Definition Document
 * @nciCode C215490
 */
export const StudyDefinitionDocumentSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study definition document.
  name: z.string(),
  // The short descriptive designation for the study definition document.
  label: z.string().optional(),
  // A narrative representation of the study definition document.
  description: z.string().optional(),
  // A characterization or classification of the study definition document.
  type: CodeSchema,
  // The literal identifier (i.e., distinctive designation) of the study definition document template.
  templateName: z.string(),
  // The language in which the study definition document is written.
  language: CodeSchema,
  // A brief written record relevant to the study definition document.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship within the StudyDefinitionDocument class which identifies the set of child documents of a study definition document.
  childIds: z.array(z.lazy(() => StudyDefinitionDocumentSchema)).min(0).optional(),
  // A USDM relationship between the StudyDefinitionDocument and StudyDefinitionDocumentVersion classes which identifies the set of versions associated with the study definition document.
  versions: z.array(StudyDefinitionDocumentVersionSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyDefinitionDocument = z.infer<typeof StudyDefinitionDocumentSchema>;

/**
 * A citation pointing to the location of specific content within a document.
 * @preferredTerm Document Content Reference
 * @nciCode C215499
 */
export const DocumentContentReferenceSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The numeric identifier of a particular section for the document content reference.
  sectionNumber: z.string(),
  // An identifying designation for a particular section for the document content reference.
  sectionTitle: z.string(),
  // A USDM relationship between the DocumentContentReference and StudyDefinitionDocument classes which identifies the study definition document to which the document content reference applies.
  appliesToId: StudyDefinitionDocumentSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type DocumentContentReference = z.infer<typeof DocumentContentReferenceSchema>;

/**
 * A defined variable intended to reflect an outcome of interest that is statistically analyzed to address a particular research question. NOTE: A precise definition of an endpoint typically specifies the type of assessments made, the timing of those assessments, the assessment tools used, and possibly other details, as applicable, such as how multiple assessments within an individual are to be combined. [After BEST Resource] (CDISC Glossary)
 * @preferredTerm Study Endpoint
 * @nciCode C25212
 */
export const EndpointSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study endpoint.
  name: z.string(),
  // The short descriptive designation for the study endpoint.
  label: z.string().optional(),
  // A narrative representation of the study endpoint.
  description: z.string().optional(),
  // An instance of structured text that represents the study endpoint.
  text: z.string(),
  // A brief written record relevant to the study endpoint.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Endpoint and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to study endpoints.
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
  // A characterization or classification of the study endpoint that determines its category of importance relative to other study endpoints.
  level: CodeSchema,
  // The textual representation of the study endpoint purpose.
  purpose: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Endpoint = z.infer<typeof EndpointSchema>;

/**
 * An event(s) occurring after treatment initiation that affects either the interpretation or the existence of the measurements associated with the clinical question of interest. (ICH E9 Addendum on Estimands)
 * @preferredTerm Intercurrent Event
 * @nciCode C188815
 */
export const IntercurrentEventSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the intercurrent event.
  name: z.string(),
  // The short descriptive designation for the intercurrent event.
  label: z.string().optional(),
  // A narrative representation of the intercurrent event.
  description: z.string().optional(),
  // An instance of structured text that represents the intercurrent event.
  text: z.string(),
  // A brief written record relevant to the intercurrent event.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the IntercurrentEvent and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to the intercurrent event. 
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
  // A textual description of the planned strategy to manage and/or mitigate intercurrent events.
  strategy: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type IntercurrentEvent = z.infer<typeof IntercurrentEventSchema>;

/**
 * A precise description of the treatment effect reflecting the clinical question posed by a given clinical trial objective. It summarises at a population level what the outcomes would be in the same patients under different treatment conditions being compared. (ICH E9 R1 Addendum)
 * @preferredTerm Estimand
 * @nciCode C188813
 */
export const EstimandSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A synopsis of the clinical endpoint of interest within the analysis target study population.
  populationSummary: z.string(),
  // The literal identifier (i.e., distinctive designation) of the estimand.
  name: z.string(),
  // The short descriptive designation for the estimand.
  label: z.string().optional(),
  // A narrative representation of the estimand.
  description: z.string().optional(),
  // A brief written record relevant to the study estimand.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Estimand and AnalysisPopulation classes which provides the details associated with an instance of the analysis population used to partially define a study estimand.
  analysisPopulationId: AnalysisPopulationSchema,
  // A USDM relationship between the Estimand and Endpoint classes which provides the details associated with an instance of the variable of interest within a study endpoint used to partially define a study estimand.
  variableOfInterestId: EndpointSchema,
  // A USDM relationship between the Estimand and IntercurrentEvent classes which identifies the set of intercurrent events associated with a study estimand.
  intercurrentEvents: z.array(IntercurrentEventSchema).min(1),
  // A USDM relationship between the Estimand and StudyIntervention classes which identifies the set of study interventions associated with the Estimand.
  interventionIds: z.array(StudyInterventionSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Estimand = z.infer<typeof EstimandSchema>;

/**
 * The disease or condition the intervention will diagnose, treat, prevent, cure, or mitigate.
 * @preferredTerm Disease/Condition Indication
 * @nciCode C41184
 */
export const IndicationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the disease/condition indication.
  name: z.string(),
  // The short descriptive designation for the disease/condition indication.
  label: z.string().optional(),
  // A narrative representation of the condition, disease or disorder that the clinical trial is intended to investigate or address.
  description: z.string().optional(),
  // An indication as to whether the disease/condition indication under study is considered a rare disease.
  isRareDisease: z.boolean(),
  // A short sequence of characters that represents the disease/condition indication.
  codes: z.array(CodeSchema).min(0).optional(),
  // A brief written record relevant to the disease/condition indication.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Indication = z.infer<typeof IndicationSchema>;

/**
 * The reason for performing a study in terms of the scientific questions to be answered by the analysis of data collected during the study.
 * @preferredTerm Study Objective
 * @nciCode C142450
 */
export const ObjectiveSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study objective.
  name: z.string(),
  // The short descriptive designation for the study objective.
  label: z.string().optional(),
  // A narrative representation of the study objective. (BRIDG)
  description: z.string().optional(),
  // An instance of structured text that represents the study objective.
  text: z.string(),
  // A brief written record relevant to the study objective.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the Objective and SyntaxTemplateDictionary classes which provides the set of dictionary entries related to study objectives.
  dictionaryId: SyntaxTemplateDictionarySchema.optional(),
  // A characterization or classification of the study objective that determines its category of importance relative to other study objectives.
  level: CodeSchema,
  // A USDM relationship between the Objective and Endpoint classes which identifies the set of endpoints associated with the study objective.
  endpoints: z.array(EndpointSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Objective = z.infer<typeof ObjectiveSchema>;

/**
 * A planned pathway assigned to the subject as they progress through the study, usually referred to by a name that reflects one or more treatments, exposures, and/or controls included in the path.
 * @preferredTerm Study Arm
 * @nciCode C174447
 */
export const StudyArmSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study arm.
  name: z.string(),
  // The short descriptive designation for the study arm.
  label: z.string().optional(),
  // A narrative representation of the study arm.
  description: z.string().optional(),
  // A characterization or classification of the study arm.
  type: CodeSchema,
  // A characterization or classification of the study arm with respect to where the study arm data originates.
  dataOriginType: CodeSchema,
  // The textual representation of the study arm data origin.
  dataOriginDescription: z.string(),
  // A brief written record relevant to the study arm.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyArm and PopulationDefinition classes which identifies the set of populations associated with the study arm.
  populationIds: z.array(PopulationDefinitionSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyArm = z.infer<typeof StudyArmSchema>;

/**
 * A basic building block for time within a clinical study comprising the following characteristics: a description of what happens to the subject during the element; a definition of the start of the element; a rule for ending the element.
 * @preferredTerm Study Design Element
 * @nciCode C142735
 */
export const StudyElementSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study design element.
  name: z.string(),
  // The short descriptive designation for the study design element.
  label: z.string().optional(),
  // A narrative representation of the study design element.
  description: z.string().optional(),
  // A brief written record relevant to the study element.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyElement and TransitionRule classes which provides the details associated with a transition rule used to trigger the end of a study element.
  transitionEndRule: TransitionRuleSchema.optional(),
  // A USDM relationship between the StudyElement and StudyIntervention classes which identifies the set of study interventions associated with the study element.
  studyInterventionIds: z.array(StudyInterventionSchema).min(0).optional(),
  // A USDM relationship between the StudyElement and TransitionRule classes which provides the details associated with a transition rule used to trigger the start of a study element.
  transitionStartRule: TransitionRuleSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyElement = z.infer<typeof StudyElementSchema>;

/**
 * A partitioning of a study arm into individual pieces, which are associated with an epoch and any number of sequential elements within that epoch.
 * @preferredTerm Study Design Cell
 * @nciCode C188810
 */
export const StudyCellSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A USDM relationship between the StudyCell and StudyArm classes which identifies the study arm associated with a study cell.
  armId: StudyArmSchema,
  // A USDM relationship between the StudyCell and StudyEpoch classes which identifies the study epoch associated with a study cell.
  epochId: StudyEpochSchema,
  // A USDM relationship between the StudyCell and StudyElement classes which identifies the set of study elements associated with the study cell.
  elementIds: z.array(StudyElementSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyCell = z.infer<typeof StudyCellSchema>;

/**
 * A group of individuals who share a set of characteristics (e.g., exposures, experiences, attributes), which logically defines a population under study.
 * @preferredTerm Study Cohort
 * @nciCode C61512
 */
export const StudyCohortSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study cohort.
  name: z.string(),
  // The short descriptive designation for the study cohort.
  label: z.string().optional(),
  // A narrative representation of the study cohort.
  description: z.string().optional(),
  // The protocol-defined sex within the study cohort.
  plannedSex: z.array(CodeSchema).min(0).max(2).optional(),
  // An indication as to whether the study cohort includes healthy subjects, that is, subjects without the disease or condition under study.
  includesHealthySubjects: z.boolean(),
  // The anticipated age of subjects within the study cohort.
  plannedAge: RangeSchema.optional(),
  // The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study cohort.
  plannedCompletionNumber: QuantityRangeSchema.optional(),
  // The value representing the planned number of subjects to be entered in a clinical trial, within the study cohort.
  plannedEnrollmentNumber: QuantityRangeSchema.optional(),
  // A brief written record relevant to the study cohort.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyCohort and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study cohort.
  criterionIds: z.array(EligibilityCriterionSchema).min(0).optional(),
  // A USDM relationship between the StudyCohort and Characteristic classes which identifies the set of subject characteristics associated with the study cohort.
  characteristics: z.array(CharacteristicSchema).min(0).optional(),
  // A USDM relationship between the StudyCohort and Indication classes which identifies the set of indications associated with the study cohort.
  indicationIds: z.array(IndicationSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyCohort = z.infer<typeof StudyCohortSchema>;

/**
 * The population within the general population to which the study results can be generalized.
 * @preferredTerm Study Design Population
 * @nciCode C142728
 */
export const StudyDesignPopulationSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study design population.
  name: z.string(),
  // The short descriptive designation for the study design population.
  label: z.string().optional(),
  // A narrative representation of the study design population.
  description: z.string().optional(),
  // The protocol-defined sex within the study design population.
  plannedSex: z.array(CodeSchema).min(0).max(2).optional(),
  // An indication as to whether the study design population includes healthy subjects, that is, subjects without the disease or condition under study.
  includesHealthySubjects: z.boolean(),
  // The anticipated age of subjects within the study design population.
  plannedAge: RangeSchema.optional(),
  // The value representing the planned number of subjects that must complete the study in order to meet the objectives and endpoints of the study, within the study design population.
  plannedCompletionNumber: QuantityRangeSchema.optional(),
  // The value representing the planned number of subjects to be entered in a clinical trial, within the study design population.
  plannedEnrollmentNumber: QuantityRangeSchema.optional(),
  // A brief written record relevant to the study design population.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyDesignPopulation and EligibilityCriterion classes which identifies the set of eligibility criteria associated with the study design population.
  criterionIds: z.array(EligibilityCriterionSchema).min(0).optional(),
  // A USDM relationship between the StudyDesignPopulation and StudyCohort classes which identifies the set of study cohorts associated with the study design population.
  cohorts: z.array(StudyCohortSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyDesignPopulation = z.infer<typeof StudyDesignPopulationSchema>;

/**
 * A plan detailing how a study will be performed in order to represent the phenomenon under examination, to answer the research questions that have been asked, and informing the statistical approach.
 * @preferredTerm Study Design
 * @nciCode C15320
 */
export const StudyDesignSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the interventional study design.
  name: z.string(),
  // The short descriptive designation for the interventional study design.
  label: z.string().optional(),
  // A narrative representation of the interventional study design.
  description: z.string().optional(),
  // Reason(s) for choosing the interventional study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
  rationale: z.string(),
  // A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the interventional study design.
  therapeuticAreas: z.array(CodeSchema).min(0).optional(),
  // The study type associated with the interventional study design.
  studyType: CodeSchema.optional(),
  // The distinguishing qualities or prominent aspects of an interventional study design.
  characteristics: z.array(CodeSchema).min(0).optional(),
  // The study phase associated with the interventional study design.
  studyPhase: AliasCodeSchema.optional(),
  // A brief written record relevant to the interventional study design.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Activity classes which identifies the set of activities associated with the interventional study design.
  activities: z.array(ActivitySchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the interventional study design.
  biospecimenRetentions: z.array(BiospecimenRetentionSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the interventional study design.
  eligibilityCriteria: z.array(EligibilityCriterionSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and Encounter classes which identifies the set of encounters associated with the interventional study design.
  encounters: z.array(EncounterSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Estimand classes which identifies the set of estimands associated with the interventional study design.
  estimands: z.array(EstimandSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Indication classes which identifies the set of indications associated with the interventional study design.
  indications: z.array(IndicationSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Objective classes which identifies the set of objectives associated with the interventional study design.
  objectives: z.array(ObjectiveSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the interventional study design.
  scheduleTimelines: z.array(ScheduleTimelineSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyArm classes which identifies the set of study arms associated with the interventional study design.
  arms: z.array(StudyArmSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and StudyCell classes which identifies the set of study cells associated with the interventional study design. 
  studyCells: z.array(StudyCellSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the interventional study design.
  documentVersionIds: z.array(StudyDefinitionDocumentVersionSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyElement classes which identifies the set of study elements associated with the interventional study design.
  elements: z.array(StudyElementSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with interventional study design.
  studyInterventionIds: z.array(StudyInterventionSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the interventional study design.
  epochs: z.array(StudyEpochSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the interventional study design.
  population: StudyDesignPopulationSchema,
  analysisPopulations: z.array(AnalysisPopulationSchema).min(0).optional(),
});

export type StudyDesign = z.infer<typeof StudyDesignSchema>;

/**
 * The strategy that specifies the structure of an interventional trial in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study.
 * @preferredTerm Interventional Study Design
 * @nciCode C215503
 */
export const InterventionalStudyDesignSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the interventional study design.
  name: z.string(),
  // The short descriptive designation for the interventional study design.
  label: z.string().optional(),
  // A narrative representation of the interventional study design.
  description: z.string().optional(),
  // Reason(s) for choosing the interventional study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
  rationale: z.string(),
  // A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the interventional study design.
  therapeuticAreas: z.array(CodeSchema).min(0).optional(),
  // The study type associated with the interventional study design.
  studyType: CodeSchema.optional(),
  // The distinguishing qualities or prominent aspects of an interventional study design.
  characteristics: z.array(CodeSchema).min(0).optional(),
  // The study phase associated with the interventional study design.
  studyPhase: AliasCodeSchema.optional(),
  // A brief written record relevant to the interventional study design.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Activity classes which identifies the set of activities associated with the interventional study design.
  activities: z.array(ActivitySchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the interventional study design.
  biospecimenRetentions: z.array(BiospecimenRetentionSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the interventional study design.
  eligibilityCriteria: z.array(EligibilityCriterionSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and Encounter classes which identifies the set of encounters associated with the interventional study design.
  encounters: z.array(EncounterSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Estimand classes which identifies the set of estimands associated with the interventional study design.
  estimands: z.array(EstimandSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Indication classes which identifies the set of indications associated with the interventional study design.
  indications: z.array(IndicationSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and Objective classes which identifies the set of objectives associated with the interventional study design.
  objectives: z.array(ObjectiveSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the interventional study design.
  scheduleTimelines: z.array(ScheduleTimelineSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyArm classes which identifies the set of study arms associated with the interventional study design.
  arms: z.array(StudyArmSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and StudyCell classes which identifies the set of study cells associated with the interventional study design. 
  studyCells: z.array(StudyCellSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the interventional study design.
  documentVersionIds: z.array(StudyDefinitionDocumentVersionSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyElement classes which identifies the set of study elements associated with the interventional study design.
  elements: z.array(StudyElementSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with interventional study design.
  studyInterventionIds: z.array(StudyInterventionSchema).min(0).optional(),
  // A USDM relationship between the InterventionalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the interventional study design.
  epochs: z.array(StudyEpochSchema).min(1),
  // A USDM relationship between the InterventionalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the interventional study design.
  population: StudyDesignPopulationSchema,
  analysisPopulations: z.array(AnalysisPopulationSchema).min(0).optional(),
  // The general design of the strategy for assigning interventions to subjects in a clinical study. (clinicaltrials.gov)
  model: CodeSchema,
  // The nature of the interventional study for which information is being collected.
  subTypes: z.array(CodeSchema).min(0).optional(),
  // The type of experimental design used to describe the level of awareness of the study subjects and/ or study personnel as it relates to the respective intervention(s) or assessments being observed, received or administered.
  blindingSchema: AliasCodeSchema.optional(),
  // The planned purpose of the therapy, device, or agent under study in the clinical trial.
  intentTypes: z.array(CodeSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type InterventionalStudyDesign = z.infer<typeof InterventionalStudyDesignSchema>;

/**
 * The mechanism used to obscure the distinctive characteristics of the study intervention or procedure to make it indistinguishable from a comparator. (CDISC Glossary)
 * @preferredTerm Masking
 * @nciCode C191278
 */
export const MaskingSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of unstructured text that represents how the masking is performed and maintained.
  text: z.string(),
  // An indication as to whether the study role is masked.
  isMasked: z.boolean(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Masking = z.infer<typeof MaskingSchema>;

/**
 * The strategy that specifies the structure of an observational study in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study.
 * @preferredTerm Observational Study Design
 * @nciCode C215504
 */
export const ObservationalStudyDesignSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the observational study design.
  name: z.string(),
  // The short descriptive designation for the observational study design.
  label: z.string().optional(),
  // A narrative representation of the observational study design.
  description: z.string().optional(),
  // Reason(s) for choosing the observational study design. This may include reasons for the choice of control or comparator, as well as the scientific rationale for the study design.
  rationale: z.string(),
  // A categorization of a disease, disorder, or other condition based on common characteristics and often associated with a medical specialty focusing on research and development of specific therapeutic interventions for the purpose of treatment and prevention, which is associated with the observational study design.
  therapeuticAreas: z.array(CodeSchema).min(0).optional(),
  // The study type associated with the observational study design.
  studyType: CodeSchema.optional(),
  // The distinguishing qualities or prominent aspects of an observational study design.
  characteristics: z.array(CodeSchema).min(0).optional(),
  // The study phase associated with the observational study design.
  studyPhase: AliasCodeSchema.optional(),
  // A brief written record relevant to the observational study design.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and Activity classes which identifies the set of activities associated with the observational study design.
  activities: z.array(ActivitySchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and BiospecimenRetention classes which identifies the status of biospecimen retentions related to the observational study design.
  biospecimenRetentions: z.array(BiospecimenRetentionSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and EligibilityCriterion classes which identifies the set of eligibility criterion associated with the observational study design.
  eligibilityCriteria: z.array(EligibilityCriterionSchema).min(1),
  // A USDM relationship between the ObservationalStudyDesign and Encounter classes which identifies the set of encounters associated with the observational study design.
  encounters: z.array(EncounterSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and Estimand classes which identifies the set of estimands associated with the observational study design.
  estimands: z.array(EstimandSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and Indication classes which identifies the set of indications associated with the observational study design.
  indications: z.array(IndicationSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and Objective classes which identifies the set of objectives associated with the observational study design.
  objectives: z.array(ObjectiveSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and ScheduleTimeline classes which identifies the set of scheduled timelines associated with the observational study design.
  scheduleTimelines: z.array(ScheduleTimelineSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and StudyArm classes which identifies the set of study arms associated with the observational study design.
  arms: z.array(StudyArmSchema).min(1),
  // A USDM relationship between the ObservationalStudyDesign and StudyCell classes which identifies the set of study cells associated with the observational study design. 
  studyCells: z.array(StudyCellSchema).min(1),
  // A USDM relationship between the ObservationalStudyDesign and StudyDefinitionDocumentVersion classes which identifies the version of the study definition documents associated with the observational study design.
  documentVersionIds: z.array(StudyDefinitionDocumentVersionSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and StudyElement classes which identifies the set of study elements associated with the observational study design.
  elements: z.array(StudyElementSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and StudyIntervention classes which identifies the set of study interventions associated with observational study design.
  studyInterventionIds: z.array(StudyInterventionSchema).min(0).optional(),
  // A USDM relationship between the ObservationalStudyDesign and StudyEpoch classes which identifies the set of study epochs associated with the observational study design.
  epochs: z.array(StudyEpochSchema).min(1),
  // A USDM relationship between the ObservationalStudyDesign and StudyDesignPopulation classes which identifies the population associated with the observational study design.
  population: StudyDesignPopulationSchema,
  analysisPopulations: z.array(AnalysisPopulationSchema).min(0).optional(),
  // The general design of the strategy for identifying and following up with participants during observational studies. (clinicaltrials.gov)
  model: CodeSchema,
  // The nature of the observational study for which information is being collected.
  subTypes: z.array(CodeSchema).min(0).optional(),
  // The temporal relationship between the observation period and time of subject enrollment. (ClinicalTrials.gov)
  timePerspective: CodeSchema,
  // The sampling method used to assign study participants into groups or cohorts within an observational study.
  samplingMethod: CodeSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ObservationalStudyDesign = z.infer<typeof ObservationalStudyDesignSchema>;

/**
 * A designation that identifies the function of an organization within the context of the product.
 * @preferredTerm Product Organization Role
 * @nciCode C215502
 */
export const ProductOrganizationRoleSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the product organization role.
  name: z.string(),
  // The short descriptive designation for the product organization role.
  label: z.string().optional(),
  // A narrative representation of the product organization role.
  description: z.string().optional(),
  // A symbol or combination of symbols which is assigned to the product organization role.
  code: CodeSchema,
  // A USDM relationship between the ProductOrganizationRole and either the AdministrableProduct or MedicalDevice class that identifies the administrable product or medical device to which the product organization role applies.
  appliesToIds: z.array(z.union([AdministrableProductSchema, MedicalDeviceSchema])).min(0).optional(),
  // A USDM relationship between the ProductOrganizationRole and Organization classes which identifies the organization associated with the product organization role.
  organizationId: OrganizationSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ProductOrganizationRole = z.infer<typeof ProductOrganizationRoleSchema>;

/**
 * A sequence of characters used to identify, name, or characterize the reference.
 * @preferredTerm Reference Identifier
 * @nciCode C82531
 */
export const ReferenceIdentifierSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of structured text that represents the reference identifier.
  text: z.string(),
  // A USDM relationship between the ReferenceIdentifier and Organization classes which provides the details associated with each organization that has assigned the reference identifier.
  scopeId: OrganizationSchema,
  // A characterization or classification of the reference identifier.
  type: CodeSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ReferenceIdentifier = z.infer<typeof ReferenceIdentifierSchema>;

/**
 * A scheduled occurrence of a decision event.
 * @preferredTerm Scheduled Decision Instance
 * @nciCode C201351
 */
export const ScheduledDecisionInstanceSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the scheduled Decision instance.
  name: z.string(),
  // The short descriptive designation for the scheduled Decision instance.
  label: z.string().optional(),
  // A narrative representation of the scheduled Decision instance.
  description: z.string().optional(),
  // A USDM relationship within the ScheduledDecisionInstance class which identifies the default condition within a scheduled decision instance.
  defaultConditionId: ScheduledInstanceSchema.optional(),
  // A USDM relationship between the ScheduledDecisionInstance and StudyEpoch classes which identifies the study epoch associated with a scheduled decision instance.
  epochId: StudyEpochSchema.optional(),
  // A USDM relationship between the ScheduledDecisionInstance and ConditionAssignment classes which identifies the set of condition assignments associated with a scheduled decision instance.
  conditionAssignments: z.array(ConditionAssignmentSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type ScheduledDecisionInstance = z.infer<typeof ScheduledDecisionInstanceSchema>;

/**
 * The effect or consequence of an amendment on some aspect of the study.
 * @preferredTerm Study Amendment Impact
 * @nciCode C215500
 */
export const StudyAmendmentImpactSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of unstructured text that represents the study amendment impact.
  text: z.string(),
  // An indication as to whether the study amendment's impact on the study is substantial.
  isSubstantial: z.boolean(),
  // A characterization or classification of the study amendment impact.
  type: CodeSchema,
  // A brief written record relevant to the study amendment impact.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyAmendmentImpact = z.infer<typeof StudyAmendmentImpactSchema>;

/**
 * The act of enrolling subjects into a study. The subject will have met the inclusion/exclusion criteria to participate in the trial and will have signed an informed consent form. (CDISC Glossary)
 * @preferredTerm Subject Enrollment
 * @nciCode C37948
 */
export const SubjectEnrollmentSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the subject enrollment.
  name: z.string(),
  // The short descriptive designation for the subject enrollment..
  label: z.string().optional(),
  // A narrative representation of the subject enrollment.
  description: z.string().optional(),
  // The value representing the number of individuals enrolled in a study.
  quantity: QuantitySchema,
  // A USDM relationship between the SubjectEnrollment and GeographicScope classes which identifies the geographic scope to which the subject enrollment applies.
  forGeographicScope: GeographicScopeSchema.optional(),
  // A USDM relationship between the SubjectEnrollment and StudyCohort classes which identifies the study cohort to which the subject enrollment applies.
  forStudyCohortId: StudyCohortSchema.optional(),
  // A USDM relationship between the SubjectEnrollment and StudySite classes which identifies the study site to which the subject enrollment applies.
  forStudySiteId: StudySiteSchema.optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type SubjectEnrollment = z.infer<typeof SubjectEnrollmentSchema>;

/**
 * The rationale for the change(s) to, or formal clarification of, a protocol.
 * @preferredTerm Study Amendment Reason
 * @nciCode C207457
 */
export const StudyAmendmentReasonSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The rationale for the change(s) to, or formal clarification of, a protocol that is not otherwise specified.
  otherReason: z.string().optional(),
  // A symbol or combination of symbols which is assigned to the study amendment reason.
  code: CodeSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyAmendmentReason = z.infer<typeof StudyAmendmentReasonSchema>;

/**
 * The act of alteration or modification to a study.
 * @preferredTerm Study Change
 * @nciCode C215498
 */
export const StudyChangeSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study change.
  name: z.string(),
  // The short descriptive designation for the study change.
  label: z.string().optional(),
  // A narrative representation of the study change.
  description: z.string().optional(),
  // An explanation as to the logical reasons for why a study change has occurred.
  rationale: z.string(),
  // A short narrative representation describing the changes introduced in the current version of the study.
  summary: z.string(),
  // A USDM relationship between the StudyChange and DocumentContentReference class which provides the set of changed document sections related to the study change.
  changedSections: z.array(DocumentContentReferenceSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyChange = z.infer<typeof StudyChangeSchema>;

/**
 * A written description of a change(s) to, or formal clarification of, a study.
 * @preferredTerm Study Amendment
 * @nciCode C207594
 */
export const StudyAmendmentSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study amendment.
  name: z.string(),
  // The short descriptive designation for the study amendment.
  label: z.string().optional(),
  // A narrative representation of the study amendment.
  description: z.string().optional(),
  // A string of numerals that uniquely identifies a protocol amendment.
  number: z.string(),
  // A brief written record relevant to the study amendment.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A short narrative representation describing the changes introduced in the current version of the protocol.
  summary: z.string(),
  // A USDM relationship between the StudyAmendment and GeographicScope classes which identifies the set of geographic scopes associated with the study amendment.
  geographicScopes: z.array(GeographicScopeSchema).min(1),
  // A USDM relationship between the StudyAmendment and GovernanceDate classes which provides the set of governance dates associated with the study amendment.
  dateValues: z.array(GovernanceDateSchema).min(0).optional(),
  // A USDM relationship between the StudyAmendment and StudyAmendmentImpact classes which identifies the set of impacts that the study amendment has on the study or study subjects.
  impacts: z.array(StudyAmendmentImpactSchema).min(0).optional(),
  // A USDM relationship between the StudyAmendment and SubjectEnrollment classes which provides the set of subject enrollments associated with the study amendment.
  enrollments: z.array(SubjectEnrollmentSchema).min(0).optional(),
  // A USDM relationship between the StudyAmendment and StudyAmendmentReason classes which identifies the set of secondary reasons for issuing the study amendment.
  secondaryReasons: z.array(StudyAmendmentReasonSchema).min(0).optional(),
  // A USDM relationship between the StudyAmendment and  StudyChange classes which identifies the set of changes associated with the study amendment.
  changes: z.array(StudyChangeSchema).min(1),
  // A USDM relationship within the StudyAmendment class which identifies the study amendment that chronologically precedes the current study amendment.
  previousId: z.lazy(() => StudyAmendmentSchema).optional(),
  // A USDM relationship between the StudyAmendment and StudyAmendmentReason classes which identifies the primary reason for issuing the study amendment.
  primaryReason: StudyAmendmentReasonSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyAmendment = z.infer<typeof StudyAmendmentSchema>;

/**
 * A sequence of characters used to identify, name, or characterize the study.
 * @preferredTerm Study Identifier
 * @nciCode C83082
 */
export const StudyIdentifierSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // An instance of structured text that represents the study identifier.
  text: z.string(),
  // A USDM relationship between the StudyIdentifier and Organization classes which provides the details associated with each organization that has assigned the study identifier.
  scopeId: OrganizationSchema,
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyIdentifier = z.infer<typeof StudyIdentifierSchema>;

/**
 * The sponsor-defined name of the clinical study.
 * @preferredTerm Study Title
 * @nciCode C49802
 */
export const StudyTitleSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A characterization or classification of the study title.
  type: CodeSchema,
  // An instance of unstructured text that represents the study title.
  text: z.string(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyTitle = z.infer<typeof StudyTitleSchema>;

/**
 * A designation that identifies the function of study personnel or an organization within the context of the study.
 * @preferredTerm Study Role
 * @nciCode C215497
 */
export const StudyRoleSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the study role.
  name: z.string(),
  // The short descriptive designation for the study role.
  label: z.string().optional(),
  // A narrative representation of the study role.
  description: z.string().optional(),
  // A symbol or combination of symbols which is assigned to the study role.
  code: CodeSchema,
  // A brief written record relevant to the study role.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyRole and AssignedPerson classes that identifies the set of individuals that are assigned to fill a particular role within the study.
  assignedPersons: z.array(AssignedPersonSchema).min(0).optional(),
  // A USDM relationship between the StudyRole and Masking classes which describes the masking associated with the study role.
  masking: MaskingSchema.optional(),
  // A USDM relationship between the StudyRole and Organization classes which identifies the set of organizations associated with the study role.
  organizationIds: z.array(OrganizationSchema).min(0).optional(),
  // A USDM relationship between the StudyRole and either StudyVersion or StudyDesign classes that identifies the study version or study design to which the study role applies.
  appliesToIds: z.array(z.union([z.lazy(() => StudyVersionSchema), StudyDesignSchema])).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyRole = z.infer<typeof StudyRoleSchema>;

/**
 * A plan at a particular point in time for a study.
 * @preferredTerm Study Version
 * @nciCode C188816
 */
export const StudyVersionSchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // A sequence of characters used to identify, name, or characterize the study version.
  versionIdentifier: z.string(),
  // A therapeutic area classification based on the structure and operations of the business unit.
  businessTherapeuticAreas: z.array(CodeSchema).min(0).optional(),
  // A statement describing the overall rationale of the study. This field describes the contribution of this study to product development, i.e., what knowledge is being contributed from the conduct of this study.
  rationale: z.string(),
  // A brief written record relevant to the study version.
  notes: z.array(CommentAnnotationSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and Abbreviation classes which provides the set of abbreviations associated with the study version.
  abbreviations: z.array(AbbreviationSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and GovernanceDate classes which provides the set of governance dates associated with the study version.
  dateValues: z.array(GovernanceDateSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and ReferenceIdentifier classes which identifies the set of reference identifiers associated with the study version.
  referenceIdentifiers: z.array(ReferenceIdentifierSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and StudyAmendment classes which identifies the set of study amendments associated with the study version.
  amendments: z.array(StudyAmendmentSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and StudyDefinitionDocumentVersion classes which identifies the version of the study definition document associated with the study version.
  documentVersionIds: z.array(StudyDefinitionDocumentVersionSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and StudyDesign classes which identifies the set of study designs associated with the study version.
  studyDesigns: z.array(StudyDesignSchema).min(0).optional(),
  // A USDM relationship between the StudyVersion and StudyIdentifier classes which identifies the set of study identifiers associated with the study version.
  studyIdentifiers: z.array(StudyIdentifierSchema).min(1),
  // A USDM relationship between the StudyVersion and StudyTitle classes which identifies the set of study titles associated with the study version.
  titles: z.array(StudyTitleSchema).min(1),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  eligibilityCriterionItems: z.array(EligibilityCriterionItemSchema).min(0).optional(),
  narrativeContentItems: z.array(NarrativeContentItemSchema).min(0).optional(),
  roles: z.array(z.lazy(() => StudyRoleSchema)).min(0).optional(),
  organizations: z.array(OrganizationSchema).min(0).optional(),
  studyInterventions: z.array(StudyInterventionSchema).min(0).optional(),
  administrableProducts: z.array(AdministrableProductSchema).min(0).optional(),
  medicalDevices: z.array(MedicalDeviceSchema).min(0).optional(),
  productOrganizationRoles: z.array(ProductOrganizationRoleSchema).min(0).optional(),
  biomedicalConcepts: z.array(BiomedicalConceptSchema).min(0).optional(),
  bcCategories: z.array(BiomedicalConceptCategorySchema).min(0).optional(),
  bcSurrogates: z.array(BiomedicalConceptSurrogateSchema).min(0).optional(),
  dictionaries: z.array(SyntaxTemplateDictionarySchema).min(0).optional(),
  conditions: z.array(ConditionSchema).min(0).optional(),
  instanceType: z.string(),
});

export type StudyVersion = z.infer<typeof StudyVersionSchema>;

/**
 * A clinical study involves research using human volunteers (also called participants) that is intended to add to medical knowledge. There are two main types of clinical studies: clinical trials (also called interventional studies) and observational studies. (CDISC Glossary)
 * @preferredTerm Clinical Study
 * @nciCode C15206
 */
export const StudySchema: z.ZodObject<any> = z.object({
  id: z.string(),
  // The literal identifier (i.e., distinctive designation) of the clinical study.
  name: z.string(),
  // The short descriptive designation for the clinical study.
  label: z.string().optional(),
  // A narrative representation of the clinical study.
  description: z.string().optional(),
  // A USDM relationship between the Study and StudyVersion classes which identifies the set of versions associated with the study.
  versions: z.array(StudyVersionSchema).min(0).optional(),
  // A USDM relationship between the Study and StudyDefinitionDocument classes signifying that the study is documented in a study definition document.
  documentedBy: z.array(StudyDefinitionDocumentSchema).min(0).optional(),
  extensionAttributes: z.array(ExtensionAttributeSchema).min(0).optional(),
  instanceType: z.string(),
});

export type Study = z.infer<typeof StudySchema>;

// Discriminated unions for abstract classes
// These are defined after all schemas to avoid forward reference issues

// Discriminated union for QuantityRange subclasses
export const QuantityRangeUnionSchema: z.ZodUnion<[typeof QuantitySchema, typeof RangeSchema]> = z.union([QuantitySchema, RangeSchema]);
export type QuantityRangeUnion = z.infer<typeof QuantityRangeUnionSchema>;

// Discriminated union for Identifier subclasses
export const IdentifierUnionSchema: z.ZodUnion<[typeof AdministrableProductIdentifierSchema, typeof MedicalDeviceIdentifierSchema, typeof ReferenceIdentifierSchema, typeof StudyIdentifierSchema]> = z.union([AdministrableProductIdentifierSchema, MedicalDeviceIdentifierSchema, ReferenceIdentifierSchema, StudyIdentifierSchema]);
export type IdentifierUnion = z.infer<typeof IdentifierUnionSchema>;

// Discriminated union for ScheduledInstance subclasses
export const ScheduledInstanceUnionSchema: z.ZodUnion<[typeof ScheduledActivityInstanceSchema, typeof ScheduledDecisionInstanceSchema]> = z.union([ScheduledActivityInstanceSchema, ScheduledDecisionInstanceSchema]);
export type ScheduledInstanceUnion = z.infer<typeof ScheduledInstanceUnionSchema>;

// Discriminated union for SyntaxTemplate subclasses
export const SyntaxTemplateUnionSchema: z.ZodUnion<[typeof CharacteristicSchema, typeof ConditionSchema, typeof EligibilityCriterionItemSchema, typeof EndpointSchema, typeof IntercurrentEventSchema, typeof ObjectiveSchema]> = z.union([CharacteristicSchema, ConditionSchema, EligibilityCriterionItemSchema, EndpointSchema, IntercurrentEventSchema, ObjectiveSchema]);
export type SyntaxTemplateUnion = z.infer<typeof SyntaxTemplateUnionSchema>;

// Discriminated union for PopulationDefinition subclasses
export const PopulationDefinitionUnionSchema: z.ZodUnion<[typeof StudyCohortSchema, typeof StudyDesignPopulationSchema]> = z.union([StudyCohortSchema, StudyDesignPopulationSchema]);
export type PopulationDefinitionUnion = z.infer<typeof PopulationDefinitionUnionSchema>;

// Discriminated union for StudyDesign subclasses
export const StudyDesignUnionSchema: z.ZodUnion<[typeof InterventionalStudyDesignSchema, typeof ObservationalStudyDesignSchema]> = z.union([InterventionalStudyDesignSchema, ObservationalStudyDesignSchema]);
export type StudyDesignUnion = z.infer<typeof StudyDesignUnionSchema>;

// Master schema object for easy access
export const schemas: Record<string, z.ZodTypeAny> = {
  QuantityRange: QuantityRangeSchema,
  AliasCode: AliasCodeSchema,
  Quantity: QuantitySchema,
  Range: RangeSchema,
  ExtensionClass: ExtensionClassSchema,
  ExtensionAttribute: ExtensionAttributeSchema,
  Code: CodeSchema,
  CommentAnnotation: CommentAnnotationSchema,
  Abbreviation: AbbreviationSchema,
  Duration: DurationSchema,
  Address: AddressSchema,
  StudySite: StudySiteSchema,
  Organization: OrganizationSchema,
  Identifier: IdentifierSchema,
  AdministrableProductIdentifier: AdministrableProductIdentifierSchema,
  AdministrableProductProperty: AdministrableProductPropertySchema,
  Strength: StrengthSchema,
  Substance: SubstanceSchema,
  Ingredient: IngredientSchema,
  AdministrableProduct: AdministrableProductSchema,
  MedicalDeviceIdentifier: MedicalDeviceIdentifierSchema,
  MedicalDevice: MedicalDeviceSchema,
  Administration: AdministrationSchema,
  StudyIntervention: StudyInterventionSchema,
  Procedure: ProcedureSchema,
  ResponseCode: ResponseCodeSchema,
  BiomedicalConceptProperty: BiomedicalConceptPropertySchema,
  BiomedicalConcept: BiomedicalConceptSchema,
  StudyEpoch: StudyEpochSchema,
  ScheduledInstance: ScheduledInstanceSchema,
  ScheduleTimelineExit: ScheduleTimelineExitSchema,
  Timing: TimingSchema,
  ScheduleTimeline: ScheduleTimelineSchema,
  BiomedicalConceptSurrogate: BiomedicalConceptSurrogateSchema,
  BiomedicalConceptCategory: BiomedicalConceptCategorySchema,
  Activity: ActivitySchema,
  ParameterMap: ParameterMapSchema,
  SyntaxTemplateDictionary: SyntaxTemplateDictionarySchema,
  SyntaxTemplate: SyntaxTemplateSchema,
  EligibilityCriterionItem: EligibilityCriterionItemSchema,
  EligibilityCriterion: EligibilityCriterionSchema,
  PopulationDefinition: PopulationDefinitionSchema,
  AnalysisPopulation: AnalysisPopulationSchema,
  PersonName: PersonNameSchema,
  AssignedPerson: AssignedPersonSchema,
  BiospecimenRetention: BiospecimenRetentionSchema,
  Characteristic: CharacteristicSchema,
  TransitionRule: TransitionRuleSchema,
  Encounter: EncounterSchema,
  ScheduledActivityInstance: ScheduledActivityInstanceSchema,
  Condition: ConditionSchema,
  ConditionAssignment: ConditionAssignmentSchema,
  GeographicScope: GeographicScopeSchema,
  GovernanceDate: GovernanceDateSchema,
  NarrativeContentItem: NarrativeContentItemSchema,
  NarrativeContent: NarrativeContentSchema,
  StudyDefinitionDocumentVersion: StudyDefinitionDocumentVersionSchema,
  StudyDefinitionDocument: StudyDefinitionDocumentSchema,
  DocumentContentReference: DocumentContentReferenceSchema,
  Endpoint: EndpointSchema,
  IntercurrentEvent: IntercurrentEventSchema,
  Estimand: EstimandSchema,
  Indication: IndicationSchema,
  Objective: ObjectiveSchema,
  StudyArm: StudyArmSchema,
  StudyElement: StudyElementSchema,
  StudyCell: StudyCellSchema,
  StudyCohort: StudyCohortSchema,
  StudyDesignPopulation: StudyDesignPopulationSchema,
  StudyDesign: StudyDesignSchema,
  InterventionalStudyDesign: InterventionalStudyDesignSchema,
  Masking: MaskingSchema,
  ObservationalStudyDesign: ObservationalStudyDesignSchema,
  ProductOrganizationRole: ProductOrganizationRoleSchema,
  ReferenceIdentifier: ReferenceIdentifierSchema,
  ScheduledDecisionInstance: ScheduledDecisionInstanceSchema,
  StudyAmendmentImpact: StudyAmendmentImpactSchema,
  SubjectEnrollment: SubjectEnrollmentSchema,
  StudyAmendmentReason: StudyAmendmentReasonSchema,
  StudyChange: StudyChangeSchema,
  StudyAmendment: StudyAmendmentSchema,
  StudyIdentifier: StudyIdentifierSchema,
  StudyTitle: StudyTitleSchema,
  StudyRole: StudyRoleSchema,
  StudyVersion: StudyVersionSchema,
  Study: StudySchema,
};