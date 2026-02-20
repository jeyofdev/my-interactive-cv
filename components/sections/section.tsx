import { cn } from "@/lib/utils";
import { FC } from "react";

type SectionProps = {
	children: React.ReactNode;
	className?: string;
};

export const Section: FC<SectionProps> = ({ children, className = "" }) => {
	return <section className={cn("mb-16", className)}>{children}</section>;
};
export default Section;
