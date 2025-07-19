/*
  Warnings:

  - You are about to drop the column `followUpById` on the `Activity` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_followUpById_fkey";

-- DropIndex
DROP INDEX "Activity_followUpById_idx";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "followUpById",
ADD COLUMN     "assignedToId" TEXT;

-- CreateIndex
CREATE INDEX "Activity_assignedToId_idx" ON "Activity"("assignedToId");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
