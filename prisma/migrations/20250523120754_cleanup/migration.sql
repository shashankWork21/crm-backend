/*
  Warnings:

  - You are about to drop the column `city` on the `Region` table. All the data in the column will be lost.
  - Added the required column `city` to the `Branch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "city" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "city";
