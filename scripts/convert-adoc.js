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

			// Write preprocessed content
			const tempFile = path.join(dir, `temp_${filename}.adoc`);
			await fs.writeFile(tempFile, content, "utf8");

			// Run downdoc
			execSync(`bunx downdoc "${tempFile}"`, { stdio: "pipe" });

			// Find the generated .md file
			const tempMdFile = path.join(dir, `temp_${filename}.md`);
			let mdContent = await fs.readFile(tempMdFile, "utf8");

			// Fix HTML entities in include tags (only fix the opening bracket encoding)
			mdContent = mdContent.replace(
				/&lt;include cwd lang='solidity'>([^&]+)&lt;\/include>/g,
				'<include cwd lang="solidity">$1</include>',
			);

			// Extract title
			const headerMatch = mdContent.match(/^#+\s+(.+)$/m);
			const title = headerMatch ? headerMatch[1].trim() : filename;

			// Create MDX with frontmatter
			const mdxContent = `---
title: ${title}
description: ${title}
---

${mdContent}`;

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
