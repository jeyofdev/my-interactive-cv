import { FC } from "react";

type IconProps = {
	icon: string;
	size: string;
	color?: string;
	animate?: string;
	fill?: boolean;
	className?: string;
};

export const Icon: FC<IconProps> = ({ icon, size = "20px", color, fill, className = "" }) => {
	return (
		<span
			className={`material-symbols-outlined ${size} ${color} ${className}`}
			style={{
				fontSize: size,
				fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
			}}
		>
			{icon}
		</span>
	);
};

<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>;
