"use client";

import { ProfileBlock } from "@/components/block/profile-block";
import { HobbyCard } from "@/components/cards/hobby-card";
import { ProfileItem } from "@/components/items/profile-item";
import { ListRenderer } from "@/components/list/list-renderer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Chip, ChipColor } from "@/components/ui/chips/chip";
import { Icon } from "@/components/ui/icons/icon";
import { Typography } from "@/components/ui/typography/typography";
import { resumeData } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { SectionTitle } from "@/components/sections/section-title";
import { TimelineBar, TimelineDot } from "@/components/ui/timeline/timeline";

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

export const Resume = () => {
	const [projectView, setProjectView] = useState<"grid" | "list">("grid");

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
				<div className="px-8 lg:px-12 py-12 max-w-4xl">
					{/* Experience Section */}
					<section className="mb-16">
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

										<Accordion type="single" collapsible>
											<AccordionItem key={experience.id} value={`exp-${experience.id}`}>
												{/* Trigger = summary */}
												<AccordionTrigger className="p-4 cursor-pointer relative pr-10 flex flex-col gap-2">
													<div className="flex items-center gap-2.5 flex-wrap">
														<Typography variant="h3">{experience.role}</Typography>

														{experience.id === 1 && (
															<Chip
																variant="rounded"
																color="white"
																backgroundColor="primary"
																rounded="sm"
																borderWidth="none"
																size="thin"
																className="inline-flex items-center shadow-sm"
															>
																<Typography
																	variant="small"
																	color="text-current"
																	fontSize="custom-10"
																	fontWeight="bold"
																	lineHeight="none"
																	textTransform="uppercase"
																	letterSpacing="wide"
																	asChild
																>
																	<span>Latest</span>
																</Typography>
															</Chip>
														)}
													</div>

													<Typography
														variant="muted"
														color="primary"
														fontSize="base"
														fontWeight="semibold"
														className="flex items-center gap-2"
													>
														{experience.company}
														<Chip
															variant="rounded"
															color="surface-muted-foreground-info"
															backgroundColor="secondary"
															rounded="sm"
															borderWidth="none"
															size="thin"
															className="inline-flex items-center shadow-none"
														>
															<Typography
																variant="small"
																color="text-current"
																fontSize="custom-10"
																fontWeight="bold"
																lineHeight="none"
																textTransform="uppercase"
																letterSpacing="wide"
																asChild
															>
																<span>{experience.type}</span>
															</Typography>
														</Chip>

														<span className="text-slate-300 dark:text-slate-600 mx-1">|</span>

														<Typography
															variant="small"
															color="surface-muted-foreground-info"
															fontSize="base"
															fontWeight="normal"
															lineHeight="none"
															textTransform="capitalize"
															letterSpacing="normal"
														>
															{experience.period}
														</Typography>
													</Typography>

													<Typography
														variant="lead"
														fontSize="sm"
														lineHeight="relaxed"
														fontWeight="normal"
														letterSpacing="normal"
														textAlign="left"
													>
														{experience.description}
													</Typography>
												</AccordionTrigger>

												<AccordionContent className="px-4 pb-6">
													<div className="space-y-4 border-t border-accordion-separator pt-4">
														<div className="flex flex-wrap gap-1.5 mb-4">
															<ListRenderer
																list={experience.technologies}
																keyExtractor={(item) => item.id}
																renderItem={(technology) => (
																	<Chip
																		variant="rounded"
																		color={
																			skillColorMap[
																				technology.label
																					.split(/[\s.]+/)
																					.join("")
																					.toLowerCase()
																			] ?? "default"
																		}
																		rounded="sm"
																		size="thin"
																	>
																		<Typography
																			variant="small"
																			color="text-current"
																			fontSize="xs"
																			fontWeight="semibold"
																			lineHeight="none"
																			asChild
																		>
																			<span>{technology.label}</span>
																		</Typography>
																	</Chip>
																)}
															/>
														</div>

														<div>
															<Typography
																variant="muted"
																color="accordion-muted-foreground-title"
																fontSize="sm"
																fontWeight="bold"
																className="mb-1"
															>
																Tâches principales :
															</Typography>

															<ul className="space-y-1">
																<ListRenderer
																	list={experience.details}
																	keyExtractor={(item) => item.id}
																	renderItem={(detail) => (
																		<Typography variant="list" className="flex gap-2">
																			<span className="text-primary">•</span>
																			<span>{detail.body}</span>
																		</Typography>
																	)}
																/>

																{experience.id === 1 && (
																	<Typography
																		variant="muted"
																		color="surface-muted-foreground-title"
																		fontSize="xs"
																		fontWeight="normal"
																		fontStyle="italic"
																		className="mt-1 ml-4"
																	>
																		+2 autres tâches...
																	</Typography>
																)}
															</ul>
														</div>

														{experience.id === 1 && (
															<div>
																<Typography
																	variant="muted"
																	color="accordion-muted-foreground-title"
																	fontSize="sm"
																	fontWeight="bold"
																	className="mb-1"
																>
																	Formations :
																</Typography>

																<ul className="space-y-1">
																	<ListRenderer
																		list={experience.formations}
																		keyExtractor={(item) => item.id}
																		renderItem={(formation) => (
																			<Typography variant="list" className="flex gap-2">
																				<span className="text-primary">•</span>
																				<span>{formation.label}</span>
																			</Typography>
																		)}
																	/>
																</ul>
															</div>
														)}

														<div className="pt-4 border-t border-accordion-separator">
															<Typography
																variant="muted"
																color="surface-muted-foreground-info"
																fontSize="custom-11"
																fontWeight="bold"
																textTransform="uppercase"
																letterSpacing="wider"
																className="mb-2"
															>
																Env. technique :
															</Typography>

															<Typography
																variant="muted"
																color="surface-muted-foreground"
																fontSize="custom-11"
																fontWeight="normal"
															>
																{experience.technologies.map((tech) => tech.label).join(" / ")}
															</Typography>
														</div>
													</div>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</div>
								)}
							/>
						</div>
					</section>

					{/* Projects Section */}
					<section className="mb-16">
						<SectionTitle label="Projets" icon="rocket_launch" className="mb-10" />

						<Tabs defaultValue="preview">
							<TabsList className="flex gap-2 bg-tabs-background rounded-lg w-fit ml-auto lg:ml-0  p-1 mb-6">
								<TabsTrigger
									value="grid"
									onClick={() => setProjectView("grid")}
									className={cn(
										"px-3 py-1.5 text-xs rounded-md shadow-none flex items-center gap-2 transition-all text-slate-500 dark:text-slate-400 font-medium data-[state=active]:bg-white data-[state=active]:dark:bg-slate-700data-[state=active]:text-primarydata-[state=active]:font-bold",
									)}
								>
									<Icon variant="default" icon="grid_view" size="24px" />
									Card
								</TabsTrigger>
								<TabsTrigger
									value="list"
									onClick={() => setProjectView("list")}
									className={cn(
										"px-3 py-1.5 text-xs rounded-md shadow-none flex items-center gap-2 transition-all text-slate-500 dark:text-slate-400 font-medium data-[state=active]:bg-white data-[state=active]:dark:bg-slate-700 data-[state=active]:text-primary data-[state=active]:font-bold",
										{
											"bg-white dark:bg-slate-700 text-primary font-bold": projectView === "list",
											"text-slate-500 dark:text-slate-400 hover:text-primary font-medium": projectView === "grid",
										},
									)}
								>
									<Icon variant="default" icon="list" size="24px" />
									List
								</TabsTrigger>
							</TabsList>
						</Tabs>

						{projectView === "grid" ? (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<ListRenderer
									list={resumeData.projects}
									keyExtractor={(item) => item.id}
									renderItem={(project) => (
										<div className="group relative flex flex-col bg-card-background border border-card-border rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all hover:-translate-y-1">
											<div className="relative h-40 overflow-hidden">
												<Image
													src={project.image}
													alt={project.title}
													fill
													sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
													className="object-cover transition-transform duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105"
												/>
											</div>

											<div className="p-6">
												<div className="flex items-center gap-2 mb-2">
													<Typography variant="h3" fontSize="lg">
														{project.title}
													</Typography>

													<div className="flex gap-1.25">
														<a href={project.link} className="flex">
															<Icon
																variant="default"
																icon="open_in_new"
																color="link"
																size="21px"
																className="hover:text-primary transition-colors"
															/>
														</a>
														<a href={project.github} className="text-slate-400 hover:text-primary transition-colors">
															<svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
																<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.311.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
															</svg>
														</a>
													</div>
												</div>

												<Typography
													variant="lead"
													fontSize="sm"
													lineHeight="relaxed"
													fontWeight="normal"
													letterSpacing="normal"
													textAlign="left"
													className="line-clamp-2 mb-4"
												>
													{project.description}
												</Typography>

												<div className="flex flex-wrap gap-1.5 mb-4">
													<ListRenderer
														list={project.tags}
														keyExtractor={(item) => item.id}
														renderItem={(technology) => (
															<Chip
																variant="rounded"
																color={
																	skillColorMap[
																		technology.label
																			.split(/[\s.]+/)
																			.join("")
																			.toLowerCase()
																	] ?? "default"
																}
																rounded="sm"
																size="thin"
															>
																<Typography
																	variant="small"
																	color="text-current"
																	fontSize="xs"
																	fontWeight="semibold"
																	lineHeight="none"
																	asChild
																>
																	<span>{technology.label}</span>
																</Typography>
															</Chip>
														)}
													/>
												</div>
											</div>
										</div>
									)}
								/>
							</div>
						) : (
							<div className="grid grid-cols-1 gap-6">
								<ListRenderer
									list={resumeData.projects}
									keyExtractor={(item) => item.id}
									renderItem={(project) => (
										<div className="flex flex-col gap-2 py-6 first:pt-0 border-t border-border-separator-secondary first:border-t-0 w-full">
											<div className="flex items-center gap-3">
												<Typography variant="h3">{project.title}</Typography>

												<div className="flex gap-1.25">
													<a
														className="text-primary hover:text-primary/80 transition-colors"
														href={project.link}
														target="_blank"
													>
														<Icon
															variant="default"
															icon="open_in_new"
															color="primary"
															size="21px"
															className="hover:text-primary transition-colors"
														/>
													</a>

													<a
														className="text-primary hover:text-primary/80 transition-colors"
														href={project.github}
														target="_blank"
													>
														<svg className="size-5 fill-current" viewBox="0 0 24 24">
															<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
														</svg>
													</a>
												</div>
											</div>

											<Typography
												variant="lead"
												color="surface-muted-foreground-info"
												fontSize="base"
												lineHeight="relaxed"
												fontWeight="normal"
												letterSpacing="normal"
												textAlign="left"
												className="line-clamp-2"
											>
												{project.description}
											</Typography>

											<div className="flex flex-wrap gap-2 mt-1">
												<ListRenderer
													list={project.tags}
													keyExtractor={(item) => item.id}
													renderItem={(technology) => (
														<Chip
															variant="rounded"
															color={
																skillColorMap[
																	technology.label
																		.split(/[\s.]+/)
																		.join("")
																		.toLowerCase()
																] ?? "default"
															}
															rounded="sm"
															size="thin"
														>
															<Typography
																variant="small"
																color="text-current"
																fontSize="xs"
																fontWeight="semibold"
																lineHeight="none"
																asChild
															>
																<span>{technology.label}</span>
															</Typography>
														</Chip>
													)}
												/>
											</div>
										</div>
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
								renderItem={(formation) => (
									<div className="flex gap-4 p-5 rounded-2xl border border-border-card-education bg-card-education-background transition-colors duration-300">
										<div className="size-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 transition-colors duration-300">
											<Icon variant="rounded" color="secondary" icon="history_edu" size="26px" containerSize="48px" />
										</div>

										<div className="flex flex-col gap-1">
											<Typography variant="h4">{formation.degree}</Typography>

											<Typography
												variant="small"
												color="surface-muted-foreground-info"
												fontSize="base"
												fontWeight="medium"
												lineHeight="none"
												textTransform="capitalize"
												letterSpacing="normal"
											>
												{formation.school}
											</Typography>

											<Typography
												variant="small"
												color="surface-muted-foreground-title"
												fontSize="sm"
												fontWeight="normal"
												lineHeight="none"
												textTransform="capitalize"
												letterSpacing="normal"
											>
												{formation.year} | {formation.specialization}
											</Typography>
										</div>
									</div>
								)}
							/>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};
