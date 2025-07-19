/*
  Warnings:

  - You are about to drop the column `createdById` on the `Organisation` table. All the data in the column will be lost.
  - Added the required column `contactOrgId` to the `Organisation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Organisation" DROP CONSTRAINT "Organisation_createdById_fkey";

-- AlterTable
ALTER TABLE "Organisation" DROP COLUMN "createdById",
ADD COLUMN     "contactOrgId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_contactOrgId_fkey" FOREIGN KEY ("contactOrgId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
