-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "namespace" TEXT NOT NULL,
    "displayName" TEXT,
    "avatarURL" TEXT,
    "location" TEXT NOT NULL DEFAULT 'us',
    "type" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Password" (
    "userID" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "twofa" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemID" TEXT NOT NULL,
    "ownerID" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productID" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemID")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cardID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "productID" TEXT,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cardID")
);

-- CreateTable
CREATE TABLE "AccessToken" (
    "userID" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "AccessToken_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "Product" (
    "authorID" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iconURL" TEXT,
    "resourcesURLs" TEXT[],
    "summary" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "comment" DOUBLE PRECISION NOT NULL,
    "labels" TEXT[],
    "deverlopers" TEXT[],
    "issuers" TEXT[],
    "type" TEXT NOT NULL DEFAULT 'game',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productID")
);

-- CreateTable
CREATE TABLE "ProductHot" (
    "hotID" SERIAL NOT NULL,
    "productIDs" TEXT[],

    CONSTRAINT "ProductHot_pkey" PRIMARY KEY ("hotID")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderID" SERIAL NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,
    "toID" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "total" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderID")
);

-- CreateTable
CREATE TABLE "OrderDetails" (
    "orderDetailsID" TEXT NOT NULL,
    "orderID" INTEGER NOT NULL,
    "productID" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "OrderDetails_pkey" PRIMARY KEY ("orderDetailsID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_namespace_key" ON "User"("namespace");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessToken" ADD CONSTRAINT "AccessToken_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("orderID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productID") ON DELETE RESTRICT ON UPDATE CASCADE;
