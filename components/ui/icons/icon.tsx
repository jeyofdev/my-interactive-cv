import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva("material-symbols-outlined", {
	variants: {
		variant: {
			default: "",
			rounded: "",
		},
		color: {
			default: "text-foreground",
			primary: "text-primary",
			secondary: "text-icon-muted-foreground",
			link: "text-link-icon-foreground",
		},
		backgroundColor: {
			default: "bg-transparent",
			primary: "bg-primary/10",
		},
	},
	defaultVariants: {
		variant: "default",
		color: "primary",
		backgroundColor: "default",
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
				className={cn(
					"flex items-center justify-center rounded-xl",
					backgroundColor === "primary" ? "bg-primary/10" : "bg-transparent",
					className,
				)}
				style={{ width: containerSize, height: containerSize }}
			>
				{IconComponent}
			</div>
		);
	}

	return asChild ? <Slot>{IconComponent}</Slot> : IconComponent;
};
