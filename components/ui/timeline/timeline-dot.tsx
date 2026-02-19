import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const timelineDotVariants = cva("absolute rounded-full border-4 shadow-sm z-10 transition-all", {
	variants: {
		state: {
			active: "bg-primary scale-125 ring-4 ring-primary/10",
			inactive: "bg-timeline-background-inactive",
		},
		position: {
			default: "left-[-6px] top-6",
			active: "left-[-6px] top-8",
		},
		size: {
			default: "size-[16px]",
			sm: "size-[12px]",
			lg: "size-[20px]",
		},
		borderColor: {
			default: "border-timeline-border",
			primary: "border-primary",
		},
	},
	defaultVariants: {
		state: "inactive",
		position: "default",
		size: "default",
		borderColor: "default",
	},
});

export type TimelineDotProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof timelineDotVariants>;

export const TimelineDot = ({ state, position, size, borderColor, className, ...props }: TimelineDotProps) => {
	return <div className={cn(timelineDotVariants({ state, position, size, borderColor }), className)} {...props} />;
};
