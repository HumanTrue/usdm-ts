#!/usr/bin/env python3
"""
Update codelist_index.json with data from SDTM CT and DDF CT pickle files.

This script reads the codelist_index.json, extracts codelist codes,
looks them up in both SDTM CT and DDF CT pickle files, and updates
the values and extensibility flags from the authoritative sources.
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


def find_latest_pickle(prefix):
    """Find the latest pickle file by date for a given prefix (sdtmct, ddfct)."""
    pattern = re.compile(rf"{prefix}-(\d{{4}}-\d{{2}}-\d{{2}})\.pkl")
    pickles = []

    for f in CACHE_DIR.glob(f"{prefix}-*.pkl"):
        match = pattern.match(f.name)
        if match:
            pickles.append((match.group(1), f))

    if not pickles:
        return None

    # Sort by date descending and return the latest
    pickles.sort(key=lambda x: x[0], reverse=True)
    return pickles[0][1]


def load_ct(pickle_path):
    """Load CT codelists from pickle file."""
    with open(pickle_path, "rb") as f:
        ct = pickle.load(f)

    # Index by conceptId for fast lookup
    codelists = {}
    for cl in ct["codelists"]:
        codelists[cl["conceptId"]] = cl

    return codelists


def transform_term(term):
    """Transform a term from CT format to codelist_index format."""
    return {
        "code": term["conceptId"],
        "term": term["submissionValue"],
        "synonyms": ", ".join(term.get("synonyms", [])) if term.get("synonyms") else None,
        "definition": term.get("definition")
    }


def merge_terms(existing_values, new_terms):
    """
    Merge new terms with existing values, preserving existing codes not in new_terms.
    This handles cases where CT versions change codes (e.g., CLINIC C51282 -> C211570).
    """
    # Index existing by code
    existing_by_code = {v["code"]: v for v in existing_values}

    # Index new by code
    new_by_code = {t["code"]: t for t in new_terms}

    # Start with all new terms
    merged = list(new_terms)

    # Add existing terms that aren't in the new set (for backwards compatibility)
    for code, value in existing_by_code.items():
        if code not in new_by_code:
            merged.append(value)

    return merged


def update_codelist_index(sdtmct, ddfct):
    """Update codelist_index.json with CT data."""
    # Load current codelist index
    with open(CODELIST_INDEX, "r") as f:
        index = json.load(f)

    updated_sdtm = 0
    updated_ddf = 0
    not_found = []

    for entity_attr, codelist_data in index.items():
        # Skip the template entry
        if entity_attr == "Entity.Attribute":
            continue

        codelist_code = codelist_data.get("codelist_code")
        if not codelist_code:
            continue

        ct_codelist = None
        source = None

        # Look up in SDTM CT first, then DDF CT
        if codelist_code in sdtmct:
            ct_codelist = sdtmct[codelist_code]
            source = "SDTM"
        elif codelist_code in ddfct:
            ct_codelist = ddfct[codelist_code]
            source = "DDF"

        if ct_codelist:
            # Update extensibility
            old_ext = codelist_data.get("extensible", False)
            new_ext = ct_codelist.get("extensible", False)

            # Transform terms
            new_values = [transform_term(t) for t in ct_codelist.get("terms", [])]

            # For extensible codelists, merge with existing to preserve backwards compatibility
            if new_ext and codelist_data.get("values"):
                merged_values = merge_terms(codelist_data["values"], new_values)
            else:
                merged_values = new_values

            # Check for changes
            old_count = len(codelist_data.get("values", []))
            new_count = len(merged_values)

            if old_ext != new_ext or old_count != new_count:
                print(f"Updating {entity_attr} ({codelist_code}) from {source} CT:")
                if old_ext != new_ext:
                    print(f"  extensible: {old_ext} -> {new_ext}")
                if old_count != new_count:
                    print(f"  values: {old_count} -> {new_count} terms")

            codelist_data["extensible"] = new_ext
            codelist_data["values"] = merged_values

            if source == "SDTM":
                updated_sdtm += 1
            else:
                updated_ddf += 1
        else:
            not_found.append((entity_attr, codelist_code))

    # Write updated index
    with open(CODELIST_INDEX, "w") as f:
        json.dump(index, f, indent=2)
        f.write("\n")

    print(f"\nUpdated {updated_sdtm} codelists from SDTM CT")
    print(f"Updated {updated_ddf} codelists from DDF CT")

    if not_found:
        print(f"\nCodelists not found in any CT ({len(not_found)}):")
        for entity_attr, code in not_found:
            print(f"  {entity_attr}: {code}")


def merge_ct_sources(*ct_dicts):
    """Merge multiple CT dictionaries, combining terms from all versions."""
    merged = {}

    for ct in ct_dicts:
        for code, codelist in ct.items():
            if code not in merged:
                merged[code] = {
                    "conceptId": codelist["conceptId"],
                    "name": codelist.get("name"),
                    "extensible": codelist.get("extensible", False),
                    "terms": list(codelist.get("terms", []))
                }
            else:
                # Merge terms, avoiding duplicates by conceptId
                existing_term_codes = {t["conceptId"] for t in merged[code]["terms"]}
                for term in codelist.get("terms", []):
                    if term["conceptId"] not in existing_term_codes:
                        merged[code]["terms"].append(term)
                        existing_term_codes.add(term["conceptId"])
                # Use most permissive extensibility
                if codelist.get("extensible"):
                    merged[code]["extensible"] = True

    return merged


if __name__ == "__main__":
    # Load multiple CT versions to get comprehensive term coverage
    # DDF-RA fixtures may use older CT versions, so we merge terms from multiple versions

    sdtmct_2024 = CACHE_DIR / "sdtmct-2024-09-27.pkl"
    sdtmct_latest = find_latest_pickle("sdtmct")
    ddfct_2024 = CACHE_DIR / "ddfct-2024-09-27.pkl"
    ddfct_latest = find_latest_pickle("ddfct")

    if not sdtmct_latest:
        print(f"Error: No SDTM CT pickle files found in {CACHE_DIR}")
        print("Run 'pnpm install' to clone the reference repositories.")
        sys.exit(1)

    # Load all available versions
    print("Loading CT versions:")
    sdtmct_sources = []
    if sdtmct_2024.exists():
        print(f"  SDTM CT: {sdtmct_2024.name}")
        sdtmct_sources.append(load_ct(sdtmct_2024))
    if sdtmct_latest and sdtmct_latest != sdtmct_2024:
        print(f"  SDTM CT: {sdtmct_latest.name}")
        sdtmct_sources.append(load_ct(sdtmct_latest))

    ddfct_sources = []
    if ddfct_2024 and ddfct_2024.exists():
        print(f"  DDF CT: {ddfct_2024.name}")
        ddfct_sources.append(load_ct(ddfct_2024))
    if ddfct_latest and ddfct_latest != ddfct_2024:
        print(f"  DDF CT: {ddfct_latest.name}")
        ddfct_sources.append(load_ct(ddfct_latest))

    # Merge all versions
    sdtmct = merge_ct_sources(*sdtmct_sources) if sdtmct_sources else {}
    ddfct = merge_ct_sources(*ddfct_sources) if ddfct_sources else {}

    print()
    update_codelist_index(sdtmct, ddfct)
