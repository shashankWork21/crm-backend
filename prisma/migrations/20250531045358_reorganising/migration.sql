/*
  Warnings:

  - You are about to drop the column `activityTypeId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the `ActivityType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_activityTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityType" DROP CONSTRAINT "ActivityType_organisationId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "activityTypeId",
ADD COLUMN     "needFollowUp" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "ActivityType";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdOrganisationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Organisation Tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Organisation Tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Activity Tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Activity Tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Contact Tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Contact Tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Organisation Tags_B_index" ON "_Organisation Tags"("B");

-- CreateIndex
CREATE INDEX "_Activity Tags_B_index" ON "_Activity Tags"("B");

-- CreateIndex
CREATE INDEX "_Contact Tags_B_index" ON "_Contact Tags"("B");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_createdOrganisationId_fkey" FOREIGN KEY ("createdOrganisationId") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Organisation Tags" ADD CONSTRAINT "_Organisation Tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Organisation Tags" ADD CONSTRAINT "_Organisation Tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Activity Tags" ADD CONSTRAINT "_Activity Tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Activity Tags" ADD CONSTRAINT "_Activity Tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact Tags" ADD CONSTRAINT "_Contact Tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Contact Tags" ADD CONSTRAINT "_Contact Tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
