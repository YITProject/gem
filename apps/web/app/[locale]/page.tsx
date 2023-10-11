"use client";
import { useTranslations } from "next-intl";

export default function Page(): JSX.Element {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>;
    </>
  );
}
