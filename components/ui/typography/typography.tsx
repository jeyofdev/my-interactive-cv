import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { BaseTypography, BaseTypographyProps } from "./base-typography";
import { typographyVariants } from "@/data/typography";

type TypographyProps = Omit<BaseTypographyProps, "asChild"> & {
	children: ReactNode;
	variant: keyof typeof typographyVariants;
	asChild?: boolean;
};

export const Typography = ({
	variant,
	color,
	fontSize,
	fontWeight,
	textAlign,
	lineHeight,
	letterSpacing,
	textTransform,
	className,
	asChild = false,
	...props
}: TypographyProps) => {
	const selected = typographyVariants[variant];

	return (
		<BaseTypography
			asChild={asChild}
			variant={variant ?? selected.variant}
			fontSize={fontSize ?? selected.fontSize}
			fontWeight={fontWeight ?? selected.fontWeight}
			color={color ?? selected.color}
			textAlign={textAlign ?? selected.textAlign}
			lineHeight={lineHeight ?? selected.lineHeight}
			letterSpacing={letterSpacing ?? selected.letterSpacing}
			textTransform={textTransform ?? selected.textTransform}
			className={cn(selected.className, className)}
			{...props}
		>
			{props.children}
		</BaseTypography>
	);
};
