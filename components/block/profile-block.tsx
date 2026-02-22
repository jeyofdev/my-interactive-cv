import { ReactNode } from "react";
import { ListRenderer } from "@/components/list/list-renderer";
import {
	ProfileBlockTitle,
	type ProfileBlockTitleFontSize,
	type ProfileBlockTitleBorder,
	type ProfileBlockTitleVariant,
	type ProfileBlockTitleColor,
	ProfileBlockTitleBorderColor,
} from "@/components/ui/title/block-title";
import { cn } from "@/lib/utils";

type ProfileBlockProps<T> = {
	variant?: "flex" | "grid";
	category: string;
	list: T[];
	keyExtractor: (item: T) => string | number;
	renderItem: (item: T) => ReactNode;
	variantTitle?: ProfileBlockTitleVariant;
	colorTitle?: ProfileBlockTitleColor;
	fontSizeTitle?: ProfileBlockTitleFontSize;
	borderTitle?: ProfileBlockTitleBorder;
	borderColorTitle?: ProfileBlockTitleBorderColor;
	containerClassName?: string;
	titleClassName?: string;
};

export const ProfileBlock = <T,>({
	variant = "flex",
	variantTitle,
	colorTitle,
	fontSizeTitle,
	borderTitle,
	borderColorTitle,
	titleClassName,
	category,
	list,
	keyExtractor,
	renderItem,
	containerClassName,
}: ProfileBlockProps<T>) => {
	return (
		<div className={cn(containerClassName)}>
			<ProfileBlockTitle
				variant={variantTitle}
				label={category}
				color={colorTitle ?? undefined}
				fontSize={fontSizeTitle}
				border={borderTitle}
				borderColor={borderColorTitle}
				className={titleClassName}
			/>

			<div className={cn(variant === "flex" ? "flex flex-wrap gap-2" : "grid grid-cols-2 gap-x-4 gap-y-6")}>
				<ListRenderer list={list} keyExtractor={keyExtractor} renderItem={renderItem} />
			</div>
		</div>
	);
};
