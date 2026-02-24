"use client";

import { FC } from "react";
import { Header } from "@/components/layout/header";
import { ProfileData } from "@/types/resume-type";
import { Footer } from "@/components/layout/footer";

type ContactProps = { profile: ProfileData };

export const Contact: FC<ContactProps> = ({ profile }) => {
	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<Header variant="default" name={profile.name} />

			<main className="min-h-screen flex-1 flex flex-col items-center bg-surface-muted"></main>
			<Footer socialLinks={profile.social} className="max-w-6xl mx-auto" />
		</div>
	);
};
