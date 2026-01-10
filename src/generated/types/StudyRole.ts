// Auto-generated - do not edit

import type { AssignedPerson } from "./AssignedPerson"
import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { Masking } from "./Masking"
import type { Organization } from "./Organization"
import type { StudyVersion } from "./StudyVersion"
import type { StudyDesign } from "./index"

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
