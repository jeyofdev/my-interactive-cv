import { Hobby } from "@/data/resume-data";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cards/card";

type HobbyCard = {
	hobby: Hobby;
};

export const HobbyCard: FC<HobbyCard> = ({ hobby }) => {
	return (
		<Card className="p-0 gap-0 border-0 shadow-none">
			<CardHeader className="p-0 gap-0">
				<CardTitle className="text-sm font-semibold text-surface-muted-foreground-info-title">{hobby.label}</CardTitle>
			</CardHeader>
			<CardContent className="p-0">
				{hobby.detail && <p className="text-[11px] text-surface-muted-foreground-info">{hobby.detail}</p>}
				{hobby.duration && <p className="text-[11px] text-surface-muted-foreground-info">{hobby.duration}</p>}
			</CardContent>
		</Card>
	);
};
