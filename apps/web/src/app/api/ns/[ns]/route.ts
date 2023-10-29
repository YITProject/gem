import { NextResponse } from "next/server";
import FindNS from "../_ns";

export const GET = async (
  request: Request,
  { params }: { params: { ns: string } },
) => {
  const { ns } = params;
  const user = await FindNS(ns);
  if (!user) {
    return new Response(null, {
      status: 404,
    });
  }
  return NextResponse.json(user);
};
