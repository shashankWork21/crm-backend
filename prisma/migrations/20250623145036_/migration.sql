/*
  Warnings:

  - You are about to drop the column `createdOrgId` on the `Region` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_createdOrgId_fkey";

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "createdOrgId";
