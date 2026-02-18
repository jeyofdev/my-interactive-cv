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
