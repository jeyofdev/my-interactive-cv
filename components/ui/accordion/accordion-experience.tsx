import {
	AccordionBase,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion/accordion-base";
import { Typography } from "@/components/ui/typography/typography";
import { Chip } from "@/components/ui/chip/chip";
import { ListRenderer } from "@/components/list/list-renderer";
import { FC } from "react";
import { Experience } from "@/data/resume-data";
import { getChipSkillColor } from "@/lib/utils";
import { Divider } from "@/components/ui/divider/divider";

type AccordionExperienceProps = {
	data: Experience;
};

export const AccordionExperience: FC<AccordionExperienceProps> = ({ data }) => {
	return (
		<AccordionBase type="single" collapsible>
			<AccordionItem key={data.id} value={`exp-${data.id}`}>
				<AccordionTrigger className="p-4 cursor-pointer relative pr-10 flex flex-col gap-2">
					<div className="flex items-center gap-2.5 flex-wrap">
						<Typography variant="h3">{data.role}</Typography>

						{data.id === 1 && <Chip variant="info">Latest</Chip>}
					</div>

					<div className="flex justify-start items-center gap-1">
						<Typography
							variant="muted"
							color="primary"
							fontSize="base"
							fontWeight="semibold"
							className="flex items-center gap-2"
						>
							{data.company}
							<Chip variant="info" backgroundColor="secondary" color="surface-muted-foreground-info">
								{data.type}
							</Chip>
						</Typography>

						<Divider variant="vertical" separatorClassName="w-4" />

						<Typography
							variant="small"
							color="surface-muted-foreground-info"
							fontSize="base"
							fontWeight="normal"
							lineHeight="none"
							textTransform="capitalize"
							letterSpacing="normal"
						>
							{data.period}
						</Typography>
					</div>

					<Typography
						variant="lead"
						fontSize="sm"
						lineHeight="relaxed"
						fontWeight="normal"
						letterSpacing="normal"
						textAlign="left"
					>
						{data.description}
					</Typography>
				</AccordionTrigger>

				<AccordionContent className="px-4 pb-6">
					<Divider variant="horizontal" className="pb-4" />

					<div className="space-y-4">
						<div className="flex flex-wrap gap-1.5 mb-4">
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

						<Divider variant="horizontal" className="mt-4" />

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

						<Typography variant="muted" color="surface-muted-foreground" fontSize="custom-11" fontWeight="normal">
							{data.technologies.map((tech) => tech.label).join(" / ")}
						</Typography>
					</div>
				</AccordionContent>
			</AccordionItem>
		</AccordionBase>
	);
};
