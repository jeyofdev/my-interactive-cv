import { Fragment, ReactNode } from "react";

type ListRendererProps<T> = {
	list: T[];
	renderItem: (item: T, index: number) => ReactNode;
	keyExtractor?: (item: T, index: string | number) => string | number;
};

export const ListRenderer = <T,>({ list, renderItem, keyExtractor }: ListRendererProps<T>) => {
	return (
		<>
			{list.map((item, index) => (
				<Fragment key={keyExtractor ? keyExtractor(item, index) : index}>{renderItem(item, index)}</Fragment>
			))}
		</>
	);
};
