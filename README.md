# USDM Model for Typescript
A Typescript representation of the [USDM model](https://www.cdisc.org/ddf) for applications in clinical trials.

USDM (Unified Study Data Model) is a standardized framework for describing a clinical trial. It's a digitized format of a clinical trial protocol. This library provides Typescript interfaces and types that correspond to the components of the USDM, enabling developers to work with clinical trial data in a consistent and structured manner.

Structure of the provided objects is meant to match the data definition defined here: https://github.com/cdisc-org/DDF-RA/blob/main/Deliverables/UML/dataStructure.yml

# Installation

```bash
npm install usdm-ts
# ^-- Note that currently, this package is not published to NPM. You can install it directly from the GitHub repository:
npm install git+ssh://git@github.com:HumanTrue/usdm-ts.git#v[VERSION]
```

# Usage

<!-- EXAMPLE_USAGE_START -->
```typescript
import type { Study } from "usdm-ts/types"

const study: Study = {
  instanceType: "Study",
  id: "study-123",
  name: "Example Clinical Trial",
  description: "A clinical trial to test the efficacy of a new drug.",
  label: "TRIAL-001",
  versions: [],
}
```
<!-- EXAMPLE_USAGE_END -->

# Building / Development

We use `pnpm` as our package manager. To install dependencies, run:

```bash
pnpm install
```

To build the project, run:

```bash
pnpm build
```
To generate the types and Zod schemas from the USDM data structure definition, run:
```bash
pnpm run generate
```
To run generate documentation, run:
```bash
pnpm docs
```

<!-- GENERATED_TYPES_START -->
## Generated Types

| Type | Description | NCI Code |
|------|-------------|----------|
| `Abbreviation` | A set of letters that are drawn from a word or from a sequence of words and that are used for brevity in place of the full word or phrase. (CDISC Glossary) | [C42610](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C42610) |
| `Activity` | An action, undertaking, or event, which is anticipated to be performed or observed, or was performed or observed, according to the study protocol during the execution of the study. | [C71473](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C71473) |
| `Address` | A standardized representation of the location of a person, business, building, or organization. (NCI) | [C25407](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25407) |
| `AdministrableProduct` | Any study product that is formulated and presented in the form that is suitable for administration to a study participant. | [C215492](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215492) |
| `AdministrableProductIdentifier` | A sequence of characters used to identify, name, or characterize the administrable product. | [C215493](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215493) |
| `AdministrableProductProperty` | A characteristic from a set of characteristics used to define an administrable product. | [C215494](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215494) |
| `Administration` | The act of dispensing, applying, or tendering a product, agent, or therapy. | [C25409](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25409) |
| `AliasCode` | An alternative symbol or combination of symbols which is assigned to the members of a collection. | [C201344](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201344) |
| `AnalysisPopulation` | A target study population on which an analysis is performed. These may be represented by the entire study population, a subgroup defined by a particular characteristic measured at baseline, or a principal stratum defined by the occurrence (or non-occurrence, depending on context) of a specific intercurrent event. (ICH E9 R1 Addendum) | [C188814](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C188814) |
| `AssignedPerson` | An individual person who is allotted or appointed to a particular role, function, or other entity. | [C215496](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215496) |
| `BiomedicalConcept` | A unit of biomedical knowledge created from a unique combination of characteristics that include implementation details like variables and terminologies, used as building blocks for standardized, hierarchically structured clinical research information. | [C201345](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201345) |
| `BiomedicalConceptCategory` | A grouping of biomedical concepts based on some commonality or by user defined characteristics. | [C201346](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201346) |
| `BiomedicalConceptProperty` | A characteristic from a set of characteristics used to define a biomedical concept. | [C202493](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C202493) |
| `BiomedicalConceptSurrogate` | A concept that substitutes for a standard biomedical concept from the designated source. | [C207590](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207590) |
| `BiospecimenRetention` | The continued possession, cataloging, and storage of collected biological specimens beyond their initial use. | [C215505](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215505) |
| `Characteristic` | The distinguishing qualities or prominent aspects of an entity. | [C25447](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25447) |
| `Code` | A symbol or combination of symbols which is assigned to the members of a collection. | [C25162](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25162) |
| `CommentAnnotation` | An explanatory or critical comment, or other in-context information (e.g., pattern, motif, link), that has been associated with data or other types of information. | [C44272](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C44272) |
| `Condition` | A state of being. | [C25457](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25457) |
| `ConditionAssignment` | An allotting or appointment to a condition or set of conditions that are to be met in order to make a logical decision. | [C201335](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201335) |
| `DocumentContentReference` | A citation pointing to the location of specific content within a document. | [C215499](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215499) |
| `Duration` | The length of time during which something continues. | [C25330](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25330) |
| `EligibilityCriterion` | Characteristics which are necessary to allow a subject to participate in a clinical study, as outlined in the study protocol. The concept covers inclusion and exclusion criteria. | [C16112](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C16112) |
| `EligibilityCriterionItem` | An individual item within the container that holds an instance of an eligibility criterion. | [C215506](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215506) |
| `Encounter` | Any physical or virtual contact between two or more parties involved in a study, at which an assessment or activity takes place. | [C215488](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215488) |
| `Endpoint` | A defined variable intended to reflect an outcome of interest that is statistically analyzed to address a particular research question. NOTE: A precise definition of an endpoint typically specifies the type of assessments made, the timing of those assessments, the assessment tools used, and possibly other details, as applicable, such as how multiple assessments within an individual are to be combined. [After BEST Resource] (CDISC Glossary) | [C25212](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25212) |
| `Estimand` | A precise description of the treatment effect reflecting the clinical question posed by a given clinical trial objective. It summarises at a population level what the outcomes would be in the same patients under different treatment conditions being compared. (ICH E9 R1 Addendum) | [C188813](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C188813) |
| `ExtensionAttribute` | - | - |
| `ExtensionClass` | - | - |
| `GeographicScope` | The extent or range related to the physical location of an entity. | [C207591](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207591) |
| `GovernanceDate` | Any of the dates associated with event milestones within a clinical study's oversight and management framework. | [C207595](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207595) |
| `Identifier` | - | - |
| `Indication` | The disease or condition the intervention will diagnose, treat, prevent, cure, or mitigate. | [C41184](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C41184) |
| `Ingredient` | Any component that constitutes a part of a compounded substance or mixture. | [C51981](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C51981) |
| `IntercurrentEvent` | An event(s) occurring after treatment initiation that affects either the interpretation or the existence of the measurements associated with the clinical question of interest. (ICH E9 Addendum on Estimands) | [C188815](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C188815) |
| `InterventionalStudyDesign` | The strategy that specifies the structure of an interventional trial in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study. | [C215503](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215503) |
| `Masking` | The mechanism used to obscure the distinctive characteristics of the study intervention or procedure to make it indistinguishable from a comparator. (CDISC Glossary) | [C191278](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C191278) |
| `MedicalDevice` | Any instrument, apparatus, implement, machine, appliance, implant, reagent for in vitro use, software, material or other similar or related article, intended by the manufacturer to be used, alone or in combination for, one or more specific medical purpose(s). [After REGULATION (EU) 2017/745 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 5 April 2017 on medical devices] | [C16830](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C16830) |
| `MedicalDeviceIdentifier` | A sequence of characters used to identify, name, or characterize the medical device. | [C215501](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215501) |
| `NarrativeContent` | The container that holds an instance of unstructured text and which may include objects such as tables, figures, and images. | [C207592](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207592) |
| `NarrativeContentItem` | An individual item within the container that holds an instance of unstructured text and which may include objects such as tables, figures, and images. | [C215489](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215489) |
| `Objective` | The reason for performing a study in terms of the scientific questions to be answered by the analysis of data collected during the study. | [C142450](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C142450) |
| `ObservationalStudyDesign` | The strategy that specifies the structure of an observational study in terms of the planned activities (including timing) and statistical analysis approach intended to meet the objectives of the study. | [C215504](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215504) |
| `Organization` | A formalized group of persons or other organizations collected together for a common purpose (such as administrative, legal, political) and the infrastructure to carry out that purpose. (BRIDG) | [C19711](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C19711) |
| `ParameterMap` | The paired name and value for a given parameter. | [C207456](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207456) |
| `PersonName` | A word or group of words indicating the identity of a person usually consisting of a first (personal) name and a last (family) name with an optional middle name. In some cultural traditions the family name comes first. | [C25191](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25191) |
| `PopulationDefinition` | - | - |
| `Procedure` | Any activity performed by manual and/or instrumental means for the purpose of diagnosis, assessment, therapy, prevention, or palliative care. | [C98769](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C98769) |
| `ProductOrganizationRole` | A designation that identifies the function of an organization within the context of the product. | [C215502](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215502) |
| `Quantity` | How much there is of something that can be measured; the total amount or number. | [C25256](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C25256) |
| `QuantityRange` | - | - |
| `Range` | An expression that defines the lower and upper limits of a variation. | [C38013](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C38013) |
| `ReferenceIdentifier` | A sequence of characters used to identify, name, or characterize the reference. | [C82531](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C82531) |
| `ResponseCode` | A symbol or combination of symbols representing the response to the question. | [C201347](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201347) |
| `ScheduledActivityInstance` | A scheduled occurrence of an activity event. | [C201350](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201350) |
| `ScheduledDecisionInstance` | A scheduled occurrence of a decision event. | [C201351](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201351) |
| `ScheduledInstance` | - | - |
| `ScheduleTimeline` | A chronological schedule of planned temporal events. | [C201348](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201348) |
| `ScheduleTimelineExit` | To go out of or leave the schedule timeline. | [C201349](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C201349) |
| `Strength` | The content of an substance expressed quantitatively per dosage unit, per unit of volume, or per unit of weight, according to the pharmaceutical dose form of the product. | [C215495](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215495) |
| `Study` | A clinical study involves research using human volunteers (also called participants) that is intended to add to medical knowledge. There are two main types of clinical studies: clinical trials (also called interventional studies) and observational studies. (CDISC Glossary) | [C15206](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C15206) |
| `StudyAmendment` | A written description of a change(s) to, or formal clarification of, a study. | [C207594](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207594) |
| `StudyAmendmentImpact` | The effect or consequence of an amendment on some aspect of the study. | [C215500](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215500) |
| `StudyAmendmentReason` | The rationale for the change(s) to, or formal clarification of, a protocol. | [C207457](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207457) |
| `StudyArm` | A planned pathway assigned to the subject as they progress through the study, usually referred to by a name that reflects one or more treatments, exposures, and/or controls included in the path. | [C174447](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C174447) |
| `StudyCell` | A partitioning of a study arm into individual pieces, which are associated with an epoch and any number of sequential elements within that epoch. | [C188810](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C188810) |
| `StudyChange` | The act of alteration or modification to a study. | [C215498](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215498) |
| `StudyCohort` | A group of individuals who share a set of characteristics (e.g., exposures, experiences, attributes), which logically defines a population under study. | [C61512](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C61512) |
| `StudyDefinitionDocument` | Any physical or electronic document that is related to defining a study or part of a study. | [C215490](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215490) |
| `StudyDefinitionDocumentVersion` | A representation of a particular edition or snapshot of the study definition document as it exists at a particular point in time. | [C215491](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215491) |
| `StudyDesign` | - | - |
| `StudyDesignPopulation` | The population within the general population to which the study results can be generalized. | [C142728](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C142728) |
| `StudyElement` | A basic building block for time within a clinical study comprising the following characteristics: a description of what happens to the subject during the element; a definition of the start of the element; a rule for ending the element. | [C142735](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C142735) |
| `StudyEpoch` | A named time period defined in the protocol, wherein a study activity is specified and unchanging throughout the interval, to support a study-specific purpose. | [C71738](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C71738) |
| `StudyIdentifier` | A sequence of characters used to identify, name, or characterize the study. | [C83082](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C83082) |
| `StudyIntervention` | Any agent, device, or procedure being tested or used as a reference or comparator in the conduct of a clinical trial. | [C207649](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207649) |
| `StudyRole` | A designation that identifies the function of study personnel or an organization within the context of the study. | [C215497](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C215497) |
| `StudySite` | The location at which a study investigator conducts study activities. | [C80403](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C80403) |
| `StudyTitle` | The sponsor-defined name of the clinical study. | [C49802](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C49802) |
| `StudyVersion` | A plan at a particular point in time for a study. | [C188816](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C188816) |
| `SubjectEnrollment` | The act of enrolling subjects into a study. The subject will have met the inclusion/exclusion criteria to participate in the trial and will have signed an informed consent form. (CDISC Glossary) | [C37948](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C37948) |
| `Substance` | Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical. | [C45306](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C45306) |
| `SyntaxTemplate` | - | - |
| `SyntaxTemplateDictionary` | A reference source that provides a listing of valid parameter names and values used in syntax template text strings. | [C207597](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C207597) |
| `Timing` | The chronological relationship between temporal events. | [C80484](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C80484) |
| `TransitionRule` | A guide that governs the allocation of subjects to operational options at a discrete decision point or branch (e.g., assignment to a particular arm, discontinuation) within a clinical trial plan. | [C82567](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C82567) |
<!-- GENERATED_TYPES_END -->
