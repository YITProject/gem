"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useUserState } from "../../../state";

export default (props: { token: string; }) => {
  const userState = useUserState();
  useEffect(() => {
    userState.loadJWT(props.token);
    redirect("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};