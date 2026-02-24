import {
	createInvalidResumeIdError,
	createResumeNotFoundError,
	handlePrismaError,
	throwResumeError,
} from "@/lib/error/resume-errors";
import { prisma } from "@/lib/prisma";
import { ProfileData } from "@/types/resume-type";

type getProfileByIdOptions = {
	profileId: string;
};

export const getProfileById = async ({ profileId }: getProfileByIdOptions): Promise<ProfileData> => {
	// Check format ID
	if (!profileId || !/^[0-9a-fA-F]{24}$/.test(profileId)) {
		throwResumeError(createInvalidResumeIdError(profileId));
	}

	try {
		const data: ProfileData | null = await prisma.profile.findUnique({
			where: { id: profileId },
			select: {
				id: true,
				name: true,
				social: true,
			},
		});

		if (!data) {
			throwResumeError(createResumeNotFoundError(profileId));
		}

		return data as ProfileData;
	} catch (error) {
		// ResumeError
		if (error instanceof Error && error.name === "ResumeNotFoundError") {
			throw error;
		}

		// transform Prisma error
		const resumeError = handlePrismaError(error, profileId);
		throwResumeError(resumeError);
		throw resumeError;
	}
};
