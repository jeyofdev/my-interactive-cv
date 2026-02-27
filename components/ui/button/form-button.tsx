import { Button } from "@/components/ui/button/button";
import { FC, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import SpinnerIcon from "@/components/ui/icon/spinner-icon";

type FormButtonProps = {
	children: ReactNode;
};

export const FormButton: FC<FormButtonProps> = ({ children }) => {
	const { pending } = useFormStatus();

	return (
		<Button
			variant="icon"
			backgroundColor="primary"
			color="white"
			fontSize="lg"
			icon="send"
			iconSize="24px"
			iconPosition="end"
			border="base"
			borderColor="primary"
			borderRadius="xl"
			textTransform="normal"
			disabled={pending}
			isPending={pending}
			className="w-full py-5 px-7 shadow-lg shadow-primary/25 transition-all"
		>
			{pending ? <SpinnerIcon /> : children}
		</Button>
	);
};
