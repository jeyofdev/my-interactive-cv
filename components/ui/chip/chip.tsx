import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChipBase, chipBaseVariants } from "@/components/ui/chip/chip-base";
import { Typography } from "@/components/ui/typography/typography";

const chipVariants = cva("inline-flex items-center", {
	variants: {
		variant: {
			default: "",
			basic: "",
			outline: "",
			rounded: "px-4 py-1.25",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const chipStyleMap = {
	default: {
		color: "white",
		backgroundColor: "primary",
		rounded: "sm",
		borderWidth: "none",
		size: "thin",
		className: "shadow-sm",
	},
	basic: {
		color: "white",
		backgroundColor: "primary",
		rounded: "sm",
		borderWidth: "none",
		size: "thin",
		className: "shadow-sm",
	},
	outline: {
		color: "white",
		backgroundColor: "transparent",
		rounded: "sm",
		borderWidth: "thin",
		size: "thin",
		className: "shadow-sm",
	},
	rounded: {
		color: "primary",
		backgroundColor: "primary/10",
		rounded: "full",
		borderWidth: "none",
		size: "thin",
		className: "shadow-none",
	},
} as const;

const chipTypographyMap = {
	default: {
		variant: "small",
		color: "text-current",
		fontSize: "custom-10",
		fontWeight: "bold",
		lineHeight: "none",
		textTransform: "uppercase",
		letterSpacing: "wide",
	},
	basic: {
		variant: "small",
		color: "text-current",
		fontSize: "custom-10",
		fontWeight: "bold",
		lineHeight: "none",
		textTransform: "uppercase",
		letterSpacing: "wide",
	},
	outline: {
		variant: "small",
		color: "text-current",
		fontSize: "xs",
		fontWeight: "semibold",
		lineHeight: "none",
		textTransform: "normal",
		letterSpacing: "wider",
	},
	rounded: {
		variant: "small",
		color: "text-current",
		fontSize: "xs",
		fontWeight: "bold",
		lineHeight: "normal",
		textTransform: "uppercase",
		letterSpacing: "wider",
	},
} as const;

// extract types chipBase
type BaseColor = NonNullable<VariantProps<typeof chipBaseVariants>["color"]>;
type BaseBackground = NonNullable<VariantProps<typeof chipBaseVariants>["backgroundColor"]>;
type BaseRounded = NonNullable<VariantProps<typeof chipBaseVariants>["rounded"]>;
type BaseBorder = NonNullable<VariantProps<typeof chipBaseVariants>["borderWidth"]>;
type BaseSize = NonNullable<VariantProps<typeof chipBaseVariants>["size"]>;

// Chip Props
export type ChipProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> & {
	children: React.ReactNode;
	variant?: keyof typeof chipStyleMap | string | null;
	icon?: React.ReactNode;
	typographyProps?: Partial<React.ComponentProps<typeof Typography>>;
} & Partial<VariantProps<typeof chipBaseVariants>>;

export const Chip = ({
	variant,
	children,
	className,
	color,
	backgroundColor,
	rounded,
	borderWidth,
	size,
	icon,
	typographyProps,
	...props
}: ChipProps) => {
	const safeVariant = variant && variant in chipStyleMap ? (variant as keyof typeof chipStyleMap) : "default";

	const chipStyle = chipStyleMap[safeVariant];
	const typographyStyle = chipTypographyMap[safeVariant];

	const finalChipProps = {
		color: (color ?? chipStyle.color) as BaseColor,
		backgroundColor: (backgroundColor ?? chipStyle.backgroundColor) as BaseBackground,
		rounded: (rounded ?? chipStyle.rounded) as BaseRounded,
		borderWidth: (borderWidth ?? chipStyle.borderWidth) as BaseBorder,
		size: (size ?? chipStyle.size) as BaseSize,
	};

	return (
		<ChipBase
			variant="rounded"
			rounded={finalChipProps.rounded}
			borderWidth={finalChipProps.borderWidth}
			size={finalChipProps.size}
			color={finalChipProps.color}
			backgroundColor={finalChipProps.backgroundColor}
			className={cn(chipVariants({ variant: safeVariant }), chipStyle.className, className)}
			{...props}
		>
			{icon ?? null}
			<Typography {...typographyStyle} {...typographyProps} asChild>
				<span>{children}</span>
			</Typography>
		</ChipBase>
	);
};
