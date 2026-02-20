import Image from "next/image";
import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";
import { ListRenderer } from "@/components/list/list-renderer";
import { Chip } from "@/components/ui/chip/chip";
import { Project } from "@/data/resume-data";
import { FC } from "react";
import { getChipSkillColor } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/icon/github-icon";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card";

export type ProjectGridCardProps = {
	project: Project;
};

export const ProjectGridCard: FC<ProjectGridCardProps> = ({ project }) => {
	return (
		<Card className="group relative p-0 pb-6 gap-4 bg-card-background border-card-border rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all">
			<div className="absolute inset-0 z-30 bg-black/20 group-hover:bg-transparent h-40 transition-all" />

			<div className="relative h-40 overflow-hidden mb-0">
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
					className="object-cover transition-transform duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105"
				/>
			</div>

			<CardHeader className="flex gap-3 mt-4 mb-0">
				<CardTitle>
					<Typography variant="h3" fontSize="xl" lineHeight="none">
						{project.title}
					</Typography>
				</CardTitle>

				<CardAction className="flex items-center gap-1">
					<ListRenderer
						list={project.links}
						keyExtractor={(item) => item.id}
						renderItem={(link) => (
							<a
								href={link.url}
								target="_blank"
								className="flex text-link-muted-foreground hover:text-primary transition-colors"
							>
								{link.label === "website" ? (
									<Icon
										variant="default"
										icon="open_in_new"
										color="link"
										size="21px"
										className="hover:text-primary transition-colors"
									/>
								) : (
									<GithubIcon />
								)}
							</a>
						)}
					/>
				</CardAction>
			</CardHeader>

			<CardContent className="mb-1.5">
				<Typography
					variant="lead"
					fontSize="sm"
					lineHeight="relaxed"
					fontWeight="normal"
					letterSpacing="normal"
					textAlign="left"
					className="line-clamp-2"
				>
					{project.description}
				</Typography>
			</CardContent>

			<CardFooter className="flex-wrap gap-1.5 mt-1">
				<ListRenderer
					list={project.tags}
					keyExtractor={(item) => item.id}
					renderItem={(technology) => (
						<Chip variant="outline" color={getChipSkillColor(technology)}>
							{technology.label}
						</Chip>
					)}
				/>
			</CardFooter>
		</Card>
	);
};
export default ProjectGridCard;
