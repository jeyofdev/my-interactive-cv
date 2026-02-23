import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type GetParams = {
	params: Promise<{ id: string }>;
};

export const GET = async (_: Request, { params }: GetParams) => {
	try {
		const { id } = await params;

		const resume = await prisma.resume.findUnique({
			where: {
				id: id,
			},
			include: {
				education: true,
				experiences: true,
				hobbies: true,
				languages: true,
				projects: true,
				skills: true,
			},
		});

		if (!resume) {
			return NextResponse.json({ error: "Resume not found" }, { status: 404 });
		}

		return NextResponse.json(resume, { status: 200 });
	} catch (error) {
		console.error("Error fetching resume:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
};
