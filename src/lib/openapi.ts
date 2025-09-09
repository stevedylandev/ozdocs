import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
	input: ["./public/schemas/openzeppelin-relayer-openapi.json"],
});
