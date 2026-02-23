"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import NextLink from "next/link";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography/typography";
import {
	fontSizeVariants,
	fontStyleVariants,
	fontWeightVariants,
	letterSpacingVariants,
	lineHeightVariants,
	textTransformVariants,
} from "@/data/variants/typography-variant";
import { Icon } from "@/components/ui/icon/icon";
import { getCustomStyles, getIconColor } from "@/lib/color-utils";
import { borderColorVariants, colorVariants } from "@/data/variants/color-variants";
import { borderRadiusVariants, borderWithVariants } from "@/data/variants/box-variants";

const linkVariants = cva(
	"group inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
	{
		variants: {
			variant: {
				default: "py-2 px-6 gap-2",
				outlined: "",
				rounded: "rounded-full py-2 px-6 gap-3",
				"full-size": "rounded-lg py-3 px-6 w-full gap-2",
				icon: "rounded-lg gap-2 px-8 py-4 w-full min-w-[200px]",
				"icon-only": "rounded-full p-2",
			},
			backgroundColor: {
				transparent: "bg-transparent",
				white: "bg-white/80 hover:bg-white",
				primary: "bg-primary/80 hover:bg-primary",
				info: "bg-info/80 hover:bg-info",
				secondary: "bg-secondary/80 hover:bg-secondary",
				success: "bg-success/80 hover:bg-success",
				danger: "bg-danger/80 hover:bg-danger",
				warning: "bg-warning/80 hover:bg-warning",
				contrast: "bg-contrast/80 hover:bg-contrast",
				surface: "bg-surface/80 hover:bg-surface",
				destructive: "bg-destructive/80 hover:bg-destructive",
				base: "bg-secondary/2 hover:bg-white",
			},
			color: colorVariants,
			fontSize: fontSizeVariants,
			fontWeight: fontWeightVariants,
			fontStyle: fontStyleVariants,
			lineHeight: lineHeightVariants,
			letterSpacing: letterSpacingVariants,
			textTransform: textTransformVariants,
			iconPosition: {
				start: "flex-row",
				end: "flex-row-reverse",
			},
			fullSize: {
				true: "w-full",
				false: "",
			},
			borderRadius: borderRadiusVariants,
			border: borderWithVariants,
			borderColor: borderColorVariants,
		},
		compoundVariants: [
			{
				variant: "outlined",
				className: "bg-transparent text-primary rounded-lg py-2 px-6 gap-3 bg-transparent border border-primary",
			},
		],
		defaultVariants: {
			variant: "default",
			backgroundColor: "primary",
			color: "white",
			fontSize: "sm",
			fontWeight: "bold",
			fontStyle: "normal",
			lineHeight: "none",
			letterSpacing: "wide",
			textTransform: "capitalize",
			iconPosition: "start",
			fullSize: false,
			borderRadius: "md",
			border: "none",
			borderColor: "primary",
		},
	},
);

type LinkProps = React.ComponentProps<"a"> &
	Omit<VariantProps<typeof linkVariants>, "backgroundColor" | "color" | "borderColor"> & {
		asChild?: boolean;
		children?: React.ReactNode;
		icon?: string;
		iconSize?: string;
		typographyClassName?: string;
		iconClassName?: string;
		backgroundColor?: VariantProps<typeof linkVariants>["backgroundColor"] | string;
		backgroundColorHover?: string;
		color?: VariantProps<typeof linkVariants>["color"] | string;
		colorHover?: string;
		borderColor?: VariantProps<typeof linkVariants>["borderColor"] | string;
		borderColorHover?: string;
		href: React.ComponentProps<typeof NextLink>["href"];
	};

export const Link = ({
	className,
	variant,
	backgroundColor,
	backgroundColorHover,
	color = "white",
	colorHover,
	fontSize = "sm",
	fontWeight = "bold",
	fontStyle = "normal",
	lineHeight = "none",
	letterSpacing = "wide",
	textTransform = "capitalize",
	icon,
	iconPosition,
	iconSize = "24px",
	fullSize,
	borderRadius,
	border,
	borderColor,
	borderColorHover,
	typographyClassName,
	iconClassName,
	href,
	children,
	onMouseEnter,
	onMouseLeave,
	asChild = false,
	style,
	...props
}: LinkProps) => {
	const Component = asChild ? Slot.Root : "a";
	const [isHovered, setIsHovered] = React.useState(false);

	// Determine current colors based on hover state
	const currentBgColor = isHovered && backgroundColorHover ? backgroundColorHover : backgroundColor;
	const currentColor = isHovered && colorHover ? colorHover : color;
	const currentBorderColor = isHovered && borderColorHover ? borderColorHover : borderColor;

	// Generate custom styles for values with opacity
	const customStyles = getCustomStyles(currentBgColor, currentColor, currentBorderColor);

	// Determine whether to use CVA variants or not
	const hasCustomBg = currentBgColor?.includes("/");
	const hasCustomColor = currentColor?.includes("/");
	const hasCustomBorder = currentBorderColor?.includes("/");

	const variantBackgroundColor = hasCustomBg
		? undefined
		: (currentBgColor as VariantProps<typeof linkVariants>["backgroundColor"]);

	const variantColor = hasCustomColor ? undefined : (currentColor as VariantProps<typeof linkVariants>["color"]);

	const variantBorderColor = hasCustomBorder
		? undefined
		: (currentBorderColor as VariantProps<typeof linkVariants>["borderColor"]);

	return (
		<Component
			data-slot="a"
			href={href}
			className={cn(
				linkVariants({
					variant,
					backgroundColor: variantBackgroundColor,
					color: variantColor,
					iconPosition,
					fullSize,
					borderRadius,
					border,
					borderColor: variantBorderColor,
				}),
				className,
			)}
			style={{ ...customStyles, ...style }}
			{...props}
		>
			{icon ? (
				<Icon
					variant="default"
					icon={icon}
					color={getIconColor(currentColor)}
					size={iconSize as string}
					className={cn(iconClassName)}
				/>
			) : null}

			{variant !== "icon-only" && (
				<Typography
					variant="small"
					fontSize={fontSize}
					fontWeight={fontWeight}
					fontStyle={fontStyle}
					lineHeight={lineHeight}
					letterSpacing={letterSpacing}
					textTransform={textTransform}
					className={cn("text-inherit", typographyClassName)}
				>
					{children}
				</Typography>
			)}
		</Component>
	);
};
