"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { DarkModeTheme } from "@/components/ui/button/dark-mode-theme";
import { Tabs } from "@/components/ui/tabs/tabs";
import { resumeData } from "@/data/resume-data";
import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";

type Lang = "EN" | "FR";

const headerVariants = cva("", {
	variants: {
		variant: {
			default:
				"bg-destructive flex items-center justify-between px-8 py-4 lg:px-20 backdrop-blur-md border-b border-divider-horizontal-secondary",
			resume: "flex items-center justify-end px-8 py-4 backdrop-blur-md border-b border-divider-horizontal-secondary",
		},
		sticky: {
			true: "sticky z-10 top-0",
			false: "relative",
		},
	},
	defaultVariants: {
		variant: "default",
		sticky: true,
	},
});

export type HeaderProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof headerVariants>;

export const Header = ({ className, variant, sticky, ...props }: HeaderProps) => {
	const [lang, setLang] = React.useState<Lang>("FR");
	const langs: Lang[] = ["EN", "FR"];

	return (
		<header className={cn(headerVariants({ variant, sticky }), className)} {...props}>
			{variant === "default" && (
				<div className="flex items-center gap-4">
					<Icon
						variant="rounded"
						backgroundColor="primary"
						color="white"
						icon="account_circle"
						size="24px"
						borderRadius="lg"
						containerSize="40px"
					/>

					<Typography variant="h3" fontSize="lg" lineHeight="normal">
						{resumeData.name}
					</Typography>
				</div>
			)}

			<div className="flex items-center gap-4">
				<DarkModeTheme size="sm" />

				<Tabs
					items={langs}
					value={lang}
					onChange={(v) => setLang(v as Lang)}
					keyExtractor={(item) => item}
					renderItem={(item) => item}
				/>
			</div>
		</header>
	);
};
