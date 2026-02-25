import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { AlertDescription, AlertTitle } from "./alert-base";
import { borderRadiusVariants } from "@/data/variants/box-variants";
import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";

const alertVariants = cva("flex gap-4 justify-items-start items-center py-4 px-6", {
	variants: {
		variant: {
			default: "",
			danger: "border-2 border-alert-danger-border bg-alert-danger-background text-alert-danger-foreground",
		},
		borderRadius: borderRadiusVariants,
	},

	defaultVariants: {
		variant: "default",
		borderRadius: "xl",
	},
});

type AlertProps = React.ComponentProps<"div"> &
	VariantProps<typeof alertVariants> & {
		asChild?: boolean;
		children?: React.ReactNode;
		title?: string;
		description?: string;
	};

export const Alert = ({ variant, title, description, borderRadius, className }: AlertProps) => {
	return (
		<AlertDescription className={cn("", alertVariants({ variant, borderRadius }), className)}>
			<Icon icon="cancel" size="30px" color="inherit" />

			<div className="flex flex-col gap-2">
				<AlertTitle>
					<Typography variant="small" color="inherit" fontSize="base" letterSpacing="normal">
						{title}
					</Typography>
				</AlertTitle>
				<AlertDescription>
					<Typography variant="small" color="inherit" fontSize="sm" letterSpacing="normal" lineHeight="tight">
						{description}
					</Typography>
				</AlertDescription>
			</div>
		</AlertDescription>
	);
};
