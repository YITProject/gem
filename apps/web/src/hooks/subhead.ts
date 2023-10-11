import { useContext, useEffect } from "react";
import { RootSubheadContext } from "../app/[locale]/_base-layout";

export function SetSubhead(title: string) {
  const setVal = useContext(RootSubheadContext);
  useEffect(() => {
    setVal(title);
  }, [setVal, title]);
}
