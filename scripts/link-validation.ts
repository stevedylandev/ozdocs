import {
	type FileObject,
	printErrors,
	scanURLs,
	validateFiles,
} from "next-validate-link";
import type { InferPageType } from "fumadocs-core/source";
import { source } from "@/lib/source";

async function checkLinks() {
	const pages = await Promise.all(
		source.getPages().map(async (page) => {
			return {
				value: {
					slug: page.slugs,
				},
				hashes: await getHeadings(page),
			};
		}),
	);

	const scanned = await scanURLs({
		// pick a preset for your React framework
		preset: "next",
		populate: {
			"(docs)/[...slug]": pages,
		},
	});

	printErrors(
		await validateFiles(await getFiles(), {
			scanned,
			// check `href` attributes in different MDX components
			markdown: {
				components: {
					Card: { attributes: ["href"] },
				},
			},
			// check relative paths
			checkRelativePaths: "as-url",
		}),
		true,
	);
}

async function getHeadings({
	data,
}: InferPageType<typeof source>): Promise<string[]> {
	const pageData = await data.load();
	return pageData.toc.map((item) => item.url.slice(1));
}

function getFiles() {
	const promises = source.getPages().map(
		async (page): Promise<FileObject> => ({
			path: page.absolutePath,
			content: await page.data.getText("raw"),
			url: page.url,
			data: page.data,
		}),
	);

	return Promise.all(promises);
}

void checkLinks();
