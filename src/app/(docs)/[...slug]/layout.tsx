import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { navigationTree } from "@/navigation";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout tree={navigationTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
