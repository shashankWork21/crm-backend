-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "followUpActivityId" TEXT;

-- CreateIndex
CREATE INDEX "Activity_addedById_idx" ON "Activity"("addedById");

-- CreateIndex
CREATE INDEX "Activity_contactId_idx" ON "Activity"("contactId");

-- CreateIndex
CREATE INDEX "Activity_followUpById_idx" ON "Activity"("followUpById");

-- CreateIndex
CREATE INDEX "Activity_followUpActivityId_idx" ON "Activity"("followUpActivityId");

-- CreateIndex
CREATE INDEX "Activity_needFollowUp_idx" ON "Activity"("needFollowUp");

-- CreateIndex
CREATE INDEX "Activity_isEnquiry_idx" ON "Activity"("isEnquiry");

-- CreateIndex
CREATE INDEX "Activity_followUpDate_idx" ON "Activity"("followUpDate");

-- CreateIndex
CREATE INDEX "Activity_createdAt_idx" ON "Activity"("createdAt");

-- CreateIndex
CREATE INDEX "Activity_title_idx" ON "Activity"("title");

-- CreateIndex
CREATE INDEX "Branch_regionId_idx" ON "Branch"("regionId");

-- CreateIndex
CREATE INDEX "Branch_organisationId_idx" ON "Branch"("organisationId");

-- CreateIndex
CREATE INDEX "Branch_city_idx" ON "Branch"("city");

-- CreateIndex
CREATE INDEX "Branch_type_idx" ON "Branch"("type");

-- CreateIndex
CREATE INDEX "Branch_createdAt_idx" ON "Branch"("createdAt");

-- CreateIndex
CREATE INDEX "Contact_branchId_idx" ON "Contact"("branchId");

-- CreateIndex
CREATE INDEX "Contact_assignedToId_idx" ON "Contact"("assignedToId");

-- CreateIndex
CREATE INDEX "Contact_contactOrgId_idx" ON "Contact"("contactOrgId");

-- CreateIndex
CREATE INDEX "Contact_contactType_idx" ON "Contact"("contactType");

-- CreateIndex
CREATE INDEX "Contact_leadSegment_idx" ON "Contact"("leadSegment");

-- CreateIndex
CREATE INDEX "Contact_leadScore_idx" ON "Contact"("leadScore");

-- CreateIndex
CREATE INDEX "Contact_followUpOn_idx" ON "Contact"("followUpOn");

-- CreateIndex
CREATE INDEX "Contact_createdAt_idx" ON "Contact"("createdAt");

-- CreateIndex
CREATE INDEX "Contact_name_idx" ON "Contact"("name");

-- CreateIndex
CREATE INDEX "Contact_email_idx" ON "Contact"("email");

-- CreateIndex
CREATE INDEX "Contact_phoneNumber_idx" ON "Contact"("phoneNumber");

-- CreateIndex
CREATE INDEX "Note_contactId_idx" ON "Note"("contactId");

-- CreateIndex
CREATE INDEX "Note_createdById_idx" ON "Note"("createdById");

-- CreateIndex
CREATE INDEX "Note_category_idx" ON "Note"("category");

-- CreateIndex
CREATE INDEX "Note_createdAt_idx" ON "Note"("createdAt");

-- CreateIndex
CREATE INDEX "Note_title_idx" ON "Note"("title");

-- CreateIndex
CREATE INDEX "Organisation_name_idx" ON "Organisation"("name");

-- CreateIndex
CREATE INDEX "Organisation_contactOrgId_idx" ON "Organisation"("contactOrgId");

-- CreateIndex
CREATE INDEX "Organisation_createdAt_idx" ON "Organisation"("createdAt");

-- CreateIndex
CREATE INDEX "Region_state_idx" ON "Region"("state");

-- CreateIndex
CREATE INDEX "Region_country_idx" ON "Region"("country");

-- CreateIndex
CREATE INDEX "Region_name_idx" ON "Region"("name");

-- CreateIndex
CREATE INDEX "Region_createdAt_idx" ON "Region"("createdAt");

-- CreateIndex
CREATE INDEX "Schedule_regionId_idx" ON "Schedule"("regionId");

-- CreateIndex
CREATE INDEX "Schedule_createdOrgId_idx" ON "Schedule"("createdOrgId");

-- CreateIndex
CREATE INDEX "Schedule_dayOfMonth_idx" ON "Schedule"("dayOfMonth");

-- CreateIndex
CREATE INDEX "Schedule_createdAt_idx" ON "Schedule"("createdAt");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");

-- CreateIndex
CREATE INDEX "Session_createdAt_idx" ON "Session"("createdAt");

-- CreateIndex
CREATE INDEX "Tag_createdOrganisationId_idx" ON "Tag"("createdOrganisationId");

-- CreateIndex
CREATE INDEX "Tag_tagType_idx" ON "Tag"("tagType");

-- CreateIndex
CREATE INDEX "Tag_title_idx" ON "Tag"("title");

-- CreateIndex
CREATE INDEX "Tag_createdAt_idx" ON "Tag"("createdAt");

-- CreateIndex
CREATE INDEX "Token_userId_idx" ON "Token"("userId");

-- CreateIndex
CREATE INDEX "Token_sessionId_idx" ON "Token"("sessionId");

-- CreateIndex
CREATE INDEX "Token_accessToken_idx" ON "Token"("accessToken");

-- CreateIndex
CREATE INDEX "Token_createdAt_idx" ON "Token"("createdAt");

-- CreateIndex
CREATE INDEX "User_organisationId_idx" ON "User"("organisationId");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_followUpActivityId_fkey" FOREIGN KEY ("followUpActivityId") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
