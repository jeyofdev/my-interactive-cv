"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormStatus = "idle" | "success" | "error";

export type FormState = {
	status: FormStatus;
	message: string;
};

export const sendContactEmail = async (_: FormState, formData: FormData): Promise<FormState> => {
	try {
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const subject = formData.get("subject") as string;
		const message = formData.get("message") as string;

		if (!name || !email || !message) {
			return { status: "error", message: "Missing required fields" };
		}

		await resend.emails.send({
			from: "Contact <onboarding@resend.dev>",
			to: ["jgregoire.dev@gmail.com"],
			replyTo: email,
			subject: `[Contact] ${subject}`,
			html: `
				<h2>Nouveau message</h2>
				<p><strong>Nom:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong><br/>${message}</p>
			`,
		});

		return {
			status: "success",
			message: "Email sent successfully",
		};
	} catch (e) {
		const errorMessage = e instanceof Error ? e.message : "Unknown error";
		console.log(errorMessage);

		return {
			status: "error",
			message: "Failed to send email",
		};
	}
};
