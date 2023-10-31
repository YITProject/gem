"use client";
import { useRouter } from "next/navigation";
import { useUserState } from "../../../state";

export default (props: { children: React.ReactNode }) => {
  const router = useRouter();
  const isLogin = useUserState((s) => s.isLogin);
  if (isLogin) {
    router.push("/profile");
    return null;
  }
  return <>{props.children}</>;
};
