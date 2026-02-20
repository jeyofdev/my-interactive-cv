import { ListRenderer } from "@/components/list/list-renderer";
import { Chip } from "../chip/chip";
import { Typography } from "../typography/typography";
import { Divider } from "../divider/divider";
import { getChipSkillColor } from "@/lib/utils";
import { Experience } from "@/data/resume-data";
import { FC } from "react";
import { CardContent, CardFooter } from "@/components/ui/card/card-base";

type AccordionExperienceContentProps = {
	data: Experience;
};

const AccordionExperienceContent: FC<AccordionExperienceContentProps> = ({ data }) => {
	return (
		<div className="space-y-4">
			<CardContent className="flex flex-col gap-5 px-0">
				<div className="flex flex-wrap gap-1.5 mb-1">
					<ListRenderer
						list={data.technologies}
						keyExtractor={(item) => item.id}
						renderItem={(technology) => (
							<Chip variant="outline" color={getChipSkillColor(technology)}>
								{technology.label}
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
							list={data.details}
							keyExtractor={(item) => item.id}
							renderItem={(detail) => (
								<Typography variant="list" className="flex gap-2">
									<span className="text-primary">•</span>
									<span>{detail.body}</span>
								</Typography>
							)}
						/>

						{data.id === 1 && (
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

				{data.id === 1 && (
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
								list={data.formations}
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
			</CardContent>

			<Divider variant="horizontal" className="mt-4" />

			<CardFooter className="flex flex-col items-start p-0 gap-1.5">
				<Typography
					variant="muted"
					color="surface-muted-foreground-info"
					fontSize="custom-11"
					fontWeight="bold"
					textTransform="uppercase"
					letterSpacing="wider"
				>
					Env. technique :
				</Typography>

				<Typography variant="muted" color="surface-muted-foreground" fontSize="custom-11" fontWeight="normal">
					{data.technologies.map((tech) => tech.label).join(" / ")}
				</Typography>
			</CardFooter>
		</div>
	);
};
export default AccordionExperienceContent;
