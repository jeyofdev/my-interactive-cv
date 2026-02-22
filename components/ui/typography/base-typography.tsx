import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
	fontSizeVariants,
	fontStyleVariants,
	fontWeightVariants,
	letterSpacingVariants,
	lineHeightVariants,
	textAlignVariants,
	textTransformVariants,
} from "@/data/variants/typography-variant";

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
			white: "text-white",
			"surface-muted-foreground": "text-surface-muted-foreground",
			"surface-muted-foreground-secondary": "text-surface-muted-foreground-secondary",
			"surface-muted-foreground-info": "text-surface-muted-foreground-info",
			"surface-muted-foreground-info-title": "text-surface-muted-foreground-info-title",
			"text-current": "text-current",
			"accordion-muted-foreground-title": "text-accordion-muted-foreground-title",
			"surface-muted-foreground-title": "text-surface-muted-foreground-title",
			"link-surface-foreground": "text-link-surface-foreground",
		},
		fontSize: fontSizeVariants,
		fontWeight: fontWeightVariants,
		fontStyle: fontStyleVariants,
		lineHeight: lineHeightVariants,
		letterSpacing: letterSpacingVariants,
		textTransform: textTransformVariants,
		textAlign: textAlignVariants,
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
