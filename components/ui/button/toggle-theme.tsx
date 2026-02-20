"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icon } from "../icon/icon";

const toggleThemeVariants = cva(
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

export type ToggleThemeProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof toggleThemeVariants>;

export const ToggleTheme = ({ className, variant, size, ...props }: ToggleThemeProps) => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={cn(toggleThemeVariants({ variant, size }), className)}
			{...props}
		>
			<Icon
				icon={theme === "light" ? "dark_mode" : "light_mode"}
				color="info"
				size={size ? sizeMap[size] : sizeMap.base}
				className="group-hover:scale-110 transition-transform"
			/>

			<span className="sr-only">Toggle theme</span>
		</button>
	);
};
