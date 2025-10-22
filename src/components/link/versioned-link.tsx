"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/**
 * A Link component that automatically preserves the current version
 * when navigating between Monitor or Relayer documentation pages.
 *
 * Example:
 * - User on: /relayer/1.1.x/configuration
 * - Clicks: /relayer/signers
 * - Navigates to: /relayer/1.1.x/signers (version preserved)
 */
export function VersionedLink({ href, ...props }: ComponentProps<typeof Link>) {
	const pathname = usePathname();

	// If pathname is not available, render regular Link
	if (!pathname) {
		return <Link href={href} {...props} />;
	}

	// Only process string hrefs (not objects or undefined)
	if (typeof href !== "string") {
		return <Link href={href} {...props} />;
	}

	// Skip external links, anchors, and non-versioned sections
	if (
		href.startsWith("http://") ||
		href.startsWith("https://") ||
		href.startsWith("#") ||
		href.startsWith("mailto:") ||
		(!href.startsWith("/monitor") && !href.startsWith("/relayer"))
	) {
		return <Link href={href} {...props} />;
	}

	// Detect current version from pathname
	const getVersionedHref = (): string => {
		// Check if we're on a Monitor page
		if (pathname.startsWith("/monitor")) {
			const versionMatch = pathname.match(/^\/monitor\/([\d.]+x)/);

			if (versionMatch && href.startsWith("/monitor")) {
				const currentVersion = versionMatch[1];
				// Only add version if href doesn't already contain a version
				if (!href.match(/\/monitor\/([\d.]+x)/)) {
					return href.replace(/^\/monitor/, `/monitor/${currentVersion}`);
				}
			}
		}

		// Check if we're on a Relayer page
		if (pathname.startsWith("/relayer")) {
			const versionMatch = pathname.match(/^\/relayer\/([\d.]+x)/);

			if (versionMatch && href.startsWith("/relayer")) {
				const currentVersion = versionMatch[1];
				// Only add version if href doesn't already contain a version
				if (!href.match(/\/relayer\/([\d.]+x)/)) {
					return href.replace(/^\/relayer/, `/relayer/${currentVersion}`);
				}
			}
		}

		// Return original href if no version transformation needed
		return href;
	};

	return <Link href={getVersionedHref()} {...props} />;
}
