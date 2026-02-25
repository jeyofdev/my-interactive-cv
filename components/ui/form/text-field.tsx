"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Field, FieldLabel } from "@/components/ui/form/base/field";
import { Input } from "@/components/ui/form/base/input";

const textFieldVariants = cva("flex flex-col gap-0", {
	variants: {
		variant: {
			default: "",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const labelVariants = cva("", {
	variants: {
		variant: {
			default: "items-start text-input-foreground text-sm font-semibold transition-colors mb-1",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const inputVariants = cva("", {
	variants: {
		variant: {
			default:
				"w-full border rounded-xl px-4 py-4 transition-all outline-none bg-input-background border-input-border text-surface-reverse placeholder:text-placeholder-foreground focus:border-input-focus-border focus:shadow-input-focus-shadow",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type TextFieldProps = Omit<React.ComponentProps<"input">, "size"> &
	VariantProps<typeof textFieldVariants> & {
		id: string;
		label?: string;
		ref?: React.Ref<HTMLInputElement>;
	};

export const TextField = ({ label, variant, className, id, ref, ...props }: TextFieldProps) => {
	return (
		<Field className={cn("space-y-2 group", textFieldVariants({ variant }), className)}>
			{label && (
				<FieldLabel htmlFor={id} className={cn(labelVariants({ variant }))}>
					{label}
				</FieldLabel>
			)}

			<Input id={id} ref={ref} className={cn(inputVariants({ variant }))} {...props} />
		</Field>
	);
};
