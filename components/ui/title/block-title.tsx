import { cn } from "@/lib/utils";
import { FC } from "react";

export type VariantProfileBlockTitle = "default" | "hobby";

type ProfileBlockTitleProps = {
	label: string;
	variant?: VariantProfileBlockTitle;
	margin?: string;
};

export const ProfileBlockTitle: FC<ProfileBlockTitleProps> = ({ label, variant = "default", margin = "m-0 mb-4" }) => {
	return (
		<>
			{variant === "default" && (
				<h3 className={cn("text-xs font-bold text-surface-muted-foreground-title uppercase tracking-[0.2em]", margin)}>
					{label}
				</h3>
			)}

			{variant === "hobby" && (
				<h3
					className={cn(
						"text-[10px] font-bold text-surface-muted-foreground-title-secondary uppercase tracking-widest border-b border-border-separator pb-1.5",
						margin,
					)}
				>
					{label}
				</h3>
			)}
		</>
	);
};
