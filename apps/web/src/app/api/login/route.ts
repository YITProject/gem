import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { Password, User } from "@prisma/client";
import db from "../../../db";
import jwt from "../../../common/jwt";
import { testEmail } from "../../../common";

type DataType = Partial<{
  email: string;
  namespace: string;
  password: string;
}>;
export const POST = async (req: NextRequest) => {
  const data = (await req.json()) as DataType;
  if (!data.password) {
    return new Response("Illegal request", { status: 400 });
  }
  let where: DataType;
  if (data.email && testEmail(data.email)) {
    where = {
      email: data.email,
    };
  } else {
    where = {
      namespace: data.namespace,
    };
  }
  const findUser: User | null = await db.user.findFirst({ where });
  if (!findUser) {
    return new Response("404 Not found", { status: 404 });
  }

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const findPassword: Password | null = await db.password.findFirst({
    where: { userID: findUser.userID, password: data.password },
  });

  if (!findPassword || findPassword.userID !== findUser.userID) {
    return new Response("404 Not found", { status: 404 });
  }

  const token = jwt.sign(findUser);
  return NextResponse.json({ token, to: "/profile" });
};
