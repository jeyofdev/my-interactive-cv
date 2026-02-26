"use client";

import { Contact } from "@/components/page/contact";
import { useProfileContext } from "@/hook/use-profile-context";

const ContactPage = () => {
	const { profile } = useProfileContext();

	return <Contact profile={profile} />;
};

export default ContactPage;
