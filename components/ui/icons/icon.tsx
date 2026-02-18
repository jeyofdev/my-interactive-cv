import { cn } from "@/lib/utils";
import { FC } from "react";

type IconProps = {
	icon: string;
	size: string;
	color?: string;
	fill?: boolean;
	className?: string;
};

export const Icon: FC<IconProps> = ({ icon, size = "20px", color, fill, className = "" }) => {
	return (
		<span
			className={cn("material-symbols-outlined", color, className)}
			style={{
				fontSize: size,
				fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
			}}
		>
			{icon}
		</span>
	);
};
