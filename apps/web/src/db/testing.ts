/* eslint-disable @typescript-eslint/no-unused-vars */
import crypto from "node:crypto";
import type {
  Cart,
  Item,
  Order,
  OrderDetails,
  Product,
  User,
} from "@prisma/client";
import { Prisma, PrismaClient } from "@prisma/client";

export const sha1 = (data: string) => {
  return crypto.createHash("sha1").update(data).digest("hex");
};

const db = new PrismaClient();
async function createUser(data: Partial<User>) {
  if (data.password) {
    data.password = sha1(data.password);
  }
  return db.user.create({
    data: data as User,
  }) as Promise<User>;
}

void (async () => {
  const userExampleA: User = await createUser({
    namespace: "examplea",
    displayName: "exampleA",
    email: "a@example.com",
    password: "unset",
    location: "ru",
    avatarURL: null,
    type: "user",
  });
  const userExampleB: User = await createUser({
    namespace: "exampleb",
    displayName: "exampleB",
    email: "b@example.com",
    password: "unset",
    location: "de",
    avatarURL: null,
    type: "user",
  });
  const userRockstar: User = await createUser({
    namespace: "rockstar",
    displayName: "Rockstar Games",
    email: "service@rockstargames.com",
    password: "unset",
    location: "uk",
    avatarURL: "/avatar/rockstar.jpg",
    type: "organization",
  });
  const userEa: User = await createUser({
    namespace: "ea",
    email: "service@ea.com",
    password: "unset",
    location: "us",
    avatarURL: "/avatar/ea.jpg",
    type: "organization",
  });
  const userValve: User = await createUser({
    namespace: "valve",
    displayName: "Valve",
    email: "service@valve.com",
    password: "unset",
    location: "us",
    avatarURL: "/avatar/valve.jpg",
    type: "organization",
  });
  const user2k: User = await createUser({
    namespace: "2k",
    displayName: "2K Games",
    email: "2k@take2games.com",
    password: "unset",
    location: "us",
    avatarURL: "/avatar/2k.webp",
    type: "organization",
  });
  const userInd: User = await createUser({
    namespace: "indienova",
    displayName: "Indienova",
    email: "service@indienova.com",
    password: "unset",
    location: "cn",
    avatarURL: "/avatar/indienova.png",
    type: "organization",
  });

  const prods: Product[] = [
    // TODO games
    {
      productID: "gta5",
      name: "Grand Theft Auto V",
      authorID: userRockstar.userID,
      price: new Prisma.Decimal(19),
      avatarURL: "",
      summary: "GTA5",
      comment: 0.98,
      labels: ["crime", "openWorld", "act"],
      deverlopers: ["Rockstar North"],
      issuers: ["Rockstar Games"],
      type: "game",
    },
    {
      productID: "rdr2",
      name: "Red Dead Redemption 2",
      authorID: userRockstar.userID,
      price: new Prisma.Decimal(29),
      avatarURL: "",
      summary: "RDR2",
      comment: 0.87,
      labels: ["crime", "openWorld", "act"],
      deverlopers: ["Rockstar San Diego"],
      issuers: ["Rockstar Games"],
      type: "game",
    },
    {
      productID: "bf5",
      name: "Battlefield 5",
      authorID: userEa.userID,
      price: new Prisma.Decimal(9),
      avatarURL: "",
      summary: "BF5",
      comment: 0.4,
      labels: ["fps"],
      deverlopers: ["DICE"],
      issuers: ["Electronic Arts"],
      type: "game",
    },
    {
      productID: "cs",
      name: "Counter Strike 2",
      authorID: userValve.userID,
      price: new Prisma.Decimal(0),
      avatarURL: "",
      summary: "CS2",
      labels: ["fps"],
      comment: 0.07,
      deverlopers: ["Valve"],
      issuers: ["Valve"],
      type: "game",
    },
    {
      productID: "nba2k24",
      name: "NBA 2K24",
      authorID: user2k.userID,
      price: new Prisma.Decimal(39),
      avatarURL: "",
      summary: "",
      labels: ["sports"],
      comment: 0.31,
      deverlopers: ["2K Sports"],
      issuers: ["2K Sports"],
      type: "game",
    },
    {
      productID: "loveisallaround",
      name: "完蛋我被美女包围了",
      authorID: userInd.userID,
      labels: ["sexy", "story"],
      avatarURL: "",
      summary: "完蛋我被美女包围了",
      price: new Prisma.Decimal(6.9),
      comment: 0.77,
      deverlopers: ["Intiny"],
      issuers: ["Intiny"],
      type: "game",
    },
    // TODO dlcs
    {
      productID: "nba2k24_dlc_kun",
      name: "NBA Hero Kun",
      authorID: user2k.userID,
      price: new Prisma.Decimal(9),
      avatarURL: "",
      summary: "",
      labels: ["sports"],
      comment: 0.99,
      deverlopers: ["2K Sports"],
      issuers: ["2K Sports"],
      type: "dlc",
    },
    {
      productID: "nba2k24_dlc_kobe",
      name: "NBA Hero Kobe",
      authorID: user2k.userID,
      price: new Prisma.Decimal(19),
      avatarURL: "",
      summary: "",
      labels: ["sports"],
      comment: 0.39,
      deverlopers: ["2K Sports"],
      issuers: ["2K Sports"],
      type: "dlc",
    },
  ];

  await db.product.createMany({
    data: prods,
  });

  const cartA1: Cart = await db.cart.create({
    data: {
      userID: userExampleA.userID,
      productID: prods[0].productID,
      count: 1,
    },
  });
  const cartA2: Cart = await db.cart.create({
    data: {
      userID: userExampleA.userID,
      productID: prods[1].productID,
      count: 1,
    },
  });
  const priceA1: Product = (await db.product.findFirst({
    where: {
      productID: cartA1.productID!,
    },
  }))!;
  const priceA2: Product = (await db.product.findFirst({
    where: {
      productID: cartA2.productID!,
    },
  }))!;
  const total = priceA1.price.plus(priceA2.price);
  const orderA: Order = await db.order.create({
    data: {
      userID: userExampleA.userID,
      total,
    },
  });
  const orderDetailsA1: OrderDetails = await db.orderDetails.create({
    data: {
      orderID: orderA.orderID,
      productID: prods[0].productID,
    },
  });
  const orderDetailsA2: OrderDetails = await db.orderDetails.create({
    data: {
      orderID: orderA.orderID,
      productID: prods[1].productID,
    },
  });
  const orderAcompleted: Order = await db.order.update({
    where: {
      orderID: orderA.orderID,
    },
    data: {
      status: "completed",
    },
  });
  const orderItems: OrderDetails[] = await db.orderDetails.findMany({
    where: {
      orderID: orderAcompleted.orderID,
    },
  });

  const ownerID = orderAcompleted.userID;

  const newItems: Item[] = await Promise.all(
    orderItems.map((orderItem: OrderDetails) => {
      return db.item.create({
        data: { productID: orderItem.productID, ownerID },
      });
    }),
  );
})();
