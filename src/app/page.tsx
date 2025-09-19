import { HomeLayout } from "fumadocs-ui/layouts/home";
import { SendIcon, ShieldIcon, WrenchIcon } from "lucide-react";
import { Footer } from "@/components/footer";
import {
	BannerCard,
	CommunityCard,
	EcosystemCard,
	FeatureCard,
	HeroCard,
} from "@/components/home-cards";
import {
	AnnotationDotsIcon,
	ArbitrumIcon,
	ContractsLibraryIcon,
	ContractsMcpIcon,
	ContractsUpgradesIcon,
	ContractsWizardIcon,
	EthereumIcon,
	EthernautIcon,
	MidnightIcon,
	MonitorIcon,
	PolkadotIcon,
	RelayersIcon,
	StarknetIcon,
	StellarIcon,
	TransactionProposalIcon,
	UniswapIcon,
	ZamaIcon,
} from "@/components/icons";
import { baseOptions } from "./layout.config";

export default function HomePage() {
	return (
		<HomeLayout {...baseOptions}>
			<main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-20 flex flex-col gap-12 sm:gap-16">
				{/* Hero Section */}
				<div className="text-center mb-6 sm:mb-8">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
						Welcome to the OpenZeppelin Docs
					</h1>
					<p className="text-base sm:text-lg text-muted-foreground px-2 sm:px-0">
						The official documentation for OpenZeppelin Libraries and Tools
					</p>
				</div>

				{/* Smart Contracts Section */}
				<div className="mb-12 sm:mb-15">
					<div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 sm:mb-4 px-2 sm:px-0">
						Smart Contracts
					</div>

					{/* Primary Hero: OpenZeppelin Contracts */}
					<HeroCard
						href="/contracts"
						icon={
							<ContractsLibraryIcon className="h-10 w-10 sm:h-12 sm:w-12" />
						}
						title="OpenZeppelin Solidity Contracts"
						description="The world's most popular library of Solidity contracts for Ethereum and EVM blockchains. Battle-tested, community-reviewed, and trusted by thousands of projects worldwide."
					/>

					{/* Supporting Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
						<FeatureCard
							href="/upgrades-plugins"
							icon={<ContractsUpgradesIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Upgrades Plugins"
							description="Deploy and manage upgradeable contracts with built-in safety checks and best practices"
						/>

						<FeatureCard
							href="/wizard"
							icon={<ContractsWizardIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Contracts Wizard"
							description="Interactive smart contract generator with security best practices built-in"
						/>

						<FeatureCard
							href="https://mcp.openzeppelin.com"
							icon={<ContractsMcpIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Contracts MCP"
							description="AI-powered assistant for smart contract development and security analysis"
							className="sm:col-span-2 lg:col-span-1"
						/>
					</div>
				</div>

				{/* Divider */}
				<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

				{/* Open Source Tools Section */}
				<div className="mb-12 sm:mb-15">
					<div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 sm:mb-4 flex items-center gap-2 px-2 sm:px-0">
						<WrenchIcon size={14} className="sm:size-4" />
						Open Source Tools
					</div>

					{/* Dual Heroes: Monitor and Relayer */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
						<FeatureCard
							href="/relayer"
							icon={<RelayersIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Relayer"
							description="Enable gasless transactions and automate smart contract operations. Build better user experiences with meta-transactions and scheduled executions."
							glowColor="tools"
						/>

						<FeatureCard
							href="/monitor"
							icon={<MonitorIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Monitor"
							description="Real-time monitoring and alerting for your smart contracts. Get notified about important events, transactions, and state changes across multiple chains."
							glowColor="tools"
						/>
					</div>

					{/* Minor Tools */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
						<FeatureCard
							href="/contracts-ui-builder"
							icon={
								<TransactionProposalIcon className="h-6 w-6 sm:h-8 sm:w-8" />
							}
							title="UI Builder"
							description="Create user interfaces for deployed contracts"
						/>

						<FeatureCard
							href="/defender"
							icon={<ShieldIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Defender"
							description="Secure operations platform"
						/>
					</div>
				</div>

				{/* Divider */}
				<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

				{/* Blockchains and Developer Ecosystems */}
				<div className="mb-12 sm:mb-15">
					<div className="mb-4 sm:mb-6 px-2 sm:px-0">
						<h2 className="text-base sm:text-lg font-semibold mb-2">
							Blockchains and Developer Ecosystems
						</h2>
						<p className="text-sm text-muted-foreground">
							Choose your blockchain platform to explore available contracts and
							tools
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
						<EcosystemCard
							href="/contracts"
							icon={<EthereumIcon color className="w-6 h-6" />}
							title="Ethereum & EVM"
							description="Solidity smart contracts for Ethereum and EVM-compatible chains"
							glowColor="evm"
						/>

						<EcosystemCard
							href="/contracts-cairo"
							icon={<StarknetIcon color className="w-7 h-7" />}
							title="Starknet"
							description="Essential contracts library written in Cairo for Starknet"
							glowColor="starknet"
						/>

						<EcosystemCard
							href="/contracts-stylus"
							icon={<ArbitrumIcon color className="w-7 h-7" />}
							title="Arbitrum Stylus"
							description="Essential contracts library for Arbitrum Stylus written in Rust"
							glowColor="rust"
						/>

						<EcosystemCard
							href="/uniswap-hooks"
							icon={<UniswapIcon color className="w-7 h-7" />}
							title="Uniswap Hooks"
							description="Advanced Uniswap V4 hooks in Solidity"
							glowColor="uniswap"
						/>

						<EcosystemCard
							href="/stellar-contracts"
							icon={<StellarIcon className="w-5 h-5" />}
							title="Stellar"
							description="Soroban contracts library for Stellar"
							glowColor="stellar"
						/>

						<EcosystemCard
							href="/contracts-compact"
							icon={<MidnightIcon className="w-5 h-5" />}
							title="Midnight"
							description="Privacy-preserving smart contracts for Midnight blockchain"
							glowColor="midnight"
						/>

						<EcosystemCard
							href="/substrate-runtimes"
							icon={<PolkadotIcon color className="w-7 h-7" />}
							title="Polkadot"
							description="ink! smart contracts for Polkadot and Substrate chains"
							glowColor="polkadot"
						/>

						<EcosystemCard
							href="/confidential-contracts"
							icon={<ZamaIcon color className="w-5 h-5" />}
							title="Zama FHEVM"
							description="Fully homomorphic encryption contracts for confidential smart contracts"
							glowColor="zama"
						/>
					</div>
				</div>

				{/* Learn & Play Section */}
				<div className="mb-12 sm:mb-15">
					<div className="mb-4 sm:mb-6 px-2 sm:px-0">
						<h2 className="text-base sm:text-lg font-semibold mb-2">
							Learn &amp; Play
						</h2>
						<p className="text-sm text-muted-foreground">
							Master smart contract security through interactive challenges
						</p>
					</div>

					{/* Ethernaut CTF as standalone */}
					<BannerCard
						href="https://ethernaut.openzeppelin.com/"
						icon={<EthernautIcon className="h-10 w-10 sm:h-12 sm:w-12" />}
						title="Ethernaut CTF"
						description="Learn smart contract security by hacking! A Web3/Solidity based capture-the-flag game where each level is a smart contract that needs to be 'hacked'. Perfect for learning vulnerabilities and security best practices through hands-on challenges."
						badge="Interactive Learning"
					/>
				</div>

				{/* Community & Support */}
				<div className="mb-12 sm:mb-15">
					<div className="mb-4 sm:mb-6 px-2 sm:px-0">
						<h2 className="text-base sm:text-lg font-semibold mb-2">
							Community &amp; Support
						</h2>
						<p className="text-sm text-muted-foreground">
							Connect with the community for technical discussions and support
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
						<CommunityCard
							href="https://forum.openzeppelin.com/"
							icon={<AnnotationDotsIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Forum"
							description="Deep technical discussions, architectural questions, and detailed support. Best place for in-depth conversations about smart contract development, security patterns, and implementation details."
						/>

						<CommunityCard
							href="https://t.me/openzeppelin_tg"
							icon={<SendIcon className="h-6 w-6 sm:h-8 sm:w-8" />}
							title="Telegram"
							description="Quick questions, community support, and real-time chat. Join our active community for faster responses, general help, announcements, and casual discussions about OpenZeppelin tools."
						/>
					</div>
				</div>
			</main>
			<Footer />
		</HomeLayout>
	);
}
