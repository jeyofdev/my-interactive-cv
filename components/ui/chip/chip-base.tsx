import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { borderRadiusVariants, borderWithVariants } from "@/data/variants/box-variants";
import { chipBaseBackgroundColorVariants } from "@/data/variants/color-variants";

export const chipBaseVariants = cva(
	"inline-flex items-center gap-2 justify-center  shadow-sm transition-colors cursor-default whitespace-nowrap",
	{
		variants: {
			variant: {
				default: "",
				rounded: "",
				secondary: "",
				destructive: "",
				outline: "",
				ghost: "",
				link: "",
				info: "",
			},
			color: {
				default: "bg-chip text-chip-foreground border-chip-border hover:border-primary",
				white: "text-white",
				"surface-muted-foreground-info": "text-surface-muted-foreground-info",
				primary: "bg-primary/10 text-primary border-primary/20 hover:border-primary",
				success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:border-emerald-500",
				warning: "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:border-amber-500",
				danger: "bg-red-500/10 text-red-600 border-red-500/20 hover:border-red-500",
				react: "bg-react text-react-foreground border-react-border hover:border-react-foreground",
				typescript:
					"bg-typescript text-typescript-foreground border-typescript-border hover:border-typescript-foreground",
				tailwindcss:
					"bg-tailwindcss text-tailwindcss-foreground border-tailwindcss-border hover:border-tailwindcss-foreground",
				nextjs: "bg-nextjs text-nextjs-foreground border-nextjs-border hover:border-nextjs-foreground",
				nodejs: "bg-nodejs text-nodejs-foreground border-nodejs-border hover:border-nodejs-foreground",
				postgresql:
					"bg-postgresql text-postgresql-foreground border-postgresql-border hover:border-postgresql-foreground",
				redis: "bg-redis text-redis-foreground border-redis-border hover:border-redis-foreground",
				graphql: "bg-graphql text-graphql-foreground border-graphql-border hover:border-graphql-foreground",
				docker: "bg-docker text-docker-foreground border-docker-border hover:border-docker-foreground",
				aws: "bg-aws text-aws-foreground border-aws-border hover:border-aws-foreground",
				gitlabci: "bg-gitlab text-gitlab-foreground border-gitlab-border hover:border-gitlab-foreground",
				angular: "bg-angular text-angular-foreground border-angular-border hover:border-angular-foreground",
			},
			backgroundColor: chipBaseBackgroundColorVariants,
			rounded: borderRadiusVariants,
			borderWidth: borderWithVariants,
			size: {
				thin: "px-2 py-1",
				small: "px-3 py-2",
				large: "px-5 py-3",
			},
		},
		defaultVariants: {
			variant: "default",
			color: "default",
			rounded: "sm",
			borderWidth: "base",
			size: "small",
			backgroundColor: "transparent",
		},
	},
);

export type ChipBaseColor = NonNullable<VariantProps<typeof chipBaseVariants>["color"]>;

export const ChipBase = ({
	className,
	variant = "default",
	color,
	rounded,
	borderWidth,
	size,
	backgroundColor,
	asChild = false,
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof chipBaseVariants> & { asChild?: boolean }) => {
	const Component = asChild ? Slot.Root : "span";

	return (
		<Component
			data-slot="badge"
			data-variant={variant}
			data-color={color}
			data-rounded={rounded}
			data-borderwidth={borderWidth}
			data-backgroundcolor={backgroundColor}
			data-size={size}
			className={cn(
				chipBaseVariants({
					variant,
					color,
					rounded,
					borderWidth,
					size,
					backgroundColor,
				}),
				className,
			)}
			{...props}
		/>
	);
};
