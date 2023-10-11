import { type AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import "../godown-global.css";
import { type Metadata } from "next";
import { i18n } from "../../next.config.js";
import RootLayout from "./_base-layout";

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
        <link href="gemgames.svg" rel="shortcut icon" type="image/svg" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
