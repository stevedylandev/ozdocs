import { Card } from "fumadocs-ui/components/card";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
	ActivityIcon,
	ArrowUpIcon,
	ExternalLinkIcon,
	GamepadIcon,
	LibraryIcon,
	MessageCircleIcon,
	SatelliteDishIcon,
	SendIcon,
	ShieldIcon,
	WallpaperIcon,
	WandSparklesIcon,
	WrenchIcon,
} from "lucide-react";
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
import { baseOptions } from "./layout.config";

export default function HomePage() {
	return (
		<HomeLayout {...baseOptions}>
			<main className="container max-w-6xl py-8 flex flex-col gap-16">
				{/* Hero Section */}
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold mb-4">
						Welcome to the OpenZeppelin Docs
					</h1>
					<p className="text-lg text-muted-foreground">
						The official documentation for OpenZeppelin Libraries and Tools
					</p>
				</div>

				{/* Two Column Tool Boxes */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
					{/* Smart Contracts Box */}
					<div className="bg-card border rounded-xl p-6">
						<div className="mb-6">
							<h2 className="text-lg font-semibold mb-2">
								OpenZeppelin Smart Contracts
							</h2>
							<p className="text-sm text-muted-foreground">
								Battle-tested libraries and tools for smart contract development
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3">
							<a
								href="/contracts"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<LibraryIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium">Solidity Contracts</div>
									<div className="text-xs text-muted-foreground">
										Core library for Ethereum & EVM chains
									</div>
								</div>
							</a>
							<a
								href="/upgrade-plugins"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<ArrowUpIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium">Upgrades Plugins</div>
									<div className="text-xs text-muted-foreground">
										Safe upgrade patterns for contracts
									</div>
								</div>
							</a>
							<a
								href="/wizard"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<WandSparklesIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium flex items-center gap-1">
										Contracts Wizard
									</div>
									<div className="text-xs text-muted-foreground">
										Interactive contract builder
									</div>
								</div>
							</a>
							<a
								href="https://mcp.openzeppelin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<WrenchIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium flex items-center gap-1">
										Contracts MCP
										<ExternalLinkIcon
											size={10}
											className="text-muted-foreground"
										/>
									</div>
									<div className="text-xs text-muted-foreground">
										AI assistant for smart contracts
									</div>
								</div>
							</a>
						</div>
					</div>

					{/* Open Source Tools Box */}
					<div className="bg-card border rounded-xl p-6">
						<div className="mb-6">
							<h2 className="text-lg font-semibold mb-2">Open Source Tools</h2>
							<p className="text-sm text-muted-foreground">
								Tools for building, testing, and managing contracts in
								production
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3">
							<a
								href="/openzeppelin-relayer"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<SatelliteDishIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium">Relayer</div>
									<div className="text-xs text-muted-foreground">
										Meta-transactions and gasless operations
									</div>
								</div>
							</a>
							<a
								href="/openzeppelin-monitor"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<ActivityIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium">Monitor</div>
									<div className="text-xs text-muted-foreground">
										Real-time alerts for contract events
									</div>
								</div>
							</a>
							<a
								href="/contracts-ui-builder"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<WallpaperIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium">UI Builder</div>
									<div className="text-xs text-muted-foreground">
										Create UIs for deployed contracts
									</div>
								</div>
							</a>
							<a
								href="/defender"
								className="group flex items-center gap-3 p-3 bg-background border rounded-lg hover:bg-accent transition-colors"
							>
								<div className="w-7 h-7 bg-muted rounded flex items-center justify-center flex-shrink-0">
									<ShieldIcon size={16} />
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-medium">Defender</div>
									<div className="text-xs text-muted-foreground">
										Secure operations platform
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

				{/* Blockchains and Developer Ecosystems */}
				<div className="mb-16">
					<div className="mb-6">
						<h2 className="text-lg font-semibold mb-2">
							Blockchains and Developer Ecosystems
						</h2>
						<p className="text-sm text-muted-foreground">
							Choose your blockchain platform to explore available contracts and
							tools
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						<Card
							href="/contracts"
							title="Ethereum & EVM"
							description="Solidity smart contracts for Ethereum and EVM-compatible chains"
							icon={<EthereumIcon className="w-4 h-4" />}
							className="relative overflow-hidden hover:border-blue-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-blue-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/cairo-contracts"
							title="Starknet"
							description="Essential contracts library written in Cairo for Starknet"
							icon={<StarknetIcon className="w-4 h-4" />}
							className="relative overflow-hidden hover:border-orange-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-orange-600 before:to-orange-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/contracts-stylus"
							title="Arbitrum Stylus"
							description="Essential contracts library for Arbitrum Stylus written in Rust"
							icon={<ArbitrumIcon className="w-4 h-4" />}
							className="relative overflow-hidden hover:border-red-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-red-600 before:to-red-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/uniswap-hooks"
							title="Uniswap Hooks"
							description="Advanced Uniswap V4 hooks in Solidity"
							icon={<UniswapIcon className="h-4 w-4" />}
							className="relative overflow-hidden hover:border-blue-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-blue-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/confidential-contracts"
							title="Zama FHEVM"
							description="Fully homomorphic encryption contracts for confidential smart contracts"
							icon={<ZamaIcon className="w-4 h-4" />}
							className="relative overflow-hidden hover:border-yellow-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-yellow-600 before:to-yellow-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/stellar-contracts"
							title="Stellar"
							description="Soroban contracts library for Stellar"
							icon={<StellarIcon className="h-4 w-4" />}
							className="relative overflow-hidden hover:border-cyan-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-cyan-600 before:to-cyan-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/compact-contracts"
							title="Midnight"
							description="Privacy-preserving smart contracts for Midnight blockchain"
							icon={<MidnightIcon className="h-4 w-4" />}
							className="relative overflow-hidden hover:border-purple-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-purple-600 before:to-purple-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
						<Card
							href="/substrate-runtimes"
							title="Polkadot"
							description="ink! smart contracts for Polkadot and Substrate chains"
							icon={<PolkadotIcon className="w-4 h-4" />}
							className="relative overflow-hidden hover:border-pink-500 transition-colors before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-pink-600 before:to-pink-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
						/>
					</div>
				</div>

				{/* Learn Section */}
				<div className="mb-16">
					<div className="mb-6">
						<h2 className="text-lg font-semibold mb-2">Learn</h2>
						<p className="text-sm text-muted-foreground">
							Comprehensive guides for every step of your development journey
						</p>
					</div>

					{/* First row: 4 foundational guides */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
						<a
							href="/contracts/v5.x/learn/setting-up-a-node-project"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								1
							</div>
							<h3 className="text-base font-semibold mb-2">
								Setting Up a Node Project
							</h3>
							<p className="text-sm text-muted-foreground">
								Get your Node development environment set up for using
								OpenZeppelin tools.
							</p>
						</a>
						<a
							href="/contracts/v5.x/learn/developing-smart-contracts"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								2
							</div>
							<h3 className="text-base font-semibold mb-2">
								Developing Smart Contracts
							</h3>
							<p className="text-sm text-muted-foreground">
								Learn the basics of writing Solidity contracts with
								OpenZeppelin.
							</p>
						</a>
						<a
							href="/contracts/v5.x/learn/deploying-and-interacting"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								3
							</div>
							<h3 className="text-base font-semibold mb-2">
								Deploying and Interacting
							</h3>
							<p className="text-sm text-muted-foreground">
								Deploy contracts to local and test networks and interact with
								them.
							</p>
						</a>
						<a
							href="/contracts/v5.x/learn/writing-automated-tests"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								4
							</div>
							<h3 className="text-base font-semibold mb-2">
								Writing Automated Tests
							</h3>
							<p className="text-sm text-muted-foreground">
								Write comprehensive tests to verify your contracts work as
								intended.
							</p>
						</a>
					</div>

					{/* Second row: 3 advanced guides */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
						<a
							href="/contracts/v5.x/learn/connecting-to-public-test-networks"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								5
							</div>
							<h3 className="text-base font-semibold mb-2">
								Connecting to Public Test Networks
							</h3>
							<p className="text-sm text-muted-foreground">
								Move from local development to persistent test environments.
							</p>
						</a>
						<a
							href="/contracts/v5.x/learn/upgrading-smart-contracts"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								6
							</div>
							<h3 className="text-base font-semibold mb-2">
								Upgrading Smart Contracts
							</h3>
							<p className="text-sm text-muted-foreground">
								Modify your contract code while preserving state and address
								using OpenZeppelin Upgrades.
							</p>
						</a>
						<a
							href="/contracts/v5.x/learn/preparing-for-mainnet"
							className="group block p-6 bg-card border rounded-xl hover:border-accent hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mb-4">
								7
							</div>
							<h3 className="text-base font-semibold mb-2">
								Preparing for Mainnet
							</h3>
							<p className="text-sm text-muted-foreground">
								Security considerations and best practices for production
								deployment.
							</p>
						</a>
					</div>

					{/* Ethernaut CTF Banner */}
					<a
						href="https://ethernaut.openzeppelin.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-8 p-8 bg-gradient-to-r from-card to-card/50 border rounded-xl hover:border-primary hover:shadow-sm hover:-translate-y-0.5 transition-all relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-primary before:to-primary/60 before:opacity-100"
					>
						<div className="w-20 h-20 bg-background border rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
							<GamepadIcon size={32} />
						</div>
						<div className="flex-1">
							<div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold mb-2 uppercase">
								Interactive Learning
							</div>
							<h3 className="text-xl font-semibold mb-2">Ethernaut CTF</h3>
							<p className="text-sm text-muted-foreground">
								Learn smart contract security by hacking! A Web3/Solidity based
								capture-the-flag game where each level is a smart contract that
								needs to be 'hacked'. Perfect for learning vulnerabilities and
								security best practices through hands-on challenges.
							</p>
						</div>
						<div className="text-2xl text-primary flex-shrink-0">→</div>
					</a>
				</div>

				{/* Community & Support */}
				<div className="mb-16">
					<div className="mb-6">
						<h2 className="text-lg font-semibold mb-2">Community & Support</h2>
						<p className="text-sm text-muted-foreground">
							Connect with the community for technical discussions and support
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<a
							href="https://forum.openzeppelin.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="group block p-7 bg-gradient-to-br from-card to-card/50 border rounded-xl hover:border-primary hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="flex items-center gap-4 mb-3">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<MessageCircleIcon size={24} className="text-primary" />
								</div>
								<h3 className="text-lg font-semibold">Forum</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								Deep technical discussions, architectural questions, and
								detailed support. Best place for in-depth conversations about
								smart contract development, security patterns, and
								implementation details.
							</p>
						</a>

						<a
							href="https://t.me/openzeppelin_tg"
							target="_blank"
							rel="noopener noreferrer"
							className="group block p-7 bg-gradient-to-br from-card to-card/50 border rounded-xl hover:border-primary hover:shadow-sm hover:-translate-y-0.5 transition-all"
						>
							<div className="flex items-center gap-4 mb-3">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<SendIcon size={24} className="text-primary" />
								</div>
								<h3 className="text-lg font-semibold">Telegram</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								Quick questions, community support, and real-time chat. Join our
								active community for faster responses, general help,
								announcements, and casual discussions about OpenZeppelin tools.
							</p>
						</a>
					</div>
				</div>
			</main>
		</HomeLayout>
	);
}
