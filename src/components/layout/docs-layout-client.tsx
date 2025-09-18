"use client";

import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import {
	ArbitrumIcon,
	EthereumIcon,
	MidnightIcon,
	PolkadotIcon,
	StarknetIcon,
	StellarIcon,
	UniswapIcon,
	ZamaIcon,
} from "@/components/icons";
import { DocsLayout } from "@/components/layout/docs";
import { useNavigationTree } from "@/hooks/use-navigation-tree";

interface DocsLayoutClientProps {
	children: ReactNode;
}

export function DocsLayoutClient({ children }: DocsLayoutClientProps) {
	const currentTree = useNavigationTree();

	return (
		<DocsLayout
			tree={currentTree}
			nav={{ ...baseOptions, mode: "top", transparentMode: "none" }}
			{...baseOptions}
			sidebar={{
				tabs: [
					{
						title: "Ethereum & EVM",
						url: "/contracts",
						icon: <EthereumIcon className="w-5 h-5" />,
						urls: new Set([
							"/contracts",
							"/community-contracts",
							"/upgrades-plugins",
							"/wizard",
							"/relayer",
							"/monitor",
							"/contracts-ui-builder",
							"/upgrades",
							"/defender",
							"/tools",
						]),
					},
					{
						title: "Arbitrum Stylus",
						url: "/contracts-stylus",
						icon: <ArbitrumIcon className="w-5 h-5" />,
					},
					{
						title: "Starknet",
						url: "/contracts-cairo",
						icon: <StarknetIcon className="w-5 h-5" />,
					},
					{
						title: "Stellar",
						url: "/stellar-contracts",
						icon: <StellarIcon className="w-5 h-5" />,
					},
					{
						title: "Midnight",
						url: "/contracts-compact",
						icon: <MidnightIcon className="w-5 h-5" />,
					},
					{
						title: "Polkadot",
						url: "/substrate-runtimes",
						icon: <PolkadotIcon className="w-5 h-5" />,
					},
					{
						title: "Uniswap Hooks",
						url: "/uniswap-hooks",
						icon: <UniswapIcon className="w-5 h-5" />,
					},
					{
						title: "Zama FHEVM",
						url: "/confidential-contracts",
						icon: <ZamaIcon className="w-5 h-5" />,
					},
				],
			}}
		>
			{children}
		</DocsLayout>
	);
}
