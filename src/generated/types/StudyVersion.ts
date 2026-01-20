// Auto-generated - do not edit

import type { Abbreviation } from "./Abbreviation"
import type { AdministrableProduct } from "./AdministrableProduct"
import type { BiomedicalConcept } from "./BiomedicalConcept"
import type { BiomedicalConceptCategory } from "./BiomedicalConceptCategory"
import type { BiomedicalConceptSurrogate } from "./BiomedicalConceptSurrogate"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { Condition } from "./Condition"
import type { EligibilityCriterionItem } from "./EligibilityCriterionItem"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { GovernanceDate } from "./GovernanceDate"
import type { MedicalDevice } from "./MedicalDevice"
import type { NarrativeContentItem } from "./NarrativeContentItem"
import type { Organization } from "./Organization"
import type { ProductOrganizationRole } from "./ProductOrganizationRole"
import type { ReferenceIdentifier } from "./ReferenceIdentifier"
import type { StudyAmendment } from "./StudyAmendment"
import type { StudyDefinitionDocumentVersion } from "./StudyDefinitionDocumentVersion"
import type { StudyIdentifier } from "./StudyIdentifier"
import type { StudyIntervention } from "./StudyIntervention"
import type { StudyRole } from "./StudyRole"
import type { StudyTitle } from "./StudyTitle"
import type { SyntaxTemplateDictionary } from "./SyntaxTemplateDictionary"
import type { StudyDesign } from "./index"

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
  documentVersionIds?: (string | StudyDefinitionDocumentVersion)[]

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
