"use client";
import { createRef } from "react";
import { BaseButton, LabelInput, BaseForm } from "godown/react";
import { useTranslations } from "next-intl";
import { type BaseForm as BaseFormType } from "godown";
import type { User } from "@prisma/client";
import type { Metadata } from "next";
import { useUserState } from "../../../../state";
import { testEmail, testNamespace, sha1 } from "../../../../common";

export const metadata: Metadata = {
  title: "Signup",
};
export default function Signup() {
  const ref = createRef<BaseFormType>();
  const t = useTranslations("(sign)");
  const loadFromJWT = useUserState((s) => s.loadFromJWT);
  const submit = () => {
    if (!ref.current) {
      return;
    }
    const [_, value] = ref.current.nameValue() as [string, any];
    if (!testEmail(value.email)) {
      // TODO err
      return;
    }
    if (!testNamespace(value.namespace)) {
      // TODO err
      return;
    }
    const data: Partial<User> = {
      email: value.email,
      namespace: value.namespace,
    };
    if (value.password) {
      data.password = sha1(value.password);
    }
    void fetch("/api/register", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsondata) => {
        const { token, to } = jsondata;
        if (token) {
          loadFromJWT(token as string, true);
        }
        window.location.pathname = to || "/";
      });
  };
  return (
    <BaseForm ref={ref}>
      <LabelInput label={t("email")} name="email" />
      <LabelInput label={t("namespace")} name="namespace" />
      <LabelInput label={t("password")} name="password" type="password" />
      <LabelInput
        label={t("passwordVerify")}
        name="passwordVerify"
        type="password"
      />
      <div>
        <BaseButton onClick={submit}>
          <span>{t("submit")}</span>
        </BaseButton>
      </div>
    </BaseForm>
  );
}
