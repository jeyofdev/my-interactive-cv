import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { timelineBackgroundColorVariants } from "@/data/variants/color-variants";
import { opacityVariants } from "@/data/variants/box-variants";

const timelineVariants = cva("absolute", {
	variants: {
		orientation: {
			vertical: "left-0 top-2 -bottom-11 w-0.5",
			horizontal: "top-0 left-2 -right-11 h-0.5",
		},
		opacity: opacityVariants,
		background: timelineBackgroundColorVariants,
	},
	defaultVariants: {
		orientation: "vertical",
		opacity: "100",
		background: "default",
	},
});

export type TimelineProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof timelineVariants>;

export const TimelineBar = ({ orientation, opacity, background, className, ...props }: TimelineProps) => {
	return <div className={cn(timelineVariants({ orientation, opacity, background }), className)} {...props} />;
};
