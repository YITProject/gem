"use client";
import { AvatarAnchor, BaseButton } from "godown/react";
import { useUserState } from "../../../state";
import { SetSubhead } from "../../../hooks/subhead";
import cls from "./page.module.css";

export default function Profile() {
  const data = useUserState((s) => s.data);
  const logout = useUserState((s) => s.logout);
  SetSubhead("Profile");
  if (!data) {
    return null;
  }
  const handleLogout = () => {
    logout();
  };
  const name = data.displayName || data.namespace;

  return (
    <div className={cls.container}>
      <AvatarAnchor className={cls.avatar} name={name} src={data.avatarURL!} />

      <h2>{name}</h2>

      <p>地区:{data.location}</p>
      <p>
        加入自
        {new Date(data.createdAt).toLocaleDateString()}
      </p>
      <p>
        <BaseButton color="red" onClick={handleLogout}>
          <span>Logout</span>
        </BaseButton>
      </p>
    </div>
  );
}
