"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva("material-symbols-outlined", {
	variants: {
		variant: {
			default: "",
			rounded: "items-center justify-center",
		},
		color: {
			default: "text-foreground",
			white: "text-white",
			"primary/10": "text-primary/10",
			primary: "text-primary",
			secondary: "text-icon-muted-foreground",
			link: "text-link-icon-foreground",
			inherit: "text-inherit",
			info: "text-surface-muted-foreground-info",
			"surface-muted-foreground-secondary": "surface-muted-foreground-secondary",
		},
		backgroundColor: {
			transparent: "bg-transparent",
			primary: "bg-primary",
			"primary/10": "bg-primary/10",
		},
		rounded: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
		},
	},
	defaultVariants: {
		variant: "default",
		color: "primary",
		backgroundColor: "transparent",
		rounded: "xl",
	},
});

export type IconProps = React.HTMLAttributes<HTMLElement> &
	VariantProps<typeof iconVariants> & {
		icon: string;
		size: string;
		containerSize?: string;
		fill?: boolean;
		asChild?: boolean;
	};

export const Icon = ({
	variant = "default",
	icon,
	size = "20px",
	containerSize,
	color,
	backgroundColor,
	rounded,
	fill = false,
	asChild = false,
	className,
	...props
}: IconProps) => {
	const IconComponent = (
		<span
			aria-hidden
			className={cn(iconVariants({ variant, color }), className)}
			style={{
				fontSize: size,
				fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
			}}
			{...props}
		>
			{icon}
		</span>
	);

	if (variant === "rounded") {
		return (
			<div
				className={cn(iconVariants({ variant, color, backgroundColor, rounded }), className)}
				style={{ width: containerSize, height: containerSize, display: "flex" }}
			>
				{IconComponent}
			</div>
		);
	}

	return asChild ? <Slot>{IconComponent}</Slot> : IconComponent;
};
