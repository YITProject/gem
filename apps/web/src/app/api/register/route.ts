import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";
import type { User } from "@prisma/client";
import db from "../../../db";
import jwt from "../../../common/jwt";
import type { UserDataSafeType } from "../../../state";

type DataType = {
  email: string;
  namespace: string;
  password: string;
} & Partial<User>;
export const POST = async (req: NextRequest) => {
  const data = (await req.json()) as DataType;
  if (!data.email || !data.namespace || !data.password) {
    return NextResponse.json({
      message: "Illegal field",
    });
  }
  const findExists: User[] = await db.user.findMany({
    where: {
      OR: [{ email: data.email }, { namespace: data.namespace }],
    },
  });
  if (findExists.length > 0) {
    return NextResponse.json({
      message: "Already exists",
    });
  }
  const createdata: UserDataSafeType = {
    email: data.email,
    namespace: data.namespace,
    displayName: data.displayName || data.namespace,
    location: data.location || "us",
    type: data.type || "user",
    createdAt: new Date(),
  };
  await db.user.create({
    data: {
      ...createdata,
      password: data.password,
    },
  });
  const token = jwt.sign(createdata);

  return NextResponse.json({ token, to: "/profile" });
};
