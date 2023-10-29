"use client";
import type { User } from "@prisma/client";
import { notFound } from "next/navigation";
import useSWR from "swr";
import Loading from "ui/logo/loading";

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
  return (
    <>
      {JSON.stringify(data)}
      ID{data.userID}
      昵称:{data.displayName||data.namespace}
      地区:{data.location}
      账户类型:{data.type}
    </>
  );
}
