export type IconColorVariant =
	| "default"
	| "white"
	| "primary/10"
	| "primary"
	| "secondary"
	| "link"
	| "inherit"
	| "info"
	| "surface-muted-foreground-secondary";

type ColorVariant =
	| "default"
	| "white"
	| "primary"
	| "secondary"
	| "info"
	| "success"
	| "danger"
	| "warning"
	| "contrast"
	| "surface"
	| "destructive"
	| "base";

type BorderColorVariant = Exclude<ColorVariant, "default" | "base"> | "transparent";
type BlockTitleBorderColorVariant = Exclude<BorderColorVariant, "default" | "base"> | "separator";
type BlockTitleColorVariant = ColorVariant;
type TypographyColorVariant =
	| ColorVariant
	| "surface-muted-foreground"
	| "surface-muted-foreground-secondary"
	| "surface-muted-foreground-info"
	| "surface-muted-foreground-info-title"
	| "text-current"
	| "accordion-muted-foreground-title"
	| "surface-muted-foreground-title"
	| "link-surface-foreground";
type TimelineColorVariant = Exclude<ColorVariant, "base">;
type TimelineBackgroundColorVariant = Exclude<ColorVariant, "base"> | "transparent";
type IconBackgroundColorVariant = ColorVariant | "primary/10" | "transparent";
type ChipBaseBackgroundColorVariant = ColorVariant | "primary/10" | "transparent" | "secondary";

export const colorVariants: Record<ColorVariant, string> = {
	default: "text-foreground",
	white: "text-white",
	primary: "text-primary",
	secondary: "text-secondary",
	info: "text-info",
	success: "text-success",
	danger: "text-danger",
	warning: "text-warning",
	contrast: "text-contrast",
	surface: "text-surface",
	destructive: "text-destructive",
	base: "text-secondary",
};

export const backgroundColorVariants: Record<ColorVariant, string> = {
	default: "bg-foreground",
	white: "bg-white",
	primary: "bg-primary",
	secondary: "bg-secondary",
	info: "bg-info",
	success: "bg-success",
	danger: "bg-danger",
	warning: "bg-warning",
	contrast: "bg-contrast",
	surface: "bg-surface",
	destructive: "bg-destructive",
	base: "bg-secondary",
};

export const iconColorVariants: Record<IconColorVariant, string> = {
	default: "text-foreground",
	white: "text-white",
	"primary/10": "text-primary/10",
	primary: "text-primary",
	secondary: "text-icon-muted-foreground",
	link: "text-link-icon-foreground",
	inherit: "text-inherit",
	info: "text-surface-muted-foreground-info",
	"surface-muted-foreground-secondary": "surface-muted-foreground-secondary",
};

export const iconBackgroundColorVariants: Record<IconBackgroundColorVariant, string> = {
	...backgroundColorVariants,
	transparent: "bg-transparent",
	"primary/10": "bg-primary/10",
};

export const chipBaseBackgroundColorVariants: Record<ChipBaseBackgroundColorVariant, string> = {
	...backgroundColorVariants,
	transparent: "bg-transparent",
	secondary: "bg-chip-secondary",
	"primary/10": "bg-primary/10",
};

export const borderColorVariants: Record<BorderColorVariant, string> = {
	transparent: "border-transparent",
	white: "border-white",
	primary: "border-primary",
	info: "border-info",
	secondary: "border-secondary",
	success: "border-success",
	danger: "border-danger",
	warning: "border-warning",
	contrast: "border-contrast",
	surface: "border-surface",
	destructive: "border-destructive",
};

export const blockTitleColorVariants: Record<BlockTitleColorVariant, string> = {
	...colorVariants,
	default: "text-surface-muted-foreground-title",
	secondary: "text-foreground",
};

export const typographyColorVariants: Record<TypographyColorVariant, string> = {
	...colorVariants,
	default: "text-foreground",
	"surface-muted-foreground": "text-surface-muted-foreground",
	"surface-muted-foreground-secondary": "text-surface-muted-foreground-secondary",
	"surface-muted-foreground-info": "text-surface-muted-foreground-info",
	"surface-muted-foreground-info-title": "text-surface-muted-foreground-info-title",
	"text-current": "text-current",
	"accordion-muted-foreground-title": "text-accordion-muted-foreground-title",
	"surface-muted-foreground-title": "text-surface-muted-foreground-title",
	"link-surface-foreground": "text-link-surface-foreground",
};

export const blockTitleBorderColorVariants: Record<BlockTitleBorderColorVariant, string> = {
	...borderColorVariants,
	separator: "border-border-separator",
};

export const timelineColorVariants: Record<TimelineColorVariant, string> = {
	...borderColorVariants,
	default: "border-timeline-border",
};

export const timelineBackgroundColorVariants: Record<TimelineBackgroundColorVariant, string> = {
	...backgroundColorVariants,
	default: "bg-timeline-background",
	transparent: "bg-transparent",
};
