import {
	createResumeInvalidIdError,
	createResumeNotFoundError,
	handleResumePrismaError,
} from "@/lib/error/resume-errors";
import { prisma } from "@/lib/prisma";
import { isAppError, throwAppError } from "@/types/error-type";
import { ResumeData } from "@/types/resume-type";

type getResumeByIdOptions = {
	resumeId: string;
};

export const getResumeById = async ({ resumeId }: getResumeByIdOptions): Promise<ResumeData> => {
	// Check format ID
	if (!resumeId || !/^[0-9a-fA-F]{24}$/.test(resumeId)) {
		throwAppError(createResumeInvalidIdError(resumeId));
	}

	try {
		const data: ResumeData | null = await prisma.resume.findUnique({
			where: { id: resumeId },
			include: {
				education: true,
				experiences: true,
				hobbies: true,
				languages: true,
				projects: true,
				skills: true,
				profile: true,
			},
		});

		if (!data) {
			throwAppError(createResumeNotFoundError(resumeId));
		}

		return data as ResumeData;
	} catch (error) {
		// ResumeError
		if (isAppError(error)) throw error;

		// transform Prisma error
		throw throwAppError(handleResumePrismaError(error, resumeId));
	}
};
