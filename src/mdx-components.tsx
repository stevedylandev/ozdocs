import defaultMdxComponents from "fumadocs-ui/mdx";
import {
	AnchorIcon,
	CodeIcon,
	FileTextIcon,
	LayersIcon,
	MonitorIcon,
	PlugIcon,
	PyramidIcon,
	RefreshCwIcon,
	ServerIcon,
	ShieldCheckIcon,
	ShieldIcon,
	StarIcon,
	UsersIcon,
	WrenchIcon,
} from "lucide-react";
import type { MDXComponents } from "mdx/types";
import OZWizard from "./components/oz-wizard";
import { Mermaid } from "@/components/mdx/mermaid";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		OZWizard,
		FileTextIcon,
		UsersIcon,
		ShieldIcon,
		CodeIcon,
		MonitorIcon,
		PyramidIcon,
		StarIcon,
		LayersIcon,
		WrenchIcon,
		ServerIcon,
		AnchorIcon,
		ShieldCheckIcon,
		RefreshCwIcon,
		PlugIcon,
		Mermaid,
		...components,
	};
}
