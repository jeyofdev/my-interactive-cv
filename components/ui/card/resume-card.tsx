import { FC } from "react";
import { Icon } from "@/components/ui/icon/icon";
import { ListRenderer } from "@/components/list/list-renderer";
import { Chip } from "@/components/ui/chip/chip";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card-base";
import { Typography } from "@/components/ui/typography/typography";
import { Link } from "@/components/ui/button/link";
import { extractRecurringSkills, getChipSkillColor } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { ResumePreviewData } from "@/types/resume-type";

type ResumeCardProps = {
	resume: ResumePreviewData;
};

export const ResumeCard: FC<ResumeCardProps> = ({ resume }) => {
	const locale = useLocale();
	const t = useTranslations("home.card");

	return (
		<div className="group max-w-[500px] mx-auto cursor-pointer relative flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-card-home-background shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
			<div className="aspect-video w-full bg-card-home-image-background overflow-hidden relative border-b border-border-light">
				<div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-white opacity-60" />
				<div className="absolute inset-0 flex items-center justify-center">
					<Icon variant="default" icon="list_alt" color="primary/10" size="96px" />
				</div>

				<div className="absolute top-4 right-4 flex gap-2">
					<ListRenderer
						list={extractRecurringSkills(resume, 4)}
						keyExtractor={(item) => item.id}
						renderItem={(skill) => (
							<Chip variant="outline" color={getChipSkillColor(skill)}>
								{skill.label}
							</Chip>
						)}
					/>
				</div>
			</div>

			<CardHeader className="flex p-6">
				<CardTitle>
					<Typography variant="h3" fontSize="xl" lineHeight="none" letterSpacing="normal">
						{resume.title[locale as keyof typeof resume.title]}
					</Typography>
				</CardTitle>
			</CardHeader>

			<CardContent className="mb-6">
				<Typography
					variant="lead"
					fontSize="sm"
					lineHeight="relaxed"
					fontWeight="normal"
					letterSpacing="normal"
					textAlign="left"
					className="line-clamp-2"
				>
					{resume.summary[locale as keyof typeof resume.summary]}
				</Typography>
			</CardContent>

			<CardFooter className="pb-6">
				<Link
					variant="icon"
					backgroundColor="primary"
					color="white"
					icon="arrow_forward"
					iconSize="24px"
					iconPosition="end"
					href={`/cv/${resume.id}`}
				>
					{t("button")}
				</Link>
			</CardFooter>
		</div>
	);
};
