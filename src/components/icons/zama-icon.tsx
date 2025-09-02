export function ZamaIcon({ className }: { className: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="1em"
			height="1em"
			viewBox="0 0 73.5 73.5"
			className={className}
		>
			<title>Zama Icon</title>
			<defs>
				<mask id="textMask">
					<rect width="100%" height="100%" fill="white" />
					<g fill="black" transform="translate(11, -5) scale(3, 3)">
						<path d="M 1.269531 7.558594 L 14.761719 7.558594 L 14.761719 9.855469 L 1.269531 9.855469 Z M 1.269531 7.558594" />
						<path d="M 0.960938 19.203125 L 14.996094 19.203125 L 14.996094 21.347656 L 0.960938 21.347656 Z M 0.960938 19.203125" />
						<path d="M 0.960938 19.203125 L 14.761719 9.855469 L 14.761719 12.628906 L 5.171875 19.203125 Z M 0.960938 19.203125" />
					</g>
				</mask>
			</defs>
			<rect
				width="100%"
				height="100%"
				fill="currentColor"
				mask="url(#textMask)"
			/>
		</svg>
	);
}
