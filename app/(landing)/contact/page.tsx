import { Contact } from "@/components/page/contact";
import { getAllResumes } from "@/lib/fetch/get-all-resumes";
import { getProfileById } from "@/lib/fetch/get-profile-by-id";

const ContactPage = async () => {
	try {
		const resumes = await getAllResumes();
		const profile = await getProfileById({ profileId: resumes[0].profile.id });

		return <Contact profile={profile} />;
	} catch (error) {
		throw error;
	}
};

export default ContactPage;
