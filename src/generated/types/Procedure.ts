// Auto-generated - do not edit

import type { Code } from "./Code"
import type { CommentAnnotation } from "./CommentAnnotation"
import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudyIntervention } from "./StudyIntervention"

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
