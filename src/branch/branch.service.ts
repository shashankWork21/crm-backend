import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateBranchDto } from './dto/branch.dto';
import { validateBranchData } from 'src/utils/validations/branch.validation';
import { Branch, BranchType } from 'prisma-client';

@Injectable()
export class BranchService {
  constructor(private readonly db: DbService) {}

  async createBranch(data: CreateBranchDto) {
    const { success, errors } = validateBranchData(data);
    if (!success) {
      throw new Error(JSON.stringify(errors));
    }

    try {
      const branch = await this.db.branch.create({
        data,
      });
      return branch;
    } catch (error) {
      throw new Error('Error creating branch: ' + error.message);
    }
  }

  async getBranchesByOrganisationId(organisationId: string) {
    const branches = await this.db.branch.findMany({
      where: {
        organisationId,
      },
    });
    return branches;
  }

  async updateBranchById(id: string, data: Partial<CreateBranchDto>) {
    const branch = await this.db.branch.update({
      where: { id },
      data,
    });
    return branch;
  }

  async deleteBranchById(id: string) {
    const branch = await this.db.branch.findUnique({
      where: { id },
    });
    if (branch?.type === BranchType.HEADQUARTERS) {
      throw new Error(
        JSON.stringify({
          _form: ['You cannot delete the headquarters'],
        }),
      );
    }
    await this.db.branch.delete({
      where: { id },
    });
    return branch;
  }

  async forceDeleteBranchById(id: string) {
    const branch = await this.db.branch.delete({
      where: { id },
    });
    return branch;
  }

  async bulkCreateBranches(data: CreateBranchDto[]) {
    try {
      const branches = await this.db.$transaction(async (tx) => {
        const results: Branch[] = [];
        for (const branchData of data) {
          const existingBranch = await tx.branch.findFirst({
            where: {
              organisationId: branchData.organisationId,
              type: BranchType.HEADQUARTERS,
            },
          });

          if (existingBranch) {
            const updated = await tx.branch.update({
              where: { id: existingBranch.id },
              data: branchData,
            });
            results.push(updated);
          } else {
            const created = await tx.branch.create({ data: branchData });
            results.push(created);
          }
        }
        return results;
      });
      return branches;
    } catch (error) {
      throw new Error('Error creating branches: ' + error.message);
    }
  }

  async getAll() {
    const branches = await this.db.branch.findMany({});
    return branches;
  }

  async deleteAll() {
    const branches = await this.db.branch.deleteMany({});
    return branches;
  }
}
