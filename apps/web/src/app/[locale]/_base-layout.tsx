"use client";
import { NavLayout, AvatarAnchor } from "godown/react";
import React, { createContext, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { css } from "powerstyl";
import Logo from "ui/logo/gemgames";
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
            <div
              style={css`
                display: flex;
                align-items: center;
              `}
            >
              <AvatarAnchor name={name()!} />
              {name()}
            </div>
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
            padding: 2.5%;
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
    return (
      <div id="loading-wrapper">
        <Logo />
      </div>
    );
  }
  return null
}
