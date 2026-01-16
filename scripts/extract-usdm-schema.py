#!/usr/bin/env python3
"""
Extract USDM JSON Schema from cdisc-rules-engine pickle cache.

The cdisc-rules-engine maintains the authoritative USDM schema that matches
the actual JSON serialization format used in USDM documents. This script
extracts that schema and converts it to our format.

Usage:
    python3 scripts/extract-usdm-schema.py
    pnpm schema
"""

import json
import pickle
import re
import sys
from pathlib import Path

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CACHE_DIR = PROJECT_ROOT / "references" / "cdisc-rules-engine" / "resources" / "cache"
OUTPUT_FILE = PROJECT_ROOT / "src" / "USDM_schema_4_0.json"


def find_usdm_schema():
    """Find the USDM 4.0 schema pickle file."""
    schema_file = CACHE_DIR / "usdm-4-0-schema.pkl"
    if schema_file.exists():
        return schema_file

    # Try to find any usdm schema
    for f in CACHE_DIR.glob("usdm-*.pkl"):
        if "4-0" in f.name or "4.0" in f.name:
            return f

    return None


def convert_refs(obj):
    """
    Recursively convert $ref paths from $defs to definitions format.
    Also handles anyOf patterns for nullable types.
    """
    if isinstance(obj, dict):
        result = {}
        for key, value in obj.items():
            if key == "$ref" and isinstance(value, str):
                # Convert #/$defs/TypeName to #/definitions/TypeName
                result[key] = value.replace("#/$defs/", "#/definitions/")
            else:
                result[key] = convert_refs(value)
        return result
    elif isinstance(obj, list):
        return [convert_refs(item) for item in obj]
    else:
        return obj


def simplify_nullable(prop_schema):
    """
    Simplify anyOf patterns for nullable types.
    { anyOf: [{type: "string"}, {type: "null"}] } -> { type: ["string", "null"] }
    """
    if not isinstance(prop_schema, dict):
        return prop_schema

    if "anyOf" in prop_schema:
        any_of = prop_schema["anyOf"]
        if len(any_of) == 2:
            types = []
            other_props = {}

            for option in any_of:
                if option == {"type": "null"}:
                    types.append("null")
                elif "type" in option and len(option) == 1:
                    types.append(option["type"])
                elif "$ref" in option:
                    # anyOf with $ref and null - keep as anyOf but simplified
                    return prop_schema
                else:
                    # More complex, keep as is
                    return prop_schema

            if len(types) == 2 and "null" in types:
                # Can simplify to type array
                non_null_type = [t for t in types if t != "null"][0]
                result = {"type": [non_null_type, "null"]}
                # Copy other properties except anyOf
                for k, v in prop_schema.items():
                    if k != "anyOf":
                        result[k] = v
                return result

    return prop_schema


def transform_definition(name, defn):
    """Transform a single type definition to our format."""
    result = {
        "type": "object",
        "properties": {},
        "additionalProperties": False
    }

    # Copy properties, transforming as needed
    if "properties" in defn:
        for prop_name, prop_schema in defn["properties"].items():
            # Convert refs and simplify nullable types
            transformed = convert_refs(prop_schema)
            transformed = simplify_nullable(transformed)

            # Remove unnecessary metadata
            for key in ["title", "default"]:
                if key in transformed:
                    del transformed[key]

            result["properties"][prop_name] = transformed

    # Copy required fields
    if "required" in defn:
        result["required"] = defn["required"]

    return result


def extract_schema():
    """Extract and convert the USDM schema."""
    schema_file = find_usdm_schema()

    if not schema_file:
        print(f"Error: USDM schema pickle not found in {CACHE_DIR}")
        print("Run 'pnpm install' to clone the reference repositories.")
        sys.exit(1)

    print(f"Loading schema from: {schema_file.name}")

    with open(schema_file, "rb") as f:
        source_schema = pickle.load(f)

    # Initialize output schema
    output_schema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "urn:usdm:schema:USDM_schema_4_0",
        "title": "USDM 4.0 Schema",
        "description": "JSON Schema for USDM (Unified Study Definitions Model) 4.0 documents. Extracted from cdisc-rules-engine authoritative source.",
        "type": "object",
        "definitions": {}
    }

    # Convert definitions
    if "$defs" in source_schema:
        defs = source_schema["$defs"]
        print(f"Converting {len(defs)} type definitions...")

        for name, defn in defs.items():
            output_schema["definitions"][name] = transform_definition(name, defn)

    # Add root-level properties if present (for the wrapper object)
    if "properties" in source_schema:
        output_schema["properties"] = convert_refs(source_schema["properties"])

    if "required" in source_schema:
        output_schema["required"] = source_schema["required"]

    # Write output
    with open(OUTPUT_FILE, "w") as f:
        json.dump(output_schema, f, indent=2)
        f.write("\n")

    print(f"\nSchema written to: {OUTPUT_FILE}")
    print(f"  {len(output_schema['definitions'])} definitions")

    # Verify key properties exist
    if "Activity" in output_schema["definitions"]:
        activity_props = output_schema["definitions"]["Activity"]["properties"]
        expected = ["childIds", "biomedicalConceptIds", "previousId", "nextId", "timelineId"]
        found = [p for p in expected if p in activity_props]
        missing = [p for p in expected if p not in activity_props]

        print(f"\nActivity validation:")
        print(f"  Found: {', '.join(found)}")
        if missing:
            print(f"  Missing: {', '.join(missing)}")

    return output_schema


if __name__ == "__main__":
    extract_schema()
