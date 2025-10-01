"use client";

import { AlphaBanner } from "./alpha-banner";
import { VersionBanner } from "./version-banner";

export function Banners() {
	return (
		<>
			<AlphaBanner />
			<VersionBanner />
		</>
	);
}
