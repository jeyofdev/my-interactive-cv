import { FC } from "react";
import { Icon } from "../ui/icon/icon";
import { Typography } from "../ui/typography/typography";

type ConfirmFormSuccessProps = {
	title: string;
	content: string;
};

export const ConfirmFormSuccess: FC<ConfirmFormSuccessProps> = ({ title, content }) => {
	return (
		<div className="relative z-10 flex flex-col items-center justify-center text-center">
			<div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
				<Icon icon="check_circle" size="35px" />
			</div>

			<Typography variant="h3" fontSize="2xl" letterSpacing="normal" className="mb-2">
				{title}
			</Typography>

			<Typography
				variant="lead"
				color="form-confirm-foreground"
				fontSize="base"
				lineHeight="relaxed"
				fontWeight="normal"
				letterSpacing="normal"
				textAlign="center"
			>
				{content}
			</Typography>
		</div>
	);
};
