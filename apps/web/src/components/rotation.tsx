"use client";
import Image from "next/image";
import type { Product } from "@prisma/client";
import { BaseButton, RotationPool } from "godown/react";
import { useTranslations } from "next-intl";
import { css, tagged } from "powerstyl";
import Link from "next-intl/link";
import cls from "./rotation.module.css";

export default function Rotation(props: { data: Product[] }) {
  return (
    <RotationPool
      style={css`
        width: 840px;
        border-radius: 1em;
        overflow: hidden;
      `}
    >
      {props.data.map((product) => {
        return <RotationItem data={product} key={product.productID} />;
      })}
    </RotationPool>
  );
}
function RotationItem({ data }: { data: Product }) {
  return (
    <div className={cls.container}>
      <Link href={`/game/${data.productID}`}>
        <Image
          alt={data.summary || ""}
          className={cls.image}
          height={1080}
          priority
          src={data.resourcesURLs[0]}
          width={1920}
        />{" "}
      </Link>
      <Details data={data} />
    </div>
  );
}
const Text = tagged`span``
    margin: 6px;
    `;
function Details({ data }: { data: Product }) {
  const t = useTranslations("(global)");
  const tl = useTranslations("(labels)");
  const comments = [0, 0.2, 0.5, 0.8, 0.95, 1];
  const commentIndex = comments.findIndex((comment) => comment > data.comment);
  return (
    <div className={cls.details}>
      <section>
        <Link href={`/game/${data.productID}`}>
          <h2>{data.name}</h2>
        </Link>
        <div className={cls.labels}>
          {data.labels.map((label) => {
            return (
              <Link href={`/games/label/${label}`} key={label}>
                <BaseButton color="blue">
                  <span>{tl(label)}</span>
                </BaseButton>
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <p>
          {t("developers")}:<Text>{data.deverlopers.join(", ")}</Text>
        </p>
        <p>
          {t("issuers")}:<Text>{data.issuers.join(", ")}</Text>
        </p>
        <p>
          {t("comment-rate")}:<Text>{(data.comment * 100).toFixed()}%</Text>
        </p>
        <span className={`comment-${commentIndex}`}>
          {t(`comment${commentIndex}`)}
        </span>
        <p
          style={css`
            text-align: center;
          `}
        >
          <Link
            style={css`
              color: cornflowerblue;
            `}
            href={`/game/${data.productID}`}
          >
            {t("read-more")}
          </Link>
        </p>
      </section>
    </div>
  );
}
