"use client";

import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button/button";
import { Link } from "@/components/ui/button/link";
import { useTranslations } from "next-intl";

export const CtaSection = () => {
	const t = useTranslations("home.contact");

	return (
		<section className="w-full bg-white dark:bg-slate-900 border-t border-primary/10 px-6 py-10 sm:py-14 md:py-18 lg:py-20 xl:py-24">
			<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
				<Typography
					variant="h2"
					fontSize="3xl"
					fontWeight="bold"
					textTransform="normal"
					lineHeight="tight"
					letterSpacing="normal"
					textAlign="center"
					className="mb-6"
				>
					{t("title")}
				</Typography>

				<Typography
					variant="lead"
					fontSize="lg"
					lineHeight="relaxed"
					fontWeight="normal"
					letterSpacing="normal"
					textAlign="center"
					className="max-w-2xl mx-auto mb-10"
				>
					{t("description")}
				</Typography>

				<div className="flex flex-col md:flex-row justify-center sm:flex-row gap-4 max-w-[300px] w-full">
					<Button
						variant="icon"
						backgroundColor="primary"
						color="white"
						fontSize="base"
						icon="download"
						iconSize="24px"
						border="base"
						borderColor="primary"
						className="px-7 min-w-auto shadow-lg shadow-primary/25 transition-all"
					>
						{t("download")}
					</Button>

					<Link
						variant="icon"
						backgroundColor="base"
						color="primary"
						fontSize="base"
						icon="mail"
						iconSize="24px"
						border="base"
						borderColor="primary/10"
						className="px-7"
						href="/contact"
					>
						{t("contact")}
					</Link>
				</div>
			</div>
		</section>
	);
};
