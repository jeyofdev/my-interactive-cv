"use client";

import { ProfileBlock } from "@/components/block/profile-block";
import { ProfileItem } from "@/components/items/profile-item";
import { ListRenderer } from "@/components/list/list-renderer";
import { ChipBase, ChipBaseColor } from "@/components/ui/chip/chip-base";
import { Typography } from "@/components/ui/typography/typography";
import { resumeData } from "@/data/resume-data";
import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components/sections/section-title";
import { TimelineBar, TimelineDot } from "@/components/ui/timeline/timeline";
import { AccordionExperience } from "@/components/ui/accordion/accordion-experience";
import Section from "@/components/sections/section";
import { Divider } from "@/components/ui/divider/divider";
import { ProjectGridCard, ProjectListCard, HobbyCard, EducationCard } from "@/components/ui/card/cards";
import { ResumeMainFooter } from "@/components/layout/resume/resume-main-footer";
import { ResumeMainHeader } from "@/components/layout/resume/resume-main-header";
import { Tabs } from "../ui/tabs/tabs";
import { Icon } from "../ui/icon/icon";

export const skillColorMap: Record<string, ChipBaseColor> = {
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

const tabItems = [
	{
		id: 1,
		value: "grid",
		label: "Card",
		icon: "grid_view",
	},
	{
		id: 2,
		value: "list",
		label: "List",
		icon: "list",
	},
];

export type ProjectView = "grid" | "list";

export const Resume = () => {
	const [projectView, setProjectView] = useState<ProjectView>("grid");

	const formatVehiculeLabel = () => {
		const output = "";

		if (resumeData.vehicle.carLicense && !resumeData.vehicle.vehicule) return "Permis B";
		else if (resumeData.vehicle.carLicense && resumeData.vehicle.vehicule) return "Permis B + véhicule";

		return output;
	};

	return (
		<>
			<aside className="flex flex-col w-full lg:w-80 xl:w-96 lg:min-h-screen bg-surface-muted border-r border-border overflow-y-auto">
				<div className="p-8 flex flex-col items-center text-center">
					{/* Profile Picture */}
					<div className="relative mb-6">
						<div className="relative size-32 rounded-full border-4 border-border-image shadow-xl overflow-hidden bg-primary/10">
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
											<ChipBase
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
											</ChipBase>
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
								<ChipBase variant="default" color="default">
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
								</ChipBase>
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
				<ResumeMainHeader />

				<div className="px-8 lg:px-12 py-12 max-w-4xl">
					{/* Experience Section */}
					<Section>
						<SectionTitle label="Expériences Professionnelles" icon="work" className="mb-10" />

						{/* Timeline Wrapper */}
						<div className="relative space-y-12">
							<TimelineBar orientation="vertical" />

							<ListRenderer
								list={resumeData.experiences}
								keyExtractor={(item) => item.id}
								renderItem={(experience) => (
									<div className="relative pl-8">
										<TimelineDot state={experience.id === 1 ? "active" : "inactive"} />
										<AccordionExperience data={experience} />
									</div>
								)}
							/>
						</div>
					</Section>

					{/* Projects Section */}
					<section className="mb-16">
						<SectionTitle label="Projets" icon="rocket_launch" className="mb-10" />

						<Tabs
							items={tabItems}
							value={projectView}
							onChange={(v) => setProjectView(v as ProjectView)}
							keyExtractor={(item) => item.value}
							renderItem={(item) => (
								<>
									<Icon variant="default" icon={item.icon} color="inherit" size="24px" />
									{item.label}
								</>
							)}
							className="mb-6"
						/>

						{projectView === "grid" ? (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<ListRenderer
									list={resumeData.projects}
									keyExtractor={(item) => item.id}
									renderItem={(project) => <ProjectGridCard project={project} />}
								/>
							</div>
						) : (
							<div className="grid grid-cols-1 gap-1">
								<ListRenderer
									list={resumeData.projects}
									keyExtractor={(item) => item.id}
									renderItem={(project, index) => (
										<>
											<ProjectListCard project={project} />
											{index < resumeData.projects.length - 1 && <Divider variant="horizontal" className="mt-3" />}
										</>
									)}
								/>
							</div>
						)}
					</section>

					{/* Education Section */}
					<section>
						<SectionTitle label="Formation" icon="school" className="mb-10" />

						<div className="space-y-6">
							<ListRenderer
								list={resumeData.education}
								keyExtractor={(item) => item.id}
								renderItem={(formation) => <EducationCard education={formation} />}
							/>
						</div>
					</section>
				</div>

				<ResumeMainFooter socialLinks={resumeData.social} />
			</main>
		</>
	);
};
