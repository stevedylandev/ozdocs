import Link from "next/link";

export function Footer() {
	return (
		<footer className="mt-auto bg-card border-t">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
					{/* Company Info */}
					<div className="col-span-1 sm:col-span-2 lg:col-span-1">
						<div className="mb-6">
							<svg
								width="200"
								height="45"
								viewBox="0 0 361 45"
								className="h-8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>OpenZeppelin Logo</title>
								<path
									d="M292.789 34.0881H285.229V9.59132H293.123C295.5 9.59132 297.533 10.0817 299.224 11.0626C300.914 12.0354 302.21 13.4349 303.111 15.261C304.012 17.0791 304.463 19.2561 304.463 21.7919C304.463 24.3436 304.008 26.5405 303.099 28.3826C302.19 30.2167 300.866 31.6281 299.128 32.6169C297.39 33.5977 295.277 34.0881 292.789 34.0881ZM288.195 31.4566H292.597C294.623 31.4566 296.301 31.0659 297.633 30.2844C298.965 29.503 299.957 28.3906 300.611 26.9472C301.265 25.5039 301.592 23.7854 301.592 21.7919C301.592 19.8143 301.269 18.1118 300.623 16.6844C299.977 15.249 299.012 14.1486 297.729 13.3831C296.445 12.6096 294.846 12.2228 292.932 12.2228H288.195V31.4566ZM315.509 34.4709C313.851 34.4709 312.395 34.0762 311.143 33.2867C309.899 32.4973 308.927 31.3928 308.225 29.9734C307.531 28.554 307.184 26.8954 307.184 24.9975C307.184 23.0837 307.531 21.4131 308.225 19.9857C308.927 18.5583 309.899 17.4499 311.143 16.6605C312.395 15.871 313.851 15.4763 315.509 15.4763C317.168 15.4763 318.619 15.871 319.863 16.6605C321.115 17.4499 322.088 18.5583 322.782 19.9857C323.484 21.4131 323.834 23.0837 323.834 24.9975C323.834 26.8954 323.484 28.554 322.782 29.9734C322.088 31.3928 321.115 32.4973 319.863 33.2867C318.619 34.0762 317.168 34.4709 315.509 34.4709ZM315.509 31.9351C316.769 31.9351 317.806 31.6121 318.619 30.9662C319.433 30.3203 320.035 29.4711 320.425 28.4185C320.816 27.3659 321.012 26.2256 321.012 24.9975C321.012 23.7695 320.816 22.6252 320.425 21.5646C320.035 20.504 319.433 19.6468 318.619 18.9929C317.806 18.339 316.769 18.0121 315.509 18.0121C314.249 18.0121 313.213 18.339 312.399 18.9929C311.586 19.6468 310.984 20.504 310.593 21.5646C310.202 22.6252 310.007 23.7695 310.007 24.9975C310.007 26.2256 310.202 27.3659 310.593 28.4185C310.984 29.4711 311.586 30.3203 312.399 30.9662C313.213 31.6121 314.249 31.9351 315.509 31.9351ZM334.597 34.4709C332.874 34.4709 331.391 34.0642 330.147 33.2508C328.903 32.4375 327.946 31.3171 327.277 29.8897C326.607 28.4623 326.272 26.8316 326.272 24.9975C326.272 23.1316 326.615 21.4849 327.3 20.0575C327.994 18.6221 328.959 17.5018 330.195 16.6964C331.439 15.883 332.89 15.4763 334.549 15.4763C335.841 15.4763 337.005 15.7155 338.042 16.194C339.078 16.6724 339.928 17.3423 340.59 18.2035C341.251 19.0647 341.662 20.0695 341.822 21.2177H338.999C338.783 20.3804 338.305 19.6388 337.563 18.9929C336.83 18.339 335.841 18.0121 334.597 18.0121C333.496 18.0121 332.532 18.2992 331.702 18.8733C330.881 19.4395 330.239 20.2409 329.776 21.2775C329.322 22.3062 329.095 23.5143 329.095 24.9018C329.095 26.3212 329.318 27.5572 329.764 28.6098C330.219 29.6624 330.857 30.4798 331.678 31.0619C332.508 31.644 333.48 31.9351 334.597 31.9351C335.331 31.9351 335.996 31.8075 336.594 31.5523C337.192 31.2972 337.699 30.9303 338.114 30.4519C338.528 29.9734 338.823 29.3993 338.999 28.7295H341.822C341.662 29.814 341.267 30.7908 340.637 31.66C340.015 32.5212 339.19 33.207 338.161 33.7173C337.141 34.2197 335.952 34.4709 334.597 34.4709ZM357.952 19.8302L355.416 20.5479C355.256 20.1253 355.021 19.7146 354.71 19.3159C354.407 18.9092 353.992 18.5743 353.466 18.3111C352.94 18.048 352.266 17.9164 351.445 17.9164C350.32 17.9164 349.383 18.1756 348.634 18.6939C347.892 19.2042 347.521 19.8541 347.521 20.6436C347.521 21.3453 347.777 21.8995 348.287 22.3062C348.797 22.7129 349.595 23.0518 350.679 23.3229L353.406 23.9928C355.049 24.3915 356.273 25.0015 357.078 25.8229C357.884 26.6362 358.287 27.6848 358.287 28.9687C358.287 30.0213 357.984 30.9622 357.377 31.7916C356.779 32.6209 355.942 33.2748 354.866 33.7532C353.789 34.2317 352.537 34.4709 351.11 34.4709C349.236 34.4709 347.685 34.0642 346.457 33.2508C345.229 32.4375 344.451 31.2493 344.124 29.6864L346.804 29.0165C347.059 30.0053 347.541 30.7469 348.251 31.2413C348.969 31.7357 349.906 31.9829 351.062 31.9829C352.378 31.9829 353.422 31.7038 354.196 31.1456C354.977 30.5795 355.368 29.9017 355.368 29.1122C355.368 28.4743 355.145 27.94 354.698 27.5094C354.252 27.0708 353.566 26.7439 352.641 26.5286L349.579 25.8109C347.896 25.4122 346.66 24.7942 345.871 23.9569C345.089 23.1116 344.698 22.055 344.698 20.7871C344.698 19.7505 344.99 18.8334 345.572 18.036C346.162 17.2386 346.963 16.6126 347.976 16.1581C348.997 15.7036 350.153 15.4763 351.445 15.4763C353.263 15.4763 354.69 15.875 355.727 16.6724C356.771 17.4699 357.513 18.5225 357.952 19.8302Z"
									fill="currentColor"
								/>
								<path
									d="M257.053 34.2507V15.6005H261.45V17.8697H261.698C262.443 16.4869 264.287 15.1395 266.946 15.1395C271.13 15.1395 273.683 18.0824 273.683 22.0536V34.2507H269.073V23.2591C269.073 20.9899 267.62 19.4653 265.492 19.4653C263.258 19.4653 261.663 21.2381 261.663 23.5782V34.2507H257.053Z"
									fill="currentColor"
								/>
								<path
									d="M252.37 13.9409C250.704 13.9409 249.534 12.9127 249.534 11.2462C249.534 9.65068 250.704 8.58698 252.37 8.58698C254.037 8.58698 255.207 9.65068 255.207 11.2462C255.207 12.9127 254.037 13.9409 252.37 13.9409ZM250.066 34.2504V15.6002H254.675V34.2504H250.066Z"
									fill="currentColor"
								/>
								<path
									d="M231.642 34.7117C226.147 34.7117 222.246 30.5987 222.246 25.032C222.246 19.1461 226.182 15.1395 231.642 15.1395C237.635 15.1395 240.897 19.5716 240.897 24.8192V26.2729H226.714C226.856 29.1095 228.806 31.0241 231.784 31.0241C234.053 31.0241 235.791 29.9604 236.429 28.4358H240.719C239.797 32.2297 236.464 34.7117 231.642 34.7117ZM226.785 23.0109H236.5C236.287 20.4935 234.337 18.827 231.642 18.827C229.054 18.827 227.068 20.6708 226.785 23.0109Z"
									fill="currentColor"
								/>
								<path
									d="M200.722 41.2013V15.6005H205.261V17.9761H205.509C206.005 17.196 207.707 15.1395 211.111 15.1395C216.323 15.1395 219.904 19.0398 219.904 24.8547C219.904 30.6696 216.359 34.7116 211.253 34.7116C207.955 34.7116 206.183 32.8679 205.58 31.8397H205.332V41.2013H200.722ZM210.225 30.5278C213.203 30.5278 215.224 28.2231 215.224 24.9256C215.224 21.5217 213.203 19.3234 210.189 19.3234C207.14 19.3234 205.225 21.7699 205.225 24.9256C205.225 28.4003 207.353 30.5278 210.225 30.5278Z"
									fill="currentColor"
								/>
								<path
									d="M167.59 34.7117C162.094 34.7117 158.194 30.5987 158.194 25.032C158.194 19.1461 162.13 15.1395 167.59 15.1395C173.582 15.1395 176.844 19.5716 176.844 24.8192V26.2729H162.662C162.804 29.1095 164.754 31.0241 167.732 31.0241C170.001 31.0241 171.739 29.9604 172.377 28.4358H176.667C175.745 32.2297 172.412 34.7117 167.59 34.7117ZM162.733 23.0109H172.448C172.235 20.4935 170.285 18.827 167.59 18.827C165.002 18.827 163.016 20.6708 162.733 23.0109Z"
									fill="currentColor"
								/>
								<path
									d="M136.988 34.2503V29.8876L149.894 13.0597V12.8031H137.449V8.58698H155.78V12.9131L142.874 29.7409V30.0342H155.851V34.2503H136.988Z"
									fill="currentColor"
								/>
								<path
									d="M118.007 34.2507V15.6005H122.404V17.8697H122.652C123.397 16.4869 125.24 15.1395 127.9 15.1395C132.084 15.1395 134.637 18.0824 134.637 22.0536V34.2507H130.027V23.2591C130.027 20.9899 128.573 19.4653 126.446 19.4653C124.212 19.4653 122.617 21.2381 122.617 23.5782V34.2507H118.007Z"
									fill="currentColor"
								/>
								<path
									d="M106.409 34.7117C100.913 34.7117 97.0125 30.5987 97.0125 25.032C97.0125 19.1461 100.948 15.1395 106.409 15.1395C112.401 15.1395 115.663 19.5716 115.663 24.8192V26.2729H101.48C101.622 29.1095 103.572 31.0241 106.55 31.0241C108.82 31.0241 110.557 29.9604 111.195 28.4358H115.485C114.564 32.2297 111.231 34.7117 106.409 34.7117ZM101.551 23.0109H111.266C111.053 20.4935 109.103 18.827 106.409 18.827C103.82 18.827 101.835 20.6708 101.551 23.0109Z"
									fill="currentColor"
								/>
								<path
									d="M75.4887 41.1746V15.5353H80.0272V17.9761H80.2754C80.7718 17.196 82.4737 15.1395 85.8775 15.1395C91.0896 15.1395 94.6708 19.0398 94.6708 24.8547C94.6708 30.6696 91.1251 34.7116 86.0193 34.7116C82.7219 34.7116 80.949 32.8679 80.3463 31.8397H80.0981V41.1746H75.4887ZM84.9911 30.5278C87.9695 30.5278 89.9905 28.2231 89.9905 24.9256C89.9905 21.5217 87.9695 19.3234 84.9556 19.3234C81.9064 19.3234 79.9917 21.7699 79.9917 24.9256C79.9917 28.4003 82.1191 30.5278 84.9911 30.5278Z"
									fill="currentColor"
								/>
								<path
									d="M59.5591 35.1499C51.7695 35.1499 46.0375 29.3611 46.0375 21.5929C46.0375 13.8994 51.8062 8.03595 59.5958 8.03595C67.3854 8.03595 73.1541 13.9741 73.1541 21.5929C73.1541 29.2864 67.3487 35.1499 59.5591 35.1499ZM59.5958 30.4068C64.5194 30.4068 68.0468 26.6721 68.0468 21.5929C68.0468 16.5884 64.5194 12.779 59.5958 12.779C54.6355 12.779 51.1081 16.5884 51.1081 21.5929C51.1081 26.6721 54.6355 30.4068 59.5958 30.4068Z"
									fill="currentColor"
								/>
								<rect
									x="243.241"
									y="8.47852"
									width="4.47182"
									height="25.7722"
									fill="currentColor"
								/>
								<path
									d="M179.189 41.2011V15.6003H183.727V17.9759H183.975C184.472 17.1958 186.174 15.1393 189.578 15.1393C194.79 15.1393 198.371 19.0396 198.371 24.8545C198.371 30.6694 194.825 34.7115 189.719 34.7115C186.422 34.7115 184.649 32.8677 184.046 31.8395H183.798V41.2011H179.189ZM188.691 30.5276C191.669 30.5276 193.691 28.2229 193.691 24.9254C193.691 21.5216 191.669 19.3232 188.656 19.3232C185.606 19.3232 183.692 21.7698 183.692 24.9254C183.692 28.4002 185.819 30.5276 188.691 30.5276Z"
									fill="currentColor"
								/>
								<path
									d="M0.61377 41.2383C5.00907 33.6335 8.74392 27.3618 13.491 18.7659C15.1678 15.8653 18.0652 14.0629 21.642 14.0629H27.2622L11.567 41.2383H0.61377Z"
									fill="#2E99FF"
								/>
								<path
									d="M0.663757 1.64935H34.3877L28.6255 11.6963H0.663757V1.64935Z"
									fill="#4F56FA"
								/>
								<path
									d="M17.5552 34.981C18.8234 32.7391 20.862 31.3463 23.7172 31.3463L34.3932 31.3172V41.239H13.9371C15.2179 39.0425 16.3299 37.1471 17.5552 34.981Z"
									fill="#09C2FF"
								/>
							</svg>
						</div>
						<div className="flex space-x-4">
							<a
								href="https://github.com/OpenZeppelin"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="GitHub"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<title>GitHub</title>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a
								href="https://twitter.com/OpenZeppelin"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Twitter"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<title>Twitter</title>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
						</div>
					</div>

					{/* Products */}
					<div className="col-span-1">
						<h3 className="font-semibold text-foreground mb-4">Products</h3>
						<div className="space-y-3">
							<Link
								href="/contracts"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Contracts Library
							</Link>
							<Link
								href="/wizard"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Contracts Wizard
							</Link>
							<Link
								href="/upgrade-plugins"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Upgrade Plugins
							</Link>
							<Link
								href="https://mcp.openzeppelin.com"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Contracts MCP
							</Link>
							<Link
								href="/contracts-ui-builder"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Contracts UI Builder
							</Link>
							<Link
								href="/openzeppelin-relayer"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Relayer
							</Link>
							<Link
								href="/openzeppelin-monitor"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Monitor
							</Link>
							<Link
								href="/defender"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Defender
							</Link>
						</div>
					</div>

					{/* Services */}
					<div className="col-span-1">
						<h3 className="font-semibold text-foreground mb-4">Services</h3>
						<div className="space-y-3">
							<Link
								href="https://openzeppelin.com/security-audits"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Smart Contract Security Audit
							</Link>
							<Link
								href="https://openzeppelin.com/blockchain-infrastructure-audits"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Blockchain Infrastructure Audit
							</Link>
							<Link
								href="https://openzeppelin.com/zkp-practice"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								ZKP Practice
							</Link>
						</div>
					</div>

					{/* Solutions */}
					<div className="col-span-1 sm:col-span-2 lg:col-span-1">
						<h3 className="font-semibold text-foreground mb-4">Solutions</h3>
						<div className="space-y-3">
							<Link
								href="https://openzeppelin.com/ecosystem-stack"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Ecosystem Stack
							</Link>
							<Link
								href="https://openzeppelin.com/financial-institutions-stack"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Financial Institutions Stack
							</Link>
						</div>
					</div>

					{/* Resources & Company */}
					<div className="col-span-1 sm:col-span-2 lg:col-span-1">
						<h3 className="font-semibold text-foreground mb-4">Resources</h3>
						<div className="space-y-3 mb-6">
							<Link
								href="/"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Documentation
							</Link>
							<Link
								href="https://blog.openzeppelin.com"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Blog
							</Link>
							<Link
								href="https://forum.openzeppelin.com"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Forum
							</Link>
							<Link
								href="https://ethernaut.openzeppelin.com"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Ethernaut CTF
							</Link>
						</div>

						<h3 className="font-semibold text-foreground mb-4">Company</h3>
						<div className="space-y-3">
							<Link
								href="https://openzeppelin.com/about"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								About us
							</Link>
							<Link
								href="https://openzeppelin.com/careers"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Careers
							</Link>
							<Link
								href="https://openzeppelin.com/brand-kit"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Brand Kit
							</Link>
							<Link
								href="https://openzeppelin.com/trust"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Trust
							</Link>
						</div>
					</div>
				</div>

				{/* Footer bottom */}
				<div className="mt-12 pt-8 border-t border-border">
					<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
						<p className="text-sm text-muted-foreground">
							© 2025 Zeppelin Group Ltd
						</p>
						<div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm text-muted-foreground">
							<Link
								href="https://openzeppelin.com/terms-of-service"
								className="hover:text-foreground transition-colors"
							>
								Terms of Service
							</Link>
							<Link
								href="https://openzeppelin.com/privacy-policy"
								className="hover:text-foreground transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="https://openzeppelin.com/trademark-guidelines"
								className="hover:text-foreground transition-colors"
							>
								Trademark Guidelines
							</Link>
							<Link
								href="https://openzeppelin.com/agpl-license"
								className="hover:text-foreground transition-colors"
							>
								AGPL License
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
