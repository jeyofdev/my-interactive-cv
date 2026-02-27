"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card-base";
import { Typography } from "@/components/ui/typography/typography";
import { Hobby } from "@/prisma/generated/prisma/client";
import { useLocale } from "next-intl";

type HobbyCard = {
	hobby: Omit<Hobby, "resumeId">;
};

export const HobbyCard: FC<HobbyCard> = ({ hobby }) => {
	const locale = useLocale();

	return (
		<Card className="p-0 gap-0 border-0 shadow-none">
			<CardHeader className="p-0 gap-0">
				<CardTitle>
					<Typography
						variant="h6"
						color="surface-muted-foreground-info-title"
						fontSize="xs"
						fontWeight="semibold"
						lineHeight="none"
						asChild
					>
						<h6>{hobby.label[locale as keyof typeof hobby.label]}</h6>
					</Typography>
				</CardTitle>
			</CardHeader>

			<CardContent className="p-0">
				{hobby.detail && <Typography variant="muted">{hobby.detail[locale as keyof typeof hobby.detail]}</Typography>}
				{hobby.duration && (
					<Typography variant="muted">{hobby.duration[locale as keyof typeof hobby.duration]}</Typography>
				)}
			</CardContent>
		</Card>
	);
};
