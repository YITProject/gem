import { type AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import "../globals.css";
import { i18n } from "../../next.config.js";
export const metadata: Metadata = {
  title: "GemGames",
  description: "GemGames Official Site",
};

export function generateStaticParams() {
  return i18n.params;
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages: AbstractIntlMessages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="gemgames.svg" type="image/svg" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
