import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { User } from "@prisma/client";
import db from "../../../db";
import jwt from "../../../common/jwt";

type DataType = {
  email: string;
  namespace: string;
  password: string;
} & Partial<User>;
export const POST = async (req: NextRequest) => {
  const data = (await req.json()) as DataType;
  if (!data.email || !data.namespace || !data.password) {
    return new Response("Illegal request", { status: 400 });
  }
  const findExists: User[] = await db.user.findMany({
    where: {
      OR: [{ email: data.email }, { namespace: data.namespace }],
    },
  });
  if (findExists.length > 0) {
    return new Response("404 Not found", { status: 400 });
  }
  const createdata = {
    email: data.email,
    namespace: data.namespace,
    displayName: data.displayName || data.namespace,
    location: data.location || "us",
    type: data.type || "user",
    createdAt: new Date(),
  } as User;
  const payload: User = await db.user.create({
    data: createdata,
  });
  const token = jwt.sign(payload);

  return NextResponse.json({ token, to: "/profile" });
};
