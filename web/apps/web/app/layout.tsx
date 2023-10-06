import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NavLayout } from "godown/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GemGames",
  description: "GemGames Official Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLayout host="Gem Games">{children}</NavLayout>
      </body>
    </html>
  );
}
