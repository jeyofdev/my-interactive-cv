type BorderWidthVariant = "none" | "base" | "sm" | "md" | "lg" | "xl";
type BorderRadiusVariant = BorderWidthVariant | "2xl" | "3xl" | "4xl" | "full";

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
	base: "rounded-xs",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	"2xl": "rounded-2xl",
	"3xl": "rounded-3xl",
	"4xl": "rounded-4xl",
	full: "rounded-full",
};

export const opacityVariants = {
	"0": "opacity-0",
	"5": "opacity-5",
	"10": "opacity-10",
	"15": "opacity-15",
	"20": "opacity-20",
	"25": "opacity-25",
	"30": "opacity-30",
	"35": "opacity-35",
	"40": "opacity-40",
	"45": "opacity-45",
	"50": "opacity-50",
	"55": "opacity-55",
	"60": "opacity-60",
	"65": "opacity-65",
	"70": "opacity-70",
	"75": "opacity-75",
	"80": "opacity-80",
	"85": "opacity-85",
	"90": "opacity-90",
	"95": "opacity-95",
	"100": "opacity-100",
} as const;
