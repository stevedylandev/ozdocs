"use client";

import { usePathname } from "next/navigation";
import {
	arbitrumStylusTree,
	ethereumEvmTree,
	midnightTree,
	polkadotTree,
	starknetTree,
	stellarTree,
	uniswapTree,
	zamaTree,
} from "@/navigation";

export function useNavigationTree() {
	const pathname = usePathname();

	// Determine which navigation tree to use based on the current path
	if (pathname.startsWith("/contracts-stylus")) {
		return arbitrumStylusTree;
	} else if (pathname.startsWith("/contracts-cairo")) {
		return starknetTree;
	} else if (pathname.startsWith("/stellar-contracts")) {
		return stellarTree;
	} else if (pathname.startsWith("/contracts-compact")) {
		return midnightTree;
	} else if (pathname.startsWith("/confidential-contracts")) {
		return zamaTree;
	} else if (pathname.startsWith("/uniswap-hooks")) {
		return uniswapTree;
	} else if (pathname.startsWith("/substrate-runtimes")) {
		return polkadotTree;
	} else if (pathname.startsWith("/tools")) {
		return ethereumEvmTree;
	}

	return ethereumEvmTree;
}
