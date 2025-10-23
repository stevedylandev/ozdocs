# OpenZeppelin Docs

![cover](public/social.png)



Welcome to the OpenZeppelin Docs repo! Before opening an issue or creating a PR please consult our [contribution guide](CONTRIBUTING.md)

## Development

This is a Next.js application generated with [Fumadocs](https://github.com/fuma-nama/fumadocs).

To start local development follow the steps below

**1. Make sure [pnpm](https://pnpm.io) is installed**

```bash
pnpm --version
```

**2. Clone the repo and install dependencies**

```bash
git clone https://github.com/OpenZeppelin/docs
cd docs
pnpm install
```

**3. Run the `dev` server to see a live preview and have your changes reflected at `http://localhost:3000`**

```bash
pnpm dev
```

## Project Structure

### Content Organization

The documentation content is organized in the `content/` directory with the following structure:

```
content/
├── community-contracts/     # Community-contributed contracts
├── confidential-contracts/  # Confidential/privacy-focused contracts
├── contracts/              # Core OpenZeppelin Contracts documentation
├── contracts-cairo/        # Cairo contracts for StarkNet
├── contracts-compact/      # Compact contract implementations
├── contracts-stylus/       # Stylus contracts for Arbitrum
├── ui-builder/   # UI Builder documentation
├── defender/               # Defender platform documentation
├── monitor/                # Monitoring tools documentation
├── relayer/                # Relayer service documentation
├── stellar-contracts/      # Stellar blockchain contracts
├── substrate-runtimes/     # Substrate runtime documentation
├── uniswap-hooks/          # Uniswap v4 hooks
├── upgrades-plugins/       # Upgrade plugins documentation
├── upgrades.mdx           # General upgrades guide
└── wizard.mdx             # Contract wizard documentation
```

Each product directory contains:
- `index.mdx` - Main documentation entry point
- `changelog.mdx` - Version history and changes
- Subdirectories for specific features/modules
- API reference files

### Application Structure

| Path                                    | Description                                                    |
| --------------------------------------- | -------------------------------------------------------------- |
| `src/app/(docs)/`                      | Documentation pages route group                               |
| `src/app/(docs)/layout.tsx`           | Docs layout wrapper                                           |
| `src/app/(docs)/[...slug]/page.tsx`   | Dynamic documentation pages                                    |
| `src/app/page.tsx`                     | Homepage                                                       |
| `src/app/layout.tsx`                   | Root application layout                                        |
| `src/app/layout.config.tsx`           | Shared layout configuration and navigation                     |
| `src/components/`                      | Reusable React components                                      |
| `src/components/layout/`               | Layout-specific components                                     |
| `src/components/icons/`                | Custom SVG icons for products                                  |
| `src/components/ui/`                   | UI component library                                           |
| `src/lib/source.ts`                    | Content source adapter with Fumadocs loader                   |

### Configuration Files

- `source.config.ts` - Fumadocs MDX configuration with math, mermaid, and code highlighting
- `next.config.mjs` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration for styling

## Navigation & Components

### Navigation Structure

The top navigation is configured in `src/app/layout.config.tsx` and includes:

- **Main Navigation**: Home, Forum, Website links
- **Product Categories**: Auto-generated from content structure
- **Search**: Full-text search across all documentation
- **Theme Toggle**: Light/dark mode switching

Sidebar navigation is handled in `src/navigation/` where multiple navigation JSON trees are exported and used inside `src/components/layout/docs-layout-client.tsx`

### Key Components

#### Layout Components
- `DocsLayoutClient` - Client-side docs layout with sidebar
- `BaseLayoutProps` - Shared layout configuration
- `PageClient` - Individual page wrapper

#### UI Components
- `Card` & `SmallCard` - Content cards for homepage
- `TOC` - Table of contents with scrollspy
- `Search` - Search interface with custom results
- `ThemeToggle` - Theme switching
- `VersionBanner` - Version-specific messaging

#### Custom Icons
Product-specific icons located in `src/components/icons/`:
- Ethereum, Arbitrum, StarkNet, Stellar, Polkadot chains
- Product icons for Contracts, Defender, Monitor, etc.
- Tool icons for Wizard, Ethernaut, etc.

### Content Features

#### MDX Enhancements
- **Math Support**: LaTeX math rendering with KaTeX
- **Mermaid Diagrams**: Flowcharts and diagrams
- **Code Highlighting**: Multi-theme syntax highlighting
- **OpenAPI Integration**: Automatic API documentation generation

#### Interactive Elements
- **OpenZeppelin Wizard**: Embedded contract generation tool
- **Code Examples**: Copy-to-clipboard functionality
- **Version Switching**: Multi-version documentation support
- **Responsive Design**: Mobile-optimized navigation and content

## Content Management

### Adding New Content

1. Create `.mdx` files in appropriate `content/` subdirectories
2. Use frontmatter for metadata (title, description, etc.)
3. Follow existing directory structure for consistency
4. Update navigation if adding new product categories

### Versioning

- Version-specific content in numbered subdirectories (e.g., `contracts/4.x/`)
- Latest content at root level of each product directory
- Automatic version detection and routing

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - React framework features and API
- [Fumadocs](https://fumadocs.vercel.app) - Documentation framework
- [MDX](https://mdxjs.com/) - Markdown with JSX components
