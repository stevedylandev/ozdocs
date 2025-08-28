# AGENTS.md - OpenZeppelin Docs Codebase Guide

## Build/Lint/Test Commands
- `pnpm run build` - Build the Next.js application
- `pnpm run dev` - Start development server with turbo
- `pnpm run start` - Start production server
- `pnpm run postinstall` - Process MDX files with fumadocs-mdx
- `pnpm run lint` - Lint code with Biome
- `pnpm run lint:fix` - Lint and auto-fix issues with Biome
- `pnpm run format` - Check code formatting with Biome
- `pnpm run format:fix` - Format code with Biome
- `pnpm run check` - Run both linting and formatting checks
- `pnpm run check:fix` - Run both linting and formatting with auto-fix
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
