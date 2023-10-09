"use client";
import { createRef } from "react";
import { BaseButton, LabelInput } from "godown/react";
import { useTranslations } from "next-intl";
import Form from "ui/form/sign";
import { testEmail, testNamespace, sha1 } from "../../../../common";
import type { RefType } from "ui/form/sign";
import { User } from "@prisma/client";
import { useUserState } from "../../../../state";
import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign up",
};
export default function Signup() {
  const ref = createRef<RefType>();
  const t = useTranslations("(sign)");
  const loadFromJWT = useUserState((s) => s.loadFromJWT);
  const submit = () => {
    if (!ref || !ref.current) {
      return;
    }
    const value = ref.current.value();
    if (!testEmail(value?.email)) {
      // TODO err
      return;
    }
    if (!testNamespace(value?.namespace)) {
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
    fetch("/api/register", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsondata) => {
        const { token, to } = jsondata;
        if (token) {
          loadFromJWT(token, true);
        }
        console.log(token);
        window.location.pathname = to || "/";
      });
  };
  return (
    <>
      <Form ref={ref}>
        <LabelInput label={t("email")} name="email" />
        <LabelInput label={t("namespace")} name="namespace" />
        <LabelInput label={t("password")} name="password" />
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
      </Form>
    </>
  );
}