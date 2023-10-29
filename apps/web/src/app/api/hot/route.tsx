import { NextResponse } from "next/server";
import type { Product, ProductHot } from "@prisma/client";
import db from "../../../db";

export const GET = async () => {
  const id = 1;

  const hots: ProductHot | null = await db.productHot.findFirst({
    where: {
      hotID: Number(id),
    },
  });
  if (!hots) {
    return new Response("Not Found", { status: 404 });
  }
  const products: Product[] = await db.product.findMany({
    where: {
      productID: {
        in: hots.productIDs,
      },
    },
    orderBy: {
      productID: "asc",
    },
  });

  return NextResponse.json({
    ...hots,
    products,
    productURL: "/api/product/{productID}",
    gameURL: "/api/game/{productID}",
  });
};
