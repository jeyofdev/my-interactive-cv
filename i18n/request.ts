import { getRequestConfig } from "next-intl/server";
import { GetRequestConfigParams } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }: GetRequestConfigParams) => {
	const locale = (await requestLocale) ?? "en";

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
