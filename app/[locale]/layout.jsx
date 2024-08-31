import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'home.metadata'});
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({ children}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
