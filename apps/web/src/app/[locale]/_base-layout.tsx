"use client";
import { NavLayout } from "godown/react";
import React, { createContext, useEffect, useState } from "react";
import { LitElement, css as cssc } from "godown/deps";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { css } from "powerstyl";
import { SetTheme } from "../../hooks/theme";
import { useUserState } from "../../state/user";
import BaseFooter from "./_base-footer";

class LoadingWrapper extends LitElement {
  static styles = cssc`
    :host {
      display: none !important;
    }
  `;
  render() {
    return undefined;
  }
}
if (!customElements.get("loading-wrapper"))
  customElements.define("loading-wrapper", LoadingWrapper);
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
              {name()}
            </div>
          ) : (
            <Link href="/login">{t("login")}</Link>
          )}
        </div>
        {children}
        <BaseFooter />
      </NavLayout>
    </RootSubheadContext.Provider>
  );
}
