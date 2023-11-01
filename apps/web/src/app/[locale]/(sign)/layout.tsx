"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserState } from "../../../state";

export default (props: { children: React.ReactNode; }) => {
  const router = useRouter();
  const isLogin = useUserState((s) => s.isLogin);
  useEffect(() => {
    if (isLogin) {
      router.push("/profile");
    }
  }, [isLogin, router]);
  return <>{props.children}</>;
};
