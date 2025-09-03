import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

import { baseOptions } from "@/app/layout.config";
import {
	ArbitrumIcon,
	EthereumIcon,
	MidnightIcon,
	StarknetIcon,
	StellarIcon,
	ZamaIcon,
	UniswapIcon,
	PolkadotIcon,
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
  } else if (pathname.startsWith("/tools")){
    currentTree = ethereumEvmTree
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
						url: "/contracts-stylus/v0.x",
						icon: (
							<ArbitrumIcon className="w-5 h-5 flex items-center justify-center" />
						),
					},
					{
						title: "Starknet",
						url: "/cairo-contracts/v3.x",
						icon: (
							<StarknetIcon className="w-5 h-5 flex items-center justify-center" />
						),
					},
					{
						title: "Stellar",
						url: "/stellar-contracts/v0.x/",
						icon: (
							<StellarIcon className="w-4 h-4 flex items-centered justify-center" />
						),
					},
					{
						title: "Midnight",
						url: "/contracts-compact/v0.x",
						icon: (
							<MidnightIcon className="w-4 h-4 flex items-centered justify-center" />
						),
					},
					{
						title: "Polkadot",
						url: "/substrate-runtimes/v3.x",
						icon: (
							<PolkadotIcon className="w-4 h-4 flex items-centered justify-center" />
						),
					},
					{
						title: "Uniswap",
						url: "/uniswap-hooks/v1.x",
						icon: (
							<UniswapIcon className="w-4 h-4 flex items-centered justify-center" />
						),
					},
					{
						title: "Zama",
						url: "/confidential-contracts/v0.x",
						icon: (
							<ZamaIcon className="w-4 h-4 flex items-centered justify-center" />
						),
					},
				],
			}}
		>
			{children}
		</DocsLayout>
	);
}
