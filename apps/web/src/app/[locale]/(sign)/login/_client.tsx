"use client";
import { createRef } from "react";
import { type BaseForm as BaseFormType } from "godown";
import { LabelInput, BaseButton, BaseForm } from "godown/react";
import { useTranslations } from "next-intl";
import type { User } from "@prisma/client";
import { type Metadata } from "next";
import { useUserState } from "../../../../state";
import { testEmail, testNamespace, sha1 } from "../../../../common";
import { SetSubhead } from "../../../../hooks/subhead";

export const metadata: Metadata = {
  title: "Login",
};
export default function Login() {
  const ref = createRef<BaseFormType>();
  SetSubhead("Login");
  const t = useTranslations("(sign)");
  const loadFromJWT = useUserState((s) => s.loadFromJWT);

  const submit = () => {
    if (!ref.current) {
      return;
    }
    const [_, value] = ref.current.nameValue() as [string, object];
    if (!value.password) {
      // TODO err
      return;
    }
    const data: Partial<User> = {
      password: sha1(value.password),
    };
    if (value.account) {
      if (testEmail(value.account)) {
        data.email = value.account;
      } else if (testNamespace(value.account)) {
        data.namespace = value.account;
      }
    } else {
      return;
    }
    void fetch("/api/login", {
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
      <LabelInput
        label={t("account")}
        name="account"
        pla={`${t("namespace")}/${t("email")}`}
      />
      <LabelInput label={t("password")} name="password" type="password" />
      <div>
        <BaseButton onClick={submit}>
          <span>{t("submit")}</span>
        </BaseButton>
      </div>
    </BaseForm>
  );
}
