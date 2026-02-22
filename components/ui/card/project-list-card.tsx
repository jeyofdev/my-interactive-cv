import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";
import { ListRenderer } from "@/components/list/list-renderer";
import { Chip } from "@/components/ui/chip/chip";
import { ProjectGridCardProps } from "@/components/ui/card/project-grid-card";
import { getChipSkillColor } from "@/lib/utils";
import { FC } from "react";
import { GithubIcon } from "@/components/ui/icon/github-icon";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card-base";

type ProjectListCard = ProjectGridCardProps;

export const ProjectListCard: FC<ProjectListCard> = ({ project }) => {
	return (
		<Card className="group relative px-2 py-3 gap-2 bg-card-background border-none shadow-none hover:shadow-xs hover:-translate-y-1 transition-all">
			<CardHeader className="flex gap-3 px-0">
				<div className="flex items-center gap-3">
					<Typography variant="h3" fontSize="xl" lineHeight="none">
						{project.title}
					</Typography>

					<div className="flex gap-1.25">
						<ListRenderer
							list={project.links}
							keyExtractor={(item) => item.id}
							renderItem={(link) => (
								<a
									href={link.url}
									target="_blank"
									className="text-link-muted-foreground hover:text-primary transition-colors"
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
					</div>
				</div>
			</CardHeader>

			<CardContent className="px-0 mb-1.5">
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
			</CardContent>

			<CardFooter className="flex-wrap gap-1.5 px-0 mt-1">
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
