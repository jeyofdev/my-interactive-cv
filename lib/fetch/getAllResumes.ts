import { handlePrismaError, throwResumeError } from "@/lib/error/resume-errors";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/prisma/generated/prisma/client";
import { ResumePreviewData } from "@/types/resume-type";

export const getAllResumes = async (): Promise<ResumePreviewData[]> => {
	try {
		const datas: ResumePreviewData[] = await prisma.resume.findMany({
			select: {
				id: true,
				title: true,
				summary: true,
				projects: true,
			},
		});

		return datas;
	} catch (error) {
		const resumeError = handlePrismaError(error);
		throwResumeError(resumeError);
		throw resumeError;
	}
};
