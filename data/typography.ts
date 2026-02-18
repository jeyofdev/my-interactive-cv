import { BaseTypographyProps } from "@/components/ui/typography/base-typography";

type TypographyVariantConfig = {
	variant: BaseTypographyProps["variant"];
	fontSize?: BaseTypographyProps["fontSize"];
	color?: BaseTypographyProps["color"];
	align?: BaseTypographyProps["align"];
	lineHeight?: BaseTypographyProps["lineHeight"];
	className?: string;
};

export const typographyVariants: Record<string, TypographyVariantConfig> = {
	lead: {
		variant: "lead",
		fontSize: "sm",
		color: "surface-muted-foreground",
		align: "justify",
		lineHeight: "relaxed",
	},
};
