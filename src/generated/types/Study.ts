// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"
import type { StudyDefinitionDocument } from "./StudyDefinitionDocument"
import type { StudyVersion } from "./StudyVersion"

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
