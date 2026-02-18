import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const profileBlockTitleVariants = cva("font-bold uppercase", {
	variants: {
		variant: {
			default: "text-surface-muted-foreground-title tracking-[0.2em]",
			hobby: "text-[10px] text-surface-muted-foreground-title-secondary tracking-widest pb-1.5",
		},
		fontSize: {
			"10": "text-[10px]",
			xs: "text-xs",
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
		},
		border: {
			none: "border-none",
			thin: "border-b border-border-separator",
		},
	},
	defaultVariants: {
		variant: "default",
		fontSize: "xs",
		border: "none",
	},
});

export type ProfileBlockTitleVariant = VariantProps<typeof profileBlockTitleVariants>["variant"];
export type ProfileBlockTitleBorder = VariantProps<typeof profileBlockTitleVariants>["border"];
export type ProfileBlockTitleFontSize = VariantProps<typeof profileBlockTitleVariants>["fontSize"];

type ProfileBlockTitleProps = VariantProps<typeof profileBlockTitleVariants> & {
	label: string;
	margin?: string;
	asChild?: boolean;
	className?: string;
};

export const ProfileBlockTitle = ({
	label,
	variant,
	margin = "m-0 mb-4",
	fontSize,
	border,
	className,
	asChild = false,
	...props
}: ProfileBlockTitleProps & React.HTMLAttributes<HTMLElement>) => {
	const Comp: React.ElementType = asChild ? Slot.Root : "h3";

	return (
		<Comp className={cn(profileBlockTitleVariants({ variant, fontSize, border }), margin, className)} {...props}>
			{label}
		</Comp>
	);
};
