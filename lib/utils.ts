import { skillColorMap } from "@/components/page/resume";
import { ChipBaseColor } from "@/components/ui/chips/chip-base";
import { SkillItem } from "@/data/resume-data";
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
