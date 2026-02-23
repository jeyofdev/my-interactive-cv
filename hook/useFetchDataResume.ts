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

type useFetchDataResumeParams = {
	resumedId: string;
};

export const useFetchDataResume = async ({ resumedId }: useFetchDataResumeParams) => {
	const data: ResumeData | null = await prisma.resume.findUnique({
		where: { id: resumedId },
		include: {
			education: true,
			experiences: true,
			hobbies: true,
			languages: true,
			projects: true,
			skills: true,
		},
	});

	return { data };
};
