import { IconColorVariant } from "@/data/variants/color-variants";

// Mapping of colors to CSS variables
const colorToCssVar: Record<string, string> = {
	primary: "var(--primary)",
	secondary: "var(--secondary)",
	info: "var(--info)",
	success: "var(--success)",
	danger: "var(--danger)",
	warning: "var(--warning)",
	contrast: "var(--contrast)",
	surface: "var(--surface)",
	destructive: "var(--destructive)",
	white: "255 255 255",
	foreground: "var(--foreground)",
	transparent: "transparent",
	default: "var(--foreground)",
	link: "var(--link)",
	inherit: "inherit",
};

/**
 * Convert a color with opacity to CSS style
 *
 * @param colorValue
 * @returns
 */
const getColorWithOpacity = (colorValue?: string | null): string | null => {
	if (!colorValue || !colorValue.includes("/")) return null;

	const [color, opacity] = colorValue.split("/");
	const cssVar = colorToCssVar[color];

	if (!cssVar) return null;

	if (cssVar === "transparent") {
		return "transparent";
	}

	const opacityValue = parseInt(opacity) / 100;

	// CSS variable
	if (cssVar.startsWith("var(")) {
		return `rgb(from ${cssVar} r g b / ${opacityValue})`;
	}

	// Already RGB values
	return `rgb(${cssVar} / ${opacityValue})`;
};

/**
 * Generate inline styles
 *
 * @param backgroundColor
 * @param color
 * @param borderColor
 * @returns
 */
export const getCustomStyles = (
	backgroundColor?: string | null,
	color?: string | null,
	borderColor?: string | null,
): React.CSSProperties => {
	const styles: React.CSSProperties = {};

	const bgColor = getColorWithOpacity(backgroundColor);
	if (bgColor) {
		styles.backgroundColor = bgColor;
	}

	const textColor = getColorWithOpacity(color);
	if (textColor) {
		styles.color = textColor;
	}

	const bColor = getColorWithOpacity(borderColor);
	if (bColor) {
		styles.borderColor = bColor;
	}

	return styles;
};

/**
 * Extract a valid color for the icon
 *
 * @param color
 * @returns
 */
export const getIconColor = (color?: string | null): IconColorVariant => {
	if (!color) return "white";

	// If the color contains opacity, extract just the color
	const baseColor = color.includes("/") ? color.split("/")[0] : color;

	const validColors: readonly string[] = [
		"default",
		"white",
		"primary",
		"info",
		"secondary",
		"link",
		"inherit",
		"primary/10",
		"surface-muted-foreground-secondary",
	] as const;

	if (validColors.includes(baseColor)) {
		return baseColor as IconColorVariant;
	}

	return "white";
};
