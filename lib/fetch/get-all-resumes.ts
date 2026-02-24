import { prisma } from "@/lib/prisma";
import { throwAppError } from "@/types/error-type";
import { ResumePreviewData } from "@/types/resume-type";
import { handleResumePrismaError } from "@/lib/error/resume-errors";

export const getAllResumes = async (): Promise<ResumePreviewData[]> => {
	try {
		const datas: ResumePreviewData[] = await prisma.resume.findMany({
			select: {
				id: true,
				title: true,
				summary: true,
				projects: true,
				profile: true,
			},
		});

		return datas;
	} catch (error) {
		throw throwAppError(handleResumePrismaError(error));
	}
};
