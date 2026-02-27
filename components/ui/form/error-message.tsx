import { FC } from "react";
import { FieldDescription } from "./base/field";
import { Typography } from "@/components/ui/typography/typography";

type ErrorMessage = {
	id: string;
	message: string;
};
export const ErrorMessage: FC<ErrorMessage> = ({ id, message }) => {
	return (
		<FieldDescription
			id={`${id}-error`}
			className="flex justify-start w-fit rounded-md border border-alert-danger-border bg-alert-danger-background text-danger py-1.5 px-3"
		>
			<Typography
				variant="small"
				color="inherit"
				fontSize="xs"
				fontWeight="medium"
				lineHeight="normal"
				textAlign="left"
			>
				{message}
			</Typography>
		</FieldDescription>
	);
};
