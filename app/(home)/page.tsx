import { Home } from "@/components/page/home";
import { getAllResumes } from "@/lib/fetch/getAllResumes";
import { getProfileById } from "@/lib/fetch/getProfileById";

const HomePage = async () => {
	try {
		const resumes = await getAllResumes();
		const profile = await getProfileById({ profileId: resumes[0].profile.id });

		return <Home data={resumes} profile={profile} />;
	} catch (error) {
		throw error;
	}
};

export default HomePage;
