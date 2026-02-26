"use client";

import { FC, JSX, useActionState } from "react";
import { Typography } from "@/components/ui/typography/typography";
import { ListRenderer } from "@/components/list/list-renderer";
import { contactData } from "@/data/contact-data";
import { GithubIcon } from "@/components/ui/icon/github-icon";
import { LinkedinIcon } from "@/components/ui/icon/linkedin-icon";
import { SocialLink } from "@/components/ui/button/link/social-link";
import { ContactCard } from "@/components/ui/card/cards";
import { ContactForm } from "@/components/form/contact-form";
import { ConfirmFormSuccess } from "@/components/form/confirm-form-success";
import { ProfileData } from "@/types/profile-type";
import { FormStatus, sendContactEmail } from "@/app/actions/send-contact-email";

const socialIcons: Record<string, JSX.Element> = {
	linkedin: <LinkedinIcon width="w-5" height="h-5" />,
	github: <GithubIcon width="w-5" height="h-5" />,
	portfolio: <span className="material-symbols-outlined">language</span>,
};

type ContactProps = {
	profile: ProfileData;
};

export const Contact: FC<ContactProps> = ({ profile }) => {
	const [formState, formAction, pending] = useActionState(sendContactEmail, {
		status: "idle" as FormStatus,
		message: "",
	});

	return (
		<main className="min-h-screen flex-1 flex flex-col items-center bg-surface-muted">
			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 px-6 py-10 sm:py-14 md:py-18 lg:py-20 xl:py-24">
				{/* Left Column */}
				<div className="lg:col-span-2 space-y-12">
					<div className="text-center lg:text-left">
						<Typography
							variant="h1"
							fontSize="5xl"
							fontWeight="black"
							textTransform="normal"
							lineHeight="tight"
							letterSpacing="custom-0.03em"
							className="mb-6 text-center lg:text-left"
						>
							Let's <span className="text-primary capitalize">Connect</span>
						</Typography>

						<Typography
							variant="lead"
							fontSize="xl"
							lineHeight="relaxed"
							fontWeight="normal"
							letterSpacing="normal"
							className="max-w-[500px] mx-auto text-center lg:text-left"
						>
							Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and
							creative ideas.
						</Typography>
					</div>

					<div className="space-y-6 max-w-[500px] mx-auto">
						<ListRenderer
							list={contactData}
							keyExtractor={(item) => item.id}
							renderItem={(contact, index) => <ContactCard contact={contact} index={index} />}
						/>
					</div>

					<div className="flex flex-col items-center lg:items-start">
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
									<SocialLink href={link.url} icon={socialIcons[Object.keys(profile.social)[index]]} />
								)}
							/>

							<SocialLink href={profile.website.url} icon={socialIcons["portfolio"]} />
						</div>
					</div>
				</div>

				{/* Right column */}
				<div className="lg:col-span-3">
					<div className="backdrop-blur-xl p-8 lg:p-12 py-10 sm:py-14 md:py-18 lg:py-20 xl:py-24 max-w-[700px] mx-auto rounded-2xl shadow-xl relative overflow-hidden bg-form-background border border-form-border transition-colors">
						<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-info/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

						{!pending && formState.status === "success" ? (
							<ConfirmFormSuccess
								title="Message Sent !"
								content="Thank you for your message. I'll get back to you within 24 hours."
							/>
						) : (
							<ContactForm
								action={formAction}
								status={formState.status}
								buttonLabel="Send Message"
								subtitle={
									<>
										Average response time: <span className="text-primary font-medium">Within 24 hours</span>
									</>
								}
								alertTitle="Your subscription will expire in 3 days."
								alertDescription="Renew now to avoid service interruption or upgrade to a paid plan to continue using the service."
							/>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};
