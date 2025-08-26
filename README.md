# OpenZeppelin Docs

Welcome to the OpenZeppelin Docs repo! Before opening an issue or creating a PR please consult our [contribution guide](CONTRIBUTING.md)

## Development

This is a Next.js application generated with
[Fumadocs](https://github.com/fuma-nama/fumadocs).

To start local development follow the steps below

### 1. Make sure [Bun](https://bun.sh) is installed

```bash
bun --version
```

### 2. Clone the repo and install dependencies

```bash
git clone https://github.com/OpenZeppelin/docs
cd docs
bun install
```

### 3. Run the `dev` server to see a live preview and have your changes reflected at `http://localhost:3000`

```bash
bun dev
```


## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `app/layout.config.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
