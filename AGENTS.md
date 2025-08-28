# AGENTS.md - OpenZeppelin Docs Codebase Guide

## Build/Lint/Test Commands
- `bun run build` - Build the Next.js application
- `bun run dev` - Start development server with turbo
- `bun run start` - Start production server
- `bun run postinstall` - Process MDX files with fumadocs-mdx
- `bun run lint` - Lint code with Biome
- `bun run lint:fix` - Lint and auto-fix issues with Biome
- `bun run format` - Check code formatting with Biome
- `bun run format:fix` - Format code with Biome
- `bun run check` - Run both linting and formatting checks
- `bun run check:fix` - Run both linting and formatting with auto-fix
- No test commands configured - this is a documentation site

## Navigation Management
The site uses a **modular JSON navigation system** instead of fumadocs meta.json files:

### Navigation Structure
- `src/navigation/` - Modular navigation configuration
  - `types.ts` - TypeScript interfaces for navigation
  - `contracts.json` - All contract-related navigation
  - `tools.json` - Tools section navigation
  - `ecosystems.json` - Ecosystem-specific sections
  - `index.ts` - Combines all sections into navigationTree

### Editing Navigation
- **Add new pages**: Edit the relevant JSON file (contracts/tools/ecosystems)
- **Reorder sections**: Modify array order in respective JSON files
- **Add new sections**: Create new JSON file and import in `index.ts`
- **Do NOT use meta.json files** - they have been removed and are not supported

## Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript strict mode (enabled in tsconfig.json)
- Prefer named imports: `import { RootProvider } from 'fumadocs-ui/provider'`
- Use path aliases: `@/*` for src/, `@/.source` for .source/
- Function components with explicit return types when needed
- Use React 19+ features and patterns

### File Structure
- Source files in `src/` directory
- Documentation content in `content/` with nested version folders (v2.x, v3.x, etc.)
- Examples in `examples/` directory organized by feature
- Public assets in `public/` directory
- Navigation config in `src/navigation/` directory

### Naming Conventions
- PascalCase for React components and interfaces
- camelCase for variables and functions
- kebab-case for file names in content directories
