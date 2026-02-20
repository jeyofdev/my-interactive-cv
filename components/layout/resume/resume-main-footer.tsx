import { FC } from "react";
import { Typography } from "@/components/ui/typography/typography";
import { ListRenderer } from "@/components/list/list-renderer";
import { Social } from "@/data/resume-data";

type MainFooterProps = {
	socialLinks: Social;
};

export const ResumeMainFooter: FC<MainFooterProps> = ({ socialLinks }) => {
	return (
		<footer className="flex justify-between items-center gap-4 p-6 border-t border-divider-horizontal-secondary">
			<Typography
				variant="muted"
				color="surface-muted-foreground-title"
				fontSize="xs"
				fontWeight="normal"
				lineHeight="none"
				textTransform="capitalize"
				letterSpacing="normal"
			>
				© 2024 Jeyofdev — Built with Passion
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
		</footer>
	);
};
