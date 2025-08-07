#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const { execSync } = require("child_process");
const { glob } = require("glob");

async function convertAdocFiles(directory) {
	if (!directory) {
		console.error("Usage: node convert-adoc.js <directory>");
		process.exit(1);
	}

	const adocFiles = await glob(`${directory}/**/*.adoc`);

	for (const adocFile of adocFiles) {
		console.log(`Processing: ${adocFile}`);

		const dir = path.dirname(adocFile);
		const filename = path.basename(adocFile, ".adoc");
		const mdxFile = path.join(dir, `${filename}.mdx`);

		try {
			// Read original file
			let content = await fs.readFile(adocFile, "utf8");

			// Replace code blocks with includes
			content = content.replace(
				/```solidity\s*\ninclude::api:example\$([^[\]]+)\[\]\s*\n```/g,
				"<include cwd lang='solidity'>./examples/$1</include>",
			);

			content = content.replace(
				/\[source,solidity\]\s*\n----\s*\ninclude::api:example\$([^[\]]+)\[\]\s*\n----/g,
				"<include cwd lang='solidity'>./examples/$1</include>",
			);

			// Replace TIP: and NOTE: callouts with <Callout> tags
			content = content.replace(
				/^(TIP|NOTE):\s*(.+)$/gm,
				"<Callout>\n$2\n</Callout>",
			);

			content = content.replace(
				/^(IMPORTANT|WARNING):\s*(.+)$/gm,
				"<Callout type='warn'>\n$2\n</Callout>",
			);

			// Write preprocessed content
			const tempFile = path.join(dir, `temp_${filename}.adoc`);
			await fs.writeFile(tempFile, content, "utf8");

			// Run downdoc
			execSync(`bunx downdoc "${tempFile}"`, { stdio: "pipe" });

			// Find the generated .md file
			const tempMdFile = path.join(dir, `temp_${filename}.md`);
			let mdContent = await fs.readFile(tempMdFile, "utf8");

			// Fix HTML entities globally
			mdContent = mdContent
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
				.replace(/&quot;/g, '"')
				.replace(/&#x27;/g, "'")
				.replace(/&#x2F;/g, "/")
				.replace(/&amp;/g, "&"); // This should be last to avoid double-decoding

			// Convert api: links to contracts/v5.x/api/ and change .adoc to .mdx
			mdContent = mdContent.replace(
				/\(api:([^)]+)\.adoc([^)]*)\)/g,
				"(contracts/v5.x/api/$1.mdx$2)",
			);

			// Add forward slash to image paths
			mdContent = mdContent.replace(
				/!\[([^\]]*)\]\(([^/)][^)]*\.(png|jpg|jpeg|gif|svg|webp))\)/g,
				"![$1](/$2)",
			);

			// Extract title
			const headerMatch = mdContent.match(/^#+\s+(.+)$/m);
			const title = headerMatch ? headerMatch[1].trim() : filename;

			// Remove the first H1 from content
			const contentWithoutFirstH1 = mdContent.replace(/^#+\s+.+$/m, '').replace(/^\n+/, '');

			// Create MDX with frontmatter
			const mdxContent = `---
title: ${title}
description: ${title}
---

${contentWithoutFirstH1}`;

			await fs.writeFile(mdxFile, mdxContent, "utf8");

			// Cleanup
			await fs.unlink(tempMdFile);
			await fs.unlink(tempFile);
			await fs.unlink(adocFile);

			console.log("  ✓ Converted successfully");
		} catch (error) {
			console.log(`  ✗ Error: ${error.message}`);
		}
	}
}

const directory = process.argv[2];
convertAdocFiles(directory).catch(console.error);
