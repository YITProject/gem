"use client";
import { NavLayout } from "godown/react";
import React, { createContext, useState } from "react";
import Logo from "ui/logo/gemgames";
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
      <loading-wrapper>
        <Logo height="10vmin" />
        <style>
          {`
          
          loading-wrapper{
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
          }
          `}
        </style>
      </loading-wrapper>
      <NavLayout host="GemGames" subhead={subhead}>
        {children}
        <BaseFooter />
      </NavLayout>
    </RootSubheadContext.Provider>
  );
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "loading-wrapper": unknown;
    }
  }
}
