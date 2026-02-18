import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const profileBlockTitleVariants = cva("flex font-bold uppercase", {
	variants: {
		variant: {
			default: "text-surface-muted-foreground-title tracking-[0.2em]",
			hobby: "text-[10px] text-surface-muted-foreground-title-secondary tracking-widest pb-1.5",
		},
		color: {
			default: "text-surface-muted-foreground-title",
			secondary: "text-foreground",
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
		color: "default",
		fontSize: "xs",
		border: "none",
	},
});

export type ProfileBlockTitleVariant = VariantProps<typeof profileBlockTitleVariants>["variant"];
export type ProfileBlockTitleBorder = VariantProps<typeof profileBlockTitleVariants>["border"];
export type ProfileBlockTitleFontSize = VariantProps<typeof profileBlockTitleVariants>["fontSize"];
export type ProfileBlockTitleColor = VariantProps<typeof profileBlockTitleVariants>["color"];

type ProfileBlockTitleProps = VariantProps<typeof profileBlockTitleVariants> & {
	label: string;
	asChild?: boolean;
	className?: string;
};

export const ProfileBlockTitle = ({
	label,
	variant,
	color,
	fontSize,
	border,
	className,
	asChild = false,
	...props
}: ProfileBlockTitleProps & React.HTMLAttributes<HTMLElement>) => {
	const Component: React.ElementType = asChild ? Slot.Root : "span";

	return (
		<Component className={cn(profileBlockTitleVariants({ variant, color, fontSize, border }), className)} {...props}>
			{label}
		</Component>
	);
};
