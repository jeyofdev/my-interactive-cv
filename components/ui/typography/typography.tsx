import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { BaseTypography, BaseTypographyProps } from "./base-typography";
import { typographyVariants } from "@/data/typography";

type TypographyProps = Omit<BaseTypographyProps, "asChild"> & {
	children: ReactNode;
	variant: keyof typeof typographyVariants;
};

export const Typography = ({ variant, fontSize, color, align, lineHeight, className, ...props }: TypographyProps) => {
	const selected = typographyVariants[variant];

	return (
		<BaseTypography
			variant={variant ?? selected.variant}
			fontSize={fontSize ?? selected.fontSize}
			color={color ?? selected.color}
			align={align ?? selected.align}
			lineHeight={lineHeight ?? selected.lineHeight}
			className={cn(selected.className, className)}
			{...props}
		>
			{props.children}
		</BaseTypography>
	);
};
