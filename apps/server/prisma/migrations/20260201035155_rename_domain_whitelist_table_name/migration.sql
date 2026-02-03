/*
  Warnings:

  - You are about to drop the `Domain_Whitelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Domain_Whitelist" DROP CONSTRAINT "Domain_Whitelist_userId_fkey";

-- DropTable
DROP TABLE "Domain_Whitelist";

-- CreateTable
CREATE TABLE "domain_whitelist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "domain_whitelist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "domain_whitelist_url_key" ON "domain_whitelist"("url");

-- AddForeignKey
ALTER TABLE "domain_whitelist" ADD CONSTRAINT "domain_whitelist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
