import { Card } from "fumadocs-ui/components/card";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "./layout.config";

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

				<Card
					className="max-w-sm mx-auto text-center"
					href="/contracts"
					title="Get Started"
				/>
			</main>
		</HomeLayout>
	);
}
