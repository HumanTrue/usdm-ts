#!/usr/bin/env python3
"""
Build src/ct_packages.json: CDISC controlled terminology per CT package version.

codelist_index.json is a single merged snapshot. CDISC CORE checks a coded value
against the CT package named by its codeSystemVersion, so this file keeps every
published version of each codelist, with both the submission value and the
preferred term of every term.

Sources, all in references/cdisc-rules-engine/resources/cache:
  - sdtmct-YYYY-MM-DD.pkl / ddfct-YYYY-MM-DD.pkl: the CT packages. The file names
    are also the list of published packages, which is how CORE builds it
    (scripts/script_utils.py in the rules engine).
  - rules.pkl: the CORE rules. Each USDM codelist rule names its codelist and the
    package type (SDTM or DDF) it is checked against. Ten codelists appear in both
    families, so the package type cannot be derived from the packages alone.

Output shape (see src/ct-packages.ts for the typed accessors):
  packages:   {"SDTM": [dates], "DDF": [dates]}
  attributes: {"Entity.attribute": {"codelistCode", "packageType"}}
  codelists:  {"C66737": {
                 "packageType": "SDTM",
                 "terms":    [[code, submissionValue, preferredTerm], ...],
                 "contents": [{"extensible": bool, "terms": [index into terms]}],
                 "versions": {"2024-09-27": index into contents}}}

A codelist is absent from "versions" for the packages it does not exist in. Terms
and contents are stored once and referenced by index because most codelists do
not change between packages.
"""

import json
import pickle
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
CODELIST_INDEX = PROJECT_ROOT / "src" / "codelist_index.json"
OUTPUT = PROJECT_ROOT / "src" / "ct_packages.json"
CACHE_DIR = PROJECT_ROOT / "references" / "cdisc-rules-engine" / "resources" / "cache"

PACKAGE_PREFIXES = {"SDTM": "sdtmct", "DDF": "ddfct"}
# The documentation row in codelist_index.json; not a real attribute.
TEMPLATE_KEY = "Entity.Attribute"


def load_packages(prefix):
    """Return {date: {codelist code: codelist}} for every package of a family."""
    pattern = re.compile(rf"{prefix}-(\d{{4}}-\d{{2}}-\d{{2}})\.pkl$")
    packages = {}
    for path in sorted(CACHE_DIR.glob(f"{prefix}-*.pkl")):
        match = pattern.match(path.name)
        if not match:
            continue
        with open(path, "rb") as f:
            package = pickle.load(f)
        packages[match.group(1)] = {cl["conceptId"]: cl for cl in package["codelists"]}
    return packages


def load_rule_package_types():
    """Return {codelist code: package type} from the CORE USDM codelist rules."""
    with open(CACHE_DIR / "rules.pkl", "rb") as f:
        rules = pickle.load(f)

    types = {}
    for core_id, rule in rules.items():
        if not any(s.get("Name") == "USDM" for s in rule.get("standards") or []):
            continue
        operations = rule.get("operations") or []
        rule_types = {op["ct_package_type"] for op in operations if op.get("ct_package_type")}
        codes = {
            entry["output"]
            for op in operations
            if op.get("id") == "$codelist_code"
            for entry in op.get("map") or []
        }
        if not rule_types or not codes:
            continue
        if len(rule_types) != 1:
            sys.exit(f"Error: {core_id} uses more than one CT package type: {sorted(rule_types)}")
        rule_type = next(iter(rule_types))
        if rule_type not in PACKAGE_PREFIXES:
            sys.exit(f"Error: {core_id} uses unsupported CT package type {rule_type}")
        for code in codes:
            if types.setdefault(code, rule_type) != rule_type:
                sys.exit(f"Error: CORE rules disagree on the package type of {code}")
    return types


def resolve_package_type(code, rule_types, packages):
    """Package type from the CORE rules, else from the only family that has the codelist."""
    if code in rule_types:
        return rule_types[code]
    families = [t for t, by_date in packages.items() if any(code in cls for cls in by_date.values())]
    if len(families) == 1:
        return families[0]
    if not families:
        sys.exit(f"Error: codelist {code} is not in any CT package")
    sys.exit(f"Error: codelist {code} is in {families} packages and no CORE rule names its package type")


def build_codelist(code, package_type, by_date):
    """Collect every version of one codelist, storing terms and contents once."""
    terms = []
    term_index = {}
    contents = []
    content_index = {}
    versions = {}

    for date, codelists in by_date.items():
        codelist = codelists.get(code)
        if codelist is None:
            continue
        indexes = []
        for term in codelist.get("terms", []):
            key = (term["conceptId"], term["submissionValue"], term["preferredTerm"])
            if key not in term_index:
                term_index[key] = len(terms)
                terms.append(list(key))
            indexes.append(term_index[key])
        content_key = (bool(codelist["extensible"]), tuple(indexes))
        if content_key not in content_index:
            content_index[content_key] = len(contents)
            contents.append({"extensible": content_key[0], "terms": indexes})
        versions[date] = content_index[content_key]

    return {"packageType": package_type, "terms": terms, "contents": contents, "versions": versions}


def main():
    if not CACHE_DIR.exists():
        sys.exit(f"Error: {CACHE_DIR} not found. Run 'pnpm references' to clone the reference repositories.")

    packages = {t: load_packages(prefix) for t, prefix in PACKAGE_PREFIXES.items()}
    for package_type, by_date in packages.items():
        if not by_date:
            sys.exit(f"Error: no {package_type} CT packages found in {CACHE_DIR}")

    rule_types = load_rule_package_types()

    with open(CODELIST_INDEX, "r") as f:
        index = json.load(f)

    attributes = {}
    for key, entry in index.items():
        if key == TEMPLATE_KEY:
            continue
        code = entry["codelist_code"]
        attributes[key] = {
            "codelistCode": code,
            "packageType": resolve_package_type(code, rule_types, packages),
        }

    # Every codelist an attribute uses, plus every codelist a CORE USDM rule checks.
    codes = {a["codelistCode"] for a in attributes.values()} | set(rule_types)
    codelists = {}
    for code in sorted(codes):
        package_type = resolve_package_type(code, rule_types, packages)
        codelists[code] = build_codelist(code, package_type, packages[package_type])

    output = {
        "packages": {t: list(by_date) for t, by_date in packages.items()},
        "attributes": attributes,
        "codelists": codelists,
    }
    with open(OUTPUT, "w") as f:
        json.dump(output, f, separators=(",", ":"), ensure_ascii=False)
        f.write("\n")

    for package_type, by_date in packages.items():
        dates = list(by_date)
        print(f"{package_type}: {len(dates)} packages, {dates[0]} to {dates[-1]}")
    print(f"{len(attributes)} attributes, {len(codelists)} codelists")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
