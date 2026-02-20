import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseTypographyVariants = cva("", {
	variants: {
		variant: {
			p: "text-primary font-semibold text-sm uppercase tracking-wider",
			lead: "text-2xl text-surface-muted-foreground leading-relaxed text-justify",
			muted: "text-sm text-muted-foreground",
			small: "text-sm font-medium leading-none",
			code: "rounded bg-muted px-1 py-0.5 font-mono text-sm",
			h1: "",
			h2: "",
			h3: "",
			h4: "",
			h6: "",
			list: "",
		},
		color: {
			default: "text-foreground",
			primary: "text-primary",
			"surface-muted-foreground": "text-surface-muted-foreground",
			"surface-muted-foreground-secondary": "text-surface-muted-foreground-secondary",
			"surface-muted-foreground-info": "text-surface-muted-foreground-info",
			"surface-muted-foreground-info-title": "text-surface-muted-foreground-info-title",
			"text-current": "text-current",
			"accordion-muted-foreground-title": "text-accordion-muted-foreground-title",
			"surface-muted-foreground-title": "text-surface-muted-foreground-title",
			"link-surface-foreground": "text-link-surface-foreground",
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
			"5xl": "text-5xl",
			"6xl": "text-6xl",
			"custom-10": "text-[10px]",
			"custom-11": "text-[11px]",
		},
		fontWeight: {
			thin: "font-thin",
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
			black: "font-black",
		},
		fontStyle: {
			normal: "not-italic",
			italic: "italic",
		},
		textAlign: {
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
		},
		letterSpacing: {
			tighter: "tracking-tighter",
			tight: "tracking-tight",
			normal: "tracking-normal",
			wide: "tracking-wide",
			wider: "tracking-wider",
			widest: "tracking-widest",
			"custom-0.03em": "tracking-[-0.03em]",
		},
		textTransform: {
			uppercase: "uppercase",
			lowercase: "lowercase",
			capitalize: "capitalize",
			normal: "normal-case",
		},
	},
	defaultVariants: {
		variant: "p",
		color: "default",
		fontSize: "sm",
		fontWeight: "normal",
		fontStyle: "normal",
		textAlign: "left",
		lineHeight: "normal",
		letterSpacing: "normal",
		textTransform: "normal",
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
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h6: "h6",
	list: "li",
};

export type BaseTypographyProps = Omit<React.HTMLAttributes<HTMLElement>, "color"> &
	VariantProps<typeof baseTypographyVariants> & {
		asChild?: boolean;
	};

export const BaseTypography = ({
	asChild,
	variant,
	color,
	fontSize,
	fontWeight,
	fontStyle,
	textAlign,
	lineHeight,
	letterSpacing,
	textTransform,
	className,
	...props
}: BaseTypographyProps) => {
	const Component = asChild ? Slot : (variantElementMap[variant ?? "p"] ?? "p");

	return (
		<Component
			className={cn(
				baseTypographyVariants({
					variant,
					color,
					fontSize,
					fontWeight,
					fontStyle,
					textAlign,
					lineHeight,
					letterSpacing,
					textTransform,
				}),
				className,
			)}
			{...props}
		/>
	);
};
