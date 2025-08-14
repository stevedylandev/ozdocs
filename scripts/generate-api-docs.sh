#!/usr/bin/env bash

set -euo pipefail

# Configuration
CONTRACTS_REPO="${CONTRACTS_REPO:-https://github.com/stevedylandev/uniswap-hooks.git}"
CONTRACTS_BRANCH="${CONTRACTS_BRANCH:-master}"
TEMP_DIR="temp-contracts"
API_OUTPUT_DIR="content/uniswap-hooks/v1.x/api"
EXAMPLES_OUTPUT_DIR="examples"

echo "🔄 Generating OpenZeppelin Contracts API documentation..."

# Clean up previous runs
rm -rf "$TEMP_DIR" "$API_OUTPUT_DIR"
mkdir -p "$API_OUTPUT_DIR"

# Clone the contracts repository
echo "📦 Cloning contracts repository..."
git clone --depth 1 --branch "$CONTRACTS_BRANCH" --recurse-submodules "$CONTRACTS_REPO" "$TEMP_DIR"

# Navigate to contracts directory and install dependencies
echo "📚 Installing dependencies..."
cd "$TEMP_DIR"
npm i --silent

# Generate markdown documentation using default templates
echo "🏗️  Generating clean markdown documentation..."
npm run prepare-docs

# Copy generated markdown files to our docs directory
echo "📋 Copying generated documentation..."
if [ -d "docs/modules/api/pages" ]; then
    cp -r docs/modules/api/pages/* "../$API_OUTPUT_DIR/"
    echo "✅ API documentation copied to $API_OUTPUT_DIR"
else
    echo "❌ Error: Markdown documentation not found at expected location"
    exit 1
fi

# Copy examples if they exist
if [ -d "docs/modules/api/examples" ]; then
    mkdir -p "../$EXAMPLES_OUTPUT_DIR"
    cp -r docs/modules/api/examples/* "../$EXAMPLES_OUTPUT_DIR"
    echo "✅ Examples copied to $EXAMPLES_OUTPUT_DIR"
fi

# Raw markdown files are ready to use as-is
echo "📄 Using raw markdown files from solidity-docgen"

# Go back to the docs repo directory
cd ..

# Clean up temporary directory
echo "🧹 Cleaning up..."
rm -rf "$TEMP_DIR"

# Generate index file
echo "📝 Generating API index..."
cat > "$API_OUTPUT_DIR/index.mdx" << 'EOF'
---
title: API Reference
---

# OpenZeppelin Contracts API Reference

This API reference is automatically generated from the OpenZeppelin Contracts repository.

## Contract Categories

### Access Control
- [Access Control](access.md) - Role-based access control mechanisms
- [Ownable](access.md#ownable) - Simple ownership access control

### Tokens
- [ERC20](token/ERC20.md) - Fungible token standard implementation
- [ERC721](token/ERC721.md) - Non-fungible token standard implementation
- [ERC1155](token/ERC1155.md) - Multi-token standard implementation

### Utilities
- [Utils](utils.md) - General utility functions and contracts
- [Cryptography](utils/cryptography.md) - Cryptographic utilities

### Governance
- [Governance](governance.md) - On-chain governance systems

### Proxy Patterns
- [Proxy](proxy.md) - Upgradeable proxy patterns

### Interfaces
- [Interfaces](interfaces.md) - Standard interfaces

---

*Generated from OpenZeppelin Contracts v$(cat ../temp-contracts/package.json | grep '"version"' | cut -d '"' -f 4)*
EOF

echo "🎉 API documentation generation complete!"
echo "📂 Documentation available in: $API_OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "  - Review generated markdown files in $API_OUTPUT_DIR"
echo "  - Run your documentation site build process"
echo "  - Consider setting up automated regeneration on contract updates"
