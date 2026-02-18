import { ProfileItem } from "@/components/items/profile-item";
import { ListRenderer } from "@/components/list/list-renderer";
import { resumeData } from "@/data/resume-data";
import Image from "next/image";

const ResumePage = () => {
	const formatVehiculeLabel = () => {
		const output = "";

		if (resumeData.vehicle.carLicense && !resumeData.vehicle.vehicule) return "Permis B";
		else if (resumeData.vehicle.carLicense && resumeData.vehicle.vehicule) return "Permis B + véhicule";

		return output;
	};

	const getSkillStyle = (skill: string) => {
		switch (skill) {
			case "React.js":
				return "bg-react text-react-foreground border-react-border hover:border-react-foreground";
			case "TypeScript":
				return " bg-typescript text-typescript-foreground border-typescript-border hover:border-typescript-foreground";
			case "Tailwind CSS":
				return "bg-tailwindcss text-tailwindcss-foreground border-tailwindcss-border hover:border-tailwindcss-foreground";
			case "Next.js":
				return "bg-nextjs text-nextjs-foreground border-nextjs-border hover:border-nextjs-foreground";
			case "Node.js":
				return "bg-nodejs text-nodejs-foreground border-nodejs-border hover:border-nodejs-foreground";
			case "PostgreSQL":
				return "bg-postgresql text-postgresql-foreground border-postgresql-border hover:border-postgresql-foreground";
			case "Redis":
				return "bg-redis text-redis-foreground border-redis-border hover:border-redis-foreground";
			case "GraphQL":
				return "bg-graphql text-graphql-foreground border-graphql-border hover:border-graphql-foreground";
			case "Docker":
				return "bg-docker text-docker-foreground border-docker-border hover:border-docker-foreground";
			case "AWS":
				return "bg-aws text-aws-foreground border-aws-border hover:border-aws-foreground";
			case "GitLab CI":
				return "bg-gitlab text-gitlab-foreground border-gitlab-border hover:border-gitlab-foreground";
			default:
				return "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:border-primary";
		}
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
					<h1 className="text-2xl font-bold tracking-tight surface-muted-foreground-secondary capitalize">
						{resumeData.name}
					</h1>

					<p className="text-primary font-semibold text-sm uppercase tracking-wider mt-1">{resumeData.title}</p>

					{/* description summary */}
					<p className="mt-4 text-sm text-surface-muted-foreground leading-relaxed text-justify px-2">
						{resumeData.summary}
					</p>

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
							items={resumeData.skills}
							keyExtractor={(item) => item.id}
							renderItem={(skillGroup) => (
								<div>
									<h3 className="text-xs font-bold text-surface-muted-foreground-title uppercase tracking-[0.2em] mb-4">
										{skillGroup.category}
									</h3>

									<div className="flex flex-wrap gap-2">
										<ListRenderer
											items={skillGroup.items}
											keyExtractor={(item) => item.id}
											renderItem={(skill) => (
												<span
													className={`px-3 py-1 text-xs font-semibold rounded-md shadow-sm border transition-colors cursor-default ${getSkillStyle(skill.label)}`}
												>
													{skill.label}
												</span>
											)}
										/>
									</div>
								</div>
							)}
						/>

						<div>
							<h3 className="text-xs font-bold text-surface-muted-foreground-title uppercase tracking-[0.2em] mb-4">
								Langues
							</h3>

							<div className="flex flex-wrap gap-2">
								<ListRenderer
									items={resumeData.languages}
									keyExtractor={(item) => item.id}
									renderItem={(language) => (
										<span className="px-3 py-1 bg-chip text-chip-foreground text-xs font-medium rounded shadow-sm border border-chip-border hover:border-primary transition-colors cursor-default">
											{language.label} ({language.level})
										</span>
									)}
								/>
							</div>
						</div>

						<div className="pt-4">
							<h3 className="text-[10px] font-bold text-surface-muted-foreground-title-secondary uppercase tracking-widest border-b border-border-separator pb-1.5 mb-4">
								Loisirs
							</h3>

							<div className="grid grid-cols-2 gap-x-4 gap-y-6">
								<ListRenderer
									items={resumeData.hobbies}
									keyExtractor={(item) => item.id}
									renderItem={(hobby) => (
										<div>
											<p className="text-sm font-semibold text-surface-muted-foreground-info-title">{hobby.label}</p>
											{hobby.detail && <p className="text-[11px] text-surface-muted-foreground-info">{hobby.detail}</p>}
											{hobby.duration && (
												<p className="text-[11px] text-surface-muted-foreground-info">{hobby.duration}</p>
											)}
										</div>
									)}
								/>
							</div>
						</div>
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
