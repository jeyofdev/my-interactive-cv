"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { DarkModeTheme } from "@/components/ui/button/dark-mode-theme";
import { Tabs } from "@/components/ui/tabs/tabs";
import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";

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

export type HeaderProps = React.HTMLAttributes<HTMLElement> &
	VariantProps<typeof headerVariants> & {
		name: string;
		showDownload?: boolean;
	};

export const Header = ({ className, variant, sticky, name, showDownload, ...props }: HeaderProps) => {
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

					<Link href="/">
						<Typography
							variant="small"
							color="surface-muted-foreground-secondary"
							fontSize="lg"
							fontWeight="bold"
							lineHeight="normal"
							letterSpacing="normal"
							textTransform="capitalize"
						>
							{name}
						</Typography>
					</Link>
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

				{showDownload && (
					<Button
						variant="icon"
						backgroundColor="primary"
						color="white"
						fontSize="sm"
						borderRadius="lg"
						icon="download"
						iconSize="24px"
						className="hidden sm:inline-flex px-6 py-1.5 min-w-auto shadow-lg shadow-primary/25 transition-all active:scale-95"
						onClick={() => {}}
					>
						Download CV
					</Button>
				)}
			</div>
		</header>
	);
};
