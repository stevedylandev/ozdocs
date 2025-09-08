import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
	// the OpenAPI schema, you can also give it an external URL.
	input: [
		"https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-relayer/refs/heads/main/docs/openapi.json",
	],
});
