"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/divider/separator";

const dividerVariants = cva("", {
	variants: {
		variant: {
			vertical: "mx-2 data-[orientation=vertical]:w-0.5 bg-divider-vertical",
			horizontal: "w-full h-px bg-divider-horizontal",
		},
		size: {
			default: "",
			standalone: "data-[orientation=vertical]:h-4",
		},
	},
	defaultVariants: {
		variant: "vertical",
	},
});

type DividerProps = VariantProps<typeof dividerVariants> & {
	children?: React.ReactNode;
	orientation?: "vertical" | "horizontal";
	className?: string;
	separatorClassName?: string;
};

export const Divider: React.FC<DividerProps> = ({
	children,
	variant = "vertical",

	className,
	separatorClassName,
}) => {
	const items = React.Children.toArray(children);

	const orientation: "vertical" | "horizontal" = variant === "horizontal" ? "horizontal" : "vertical";

	if (items.length === 0) {
		return (
			<span className={cn("flex", className)}>
				<Separator
					orientation={orientation}
					className={cn(dividerVariants({ variant, size: "standalone" }), separatorClassName)}
				/>
			</span>
		);
	}

	return (
		<div className={cn("flex items-center", orientation === "vertical" ? "flex-row" : "flex-col", className)}>
			{items.map((child, index) => (
				<React.Fragment key={index}>
					<div>{child}</div>
					{index < items.length - 1 && (
						<Separator orientation={orientation} className={cn(dividerVariants({ variant }), separatorClassName)} />
					)}
				</React.Fragment>
			))}
		</div>
	);
};
