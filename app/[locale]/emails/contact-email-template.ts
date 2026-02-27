type ContactEmailProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const contactEmailTemplate = ({ name, email, subject, message }: ContactEmailProps): string => {
	return `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Nouveau message</title>
	</head>
	<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,sans-serif;">
		<table width="100%" cellpadding="0" cellspacing="0" style="padding:24px;">
			<tr>
				<td align="center">
					<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
						<tr>
							<td style="padding:24px 32px;border-bottom:1px solid #e5e7eb;">
								<h2 style="margin:0;font-size:20px;color:#0f172a;">
									Nouveau message de contact
								</h2>
							</td>
						</tr>

						<tr>
							<td style="padding:24px 32px;color:#334155;font-size:14px;line-height:1.6;">
								<p><strong>Nom :</strong> ${name}</p>
								<p><strong>Email :</strong> ${email}</p>
								<p><strong>Sujet :</strong> ${subject}</p>

								<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />

								<p style="white-space:pre-line;">${message}</p>
							</td>
						</tr>

						<tr>
							<td style="padding:16px 32px;background:#f1f5f9;color:#64748b;font-size:12px;text-align:center;">
								Message envoyé depuis le formulaire de contact
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>
`;
};
