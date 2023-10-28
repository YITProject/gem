import { Prisma, PrismaClient } from "@prisma/client";
import { sha1 } from "common";

const prisma = new PrismaClient();
void (async () => {
  // const user1 = await prisma.user.create({
  //   data: {
  //     email: "example@example.net",
  //     namespace: "example0",
  //     password: sha1("123"),
  //   },
  // });
  // console.log(user1);
  const find = await prisma.user.findFirst({
    where: {
      email: "example@example.net",
    },
  });
  console.log(find);
  // const product = await prisma.product.create({
  //   data: {
  //     name: "First Product",
  //     summary: "First Product Summary",
  //     authorID: user1.userID,
  //     price: new Prisma.Decimal(99.99),
  //   },
  // });
  // const order = await prisma.order.create({
  //   data: {
  //     userID: user1.userID,
  //     total: product.price,
  //   },
  // });
  // const orderDetails = await prisma.orderDetails.create({
  //   data: {
  //     orderID: order.orderID,
  //     productID: product.productID,
  //   },
  // });
  // // eslint-disable-next-line no-console
  // console.log(orderDetails);
})();
