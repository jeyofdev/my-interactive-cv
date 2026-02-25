import { LandingLayout } from "@/components/layout/landing-layout";
import { ProfileContextProvider } from "@/context/profile-context";
import { getAllResumes } from "@/lib/fetch/get-all-resumes";
import { getProfileById } from "@/lib/fetch/get-profile-by-id";
import { cn } from "@/lib/utils";
import { ProfileData, ResumePreviewData } from "@/types/resume-type";
import { ReactNode } from "react";

const RootLayout = async ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	try {
		const resumes: ResumePreviewData[] = await getAllResumes();
		const profile: ProfileData = await getProfileById({ profileId: resumes[0].profile.id });

		return (
			<ProfileContextProvider resumes={resumes} profile={profile}>
				<div className={cn("relative flex min-h-screen w-full flex-col lg:flex-row mx-auto shadow-2xl bg-surface")}>
					<LandingLayout resumes={resumes} profile={profile}>
						{children}
					</LandingLayout>
				</div>
			</ProfileContextProvider>
		);
	} catch (error) {
		throw error;
	}
};

export default RootLayout;
