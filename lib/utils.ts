import { ChipBaseColor } from "@/components/ui/chip/chip-base";
import { SkillItem, Tag } from "@/data/resume-data";
import { ResumePreviewData } from "@/types/resume-type";
import { skillColorMap } from "@/types/skill-type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const getChipSkillColor = (skill: SkillItem): ChipBaseColor | null | undefined => {
	return (
		skillColorMap[
			skill.label
				.split(/[\s.]+/)
				.join("")
				.toLowerCase()
		] ?? "default"
	);
};

export const extractRecurringSkills = (resume: ResumePreviewData, limit: number): SkillItem[] => {
	const skillCount: Record<string, { id: string; label: string; count: number }> = {};

	resume?.projects.flat().forEach((project) => {
		project?.tags.forEach((tag) => {
			if (skillCount[tag.label]) {
				skillCount[tag.label].count++;
			} else {
				skillCount[tag.label] = { id: tag.id, label: tag.label, count: 1 };
			}
		});
	});

	const skills: SkillItem[] = Object.values(skillCount)
		// .filter((el) => el.count > 1)
		.map((el) => ({ id: el.id, label: el.label }))
		.filter((_, index) => limit && index + 1 <= limit);

	return skills;
};
