-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "createdOrgId" TEXT;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_createdOrgId_fkey" FOREIGN KEY ("createdOrgId") REFERENCES "Organisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
