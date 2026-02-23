import { handlePrismaError, throwResumeError } from "@/lib/error/resume-errors";
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

export const getAllResumes = async (): Promise<ResumeData[]> => {
	try {
		const datas: ResumeData[] = await prisma.resume.findMany({
			include: {
				education: true,
				experiences: true,
				hobbies: true,
				languages: true,
				projects: true,
				skills: true,
			},
		});

		return datas;
	} catch (error) {
		const resumeError = handlePrismaError(error);
		throwResumeError(resumeError);
		throw resumeError;
	}
};
