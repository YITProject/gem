import { NextResponse } from "next/server";
export const POST = () => {
  return NextResponse.json({
    message: "hello",
  });
};