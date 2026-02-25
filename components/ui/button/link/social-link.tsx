"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const socialLinkVariants = cva(
	"flex items-center justify-center bg-link-social backdrop-blur-xl border border-link-social-border text-link-social-foreground hover:text-[#10b981] hover:border-[#10b981]/50 transition-all transform hover:-translate-y-1",
	{
		variants: {
			variant: {
				icon: "w-12 h-12 rounded-full",
			},
		},
		defaultVariants: {
			variant: "icon",
		},
	},
);

type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
	VariantProps<typeof socialLinkVariants> & {
		asChild?: boolean;
		icon?: React.ReactNode;
	};

export const SocialLink = React.forwardRef<HTMLAnchorElement, SocialLinkProps>(
	({ className, variant, icon, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot : "a";

		return (
			<Component
				ref={ref}
				className={cn(socialLinkVariants({ variant }), className)}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				{icon}
			</Component>
		);
	},
);
