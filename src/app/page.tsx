import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "./layout.config";
import { Card, Cards } from "fumadocs-ui/components/card";
import { SmallCard } from "@/components/ui/small-card";
import {
	ActivityIcon,
	AnvilIcon,
	ArrowRightLeftIcon,
	LibraryIcon,
	MoonStarIcon,
	PlayIcon,
	RocketIcon,
	SatelliteDishIcon,
	SquareAsteriskIcon,
	StarsIcon,
	TriangleIcon,
	WallpaperIcon,
	WandSparklesIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
	return (
		<HomeLayout {...baseOptions}>
			<main className="container max-w-6xl py-8 flex flex-col gap-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">
						Welcome to the OpenZeppelin Docs
					</h1>
					<p className="text-lg text-muted-foreground">
						The official documentation for OpenZeppelin Libraries and Tools
					</p>
				</div>
				<Cards>
					<Card
						icon={<LibraryIcon />}
						href="/contracts"
						title="OpenZeppelin Contracts"
						description="First class, secure, and gas optimized smart contract library for Solidity"
					/>
					<Card
						title="Open Source Tools"
						description="Tools for building, testing, and using contracts in production"
						icon={<AnvilIcon />}
						href="/tools"
					/>
				</Cards>
				<div className="flex flex-col gap-4">
					Tools
					<Separator />
					<Cards>
						<SmallCard
							icon={<WandSparklesIcon />}
							title="Wizard"
							description="Scaffold contracts with standards in multiple blockchains"
							href="/tools/wizard"
						/>
						<SmallCard
							icon={<WallpaperIcon />}
							title="UI Builder"
							description="Create user friendly UI forms for deployed smart contracts"
							href="/tools/contracts-ui-builder"
						/>
						<SmallCard
							icon={<ActivityIcon />}
							title="Monitor"
							description="Get alerted and act on smart contract events"
							href="/tools/openzeppelin-monitor"
						/>
						<SmallCard
							icon={<SatelliteDishIcon />}
							title="Relayer"
							description="Securely interact and manage deployed smart contracts "
							href="/tools/openzeppelin-relayer/v1.x"
						/>
					</Cards>
				</div>
				<div className="flex flex-col gap-4">
					Ecosystems
					<Separator />
					<Cards>
						<SmallCard
							icon={<RocketIcon />}
							title="Starknet Contracts"
							description="Essential contracts library written in Cairo for Starknet"
							href="/cairo-contracts/v3.x"
						/>
						<SmallCard
							icon={<StarsIcon />}
							title="Stellar Contracts"
							description="Soroban contracts library for Stellar"
							href="/stellar-contracts/v0.x"
						/>
						<SmallCard
							icon={<ArrowRightLeftIcon />}
							title="Uniswap Hooks"
							description="Advance Uniswap V4 hooks in Solidity"
							href="/uniswap-hooks/v1.x"
						/>
						<SmallCard
							icon={<TriangleIcon />}
							title="Arbitrum Stylus Contracts"
							description="Essential contracts library for Arbitrum Stylus written in Rust"
							href="/contracts-stylus/v0.x"
						/>
						<SmallCard
							icon={<MoonStarIcon />}
							title="Midnight Contracts"
							description="Smart contract library written in Compact for Midnight"
							href="/compact-contracts/v0.x"
						/>
						<SmallCard
							icon={<SquareAsteriskIcon />}
							title="Zama Contracts"
							description="Confidential contracts for the Zama fhEVM"
							href="/confidential-contracts/v0.x"
						/>
						<SmallCard
							icon={<PlayIcon />}
							title="Polkadot Substrate Runtimes"
							description="A collection of secure runtime templates to build parachains more easily on Polkadot"
							href="/substrate-runtimes/v3.x"
						/>
					</Cards>
				</div>
			</main>
		</HomeLayout>
	);
}
