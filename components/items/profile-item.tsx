import { FC, JSX, ReactNode } from "react";
import { Icon } from "@/components/ui/icon/icon";
import { Typography } from "@/components/ui/typography/typography";
import { LinkedinIcon } from "../ui/icon/linkedin-icon";
import { GithubIcon } from "../ui/icon/github-icon";

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

const socialIcons: Record<string, JSX.Element> = {
	linkedin: (
		<LinkedinIcon width="w-4.5" height="h-4.5" className="text-primary group-hover:scale-110 transition-transform" />
	),
	github: (
		<GithubIcon width="w-4.5" height="h-4.5" className="text-primary group-hover:scale-110 transition-transform" />
	),
};

export const ProfileItem: FC<ProfileItem> = ({ icon, label, hasLink, href, isSocial }) => {
	return (
		<div className="group flex items-center gap-3">
			{isSocial ? (
				socialIcons[icon]
			) : (
				<Icon icon={icon} color="primary" size="1.5rem" className="group-hover:scale-110 transition-transform" />
			)}

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
