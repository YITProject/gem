"use client";
import { createRef, useEffect } from "react";
import { LabelInput, BaseButton } from "godown/react";
import { useTranslations } from "next-intl";
import { testEmail, testNamespace, sha1 } from "../../../../common";
import type { RefType } from "ui/form/sign";
import { useUserState } from "../../../../state";

import Form from "ui/form/sign";
import { User } from "@prisma/client";
import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};
export default function Login() {
  const ref = createRef<RefType>();

  useEffect(() => {}, []);
  const t = useTranslations("(sign)");
  const loadFromJWT = useUserState((s) => s.loadFromJWT);

  const submit = () => {
    if (!ref || !ref.current) {
      return;
    }
    const value = ref.current.value();
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
    fetch("/api/login", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsondata) => {
        const { token, to } = jsondata;
        if (token) {
          loadFromJWT(token, true);
        }
        window.location.pathname = to || "/";
      });
  };
  return (
    <>
      <Form ref={ref}>
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
      </Form>
    </>
  );
}
