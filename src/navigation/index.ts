import contractsData from "./contracts.json";
import ecosystemsData from "./ecosystems.json";
import toolsData from "./tools.json";
import type { NavigationNode, NavigationTree } from "./types";

// Type-safe imports with proper typing
const contracts = contractsData as NavigationNode[];
const tools = toolsData as NavigationNode[];
const ecosystems = ecosystemsData as NavigationNode[];

export const navigationTree: NavigationTree = {
	name: "Docs",
	children: [...contracts, ...tools, ...ecosystems],
};

export * from "./types";
