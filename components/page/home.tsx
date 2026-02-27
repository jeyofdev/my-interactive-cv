"use client";

import { ListRenderer } from "@/components/list/list-renderer";
import { FC } from "react";
import { ResumePreviewData } from "@/types/resume-type";
import { ProfileData } from "@/types/profile-type";
import { ResumeCard } from "@/components/ui/card/cards";
import { CtaSection } from "@/components/sections/cta-section";
import HomeHeroSection from "@/components/sections/home-hero-section";

type HomeProps = {
	data: ResumePreviewData[];
	profile: ProfileData;
};

export const Home: FC<HomeProps> = ({ data, profile }) => {
	return (
		<main className="flex-1 flex flex-col items-center bg-surface-muted">
			{/* Hero Section */}
			<HomeHeroSection profile={profile} />

			<section className="max-w-6xl w-full px-6 pb-10 sm:pb-14 md:pb-18 lg:pb-20 xl:pb-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					<ListRenderer
						list={data}
						keyExtractor={(item) => item.id}
						renderItem={(resume) => <ResumeCard resume={resume} />}
					/>
				</div>
			</section>

			{/* Call to Action Section */}
			<CtaSection />
		</main>
	);
};
