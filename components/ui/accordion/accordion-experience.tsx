import {
	AccordionBase,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion/accordion-base";
import { FC } from "react";
import { Experience } from "@/data/resume-data";
import { Divider } from "@/components/ui/divider/divider";
import AccordionExperienceContent from "@/components/ui/accordion/accordion-experience-content";
import { AccordionExperienceTrigger } from "./accordion-experience-trigger";

type AccordionExperienceProps = {
	data: Experience;
};

export const AccordionExperience: FC<AccordionExperienceProps> = ({ data }) => {
	return (
		<AccordionBase type="single" collapsible>
			<AccordionItem key={data.id} value={`exp-${data.id}`}>
				<AccordionTrigger className="p-4 cursor-pointer relative pr-10 flex flex-col gap-2">
					<AccordionExperienceTrigger data={data} />
				</AccordionTrigger>

				<AccordionContent className="px-4 pb-6">
					<Divider variant="horizontal" className="pb-4" />

					<AccordionExperienceContent data={data} />
				</AccordionContent>
			</AccordionItem>
		</AccordionBase>
	);
};
