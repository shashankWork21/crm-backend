/*
  Warnings:

  - You are about to drop the column `organisationId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `pointOfContactId` on the `Organisation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pointOfContactId]` on the table `Branch` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_organisationId_fkey";

-- DropForeignKey
ALTER TABLE "Organisation" DROP CONSTRAINT "Organisation_pointOfContactId_fkey";

-- DropIndex
DROP INDEX "Organisation_pointOfContactId_key";

-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "pointOfContactId" TEXT;

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "organisationId",
ADD COLUMN     "branchId" TEXT;

-- AlterTable
ALTER TABLE "Organisation" DROP COLUMN "pointOfContactId";

-- CreateIndex
CREATE UNIQUE INDEX "Branch_pointOfContactId_key" ON "Branch"("pointOfContactId");

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_pointOfContactId_fkey" FOREIGN KEY ("pointOfContactId") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;
