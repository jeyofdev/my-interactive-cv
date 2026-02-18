import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseTypographyVariants = cva("", {
	variants: {
		variant: {
			p: "text-primary font-semibold text-sm uppercase tracking-wider",
			lead: "text-2xl text-surface-muted-foreground leading-relaxed text-justify", // texte d’introduction, Phrase d’intro, Résumé de section
			muted: "text-sm text-muted-foreground", // l’information secondaire, Moins prioritaire
			small: "text-sm font-medium leading-none", // le micro-texte UI, label, badge...
			code: "rounded bg-muted px-1 py-0.5 font-mono text-sm", // le code inline
		},
		fontSize: {
			xs: "text-xs",
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
		},
		color: {
			default: "text-foreground",
			primary: "text-primary",
			"surface-muted-foreground": "text-surface-muted-foreground",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
			justify: "text-justify",
		},
		lineHeight: {
			none: "leading-none",
			tight: "leading-tight",
			normal: "leading-normal",
			relaxed: "leading-relaxed",
			loose: "leading-loose",
		},
	},
	defaultVariants: {
		variant: "p",
		fontSize: "sm",
		color: "default",
		align: "left",
		lineHeight: "normal",
	},
});

const variantElementMap: Record<
	NonNullable<VariantProps<typeof baseTypographyVariants>["variant"]>,
	React.ElementType
> = {
	p: "p",
	lead: "p",
	muted: "p",
	small: "span",
	code: "code",
};

export type BaseTypographyProps = Omit<React.HTMLAttributes<HTMLElement>, "color"> &
	VariantProps<typeof baseTypographyVariants> & {
		asChild?: boolean;
	};

export const BaseTypography = ({
	asChild,
	variant,
	fontSize,
	color,
	align,
	lineHeight,
	className,
	...props
}: BaseTypographyProps) => {
	const Component = asChild ? Slot : (variantElementMap[variant ?? "p"] ?? "p");

	return (
		<Component
			className={cn(baseTypographyVariants({ variant, fontSize, color, align, lineHeight }), className)}
			{...props}
		/>
	);
};
