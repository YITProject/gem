"use client";
import { NavLayout } from "godown/react";
import React, { createContext, useState } from "react";
import { LitElement, css } from "godown/deps";
import { SetTheme } from "../../hooks/theme";
import BaseFooter from "./_base-footer";

class LoadingWrapper extends LitElement {
  static styles = css`
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

  return (
    <RootSubheadContext.Provider
      value={(v: string) => {
        setSubhead(v);
      }}
    >
      <NavLayout host="GemGames" subhead={subhead}>
        {children}
        <BaseFooter />
      </NavLayout>
    </RootSubheadContext.Provider>
  );
}
