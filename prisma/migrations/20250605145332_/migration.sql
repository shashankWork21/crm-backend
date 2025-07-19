/*
  Warnings:

  - Added the required column `contactOrgId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "contactOrgId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_contactOrgId_fkey" FOREIGN KEY ("contactOrgId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
