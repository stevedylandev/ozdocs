import { DocsLayout } from "fumadocs-ui/layouts/docs";
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

export default async function Layout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ slug?: string[] }>;
}) {
	// Determine which navigation tree to use based on the current path
	const resolvedParams = await params;
	const slug = resolvedParams.slug || [];
	const pathname = `/${slug.join("/")}`;

	let currentTree = ethereumEvmTree;

	if (pathname.startsWith("/contracts-stylus")) {
		currentTree = arbitrumStylusTree;
	} else if (pathname.startsWith("/cairo-contracts")) {
		currentTree = starknetTree;
	} else if (pathname.startsWith("/stellar-contracts")) {
		currentTree = stellarTree;
	} else if (pathname.startsWith("/contracts-compact")) {
		currentTree = midnightTree;
	} else if (pathname.startsWith("/confidential-contracts")) {
		currentTree = zamaTree;
	} else if (pathname.startsWith("/uniswap-hooks")) {
		currentTree = uniswapTree;
	} else if (pathname.startsWith("/substrate-runtimes")) {
		currentTree = polkadotTree;
	} else if (pathname.startsWith("/tools")) {
		currentTree = ethereumEvmTree;
	}

	return (
		<DocsLayout
			tree={currentTree}
			{...baseOptions}
			sidebar={{
				tabs: [
					{
						title: "Ethereum & EVM",
						url: "/contracts/v5.x",
						icon: <EthereumIcon className="w-5 h-5" />,
					},
					{
						title: "Arbitrum Stylus",
						url: "/contracts-stylus",
						icon: <ArbitrumIcon className="w-5 h-5" />,
					},
					{
						title: "Starknet",
						url: "/cairo-contracts",
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
						title: "Uniswap",
						url: "/uniswap-hooks",
						icon: <UniswapIcon className="w-5 h-5" />,
					},
					{
						title: "Zama",
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
