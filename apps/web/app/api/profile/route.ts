import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";
import jwt from "../../../common/jwt";

const len = "Bearer ".length;

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
