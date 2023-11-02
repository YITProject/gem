import { NextResponse } from "next/server";
import type { Cart, User } from "@prisma/client";
import { parse } from "../../../common/jwt";
import db from "../../../db";

export const GET = async (res: Request) => {
  const token = res.headers.get("TOKEN");
  if (!token) {
    return ResponseEmpty();
  }
  const obj = parse(token);
  if (!obj || typeof obj !== "object") {
    return ResponseEmpty();
  }
  const { userID } = obj;

  const cart = await db.cart.findMany({
    where: {
      userID,
    },
    include: {
      Product: true,
    },
  });

  return NextResponse.json(cart);
};
export const PUT = async (res: Request) => {
  const token = res.headers.get("TOKEN");
  const { productID, count } = (await res.json()) as {
    productID: string;
    count?: number;
  };
  if (!token || !productID) {
    return ResponseEmpty();
  }
  const obj = parse(token);
  if (!obj || typeof obj !== "object") {
    return ResponseEmpty();
  }
  const { userID } = obj as User;

  // 查询购物车表中是否存在匹配的数据
  const existingCart = await db.cart.findFirst({
    where: {
      productID,
      userID,
    },
  });
  let updatedCart: Cart;
  if (existingCart) {
    updatedCart = await db.cart.update({
      where: {
        cartID: existingCart.cartID,
      },
      data: {
        count,
      },
    });
  } else {
    updatedCart = await db.cart.create({
      data: {
        productID,
        count,
        userID,
      },
    });
  }
  return NextResponse.json(updatedCart);
};

export const DELETE = async (res: Request) => {
  const token = res.headers.get("TOKEN");
  const { productID } = (await res.json()) as {
    productID: string;
  };
  if (!token || !productID) {
    return ResponseEmpty();
  }
  const obj = parse(token);
  if (!obj || typeof obj !== "object") {
    return ResponseEmpty();
  }

  const { userID } = obj as User;

  const findCart = await db.cart.findFirst({
    where: {
      productID,
      userID,
    },
  });
  const updatedCart = await db.cart.delete({
    where: {
      cartID: findCart?.cartID,
    },
  });

  return NextResponse.json(updatedCart);
};

function ResponseEmpty() {
  return new Response("Invalid request", {
    status: 400,
  });
}
