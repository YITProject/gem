import { NextResponse } from "next/server";
import type { User } from "@prisma/client";
import db from "../../../../db";
import FindNS from "../../ns/_ns";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const url = new URL(request.url);
  const useNS = url.searchParams.get("ns");

  const { id } = params;

  let user: User | null;
  if (useNS !== null) {
    user = await FindNS(id);
  } else {
    user = await db.user.findFirst({
      where: {
        userID: id,
      },
    });
  }
  if (!user) {
    return new Response(null, {
      status: 404,
    });
  }
  return NextResponse.json(user);
};
