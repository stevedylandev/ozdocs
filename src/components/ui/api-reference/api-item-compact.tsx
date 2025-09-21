import * as React from "react";

type Props = React.PropsWithChildren<{
	circuitSig: string;
	kind: string;
	complexity?: string | string[] | React.ReactNode;
	stackParams?: boolean;
	id?: string;
}>;

export async function APIItemCompact({
	circuitSig,
	kind,
	complexity,
	stackParams = false,
	id,
	children
}: Props) {
	const anchorId = id ?? `api-${circuitSig.replace(/\W+/g, "-").toLowerCase()}`;

	const parseParameters = (params: string): string[] => {
		const result: string[] = [];
		let current = '';
		let depth = 0;

		for (let i = 0; i < params.length; i++) {
			const char = params[i];

			if (char === '<') {
				depth++;
			} else if (char === '>') {
				depth--;
			} else if (char === ',' && depth === 0) {
				result.push(current.trim());
				current = '';
				continue;
			}

			current += char;
		}

		if (current.trim()) {
			result.push(current.trim());
		}

		return result;
	};

	const renderCircuitSig = () => {
		if (!stackParams) {
			return <p className="font-bold text-sm font-mono">{circuitSig}</p>;
		}

		const match = circuitSig.match(/^([^(]+)\(([^)]+)\)(.*)$/);
		if (!match) {
			return <p className="font-bold text-sm font-mono">{circuitSig}</p>;
		}

		const [, name, params, rest] = match;
		const paramList = parseParameters(params);

		return (
			<pre className="font-bold text-sm font-mono whitespace-pre my-2">
				{name}({'\n'}
				{paramList.map((param, index) => (
					<React.Fragment key={index}>
						{'  '}{param}{index < paramList.length - 1 ? ',' : ''}{'\n'}
					</React.Fragment>
				))}
				){rest}
			</pre>
		);
	};

	return (
        // `-mt-7.5` compensates for spacing from `#### [!toc] [#id]` pattern
        // The empty h4 pattern allows toc tracking/response
		<div id={anchorId} className="scroll-mt-20 -mt-7.5">
			<div className="border rounded-md mb-4">
				<div className="bg-secondary flex w-full justify-between px-4 py-2">
					{renderCircuitSig()}
					<div className="flex flex-row items-center gap-2">
						<p className="font-light text-sm">{kind}</p>
						<a className="peer" data-card href={`#${anchorId}`}>
							#
						</a>
					</div>
				</div>

				<div className="px-4 py-3 prose prose-sm dark:prose-invert max-w-none">
					{children}
					{complexity && (
						<div className="flex justify-end mt-3">
							<div className="text-gray-500 dark:text-gray-400 italic text-sm">
								{Array.isArray(complexity) ? (
									<div className="text-right">
										{complexity.map((item, index) => (
											<div key={index}>{item}</div>
										))}
									</div>
								) : (
									complexity
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
