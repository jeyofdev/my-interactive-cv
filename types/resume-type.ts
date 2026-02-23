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

export type ResumePreviewData = Prisma.ResumeGetPayload<{
	select: {
		id: true;
		title: true;
		summary: true;
		projects: true;
	};
}>;
