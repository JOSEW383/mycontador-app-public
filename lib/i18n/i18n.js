import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ['en', 'es'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`@/lib/i18n/dictionaries/${locale}.json`)).default,
  };
});
