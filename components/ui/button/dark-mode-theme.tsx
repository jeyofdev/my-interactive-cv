"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Icon } from "../icon/icon";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button/button";

const DarkModeThemeVariants = cva(
	"relative inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rotate-0 scale-100 transition-all cursor-pointer",
	{
		variants: {
			variant: {
				default: "",
				raised: "p-2 rounded-lg hover:bg-icon-dark-mode-background",
			},
			size: {
				base: "base",
				sm: "sm",
				md: "md",
				lg: "lg",
				xl: "xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "base",
		},
	},
);

const sizeMap = {
	base: "20px",
	sm: "24px",
	md: "28px",
	lg: "30px",
	xl: "32px",
} as const;

export type DarkModeThemeProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof DarkModeThemeVariants>;

export const DarkModeTheme = ({ className, variant, size, ...props }: DarkModeThemeProps) => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Côté client seulement
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <span className="w-6 h-6 inline-block" />;

	return (
		<Button
			type="button"
			variant="icon-only"
			backgroundColor="primary/2"
			backgroundColorHover="primary"
			color="primary"
			colorHover="white"
			fontSize="base"
			border="none"
			borderRadius="lg"
			icon={theme === "light" ? "dark_mode" : "light_mode"}
			iconSize={size ? sizeMap[size] : sizeMap.base}
			iconClassName="group-hover:scale-115 transition-transform"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={cn(DarkModeThemeVariants({ variant, size }), className)}
			{...props}
		/>
	);
};
