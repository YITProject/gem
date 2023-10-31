"use client";
import type { User } from "@prisma/client";
import { AvatarAnchor } from "godown/react";
import { notFound } from "next/navigation";
import useSWR from "swr";
import Loading from "ui/logo/loading";
import { SetSubhead } from "../../../../hooks/subhead";
import cls from "./page.module.css";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
export default function User({
  params,
}: {
  params: { locale: string; ns: string };
}) {
  const { ns } = params;
  const { data, error, isLoading } = useSWR<User | null>(
    `/api/user/${ns}?ns`,
    fetcher,
  );
  if (error) {
    return notFound();
  }

  if (isLoading || !data) {
    return <Loading />;
  }
  const name = data.displayName || data.namespace;
  return (
    <div className={cls.container}>
      <AvatarAnchor className={cls.avatar} name={name} src={data.avatarURL} />

      <h2>{name}</h2>

      <p>地区:{data.location}</p>
      <p>
        加入自
        {new Date(data.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
