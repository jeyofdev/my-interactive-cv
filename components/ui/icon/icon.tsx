"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { iconBackgroundColorVariants, iconColorVariants } from "@/data/variants/color-variants";
import { borderRadiusVariants } from "@/data/variants/box-variants";

const iconVariants = cva("material-symbols-outlined", {
	variants: {
		variant: {
			default: "",
			rounded: "items-center justify-center",
		},
		color: iconColorVariants,
		backgroundColor: iconBackgroundColorVariants,
		borderRadius: borderRadiusVariants,
	},
	defaultVariants: {
		variant: "default",
		color: "primary",
		backgroundColor: "transparent",
		borderRadius: "xl",
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
	borderRadius,
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
				className={cn(iconVariants({ variant, color, backgroundColor, borderRadius }), className)}
				style={{ width: containerSize, height: containerSize, display: "flex" }}
			>
				{IconComponent}
			</div>
		);
	}

	return asChild ? <Slot>{IconComponent}</Slot> : IconComponent;
};
