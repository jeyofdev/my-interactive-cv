export const fontSizeVariants = {
	xs: "text-xs",
	sm: "text-sm",
	base: "text-base",
	lg: "text-lg",
	xl: "text-xl",
	"2xl": "text-2xl",
	"3xl": "text-3xl",
	"4xl": "text-4xl",
	"5xl": "text-5xl",
	"6xl": "text-6xl",
	"custom-10": "text-[10px]",
	"custom-11": "text-[11px]",
} as const;

export const fontWeightVariants = {
	thin: "font-thin",
	light: "font-light",
	normal: "font-normal",
	medium: "font-medium",
	semibold: "font-semibold",
	bold: "font-bold",
	extrabold: "font-extrabold",
	black: "font-black",
} as const;

export const fontStyleVariants = {
	normal: "not-italic",
	italic: "italic",
} as const;

export const textAlignVariants = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
	justify: "text-justify",
} as const;

export const lineHeightVariants = {
	none: "leading-none",
	tight: "leading-tight",
	normal: "leading-normal",
	relaxed: "leading-relaxed",
} as const;

export const letterSpacingVariants = {
	tighter: "tracking-tighter",
	tight: "tracking-tight",
	normal: "tracking-normal",
	wide: "tracking-wide",
	wider: "tracking-wider",
	widest: "tracking-widest",
	"custom-0.03em": "tracking-[-0.03em]",
} as const;

export const textTransformVariants = {
	uppercase: "uppercase",
	lowercase: "lowercase",
	capitalize: "capitalize",
	normal: "normal-case",
} as const;
