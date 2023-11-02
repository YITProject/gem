"use client";
import { createRef } from "react";
import { BaseButton, LabelInput, BaseForm } from "godown/react";
import { useTranslations } from "next-intl";
import { type BaseForm as BaseFormType } from "godown";
import { useRouter } from "next/navigation";
import { css } from "powerstyl";
import Link from "next-intl/link";
import { useUserState } from "../../../../state";
import { testEmail, testNamespace, sha1 } from "../../../../common";
import alert from "../../../../hooks/alert";

export default function Signup() {
  const ref = createRef<BaseFormType>();
  const t = useTranslations("(sign)");
  const w = useTranslations("(warn)");
  const loadJWT = useUserState((s) => s.loadJWT);
  const router = useRouter();
  const submit = () => {
    if (!ref.current) {
      return;
    }

    const [_, value] = ref.current.nameValue() as [
      string,
      Partial<{
        email: string;
        namespace: string;
        password: string;
      }>,
    ];

    if (!testEmail(value.email) || !testNamespace(value.namespace)) {
      alert({
        call: "warning",
        content: w("invalid-input"),
      });
      return;
    }
    const data: typeof value = {
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
        const { token, to } = jsondata as { token: string; to?: string };
        if (token) {
          loadJWT(token, true);
        }
        router.push(to || "/");
      });
  };
  return (
    <div>
      <BaseForm ref={ref}>
        <LabelInput label={t("email")} name="email" />
        <LabelInput label={t("namespace")} name="namespace" />
        <LabelInput label={t("password")} name="password" type="password" />
        <LabelInput
          label={t("password-verify")}
          name="passwordVerify"
          type="password"
        />
      </BaseForm>
      <div
        style={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <BaseButton onClick={submit}>
          <span>{t("submit")}</span>
        </BaseButton>
        <Link href="/login">
          <BaseButton
            color="blue"
            style={css`
              margin: 0.5em;
            `}
          >
            <span>{t("login")}</span>
          </BaseButton>
        </Link>
      </div>
    </div>
  );
}
