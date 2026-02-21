import { Chip } from "@/components/ui/chip/chip";
import { Typography } from "@/components/ui/typography/typography";
import { Divider } from "../divider/divider";
import { Experience } from "@/data/resume-data";
import { FC } from "react";

type AccordionExperienceTriggerProps = {
	data: Experience;
};

export const AccordionExperienceTrigger: FC<AccordionExperienceTriggerProps> = ({ data }) => {
	return (
		<>
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
		</>
	);
};
