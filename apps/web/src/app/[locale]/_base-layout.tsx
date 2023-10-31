"use client";
import { NavLayout, AvatarAnchor } from "godown/react";
import React, { createContext, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { css } from "powerstyl";
import Loading from "ui/logo/loading";
import { SetTheme } from "../../hooks/theme";
import { useUserState } from "../../state/user";
import BaseFooter from "./_base-footer";

export const RootSubheadContext = createContext<(a: string) => void>(
  () => undefined,
);

export default function RootLayout({ children }) {
  SetTheme();
  const [subhead, setSubhead] = useState<string>();
  const t = useTranslations("(sign)");
  const name = useUserState((s) => s.name);
  const load = useUserState((s) => s.load);
  const isLogin = useUserState((s) => s.isLogin);
  useEffect(() => {
    load();
  }, [load]);
  return (
    <RootSubheadContext.Provider
      value={(v: string) => {
        setSubhead(v);
      }}
    >
      <LoadingWrapper />
      <NavLayout host="GemGames" subhead={subhead}>
        <div
          slot="opt"
          style={css`
            display: flex;
            align-items: center;
          `}
        >
          {isLogin ? (
            <Link
              href="/profile"
              style={css`
                display: flex;
              `}
            >
              <AvatarAnchor name={name()!} />
              {name()}
            </Link>
          ) : (
            <Link href="/login">{t("login")}</Link>
          )}
        </div>
        <main
          style={css`
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
          `}
        >
          {children}
        </main>
        <BaseFooter />
      </NavLayout>
    </RootSubheadContext.Provider>
  );
}

export function LoadingWrapper() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
  }, []);
  if (display) {
    return <Loading className="fixed" />;
  }
  return null;
}
