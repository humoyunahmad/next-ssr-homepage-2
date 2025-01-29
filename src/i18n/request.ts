import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale = "ar" }) => {
  const locale = await requestLocale;
  const isRTL = locale?.includes("ar");

  const correctLocale = isRTL ? "ar" : "en";

  return {
    messages: (await import(`../translations/${correctLocale}.js`)).default,
    locale,
  };
});
