import { Header } from "@/components/layout/home/header";
import { Typography } from "@/components/ui/typography/typography";
import { Chip } from "@/components/ui/chip/chip";
import { DotIcon } from "@/components/ui/icon/dot";

export const Home = () => {
	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<Header />

			<main className="flex-1 flex flex-col items-center bg-surface-muted">
				{/* Hero Section */}
				<section className="max-w-5xl w-full px-6 py-16 lg:py-24 text-center">
					<div className="flex flex-col items-center">
						<Chip variant="rounded" icon={<DotIcon />} className="mb-6">
							Disponible pour de nouveaux projets
						</Chip>
					</div>

					<Typography
						variant="h1"
						fontSize="6xl"
						fontWeight="black"
						textTransform="normal"
						lineHeight="tight"
						letterSpacing="custom-0.03em"
						className="mb-6"
					>
						Bienvenue sur le portfolio de <span className="text-primary">Jane Doe</span>
					</Typography>

					<Typography
						variant="lead"
						fontSize="xl"
						lineHeight="relaxed"
						fontWeight="normal"
						letterSpacing="normal"
						textAlign="center"
						className="max-w-2xl mx-auto"
					>
						Choisissez une version pour explorer mon parcours professionnel pour découvrir mes compétences et mon
						expérience.
					</Typography>
				</section>
			</main>
		</div>
	);
};
