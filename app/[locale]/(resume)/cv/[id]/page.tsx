import { Resume } from "@/components/page/resume";
import { getResumeById } from "@/lib/fetch/get-resume-by-id";
import { notFound } from "next/navigation";
import { FC } from "react";

type ResumePageProps = {
	params: Promise<{ id: string }>;
};

const ResumePage: FC<ResumePageProps> = async ({ params }) => {
	const { id } = await params;

	try {
		const data = await getResumeById({ resumeId: id });
		return <Resume data={data} />;
	} catch (error) {
		if (error instanceof Error && (error.name === "ResumeNotFoundError" || error.name === "InvalidResumeIdError")) {
			notFound();
		}

		throw error;
	}
};

export default ResumePage;
