/*
  Warnings:

  - You are about to drop the column `publicApiKey` on the `domain` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientId]` on the table `domain` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `domain` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "domain_publicApiKey_key";

-- AlterTable
ALTER TABLE "domain" DROP COLUMN "publicApiKey",
ADD COLUMN     "clientId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "domain_clientId_key" ON "domain"("clientId");
