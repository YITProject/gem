import { type AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import "../godown-global.css";
import { type Metadata } from "next";
import Logo from "ui/logo/gemgames";
import { i18n } from "../../../next.config.js";
import RootLayout from "./_base-layout";

export const metadata: Metadata = {
  title: "GemGames",
  description: "GemGames Official Site",
};

export function generateStaticParams() {
  return i18n.params;
}

const loadingStyle = `loading-wrapper{
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    align-items: center;
    justify-content: center;
    background: linear-gradient( -35deg, var(--background-end), var(--background-start) );
  }
  loading-wrapper svg{
    animation: infinite-spin 8s linear infinite;
  }
  @keyframes infinite-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;

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
        <loading-wrapper>
          <Logo height="10vmin" />
          <style>{loadingStyle}</style>
        </loading-wrapper>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "loading-wrapper": unknown;
    }
  }
}
