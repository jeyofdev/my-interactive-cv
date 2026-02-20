import { ListRenderer } from "@/components/list/list-renderer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography/typography";

type Lang = "EN" | "FR";

type DarkModeTabsProps = {
	setLang: (lang: Lang) => void;
	lang: Lang;
};

export const DarkModeTabs = ({ setLang, lang }: DarkModeTabsProps) => {
	const langs: Lang[] = ["EN", "FR"];

	return (
		<Tabs defaultValue="preview">
			<TabsList className="flex gap-2 bg-tabs-background rounded-lg w-fit ml-auto lg:ml-0 p-1">
				<ListRenderer
					list={langs}
					keyExtractor={(item) => item}
					renderItem={(langItem) => (
						<TabsTrigger
							value={langItem}
							onClick={() => setLang(langItem)}
							className={cn(
								"px-3 py-1.5 text-xs rounded-md shadow-none flex items-center gap-2 transition-all text-slate-500 dark:text-slate-400 font-medium data-[state=active]:bg-white data-[state=active]:dark:bg-slate-700 data-[state=active]:text-primary data-[state=active]:font-bold",
								{
									"bg-tabs-trigger-background text-primary font-bold": lang === langItem,
									"text-tabs-trigger-foreground hover:text-primary font-medium": lang !== langItem,
								},
							)}
						>
							<Typography
								variant="small"
								color={lang === langItem ? "primary" : "surface-muted-foreground-info"}
								fontSize="xs"
								fontWeight="bold"
								lineHeight="none"
								textTransform="capitalize"
								letterSpacing="normal"
							>
								{langItem}
							</Typography>
						</TabsTrigger>
					)}
				/>
			</TabsList>
		</Tabs>
	);
};
