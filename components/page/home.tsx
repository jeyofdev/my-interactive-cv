import { Header } from "@/components/layout/home/header";

export const Home = () => {
	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<Header />

			<main className="flex-1 flex flex-col bg-surface-muted"></main>
		</div>
	);
};
