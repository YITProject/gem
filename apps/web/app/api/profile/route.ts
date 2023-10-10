import { NextRequest, NextResponse } from "next/server";
const len = "Bearer ".length;
import jwt from "../../../common/jwt";
export const POST = (req: NextRequest) => {
  const { headers } = req;
  let auth = headers.get("Authorization");
  if (!auth || auth.length < len) {
    return NextResponse.json({
      message: "Invalid token",
    });
  }
  auth = auth.slice(len);
  jwt.verify(auth);
  return NextResponse.json({ token: auth });
};
