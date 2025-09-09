import { source } from "@/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";
import { structure } from "fumadocs-core/mdx-plugins";

export const { GET } = createSearchAPI("advanced", {
	language: "english",
	indexes: source.getPages().map((page) => ({
		title: page.data.title,
		description: page.data.description,
		url: page.url,
		id: page.url,
		structuredData: structure(page.data.content),
	})),
});
