"use client";

import { Typography } from "@/components/ui/typography/typography";
import { Chip } from "@/components/ui/chip/chip";
import { DotIcon } from "@/components/ui/icon/dot";
import { ListRenderer } from "@/components/list/list-renderer";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card-base";
import { Button } from "@/components/ui/button/button";
import { Icon } from "@/components/ui/icon/icon";
import { extractRecurringSkills, getChipSkillColor } from "@/lib/utils";
import { FC } from "react";
import { Link } from "@/components/ui/button/link";
import { ResumePreviewData } from "@/types/resume-type";
import { ProfileData } from "@/types/profile-type";

type HomeProps = {
	data: ResumePreviewData[];
	profile: ProfileData;
};

export const Home: FC<HomeProps> = ({ data, profile }) => {
	return (
		<main className="flex-1 flex flex-col items-center bg-surface-muted">
			{/* Hero Section */}
			<section className="max-w-5xl w-full px-6 py-10 sm:py-14 md:py-20 lg:py-24 text-center">
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
					className="mb-6 max-w-[500px] mx-auto"
				>
					Bienvenue sur le portfolio de <span className="text-primary capitalize">{profile.name}</span>
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

			<section className="max-w-6xl w-full px-6 pb-10 sm:pb-14 md:pb-18 lg:pb-20 xl:pb-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					<ListRenderer
						list={data}
						keyExtractor={(item) => item.id}
						renderItem={(resume) => (
							<div className="group max-w-[500px] mx-auto cursor-pointer relative flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-card-home-background shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
								<div className="aspect-video w-full bg-card-home-image-background overflow-hidden relative border-b border-border-light">
									<div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-white opacity-60" />
									<div className="absolute inset-0 flex items-center justify-center">
										<Icon variant="default" icon="list_alt" color="primary/10" size="96px" />
									</div>

									<div className="absolute top-4 right-4 flex gap-2">
										<ListRenderer
											list={extractRecurringSkills(resume, 4)}
											keyExtractor={(item) => item.id}
											renderItem={(skill) => (
												<Chip variant="outline" color={getChipSkillColor(skill)}>
													{skill.label}
												</Chip>
											)}
										/>
									</div>
								</div>

								<CardHeader className="flex p-6">
									<CardTitle>
										<Typography variant="h3" fontSize="xl" lineHeight="none" letterSpacing="normal">
											{resume.title}
										</Typography>
									</CardTitle>
								</CardHeader>

								<CardContent className="mb-6">
									<Typography
										variant="lead"
										fontSize="sm"
										lineHeight="relaxed"
										fontWeight="normal"
										letterSpacing="normal"
										textAlign="left"
										className="line-clamp-2"
									>
										{resume.summary}
									</Typography>
								</CardContent>

								<CardFooter className="pb-6">
									<Link
										variant="icon"
										backgroundColor="primary"
										color="white"
										icon="arrow_forward"
										iconSize="24px"
										iconPosition="end"
										href={`/cv/${resume.id}`}
									>
										Explorer
									</Link>
								</CardFooter>
							</div>
						)}
					/>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="w-full bg-white dark:bg-slate-900 border-t border-primary/10 px-6 py-10 sm:py-14 md:py-18 lg:py-20 xl:py-24">
				<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
					<Typography
						variant="h2"
						fontSize="3xl"
						fontWeight="bold"
						textTransform="normal"
						lineHeight="tight"
						letterSpacing="normal"
						textAlign="center"
						className="mb-6"
					>
						Vous souhaitez collaborer ?
					</Typography>

					<Typography
						variant="lead"
						fontSize="lg"
						lineHeight="relaxed"
						fontWeight="normal"
						letterSpacing="normal"
						textAlign="center"
						className="max-w-2xl mx-auto mb-10"
					>
						Contactez-moi directement pour discuter de vos projets.
					</Typography>

					<div className="flex flex-col md:flex-row justify-center sm:flex-row gap-4 max-w-[300px] w-full">
						<Button
							variant="icon"
							backgroundColor="primary"
							color="white"
							fontSize="base"
							icon="download"
							iconSize="24px"
							border="base"
							borderColor="primary"
							className="px-7 min-w-auto shadow-lg shadow-primary/25 transition-all"
						>
							Download CV global
						</Button>

						<Link
							variant="icon"
							backgroundColor="base"
							color="primary"
							fontSize="base"
							icon="mail"
							iconSize="24px"
							border="base"
							borderColor="primary/10"
							className="px-7"
							href="/contact"
						>
							Me contacter
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};
