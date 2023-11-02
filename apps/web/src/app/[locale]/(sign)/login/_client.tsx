"use client";
import { createRef } from "react";
import { type BaseForm as BaseFormType } from "godown";
import { LabelInput, BaseButton, BaseForm, FlexFlow } from "godown/react";
import { useTranslations } from "next-intl";
import { type Metadata } from "next";
import { useRouter } from "next/navigation";
import { css } from "powerstyl";
import Link from "next-intl/link";
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
  const router = useRouter();
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
        router.push(to || "/");
      })
      .catch(() => {
        alert({
          call: "warning",
          content: w("server-error"),
        });
      });
  };
  const auth = () => {
    window.location.href = `http://localhost:9527/auth?callback_url=${window.location.origin}/auth`;
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
      <div
        style={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <BaseButton
          color="blue"
          onClick={submit}
          style={css`
            margin: 0.5em;
          `}
        >
          <span>{t("submit")}</span>
        </BaseButton>
        <Link href="/signup">
          <BaseButton
            style={css`
              margin: 0.5em;
            `}
          >
            <span>{t("signup")}</span>
          </BaseButton>
        </Link>
      </div>
      <div
        style={css`
          display: flex;
          justify-content: center;
          margin: 0.5em;
        `}
      >
        {t("login-auth")}
      </div>
      <FlexFlow
        style={css`
          justify-content: center;
          align-items: center;
          margin: 0.5em;
        `}
      >
        <BaseButton
          onClick={auth}
          style={css`
            margin: 0.5em;
          `}
        >
          <span>Goup-OAuth</span>
        </BaseButton>
      </FlexFlow>
    </div>
  );
}
