-- CreateEnum
CREATE TYPE "FeedbackPriority" AS ENUM ('NIL', 'URGENT', 'LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "feedback" ADD COLUMN     "priority" "FeedbackPriority" NOT NULL DEFAULT 'NIL';
