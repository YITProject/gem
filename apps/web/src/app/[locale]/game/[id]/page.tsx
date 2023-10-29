"use client";
import type { Product, User } from "@prisma/client";
import { notFound } from "next/navigation";
import useSWR from "swr";
import Loading from "ui/logo/loading";
import { css } from "powerstyl";
import { AvatarAnchor, BaseButton } from "godown/react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
export default function Game({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const t = useTranslations("(global)");
  const l = useTranslations("(labels)")
  const { id } = params;
  const { data, error, isLoading } = useSWR<Product | null>(
    `/api/game/${id}`,
    fetcher,
  );
  if (error) {
    return notFound();
  }

  if (isLoading || !data) {
    return <Loading />;
  }

  const backgroundURL = data.resourcesURLs[0]
    ? `url(${data.resourcesURLs[0]})`
    : "";

  return (
    <div
      style={css`
        margin: 4em;
        width: 70%;
      `}
    >
      <i
        style={css`
          filter: brightness(0.5) blur(4px);
          z-index: -1;
          height: 100%;
          width: 100%;
          left: 0px;
          top: 0px;
          background: no-repeat center/cover ${backgroundURL};
          position: absolute;
        `}
      />
      <AvatarAnchor
        name={data.name}
        src={data.iconURL!}
        style={css`
          font-size: 3em;
        `}
      />
      <h1>{data.name}</h1>
      <Author authorID={data.authorID} />

      <p>开发商: {data.deverlopers[0]}</p>
      <p>发行商: {data.issuers[0]}</p>
      <p>
        标签:{" "}
        {data.labels.map((label) => (
          <div key={label}>{l(label)}</div>
        ))}
      </p>
      <div
        style={css`
          display: flex;
          justify-content: space-between;
          padding: 20px;
        `}
      >
        <h2>${data.price.valueOf()}</h2>
        <BaseButton color="blue">
          <span>{t("add-cart")}</span>
        </BaseButton>
      </div>
    </div>
  );
}

function Author({ authorID }: { authorID: string }) {
  const { data, error } = useSWR<User | null>(`/api/user/${authorID}`, fetcher);
  if (error) {
    return notFound();
  }

  if (!data) {
    return null;
  }
  const name = data.displayName || data.namespace;
  return (
    <div
      style={css`
        width: fit-content;
        margin-left: auto;
      `}
    >
      <Link
        href={`/user/${data.namespace}`}
        style={css`
          display: flex;
          align-items: center;
          margin: 8px 0;
        `}
      >
        <h3
          style={css`
            margin: 8px;
          `}
        >
          {data.displayName || data.namespace}
        </h3>
        <AvatarAnchor
          name={name}
          src={data.avatarURL!}
          style={css`
            border-radius: 25%;
            background: var(--godown--nav-background);
            font-size: 1.5em;
          `}
        />
      </Link>
    </div>
  );
}
