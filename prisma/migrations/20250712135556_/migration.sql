-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "followUpById" TEXT,
ADD COLUMN     "followUpDate" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_followUpById_fkey" FOREIGN KEY ("followUpById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
