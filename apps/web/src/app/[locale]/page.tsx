"use client";
import useSWR from "swr";
import { notFound } from "next/navigation";
import Loading from "ui/logo/loading";
import type { Product } from "@prisma/client";
import Rotation from "../../components/rotation";

export default function Page(): JSX.Element | null {
  const { data, error, isLoading } = useSWR<{ products: Product[] }>(
    "/api/hot",
    (url: string) => fetch(url).then((res) => res.json()),
  );
  if (error) {
    return notFound();
  }
  if (isLoading) {
    return <Loading />;
  }
  if (data) {
    return <Rotation data={data.products} />;
  }
  return null;
}
