import { Resume } from "@/components/page/resume";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/prisma/generated/prisma/client";
import { ResumeModel } from "@/prisma/generated/prisma/models";
import { notFound } from "next/navigation";
import { FC } from "react";

type ResumePageProps = {
	params: Promise<{ id: string }>;
};

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

const ResumePage: FC<ResumePageProps> = async ({ params }) => {
	const { id } = await params;

	const data: ResumeData | null = await prisma.resume.findUnique({
		where: { id },
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
		notFound();
	}

	return <Resume data={data} />;
};

export default ResumePage;
