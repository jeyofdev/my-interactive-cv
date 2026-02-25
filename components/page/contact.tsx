"use client";

import { FC, JSX, useActionState, useState } from "react";
import { Header } from "@/components/layout/header";
import { ProfileData } from "@/types/resume-type";
import { Footer } from "@/components/layout/footer";
import { Typography } from "@/components/ui/typography/typography";
import { ListRenderer } from "@/components/list/list-renderer";
import { contactData } from "@/data/contact-data";
import { Card, CardContent } from "@/components/ui/card/card-base";
import { Icon } from "@/components/ui/icon/icon";
import { GithubIcon } from "@/components/ui/icon/github-icon";
import { LinkedinIcon } from "@/components/ui/icon/linkedin-icon";
import { TextField } from "@/components/ui/form/text-field";
import { TextareaField } from "@/components/ui/form/textarea-field";
import { Alert } from "@/components/ui/alert/alert";
import { FormButton } from "@/components/ui/button/form-button";

const socialIcons: Record<string, JSX.Element> = {
	linkedin: <LinkedinIcon width="w-5" height="h-5" />,
	github: <GithubIcon width="w-5" height="h-5" />,
	portfolio: <span className="material-symbols-outlined">language</span>,
};

type ContactProps = { profile: ProfileData; isDark?: boolean };
type FormState = { message: string; status: string };

export const Contact: FC<ContactProps> = ({ profile }) => {
	const [formState, formAction, pending] = useActionState(
		async (prevState: FormState, formData: FormData) => {
			// simule delay to test pending
			await new Promise((resolve) => {
				setTimeout(resolve, 5000);
			});

			try {
				const name = formData.get("name");
				const email = formData.get("email");
				const subject = formData.get("subject");
				const message = formData.get("message");

				console.log({ name, email, subject, message });

				return {
					status: "success",
					message: "Message sent successfully",
				};
			} catch (e) {
				const errorMessage = e instanceof Error ? e.message : "Unknown error";
				return {
					status: "error",
					message: "Something went wrong, " + errorMessage,
				};
			}
		},
		{ status: "idle", message: "" },
	);

	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<Header variant="default" name={profile.name} />

			<main className="min-h-screen flex-1 flex flex-col items-center bg-surface-muted">
				<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 px-6 py-16 lg:py-24">
					{/* Left Column */}
					<div className="lg:col-span-2 space-y-12">
						<div>
							<Typography
								variant="h1"
								fontSize="5xl"
								fontWeight="black"
								textTransform="normal"
								lineHeight="tight"
								letterSpacing="custom-0.03em"
								textAlign="left"
								className="mb-6"
							>
								Let's <span className="text-primary capitalize">Connect</span>
							</Typography>

							<Typography
								variant="lead"
								fontSize="xl"
								lineHeight="relaxed"
								fontWeight="normal"
								letterSpacing="normal"
								textAlign="left"
								className="max-w-2xl mx-auto"
							>
								Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and
								creative ideas.
							</Typography>
						</div>

						<div className="space-y-6">
							<ListRenderer
								list={contactData}
								keyExtractor={(item) => item.id}
								renderItem={(contact, index) => (
									<Card className="group relative flex-row items-center gap-6 p-5 border-border-card-education bg-card-education-background rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
										<Icon
											variant="rounded"
											icon="mail"
											size="26px"
											color={index % 2 === 0 ? "primary" : "info"}
											backgroundColor={index % 2 === 0 ? "primary/10" : "info/10"}
											containerSize="48px"
										/>

										<CardContent className="flex flex-col items-start flex-wrap gap-2 px-0">
											<Typography variant="small" fontSize="xs" fontWeight="semibold" textTransform="uppercase">
												{contact.label}
											</Typography>

											<Typography
												variant="small"
												color="surface-muted-foreground-secondary"
												fontSize="sm"
												fontWeight="medium"
												lineHeight="none"
											>
												{contact.value}
											</Typography>
										</CardContent>
									</Card>
								)}
							/>
						</div>
						<div className="pt-6">
							<Typography
								variant="h6"
								color="surface-muted-foreground"
								fontSize="sm"
								lineHeight="relaxed"
								fontWeight="semibold"
								letterSpacing="widest"
								textAlign="left"
								textTransform="uppercase"
								className="mb-6"
							>
								Social Networks
							</Typography>

							<div className="flex gap-4">
								<ListRenderer
									list={Object.entries(profile.social).map(([key, value]) => ({ id: key, ...value }))}
									keyExtractor={(item) => item.id}
									renderItem={(link, index) => (
										<a
											href={link.url}
											target="_blank"
											className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all transform hover:-translate-y-1"
										>
											{socialIcons[Object.keys(profile.social)[index]]}
										</a>
									)}
								/>

								<a
									href={profile.website.url}
									target="_blank"
									className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-[#10b981] hover:border-[#10b981]/50 transition-all transform hover:-translate-y-1"
								>
									{socialIcons["portfolio"]}
								</a>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3">
						<div className="backdrop-blur-xl p-8 lg:p-12 rounded-2xl shadow-xl relative overflow-hidden bg-form-background border border-form-border transition-colors">
							<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
							<div className="absolute bottom-0 left-0 w-64 h-64 bg-info/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

							{!pending && formState.status === "success" ? (
								<div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
									<div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
										<Icon icon="check_circle" size="35px" />
									</div>

									<Typography variant="h3" fontSize="2xl" letterSpacing="normal" className="mb-2">
										Message Sent!
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
										Thank you for your message. I'll get back to you within 24 hours.
									</Typography>
								</div>
							) : (
								<>
									{formState.status && formState.status === "error" && (
										<Alert
											variant="danger"
											title="Your subscription will expire in 3 days."
											description="Renew now to avoid service interruption or upgrade to a paid plan to continue using the service."
											className="mb-8"
										/>
									)}

									<form action={formAction} className="relative z-10 space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<TextField
												type="text"
												id="name"
												label="Your Name"
												name="name"
												placeholder="John Smith"
												required
											/>

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

										<FormButton>Send Message</FormButton>

										<div className="flex justify-center pt-4 w-full">
											<Typography
												variant="small"
												color="surface-muted-foreground-small"
												fontSize="xs"
												fontWeight="thin"
												lineHeight="none"
												textAlign="center"
											>
												Average response time: <span className="text-primary font-medium">Within 24 hours</span>
											</Typography>
										</div>
									</form>
								</>
							)}
						</div>
					</div>
				</div>
			</main>

			<Footer socialLinks={profile.social} className="max-w-6xl mx-auto" />
		</div>
	);
};
