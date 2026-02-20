import { Hobby } from "@/data/resume-data";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card-base";
import { Typography } from "@/components/ui/typography/typography";

type HobbyCard = {
	hobby: Hobby;
};

export const HobbyCard: FC<HobbyCard> = ({ hobby }) => {
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
						<h6>{hobby.label}</h6>
					</Typography>
				</CardTitle>
			</CardHeader>

			<CardContent className="p-0">
				{hobby.detail && <Typography variant="muted">{hobby.detail}</Typography>}
				{hobby.duration && <Typography variant="muted">{hobby.duration}</Typography>}
			</CardContent>
		</Card>
	);
};
