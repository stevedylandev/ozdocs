#!/usr/bin/env bash

# Check if two arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <repo_url> <file_path>"
    exit 1
fi

# Assign arguments to variables
url="$1"
file_path="$2"

# Create the changelog.mdx file with the specified content
cat > "$file_path/changelog.mdx" << EOF
---
title: Changelog
---

EOF

# Run changelog-from-release and append to the file
changelog-from-release -r "$url" >> "$file_path/changelog.mdx"
