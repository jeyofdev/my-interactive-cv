import { Tabs } from "@/components/ui/tabs/tabs";
import { Lang } from "@/types/global-type";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

const langs: Lang[] = ["en", "fr"];

type LangSwitcherTabs = {
	currentLocale: string;
};

export const LangSwitcherTabs: FC<LangSwitcherTabs> = ({ currentLocale }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (locale: Lang) => {
		const newPath = pathname.replace(/^\/(fr|en)/, `/${locale}`);
		router.push(newPath);
	};

	return (
		<Tabs
			items={langs}
			value={currentLocale}
			onChange={(lang) => handleChange(lang as Lang)}
			keyExtractor={(item) => item}
			renderItem={(item) => item}
			tabClassName="uppercase"
		/>
	);
};
