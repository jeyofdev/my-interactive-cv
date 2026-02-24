"use client";

import { FC, JSX } from "react";
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

const socialIcons: Record<string, JSX.Element> = {
	linkedin: <LinkedinIcon width="w-5" height="h-5" />,
	github: <GithubIcon width="w-5" height="h-5" />,
	portfolio: <span className="material-symbols-outlined">language</span>,
};

type ContactProps = { profile: ProfileData };

export const Contact: FC<ContactProps> = ({ profile }) => {
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
				</div>
			</main>

			<Footer socialLinks={profile.social} className="max-w-6xl mx-auto" />
		</div>
	);
};
