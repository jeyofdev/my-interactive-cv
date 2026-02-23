import {
	createInvalidResumeIdError,
	createResumeNotFoundError,
	handlePrismaError,
	throwResumeError,
} from "@/lib/error/resume-errors";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/prisma/generated/prisma/client";

export type ResumeData = Prisma.ResumeGetPayload<{
	include: {
		education: true;
		experiences: true;
		hobbies: true;
		languages: true;
		projects: true;
		skills: true;
	};
}>;

type getResumeByIdOptions = {
	resumeId: string;
};

export const getResumeById = async ({ resumeId }: getResumeByIdOptions): Promise<ResumeData> => {
	// Check format ID
	if (!resumeId || !/^[0-9a-fA-F]{24}$/.test(resumeId)) {
		throwResumeError(createInvalidResumeIdError(resumeId));
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
			},
		});

		if (!data) {
			throwResumeError(createResumeNotFoundError(resumeId));
		}

		return data;
	} catch (error) {
		// ResumeError
		if (error instanceof Error && error.name === "ResumeNotFoundError") {
			throw error;
		}

		// transform Prisma error
		const resumeError = handlePrismaError(error, resumeId);
		throwResumeError(resumeError);
	}
};
