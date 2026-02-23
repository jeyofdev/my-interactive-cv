import { Resume } from "@/components/page/resume";
import { useFetchDataResume } from "@/hook/useFetchDataResume";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/prisma/generated/prisma/client";
import { ResumeModel } from "@/prisma/generated/prisma/models";
import { notFound } from "next/navigation";
import { FC } from "react";

type ResumePageProps = {
	params: Promise<{ id: string }>;
};

const ResumePage: FC<ResumePageProps> = async ({ params }) => {
	const { id } = await params;

	const { data } = await useFetchDataResume({ resumedId: id });

	if (!data) {
		notFound();
	}

	return <Resume data={data} />;
};

export default ResumePage;
