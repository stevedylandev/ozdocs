import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
	dir: "content",
});

export default defineConfig({
	mdxOptions: {
		rehypeCodeOptions: {
			fallbackLanguage: "plaintext",
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
		},
		remarkPlugins: [remarkMath, remarkMdxMermaid],
		rehypePlugins: (v) => [rehypeKatex, ...v],
	},
});
