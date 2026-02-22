import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon/icon";
import { Typography } from "@/components/ui/typography/typography";
import { justifyContentVariants } from "@/data/variants/element-variants";

const sectionTitleVariants = cva("flex items-center", {
	variants: {
		size: {
			default: "gap-4",
		},
		justifyContent: justifyContentVariants,
	},
	defaultVariants: {
		size: "default",
		justifyContent: "left",
	},
});

type SectionTitleProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof sectionTitleVariants> & {
		label: string;
		icon: string;
		iconSize?: string;
		containerIconSize?: string;
	};

export const SectionTitle = ({
	label,
	icon,
	size,
	justifyContent,
	iconSize = "26px",
	containerIconSize = "40px",
	className,
	ref,
	...props
}: SectionTitleProps & { ref?: React.Ref<HTMLDivElement> }) => {
	return (
		<div ref={ref} className={cn(sectionTitleVariants({ size, justifyContent }), className)} {...props}>
			<Icon
				variant="rounded"
				backgroundColor="primary/10"
				icon={icon}
				size={iconSize}
				containerSize={containerIconSize}
			/>

			<Typography variant="h2">{label}</Typography>
		</div>
	);
};
