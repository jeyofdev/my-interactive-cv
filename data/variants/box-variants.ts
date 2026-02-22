type BorderWidthVariant = "none" | "base" | "sm" | "md" | "lg" | "xl";
type BorderRadiusVariant = BorderWidthVariant | "2xl" | "full";

export const borderWithVariants: Record<BorderWidthVariant, string> = {
	none: "border-0",
	base: "border",
	sm: "border-2",
	md: "border-3",
	lg: "border-4",
	xl: "border-5",
};

export const borderRadiusVariants: Record<BorderRadiusVariant, string> = {
	none: "rounded-none",
	base: "rounded-sm",
	sm: "rounded",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	"2xl": "rounded-2xl",
	full: "rounded-full",
};
