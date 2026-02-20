import { cn } from "@/lib/utils";
import { FC } from "react";

type DotIconProps = {
	className?: string;
	backgroundColor?: string;
	width?: string;
	height?: string;
	opacity?: string;
};

export const DotIcon: FC<DotIconProps> = ({
	backgroundColor = "bg-primary",
	width = "w-2",
	height = "h-2",
	opacity = "opacity-75",
}) => {
	return (
		<span className={cn("relative flex", width, height, opacity)}>
			<span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full", backgroundColor, opacity)} />
			<span className={cn("relative inline-flex rounded-full ", backgroundColor, width, height)} />
		</span>
	);
};
