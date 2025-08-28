# AGENTS.md - OpenZeppelin Docs Codebase Guide

## Build/Lint/Test Commands
- `npm run build` - Build the Next.js application
- `npm run dev` - Start development server with turbo
- `npm run start` - Start production server
- `npm run postinstall` - Process MDX files with fumadocs-mdx
- No explicit lint/test commands configured - this is a documentation site

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

### Naming Conventions
- PascalCase for React components and interfaces
- camelCase for variables and functions
- kebab-case for file names in content directories