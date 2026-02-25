import { FC, ReactNode } from "react";
import { TextField } from "@/components/ui/form/text-field";
import { TextareaField } from "@/components/ui/form/textarea-field";
import { FormButton } from "@/components/ui/button/form-button";
import { Typography } from "@/components/ui/typography/typography";
import { Alert } from "@/components/ui/alert/alert";

type ContactFormProps = {
	action: (payload: FormData) => void;
	status: string;
	buttonLabel: string;
	subtitle: ReactNode;
	alertTitle: string;
	alertDescription: string;
};

export const ContactForm: FC<ContactFormProps> = ({
	action,
	status,
	buttonLabel,
	subtitle,
	alertTitle,
	alertDescription,
}) => {
	return (
		<>
			{status && status === "error" && (
				<Alert variant="danger" title={alertTitle} description={alertDescription} className="mb-8" />
			)}

			<form action={action} className="relative z-10 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<TextField type="text" id="name" label="Your Name" name="name" placeholder="John Smith" required />

					<TextField
						type="email"
						id="email"
						label="Email Address"
						name="email"
						placeholder="john@company.com"
						required
					/>
				</div>

				<TextField type="text" id="subject" label="Subject" name="subject" placeholder="Subject" required />

				<TextareaField
					id="message"
					label="Message"
					name="message"
					placeholder="Tell me more about your project goals..."
					rows={5}
					required
				/>

				<FormButton>{buttonLabel}</FormButton>

				<div className="flex justify-center pt-4 w-full">
					<Typography
						variant="small"
						color="surface-muted-foreground-small"
						fontSize="xs"
						fontWeight="thin"
						lineHeight="none"
						textAlign="center"
					>
						{subtitle}
					</Typography>
				</div>
			</form>
		</>
	);
};
