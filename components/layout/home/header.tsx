"use client";

import { DarkModeTheme } from "@/components/ui/button/dark-mode-theme";
import { Tabs } from "@/components/ui/tabs/tabs";
import { resumeData } from "@/data/resume-data";
import { useState } from "react";
import { Typography } from "@/components/ui/typography/typography";
import { Icon } from "@/components/ui/icon/icon";

type Lang = "EN" | "FR";

export const Header = () => {
	const [lang, setLang] = useState<"EN" | "FR">("FR");

	const langs: Lang[] = ["EN", "FR"];

	return (
		<header className="bg-destructive sticky top-0 z-10 flex items-center justify-between px-8 py-4 lg:px-20 backdrop-blur-md border-b border-divider-horizontal-secondary">
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
