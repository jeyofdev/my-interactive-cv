"use client";

import { Chip } from "@/components/ui/chip/chip";
import { Typography } from "@/components/ui/typography/typography";
import { Divider } from "../divider/divider";
import { FC } from "react";
import { Experience } from "@/prisma/generated/prisma/client";
import { useLocale } from "next-intl";

type AccordionExperienceTriggerProps = {
	data: Omit<Experience, "resumeId">;
};

export const AccordionExperienceTrigger: FC<AccordionExperienceTriggerProps> = ({ data }) => {
	const locale = useLocale();

	return (
		<>
			<div className="flex items-center gap-2.5 flex-wrap">
				<Typography variant="h3">{data.role[locale as keyof typeof data.role]}</Typography>

				{data.id === "1" && <Chip variant="info">Latest</Chip>}
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
						{data.type[locale as keyof typeof data.type]}
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
				{data.description[locale as keyof typeof data.description]}
			</Typography>
		</>
	);
};
