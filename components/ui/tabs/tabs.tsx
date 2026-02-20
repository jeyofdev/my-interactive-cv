"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as BaseTabs, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs-base";
import { cn } from "@/lib/utils";

const tabTriggerVariants = cva(
	"px-3 py-1.5 text-xs rounded-md shadow-none flex items-center gap-2 transition-all text-slate-500 dark:text-slate-400 font-medium data-[state=active]:bg-white data-[state=active]:dark:bg-slate-700 data-[state=active]:text-primary data-[state=active]:dark:text-primary data-[state=active]:font-bold",
	{
		variants: {
			intent: {
				default: "text-tabs-trigger-foreground hover:text-primary font-medium",
				active: "bg-tabs-trigger-background text-primary font-bold",
			},
		},
		defaultVariants: {
			intent: "default",
		},
	},
);

type TabsProps<T> = {
	items: T[];
	value: string;
	onChange: (value: string) => void;
	keyExtractor: (item: T) => string | number;
	renderItem: (item: T, isActive: boolean) => React.ReactNode;
	className?: string;
};

export const Tabs = <T,>({ items, value, onChange, keyExtractor, renderItem, className }: TabsProps<T>) => {
	return (
		<BaseTabs value={value}>
			<TabsList className={cn("flex gap-2 bg-tabs-background rounded-lg w-fit p-1", className)}>
				{items.map((item) => {
					const itemValue = keyExtractor(item).toString();
					const isActive = itemValue === value;

					return (
						<TabsTrigger
							key={itemValue}
							value={itemValue}
							onClick={() => onChange(itemValue)}
							className={cn(tabTriggerVariants({ intent: isActive ? "active" : "default" }))}
						>
							{renderItem(item, isActive)}
						</TabsTrigger>
					);
				})}
			</TabsList>
		</BaseTabs>
	);
};
