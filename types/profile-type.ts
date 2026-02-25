import { Prisma } from "@/prisma/generated/prisma/client";

export type ProfileData = Prisma.ProfileGetPayload<{
	select: {
		id: true;
		name: true;
		social: true;
		website: true;
	};
}>;
