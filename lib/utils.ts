import { ChipBaseColor } from "@/components/ui/chip/chip-base";
import { SkillItem } from "@/data/resume-data";
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
