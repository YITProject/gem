"use client";
import { AvatarAnchor, BaseButton, TimeBar } from "godown/react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserState } from "../../../state";
import { SetSubhead } from "../../../hooks/subhead";
import CartA from "../../../components/carta";
import cls from "./page.module.css";

export default function Profile() {
  SetSubhead("Profile");
  const data = useUserState((s) => s.data);
  const logout = useUserState((s) => s.logout);
  const isLogin = useUserState((s) => s.isLogin);
  const t = useTranslations("(sign)");
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin, router]);

  if (!data) {
    return null;
  }
  const handleLogout = () => {
    logout();
  };
  const name = data.displayName || data.namespace;

  return (
    <div className={cls.container}>
      <AvatarAnchor className={cls.avatar} name={name} src={data.avatarURL} />

      <h2>{name}</h2>

      <p>
        {t("location")}:{data.location}
      </p>
      <p>
        {t("joinedat")}
        <TimeBar format="YYYY-MM-DD" time={new Date(data.createdAt)} />
      </p>
      <p>
        <BaseButton color="red" onClick={handleLogout}>
          <span>{t("signout")}</span>
        </BaseButton>
      </p>
      <CartA />
    </div>
  );
}
