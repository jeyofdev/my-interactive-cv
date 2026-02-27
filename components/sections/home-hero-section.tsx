"use client";

import { Chip } from "@/components/ui/chip/chip";
import { DotIcon } from "@/components/ui/icon/dot";
import { Typography } from "@/components/ui/typography/typography";
import { ProfileData } from "@/types/profile-type";
import { FC } from "react";
import { useTranslations } from "use-intl";

type HomeHeroSection = {
	profile: ProfileData;
};

const HomeHeroSection: FC<HomeHeroSection> = ({ profile }) => {
	const t = useTranslations("home.hero");

	return (
		<section className="max-w-5xl w-full px-6 py-10 sm:py-14 md:py-20 lg:py-24 text-center">
			<div className="flex flex-col items-center">
				<Chip variant="rounded" icon={<DotIcon />} className="mb-6">
					{t("subtitle")}
				</Chip>
			</div>

			<Typography
				variant="h1"
				fontSize="6xl"
				fontWeight="black"
				textTransform="normal"
				lineHeight="tight"
				letterSpacing="custom-0.03em"
				className="mb-6 max-w-125 mx-auto"
			>
				{t("title")} <span className="text-primary capitalize">{profile.name}</span>
			</Typography>

			<Typography
				variant="lead"
				fontSize="xl"
				lineHeight="relaxed"
				fontWeight="normal"
				letterSpacing="normal"
				textAlign="center"
				className="max-w-2xl mx-auto"
			>
				{t("description")}
			</Typography>
		</section>
	);
};
export default HomeHeroSection;
