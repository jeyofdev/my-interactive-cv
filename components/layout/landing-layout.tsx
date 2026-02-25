import { FC, ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { ProfileData, ResumePreviewData } from "@/types/resume-type";
import { Footer } from "@/components/layout/footer";

type LandingLayoutProps = {
	profile: ProfileData;
	resumes: ResumePreviewData[];
	children: ReactNode;
};

export const LandingLayout: FC<LandingLayoutProps> = ({ profile, resumes, children }) => {
	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<Header variant="default" name={profile.name} />

			{children}

			<Footer socialLinks={profile.social} className="max-w-6xl mx-auto" />
		</div>
	);
};
