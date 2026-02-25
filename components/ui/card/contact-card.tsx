import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card/card-base";
import { Icon } from "@/components/ui/icon/icon";
import { Typography } from "@/components/ui/typography/typography";
import { ContactItem } from "@/data/contact-data";

type ContactCardProps = {
	contact: ContactItem;
	index: number;
};

export const ContactCard: FC<ContactCardProps> = ({ contact, index }) => {
	return (
		<Card className="group relative flex-row items-center gap-6 p-5 border-border-card-education bg-card-education-background rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
			<Icon
				variant="rounded"
				icon="mail"
				size="26px"
				color={index % 2 === 0 ? "primary" : "info"}
				backgroundColor={index % 2 === 0 ? "primary/10" : "info/10"}
				containerSize="48px"
			/>

			<CardContent className="flex flex-col items-start flex-wrap gap-2 px-0">
				<Typography variant="small" fontSize="xs" fontWeight="semibold" textTransform="uppercase">
					{contact.label}
				</Typography>

				<Typography
					variant="small"
					color="surface-muted-foreground-secondary"
					fontSize="sm"
					fontWeight="medium"
					lineHeight="none"
				>
					{contact.value}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default ContactCard;
