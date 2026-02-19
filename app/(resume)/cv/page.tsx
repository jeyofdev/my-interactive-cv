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
						<div className="flex items-center gap-4 mb-10">
							<Icon variant="rounded" backgroundColor="primary" icon="work" size="26px" containerSize="40px" />

							<Typography variant="h2">Expériences Professionnelles</Typography>
						</div>

						{/* Timeline Wrapper */}
						<div className="relative space-y-12">
							{/* Single continuous timeline line */}
							<div className="absolute left-0 top-2 -bottom-11 w-0.5 bg-timeline-background"></div>

							<ListRenderer
								list={resumeData.experiences}
								keyExtractor={(item) => item.id}
								renderItem={(experience) => (
									<div className="relative pl-8">
										{/* Timeline dot */}
										<div
											className={cn(
												"absolute left-[-6px] top-6 size-[16px] bg-primary rounded-full border-4 border-timeline-border shadow-sm ring-4 ring-primary/10 z-10",
												{
													"bg-primary scale-125 top-8": experience.id === 1,
													"top-6 bg-timeline-background-inactive": experience.id !== 1,
												},
											)}
										/>

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
				</div>
			</main>
		</>
	);
};

export default ResumePage;
