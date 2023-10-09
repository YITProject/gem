import { NextRequest, NextResponse } from "next/server";
import db from "../../../db";
import jwt from "../../../common/jwt";
import { User } from "@prisma/client";
import { testEmail } from "../../../common";
import { UserDataSafeType } from "../../../state";

type dataType = {
  email?: string;
  namespace?: string;
  password: string;
};
export const POST = async (req: NextRequest) => {
  const data = (await req.json()) as dataType;
  let where: dataType;
  if (data.email && testEmail(data.email)) {
    where = {
      email: data.email,
      password: data.password,
    };
  } else {
    where = {
      namespace: data.namespace,
      password: data.password,
    };
  }
  const find: User | null = await db.user.findFirst({ where });
  if (find) {
    const token = jwt.sign({
      userID: find.userID,
      email: find.email,
      namespace: find.namespace,
      displayName: find.displayName,
      location: find.location,
      createAt: find.createdAt,
    } as UserDataSafeType);
    return NextResponse.json({ token, to: "/profile" });
  }
};
