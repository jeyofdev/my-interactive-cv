import { ProfileBlock } from "@/components/block/profile-block";
import { HobbyCard } from "@/components/cards/hobby-card";
import { ProfileItem } from "@/components/items/profile-item";
import { ListRenderer } from "@/components/list/list-renderer";
import { Chip, ChipColor } from "@/components/ui/chips/chip";
import { Typography } from "@/components/ui/typography/typography";
import { resumeData } from "@/data/resume-data";
import Image from "next/image";

const skillColorMap: Record<string, ChipColor> = {
	react: "react",
	typescript: "typescript",
	tailwindcss: "tailwindcss",
	nextjs: "nextjs",
	nodejs: "nodejs",
	postgresql: "postgresql",
	redis: "redis",
	graphql: "graphql",
	docker: "docker",
	aws: "aws",
	gitlabci: "gitlabci",
};

const ResumePage = () => {
	const formatVehiculeLabel = () => {
		const output = "";

		if (resumeData.vehicle.carLicense && !resumeData.vehicle.vehicule) return "Permis B";
		else if (resumeData.vehicle.carLicense && resumeData.vehicle.vehicule) return "Permis B + véhicule";

		return output;
	};

	return (
		<>
			<aside className="flex flex-col w-full lg:w-80 xl:w-96 lg:h-screen bg-surface-muted border-r border-border overflow-y-auto">
				<div className="p-8 flex flex-col items-center text-center">
					{/* Profile Picture */}
					<div className="relative mb-6">
						<div className="relative size-32 rounded-full border-4 border-white dark:border-slate-700 shadow-xl overflow-hidden bg-primary/10">
							<Image
								src="/images/profile.jpg"
								alt={`${resumeData.name} Profile`}
								fill
								sizes="128px"
								className="object-cover"
								priority
							/>
						</div>

						<div className="absolute bottom-1 right-1 size-6 bg-primary border-2 border-border-secondary rounded-full shadow-sm" />
					</div>

					{/* Profile name + job */}
					<Typography variant="h1">{resumeData.name}</Typography>

					<Typography variant="h6" className="mt-1">
						{resumeData.title}
					</Typography>

					{/* description summary */}
					<Typography variant="lead" className="mt-4 px-2">
						{resumeData.summary}
					</Typography>

					<div className="mt-8 w-full space-y-4">
						<ProfileItem icon="mail" label={resumeData.email} />
						<ProfileItem icon="phone_iphone" label={resumeData.phone} />
						<ProfileItem icon="cake" label={resumeData.birthDate} />
						<ProfileItem icon="directions_car" label={formatVehiculeLabel()} />
						<ProfileItem icon="location_on" label={resumeData.location} />
						<ProfileItem
							icon="link"
							label={resumeData.social.linkedin.label}
							hasLink
							href={resumeData.social.linkedin.url}
							isSocial
						/>
						<ProfileItem
							icon="code"
							label={resumeData.social.github.label}
							hasLink
							href={resumeData.social.github.url}
							isSocial
						/>
						<ProfileItem icon="language" label={resumeData.website.label} hasLink href={resumeData.website.url} />
					</div>

					<div className="mt-12 w-full text-left space-y-8">
						<ListRenderer
							list={resumeData.skills}
							keyExtractor={(item) => item.id}
							renderItem={(skillGroup) => (
								<>
									<ProfileBlock
										category={skillGroup.category}
										list={skillGroup.items}
										keyExtractor={(item) => item.id}
										renderItem={(skill) => (
											<Chip
												variant="rounded"
												color={
													skillColorMap[
														skill.label
															.split(/[\s.]+/)
															.join("")
															.toLowerCase()
													] ?? "default"
												}
												rounded="sm"
											>
												<Typography
													variant="small"
													color="text-current"
													fontSize="xs"
													fontWeight="semibold"
													lineHeight="none"
													asChild
												>
													<span>{skill.label}</span>
												</Typography>
											</Chip>
										)}
										titleClassName="m-0 mb-4"
									/>
								</>
							)}
						/>

						<ProfileBlock
							category="Langues"
							list={resumeData.languages}
							keyExtractor={(item) => item.id}
							renderItem={(lang) => (
								<Chip variant="default" color="default">
									<Typography
										variant="small"
										color="text-current"
										fontSize="xs"
										fontWeight="semibold"
										lineHeight="none"
										asChild
									>
										<span>
											{lang.label} ({lang.level})
										</span>
									</Typography>
								</Chip>
							)}
							variantTitle="default"
							titleClassName="m-0 mb-4"
						/>

						<ProfileBlock
							variant="grid"
							category="Loisirs"
							list={resumeData.hobbies}
							keyExtractor={(item) => item.id}
							renderItem={(hobby) => <HobbyCard hobby={hobby} />}
							variantTitle="hobby"
							colorTitle="secondary"
							fontSizeTitle="sm"
							borderTitle="thin"
							titleClassName="m-0 mb-4"
							containerClassName="pt-4"
						/>
					</div>
				</div>
			</aside>

			<main className="flex-1 flex flex-col bg-destructive">
				<h1>main content</h1>
			</main>
		</>
	);
};

export default ResumePage;
