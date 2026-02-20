import Image from "next/image";
import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";
import { Education } from "@/data/resume-data";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card/card-base";

export type EducationCardProps = {
	education: Education;
};

export const EducationCard: FC<EducationCardProps> = ({ education }) => {
	return (
		<Card className="group relative flex-row items-center gap-6 p-5 border-border-card-education bg-card-education-background rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
			<div className="size-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 transition-colors duration-300">
				<Icon variant="rounded" color="secondary" icon="history_edu" size="26px" containerSize="48px" />
			</div>

			<CardContent className="flex flex-col items-start flex-wrap gap-2 px-0">
				<Typography variant="h4">{education.degree}</Typography>

				<Typography
					variant="small"
					color="surface-muted-foreground-info"
					fontSize="base"
					fontWeight="medium"
					lineHeight="none"
					textTransform="capitalize"
					letterSpacing="normal"
				>
					{education.school}
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
					{education.year} | {education.specialization}
				</Typography>
			</CardContent>
		</Card>
	);
};
