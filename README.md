# usdm-ts
A Typescript representation of the USDM model for clinical trials

# Purpose
A Typescript library that provides a structured representation of the USDM (Unified Study Data Model) for clinical trials. This library is designed to facilitate the management and manipulation of clinical trial data in a standardized format.

Structure of the provided objects is meant to match the data definition defined here: https://github.com/cdisc-org/DDF-RA/blob/main/Deliverables/UML/dataStructure.yml

# Installation

```bash
npm install usdm-ts
```

# Usage

```typescript
import { Study } from 'usdm-ts';
const study: Study = {
  id: 'study-123',
  name: 'Example Clinical Trial',
  description: 'A clinical trial to test the efficacy of a new drug.',
  startDate: new Date('2023-01-01'),
  endDate: new Date('2024-01-01'),
  sites: [],
  subjects: [],
  interventions: [],
  outcomes: []
};

```

# Building
```bash
pnpm run build
```

# Generating Types & Zod
```bash
pnpm run generate
```
