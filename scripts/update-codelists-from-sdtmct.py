#!/usr/bin/env python3
"""
Update codelist_index.json with data from SDTM CT pickle files.

This script reads the codelist_index.json, extracts codelist codes,
looks them up in the SDTM CT pickle file, and updates the values
and extensibility flags from the authoritative source.
"""

import json
import pickle
import re
import sys
from pathlib import Path

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CODELIST_INDEX = PROJECT_ROOT / "schemas" / "codelist_index.json"
CACHE_DIR = PROJECT_ROOT / "references" / "cdisc-rules-engine" / "resources" / "cache"


def find_latest_sdtmct():
    """Find the latest SDTM CT pickle file by date."""
    pattern = re.compile(r"sdtmct-(\d{4}-\d{2}-\d{2})\.pkl")
    pickles = []

    for f in CACHE_DIR.glob("sdtmct-*.pkl"):
        match = pattern.match(f.name)
        if match:
            pickles.append((match.group(1), f))

    if not pickles:
        return None

    # Sort by date descending and return the latest
    pickles.sort(key=lambda x: x[0], reverse=True)
    return pickles[0][1]


def load_sdtmct(pickle_path):
    """Load SDTM CT codelists from pickle file."""
    with open(pickle_path, "rb") as f:
        ct = pickle.load(f)

    # Index by conceptId for fast lookup
    codelists = {}
    for cl in ct["codelists"]:
        codelists[cl["conceptId"]] = cl

    return codelists


def transform_term(term):
    """Transform a term from SDTM CT format to codelist_index format."""
    return {
        "code": term["conceptId"],
        "term": term["submissionValue"],
        "synonyms": ", ".join(term.get("synonyms", [])) if term.get("synonyms") else None,
        "definition": term.get("definition")
    }


def update_codelist_index(pickle_path):
    """Update codelist_index.json with SDTM CT data."""
    # Load current codelist index
    with open(CODELIST_INDEX, "r") as f:
        index = json.load(f)

    # Load SDTM CT
    sdtmct = load_sdtmct(pickle_path)

    updated = 0
    not_found = []

    for entity_attr, codelist_data in index.items():
        # Skip the template entry
        if entity_attr == "Entity.Attribute":
            continue

        codelist_code = codelist_data.get("codelist_code")
        if not codelist_code:
            continue

        # Look up in SDTM CT
        if codelist_code in sdtmct:
            ct_codelist = sdtmct[codelist_code]

            # Update extensibility
            old_ext = codelist_data.get("extensible", False)
            new_ext = ct_codelist.get("extensible", False)

            # Transform terms
            new_values = [transform_term(t) for t in ct_codelist.get("terms", [])]

            # Check for changes
            if old_ext != new_ext or len(codelist_data.get("values", [])) != len(new_values):
                print(f"Updating {entity_attr} ({codelist_code}):")
                if old_ext != new_ext:
                    print(f"  extensible: {old_ext} -> {new_ext}")
                print(f"  values: {len(codelist_data.get('values', []))} -> {len(new_values)} terms")

            codelist_data["extensible"] = new_ext
            codelist_data["values"] = new_values
            updated += 1
        else:
            not_found.append((entity_attr, codelist_code))

    # Write updated index
    with open(CODELIST_INDEX, "w") as f:
        json.dump(index, f, indent=2)
        f.write("\n")

    print(f"\nUpdated {updated} codelists")

    if not_found:
        print(f"\nCodelists not found in SDTM CT ({len(not_found)}):")
        for entity_attr, code in not_found:
            print(f"  {entity_attr}: {code}")


if __name__ == "__main__":
    pickle_path = find_latest_sdtmct()

    if not pickle_path:
        print(f"Error: No SDTM CT pickle files found in {CACHE_DIR}")
        print("Run 'pnpm install' to clone the reference repositories.")
        sys.exit(1)

    print(f"Using SDTM CT: {pickle_path.name}\n")
    update_codelist_index(pickle_path)
