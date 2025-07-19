/*
  Warnings:

  - Added the required column `createdOrgId` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "createdOrgId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_createdOrgId_fkey" FOREIGN KEY ("createdOrgId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
