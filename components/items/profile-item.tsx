import { FC, ReactNode } from "react";
import { Icon } from "@/components/ui/icon/icon";
import { Typography } from "@/components/ui/typography/typography";

type ProfileItem = {
	icon: string;
	label: string;
	hasLink?: boolean;
	href?: string;
	isSocial?: boolean;
};

type ProfileItemLabel = {
	label: string;
};

export const ProfileItem: FC<ProfileItem> = ({ icon, label, hasLink, href, isSocial }) => {
	return (
		<div className="group flex items-center gap-3">
			<Icon icon={icon} color="primary" size="1.5rem" className="group-hover:scale-110 transition-transform" />

			{hasLink && href ? (
				<a href={href} target="_blank" className="cursor-pointer">
					<ProfileItemContent label={`${isSocial ? "@" : ""}${label}`} />
				</a>
			) : (
				<ProfileItemContent label={label} />
			)}
		</div>
	);
};

const ProfileItemContent: FC<ProfileItemLabel> = ({ label }) => {
	return (
		<Typography variant="small" className="group-hover:text-primary transition-colors">
			{label}
		</Typography>
	);
};
