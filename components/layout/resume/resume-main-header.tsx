"use client";

import { useState } from "react";
import { DarkModeTheme } from "@/components/ui/button/dark-mode-theme";
import { Tabs } from "@/components/ui/tabs/tabs";

type Lang = "EN" | "FR";

export const ResumeMainHeader = () => {
	const [lang, setLang] = useState<"EN" | "FR">("FR");

	const langs: Lang[] = ["EN", "FR"];

	return (
		<header className="sticky top-0 z-10 flex items-center justify-end px-8 py-4 backdrop-blur-md border-b border-divider-horizontal-secondary">
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
