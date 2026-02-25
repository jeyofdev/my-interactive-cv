import { ProfileContext } from "@/context/profile-context";
import { use } from "react";

export const useProfileContext = () => {
	const context = use(ProfileContext);

	if (!context) {
		throw new Error("useProfileContext must be used within ProfileContextProvider");
	}

	return context;
};
