import { Fragment, ReactNode } from "react";

type ListRendererProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => ReactNode;
	keyExtractor?: (item: T, index: string | number) => string | number;
};

export const ListRenderer = <T,>({ items, renderItem, keyExtractor }: ListRendererProps<T>) => {
	return (
		<>
			{items.map((item, index) => (
				<Fragment key={keyExtractor ? keyExtractor(item, index) : index}>{renderItem(item, index)}</Fragment>
			))}
		</>
	);
};
