"use client";

import { FC, useState } from "react";
import { Typography } from "@/components/ui/typography/typography";
import { ListRenderer } from "@/components/list/list-renderer";
import { Social } from "@/data/resume-data";
import { ToggleTheme } from "@/components/ui/button/toggle-theme";
import { DarkModeTabs } from "@/components/ui/tabs/dark-mode-tabs";

type MainHeaderProps = {};

export const ResumeMainHeader: FC<MainHeaderProps> = ({}) => {
	const [lang, setLang] = useState<"EN" | "FR">("FR"); // Default to English as per request

	return (
		<header className="sticky top-0 z-10 flex items-center justify-end px-8 py-4 backdrop-blur-md border-b border-divider-horizontal-secondary">
			<div className="flex items-center gap-4">
				<ToggleTheme size="sm" />

				<DarkModeTabs setLang={setLang} lang={lang} />
				{/* <div className="flex p-1 rounded-lg">
					<button
						onClick={() => setLang("EN")}
						className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${lang === "EN" ? "bg-white dark:bg-slate-700 shadow-sm" : "hover:text-primary"}`}
					>
						<Typography
							variant="small"
							color={lang === "EN" ? "primary" : "surface-muted-foreground-info"}
							fontSize="xs"
							fontWeight="bold"
							lineHeight="none"
							textTransform="capitalize"
							letterSpacing="normal"
						>
							EN
						</Typography>
					</button>
					<button
						onClick={() => setLang("FR")}
						className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${lang === "FR" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500 dark:text-slate-400 hover:text-primary"}`}
					>
						FR
					</button>
				</div> */}
			</div>
		</header>
	);
};
