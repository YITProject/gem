import type { User } from "@prisma/client";
import db from "../../../db";
import { sign } from "../../../common/jwt";
import Client from "./_client";

export default async function _({
  searchParams,
}: {
  searchParams?: { code?: string };
}) {
  if (!searchParams) {
    return;
  }
  const { code } = searchParams;
  if (!code) {
    return;
  }
  const data = await fetch("http:localhost:9527/api/user", {
    method: "get",
  })
    .then(
      (res) =>
        res.json() as unknown as {
          email: string;
        },
    )
    .catch(() => null);
  if (!data) {
    return;
  }
  let userInfo: User | null;
  userInfo = await db.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (!userInfo) {
    userInfo = await db.user.create({
      data: {
        email: data.email,
      },
    });
  }
  const token = sign(userInfo);

  return <Client token={token} />;
}
