import { FC } from "react";
import { Typography } from "@/components/ui/typography/typography";
import { ListRenderer } from "@/components/list/list-renderer";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export type Link = {
	pseudo: string;
	url: string;
};

export type Social = {
	linkedin: Link;
	github: Link;
};

type MainFooterProps = {
	name: string;
	socialLinks: Social;
	className?: string;
	containerClassName?: string;
};

export const Footer: FC<MainFooterProps> = ({ name, socialLinks, className, containerClassName }) => {
	const t = useTranslations("footer");

	return (
		<footer className={cn("p-6 border-t border-divider-horizontal-secondary", containerClassName)}>
			<div className={cn("flex flex-col sm:flex-row justify-between items-center gap-4", className)}>
				<Typography
					variant="muted"
					color="surface-muted-foreground-title"
					fontSize="xs"
					fontWeight="normal"
					lineHeight="none"
					textTransform="capitalize"
					letterSpacing="normal"
				>
					© 2024 {name} — {t("copyright")}
				</Typography>

				<div className="flex gap-6">
					<ListRenderer
						list={Object.entries(socialLinks).map(([key, value]) => ({ id: key, ...value }))}
						keyExtractor={(item) => item.id}
						renderItem={(link) => (
							<a
								href={link.url}
								target="_blank"
								className="text-link-muted-foreground hover:text-primary capitalize transition-colors"
							>
								<Typography
									variant="small"
									color="surface-muted-foreground-title"
									fontSize="xs"
									fontWeight="normal"
									lineHeight="none"
									textTransform="capitalize"
									letterSpacing="normal"
								>
									{link.id}
								</Typography>
							</a>
						)}
					/>
				</div>
			</div>
		</footer>
	);
};
