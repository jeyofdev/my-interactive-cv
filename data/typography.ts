import { BaseTypographyProps } from "@/components/ui/typography/base-typography";

type TypographyVariantConfig = {
	variant: BaseTypographyProps["variant"];
	color?: BaseTypographyProps["color"];
	fontSize?: BaseTypographyProps["fontSize"];
	fontWeight?: BaseTypographyProps["fontWeight"];
	textAlign?: BaseTypographyProps["textAlign"];
	lineHeight?: BaseTypographyProps["lineHeight"];
	letterSpacing?: BaseTypographyProps["letterSpacing"];
	textTransform?: BaseTypographyProps["textTransform"];
	className?: string;
};

const paragraphVariants: Record<string, TypographyVariantConfig> = {
	lead: {
		variant: "lead",
		color: "surface-muted-foreground",
		fontSize: "sm",
		textAlign: "justify",
		lineHeight: "relaxed",
		letterSpacing: "wider",
	},
	muted: {
		variant: "small",
		color: "surface-muted-foreground-info",
		fontSize: "custom-11",
		fontWeight: "thin",
		textAlign: "left",
		lineHeight: "normal",
		letterSpacing: "normal",
	},
	small: {
		variant: "small",
		color: "surface-muted-foreground",
		fontSize: "sm",
		textAlign: "justify",
		lineHeight: "relaxed",
		letterSpacing: "wider",
	},
	list: {
		variant: "small",
		color: "surface-muted-foreground",
		fontSize: "sm",
		textAlign: "left",
		lineHeight: "relaxed",
		letterSpacing: "normal",
	},
};

const headingVariants: Record<string, TypographyVariantConfig> = {
	h1: {
		variant: "h1",
		color: "surface-muted-foreground-secondary",
		fontSize: "2xl",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: "normal",
		letterSpacing: "tight",
		textTransform: "capitalize",
	},
	h2: {
		variant: "h2",
		color: "surface-muted-foreground-secondary",
		fontSize: "3xl",
		fontWeight: "black",
		textAlign: "left",
		lineHeight: "normal",
		letterSpacing: "tight",
		textTransform: "capitalize",
	},
	h3: {
		variant: "h3",
		color: "surface-muted-foreground-secondary",
		fontSize: "xl",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: "normal",
		letterSpacing: "tight",
		textTransform: "capitalize",
	},
	// text-xl font-bold text-slate-900 dark:text-white
	h6: {
		variant: "h6",
		color: "primary",
		fontSize: "sm",
		fontWeight: "semibold",
		textAlign: "justify",
		lineHeight: "relaxed",
		letterSpacing: "wider",
		textTransform: "uppercase",
	},
};

export const typographyVariants = {
	...paragraphVariants,
	...headingVariants,
};
