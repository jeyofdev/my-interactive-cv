"use client";

import { ProfileData, ResumePreviewData } from "@/types/resume-type";
import { createContext, FC, ReactNode, useState, Dispatch, SetStateAction } from "react";

type ProfileContextType = {
	profile: ProfileData;
	setProfile: Dispatch<SetStateAction<ProfileData>>;
	resumes: ResumePreviewData[];
	setResumes: Dispatch<SetStateAction<ResumePreviewData[]>>;
};

export const ProfileContext = createContext<ProfileContextType | null>(null);

type ProfileContextProvider = {
	children: ReactNode;
	profile: ProfileData;
	resumes: ResumePreviewData[];
};

export const ProfileContextProvider: FC<ProfileContextProvider> = ({ children, profile, resumes }) => {
	const [currentProfile, setCurrentProfile] = useState(profile);
	const [currentResumes, setCurrentResumes] = useState(resumes);

	return (
		<ProfileContext
			value={{
				profile: currentProfile,
				setProfile: setCurrentProfile,
				resumes: currentResumes,
				setResumes: setCurrentResumes,
			}}
		>
			{children}
		</ProfileContext>
	);
};
