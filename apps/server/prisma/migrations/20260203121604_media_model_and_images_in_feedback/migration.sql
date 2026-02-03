/*
  Warnings:

  - You are about to drop the column `screenshotUrl` on the `feedback` table. All the data in the column will be lost.
  - You are about to drop the `domain_whitelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "domain_whitelist" DROP CONSTRAINT "domain_whitelist_userId_fkey";

-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "screenshotUrl";

-- DropTable
DROP TABLE "domain_whitelist";

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT,
    "size" INTEGER,
    "feedbackId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "feedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;
