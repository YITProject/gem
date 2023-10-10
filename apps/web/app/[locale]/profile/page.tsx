"use client";

import { useEffect } from "react";
import { useUserState } from "../../../state";
export default function Profile() {
  const loadFromJWT = useUserState((s) => s.loadFromJWT);
  const userData = useUserState((s) => s.data);
  useEffect(() => {
    if (!userData) {
      loadFromJWT();
    }
  }, []);
  if (!userData) return <></>;
  return (
    <>
      <div>{userData.userID}</div>
      <div>{userData.displayName || userData.namespace}</div>
      <div>{userData.location}</div>
    </>
  );
}
