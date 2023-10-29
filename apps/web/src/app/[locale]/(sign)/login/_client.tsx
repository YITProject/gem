"use client";
import { createRef } from "react";
import { type BaseForm as BaseFormType } from "godown";
import { LabelInput, BaseButton, BaseForm } from "godown/react";
import { useTranslations } from "next-intl";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { css } from "powerstyl";
import { useUserState } from "../../../../state";
import { testEmail, testNamespace, sha1 } from "../../../../common";
import { SetSubhead } from "../../../../hooks/subhead";
import alert from "../../../../hooks/alert";

export const metadata: Metadata = {
  title: "Login",
};
export default function Login() {
  const ref = createRef<BaseFormType>();
  SetSubhead("Login");
  const t = useTranslations("(sign)");
  const w = useTranslations("(wrong)");
  const loadJWT = useUserState((s) => s.loadJWT);
  const submit = () => {
    if (!ref.current) {
      return;
    }
    const [_, value] = ref.current.nameValue() as [
      string,
      Partial<{
        account: string;
        password: string;
      }>,
    ];
    if (!value.password || !value.account) {
      alert({
        call: "warning",
        content: w("missing-require-field"),
      });
      return;
    }
    const data: typeof value &
      Partial<{
        email: string;
        namespace: string;
      }> = {
      password: sha1(value.password),
    };

    if (testEmail(value.account)) {
      data.email = value.account;
    } else if (testNamespace(value.account)) {
      data.namespace = value.account;
    } else {
      alert({
        call: "warning",
        content: w("invalid-input"),
      });
      return;
    }

    void fetch("/api/login", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((jsondata) => {
        const { token, to } = jsondata as { token: string; to?: string };
        if (token) {
          loadJWT(token, true);
        }
        redirect(to || "/");
      })
      .catch(() => {
        alert({
          call: "warning",
          content: w("server-error"),
        });
      });
  };
  return (
    <div>
      <BaseForm ref={ref}>
        <LabelInput name="account" pla={`${t("namespace")}/${t("email")}`}>
          <span
            style={css`
              margin-right: 8px;
            `}
          >
            {t("account")}
          </span>
        </LabelInput>
        <LabelInput name="password" type="password">
          <span
            style={css`
              margin-right: 8px;
            `}
          >
            {t("password")}
          </span>
        </LabelInput>
      </BaseForm>
      <BaseButton
        onClick={submit}
        style={css`
          margin: 0.5em;
        `}
      >
        <span>{t("submit")}</span>
      </BaseButton>
    </div>
  );
}
