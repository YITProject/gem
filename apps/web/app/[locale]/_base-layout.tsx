"use client";
import { NavLayout } from "godown/react";
import { createContext, useState, useEffect, useContext } from "react";
import BaseFooter from "./_base-footer";

export const RootSubheadContext = createContext<(a: string) => void>(
  () => undefined,
);
export function SetSubhead(title: string) {
  const setVal = useContext(RootSubheadContext);
  useEffect(() => {
    setVal(title);
  }, [setVal, title]);
}
export default function RootLayout({ children }) {
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
