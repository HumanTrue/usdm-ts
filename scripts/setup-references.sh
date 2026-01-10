#!/usr/bin/env bash
# Setup reference repositories for development
# This script is run automatically via postinstall hook

set -e

REFERENCES_DIR="$(dirname "$0")/../references"
mkdir -p "$REFERENCES_DIR"

# Clone or update a reference repository
setup_repo() {
    local name="$1"
    local url="$2"
    local dir="$REFERENCES_DIR/$name"

    if [ -d "$dir/.git" ]; then
        echo "Updating $name..."
        git -C "$dir" fetch --quiet
        git -C "$dir" pull --quiet || true
    else
        echo "Cloning $name..."
        git clone --quiet "$url" "$dir"
    fi
}

# Reference repositories
setup_repo "cdisc-rules-engine" "https://github.com/cdisc-org/cdisc-rules-engine.git"
setup_repo "DDF-RA" "https://github.com/cdisc-org/DDF-RA.git"

echo "References setup complete."
