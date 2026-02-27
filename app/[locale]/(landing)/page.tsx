"use client";

import { Home } from "@/components/page/home";
import { useProfileContext } from "@/hook/use-profile-context";

const HomePage = () => {
	const { profile, resumes } = useProfileContext();

	return <Home data={resumes} profile={profile} />;
};

export default HomePage;
