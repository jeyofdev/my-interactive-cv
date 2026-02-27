"use client";

import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card/card-base";
import { Education } from "@/prisma/generated/prisma/client";
import { useLocale } from "next-intl";

export type EducationCardProps = {
	education: Omit<Education, "resumeId">;
};

export const EducationCard: FC<EducationCardProps> = ({ education }) => {
	const locale = useLocale();

	return (
		<Card className="group relative flex-row items-center gap-6 p-5 border-border-card-education bg-card-education-background rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
			<div className="size-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 transition-colors duration-300">
				<Icon variant="rounded" color="secondary" icon="history_edu" size="26px" containerSize="48px" />
			</div>

			<CardContent className="flex flex-col items-start flex-wrap gap-2 px-0">
				<Typography variant="h4">{education.degree[locale as keyof typeof education.degree]}</Typography>

				<Typography
					variant="small"
					color="surface-muted-foreground-info"
					fontSize="base"
					fontWeight="medium"
					lineHeight="none"
					textTransform="capitalize"
					letterSpacing="normal"
				>
					{education.school[locale as keyof typeof education.school]}
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
					{education.year} | {education.specialization[locale as keyof typeof education.specialization]}
				</Typography>
			</CardContent>
		</Card>
	);
};
