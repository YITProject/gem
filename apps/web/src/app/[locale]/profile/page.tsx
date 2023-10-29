"use client";
import { BaseButton } from "godown/react";
import { useUserState } from "../../../state";

export default function Profile() {
  const userData = useUserState((s) => s.data);
  const logout = useUserState((s) => s.logout);
  if (!userData) {
    return null;
  }
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div>{userData.userID}</div>
      <div>{userData.email}</div>
      <div>{userData.displayName || userData.namespace}</div>
      <div>{userData.location}</div>
      <BaseButton color="red" onClick={handleLogout}>
        Logout
      </BaseButton>
    </>
  );
}
