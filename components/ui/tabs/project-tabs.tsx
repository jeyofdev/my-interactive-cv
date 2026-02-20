import { ListRenderer } from "@/components/list/list-renderer";
import { ProjectView } from "@/components/page/resume";
import { Icon } from "@/components/ui/icon/icon";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import { cn } from "@/lib/utils";

type ProjectTabsProps = {
	view: ProjectView;
	setView: (view: ProjectView) => void;
};

export const ProjectTabs = ({ view, setView }: ProjectTabsProps) => {
	const tabItems = [
		{
			id: 1,
			value: "grid",
			label: "Card",
			icon: "grid_view",
		},
		{
			id: 2,
			value: "list",
			label: "List",
			icon: "list",
		},
	];

	return (
		<Tabs defaultValue="preview">
			<TabsList className="flex gap-2 bg-tabs-background rounded-lg w-fit ml-auto lg:ml-0  p-1 mb-6">
				<ListRenderer
					list={tabItems}
					keyExtractor={(item) => item.id}
					renderItem={(tabItem) => (
						<TabsTrigger
							value={tabItem.value}
							onClick={() => setView(tabItem.value as ProjectView)}
							className={cn(
								"px-3 py-1.5 text-xs rounded-md shadow-none flex items-center gap-2 transition-all text-slate-500 dark:text-slate-400 font-medium data-[state=active]:bg-white data-[state=active]:dark:bg-slate-700 data-[state=active]:text-primary data-[state=active]:font-bold",
								{
									"bg-tabs-trigger-background text-primary font-bold": view === tabItem.value,
									"text-tabs-trigger-foreground hover:text-primary font-medium": view !== tabItem.value,
								},
							)}
						>
							<Icon variant="default" icon={tabItem.icon} color="inherit" size="24px" />
							{tabItem.label}
						</TabsTrigger>
					)}
				/>
			</TabsList>
		</Tabs>
	);
};
