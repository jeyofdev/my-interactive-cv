import { FC, ReactNode, startTransition } from "react";
import { TextField } from "@/components/ui/form/text-field";
import { TextareaField } from "@/components/ui/form/textarea-field";
import { FormButton } from "@/components/ui/button/form-button";
import { Typography } from "@/components/ui/typography/typography";
import { Alert } from "@/components/ui/alert/alert";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

type ContactFormProps = {
	action: (payload: FormData) => void;
	status: string;
	buttonLabel: string;
	subtitle: ReactNode;
	alertTitle: string;
	alertDescription: string;
};

type ContactFormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const ContactForm: FC<ContactFormProps> = ({
	action,
	status,
	buttonLabel,
	subtitle,
	alertTitle,
	alertDescription,
}) => {
	const t = useTranslations("contact.form");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>({ mode: "onTouched" });

	const onSubmit = (data: ContactFormData) => {
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("subject", data.subject);
		formData.append("message", data.message);

		startTransition(() => {
			action(formData);
		});
	};

	return (
		<>
			{status && status === "error" && (
				<Alert variant="danger" title={alertTitle} description={alertDescription} className="mb-8" />
			)}

			<form onSubmit={handleSubmit(onSubmit)} noValidate className="relative z-10 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<TextField
						type="text"
						id="name"
						label={t("labelName")}
						placeholder="John Smith"
						{...register("name", {
							required: t("errorRequired"),
							minLength: { value: 2, message: t("errorNameMin") },
						})}
						error={errors.name?.message}
					/>

					<TextField
						type="email"
						id="email"
						label={t("labelEmail")}
						placeholder="john@company.com"
						{...register("email", {
							required: t("errorRequired"),
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: t("errorEmailInvalid"),
							},
						})}
						error={errors.email?.message}
					/>
				</div>

				<TextField
					type="text"
					id="subject"
					label={t("labelSubject")}
					placeholder={t("placeholderSubject")}
					{...register("subject", {
						required: t("errorRequired"),
						minLength: { value: 2, message: t("errorSubjectMin") },
					})}
					error={errors.subject?.message}
				/>

				<TextareaField
					id="message"
					label={t("labelMessage")}
					placeholder={t("placeholderMessage")}
					rows={5}
					{...register("message", {
						required: t("errorRequired"),
						minLength: { value: 10, message: t("errorMessageMin") },
					})}
					error={errors.message?.message}
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
