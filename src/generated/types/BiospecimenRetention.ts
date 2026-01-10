// Auto-generated - do not edit

import type { ExtensionAttribute } from "./ExtensionAttribute"

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
