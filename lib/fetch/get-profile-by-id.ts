import { prisma } from "@/lib/prisma";
import { isAppError, throwAppError } from "@/types/error-type";
import {
	createProfileInvalidIdError,
	createProfileNotFoundError,
	handleProfilePrismaError,
} from "../error/profile-errors";
import { ProfileData } from "@/types/profile-type";

type getProfileByIdOptions = {
	profileId: string;
};

export const getProfileById = async ({ profileId }: getProfileByIdOptions): Promise<ProfileData> => {
	// Check format ID
	if (!profileId || !/^[0-9a-fA-F]{24}$/.test(profileId)) {
		throwAppError(createProfileInvalidIdError(profileId));
	}

	try {
		const data: ProfileData | null = await prisma.profile.findUnique({
			where: { id: profileId },
			select: {
				id: true,
				name: true,
				social: true,
				website: true,
			},
		});

		if (!data) {
			throwAppError(createProfileNotFoundError(profileId));
		}

		return data as ProfileData;
	} catch (error) {
		// ProfileError
		if (isAppError(error)) throw error;

		// transform Prisma error
		throw throwAppError(handleProfilePrismaError(error, profileId));
	}
};
