import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "./layout.config";
import { Cards, Card } from "fumadocs-ui/components/card";
import {
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
} from "lucide-react";

export default function HomePage() {
	return (
		<HomeLayout {...baseOptions}>
			<main className="container py-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">Documentation</h1>
					<p className="text-lg text-muted-foreground">
						The official documentation for OpenZeppelin Libraries and Tools
					</p>
				</div>

				<Cards>
					<Card
						icon={<CodeIcon />}
						href="/contracts"
						title="Solidity Contracts"
					>
						Core OpenZeppelin smart contract library.
					</Card>
					<Card
						icon={<RefreshCwIcon />}
						href="/contracts-upgradeable"
						title="Solicity Contracts Upgradeable"
					>
						Upgradeable smart contract patterns and implementations.
					</Card>
					<Card
						icon={<UsersIcon />}
						href="/community-contracts"
						title="Community Contracts"
					>
						Community-contributed smart contracts and extensions.
					</Card>
					<Card
						icon={<PlugIcon />}
						href="/upgrade-plugins"
						title="Upgrade Plugins"
					>
						Tools and plugins for smart contract upgrades.
					</Card>
					<Card
						icon={<MonitorIcon />}
						href="/tools/openzeppelin-monitor"
						title="OpenZeppelin Monitor"
					>
						Smart contract monitoring and alerting tools.
					</Card>
					<Card
						icon={<ShieldCheckIcon />}
						href="/tools/defender"
						title="Defender"
					>
						Security and operational tools for smart contracts.
					</Card>
					<Card icon={<ServerIcon />} href="/nile" title="Starknet Nile CLI">
						Development framework for StarkNet smart contracts.
					</Card>
					<Card
						icon={<WrenchIcon />}
						href="/contracts-stylus"
						title="Contracts Stylus"
					>
						Smart contracts optimized for Arbitrum Stylus.
					</Card>
					<Card
						icon={<PyramidIcon />}
						href="/cairo-contracts"
						title="Starknet Contracts"
					>
						Smart contracts for StarkNet using Cairo language.
					</Card>
					<Card
						icon={<StarIcon />}
						href="/stellar-contracts"
						title="Stellar Contracts"
					>
						Smart contracts for the Stellar blockchain network.
					</Card>
					<Card
						icon={<LayersIcon />}
						href="/substrate-runtimes"
						title="Polkadot Substrate Runtimes"
					>
						Runtime modules for Substrate-based blockchains.
					</Card>
					<Card
						icon={<AnchorIcon />}
						href="/uniswap-hooks"
						title="Uniswap Hooks"
					>
						Custom hooks and utilities for Uniswap integration.
					</Card>
					<Card
						icon={<FileTextIcon />}
						href="/compact-contracts"
						title="Midnight Contracts"
					>
						Compact contract implementations and utilities.
					</Card>
					<Card
						icon={<ShieldIcon />}
						href="/confidential-contracts"
						title="Zama Contracts"
					>
						Privacy-preserving smart contract implementations.
					</Card>
				</Cards>
			</main>
		</HomeLayout>
	);
}
