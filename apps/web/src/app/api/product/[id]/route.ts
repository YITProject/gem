import { NextResponse } from "next/server";
import db from "../../../../db";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const { id } = params;
  const product = await db.product.findFirst({
    where: {
      productID: id,
    },
  });
  if (!product) {
    return new Response(null, {
      status: 404,
    });
  }

  return NextResponse.json(product);
};
