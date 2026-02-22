export type SizeVariant = "base" | "sm" | "md" | "lg" | "xl";
export type JustifyContentVariant = "left" | "right" | "center" | "between" | "around" | "evenly";

export const sizeVariants: Record<SizeVariant, string> = {
	base: "base",
	sm: "sm",
	md: "md",
	lg: "lg",
	xl: "xl",
};

export const darkModeSizeMap: Record<SizeVariant, string> = {
	base: "20px",
	sm: "24px",
	md: "28px",
	lg: "30px",
	xl: "32px",
};

export const justifyContentVariants: Record<JustifyContentVariant, string> = {
	left: "justify-start",
	right: "justify-end",
	center: "justify-center",
	between: "justify-between",
	around: "justify-around",
	evenly: "justify-evenly",
};
