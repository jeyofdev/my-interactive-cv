import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const chipVariants = cva(
	"inline-flex items-center justify-center px-3 py-1 shadow-sm transition-colors cursor-default whitespace-nowrap",
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
			},
			color: {
				default: "bg-chip text-chip-foreground border-chip-border hover:border-primary",
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
			},
			rounded: {
				none: "rounded-none",
				xs: "rounded-xs",
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				xl: "rounded-xl",
				"2xl": "rounded-2xl",
				"3xl": "rounded-3xl",
				"4xl": "rounded-4xl",
			},
			borderWidth: {
				thin: "border",
				medium: "border-2",
				thick: "border-4",
			},
		},
		defaultVariants: {
			variant: "default",
			color: "default",
			rounded: "sm",
			borderWidth: "thin",
		},
	},
);

export type ChipColor = NonNullable<VariantProps<typeof chipVariants>["color"]>;

const Chip = ({
	className,
	variant = "default",
	color,
	rounded,
	borderWidth,
	asChild = false,
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof chipVariants> & { asChild?: boolean }) => {
	const Component = asChild ? Slot.Root : "span";

	return (
		<Component
			data-slot="badge"
			data-variant={variant}
			data-color={color}
			data-rounded={rounded}
			data-borderWidth={borderWidth}
			className={cn(
				chipVariants({
					variant,
					color,
					rounded,
					borderWidth,
				}),
				className,
			)}
			{...props}
		/>
	);
};

export { Chip, chipVariants };
