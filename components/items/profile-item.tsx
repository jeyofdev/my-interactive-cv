import { FC } from "react";
import { Icon } from "../ui/icons/icon";
import Link from "next/link";

type ProfileItem = {
	icon: string;
	label: string;
	hasLink?: boolean;
	href?: string;
	isSocial?: boolean;
};

export const ProfileItem: FC<ProfileItem> = ({ icon, label, hasLink, href, isSocial }) => {
	return (
		<div className="flex items-center gap-3 text-sm text-surface-muted-foreground hover:text-primary group cursor-pointer transition-colors">
			<Icon icon={icon} color="text-primary" size="1.5rem" className="group-hover:scale-110 transition-transform" />

			{hasLink && href ? (
				<a href={href} target="_blank">
					{`${isSocial ? "@" : ""}${label}`}
				</a>
			) : (
				<span>{label}</span>
			)}
		</div>
	);
};
