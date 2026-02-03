/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `domain` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `domain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `domain` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DOMAIN_STATUS" AS ENUM ('ACTIVE', 'PAUSED', 'INACTIVE');

-- AlterTable
ALTER TABLE "domain" ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "status" "DOMAIN_STATUS" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "domain_clientId_key" ON "domain"("clientId");
