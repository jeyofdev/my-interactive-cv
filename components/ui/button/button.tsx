import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography/typography";
import {
	fontSizeVariants,
	fontStyleVariants,
	fontWeightVariants,
	letterSpacingVariants,
	lineHeightVariants,
	textTransformVariants,
} from "@/data/typography-variant";
import { Icon } from "@/components/ui/icon/icon";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
	{
		variants: {
			variant: {
				default: "rounded-md",
				outlined: "rounded-lg py-2 px-6 gap-3 bg-transparent border border-primary text-primary",
				rounded: "rounded-full py-2 px-6 gap-3",
				"full-size": "rounded-lg py-3 px-6 w-full gap-2",
				icon: "rounded-lg gap-2 px-8 py-4 w-full min-w-[200px] hover:text-white",
				"icon-only": "rounded-full p-2",
			},
			backgroundColor: {
				transparent: "bg-transparent",
				white: "bg-white",
				primary: "bg-primary",
				info: "bg-info",
				secondary: "bg-secondary",
				success: "bg-success",
				danger: "bg-danger",
				warning: "bg-warning",
				contrast: "bg-contrast",
				surface: "bg-surface",
				destructive: "bg-destructive",
			},
			color: {
				default: "text-foreground",
				primary: "text-primary",
				white: "text-white",
			},
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
			border: {
				none: "border-0",
				base: "border",
				sm: "border-2",
				md: "border-3",
				lg: "border-4",
				xl: "border-5",
			},
			borderColor: {
				transparent: "border-transparent",
				white: "border-white",
				primary: "border-primary",
				info: "border-info",
				secondary: "border-secondary",
				success: "border-success",
				danger: "border-danger",
				warning: "border-warning",
				contrast: "border-contrast",
				surface: "border-surface",
				destructive: "border-destructive",
			},
		},
		compoundVariants: [
			{
				variant: "outlined",
				className: "bg-transparent text-primary",
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
			border: "base",
			borderColor: "primary",
		},
	},
);

type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		children: React.ReactNode;
		icon?: string;
		iconSize?: string;
		typographyClassName?: string;
	};

export const Button = ({
	className,
	variant,
	backgroundColor,
	color = "white",
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
	border,
	borderColor,
	typographyClassName,
	children,
	asChild = false,
	...props
}: ButtonProps) => {
	const Component = asChild ? Slot.Root : "button";

	return (
		<Component
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					backgroundColor,
					color,
					iconPosition,
					fullSize,
					border,
					borderColor,
					className,
				}),
			)}
			{...props}
		>
			{icon ? <Icon variant="default" icon={icon} color={color} size={iconSize as string} /> : null}

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
