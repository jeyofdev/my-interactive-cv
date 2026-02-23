import { Resume } from "@/components/page/resume";
import { FC } from "react";

type ResumePageProps = {
	params: Promise<{ id: string }>;
};

const ResumePage: FC<ResumePageProps> = async ({ params }) => {
	console.log(await params);

	return <Resume />;
};

export default ResumePage;
