/*
  Warnings:

  - You are about to drop the column `isEnquiry` on the `Activity` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('ENQUIRY', 'QUOTATION_REQUEST', 'PURCHASE_ORDER', 'INVOICE', 'PAYMENT', 'DELIVERY', 'RETURN', 'COMPLAINT', 'MISCELLANEOUS');

-- DropIndex
DROP INDEX "Activity_isEnquiry_idx";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "isEnquiry",
ADD COLUMN     "type" "ActivityType" NOT NULL DEFAULT 'MISCELLANEOUS';

-- CreateIndex
CREATE INDEX "Activity_type_idx" ON "Activity"("type");
