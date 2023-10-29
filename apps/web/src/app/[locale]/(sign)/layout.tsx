"use client";
import { redirect } from "next/navigation";
import { useUserState } from "../../../state";

export default (props: { children: React.ReactNode }) => {
  const isLogin = useUserState((s) => s.isLogin);
  if (isLogin) {
    redirect("/profile");
    return null;
  }
  return <>{props.children}</>;
};
