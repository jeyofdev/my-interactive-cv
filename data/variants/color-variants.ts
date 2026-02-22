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

type BorderColorVariant = Exclude<ColorVariant, "default"> | "transparent";

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
	base: "border-secondary",
};
