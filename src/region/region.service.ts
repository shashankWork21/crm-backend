import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { Region } from 'prisma-client';
import { validateRegionData } from 'src/utils/validations/region.validation';

@Injectable()
export class RegionService {
  constructor(private readonly db: DbService) {}

  async createRegion(data: CreateRegionDto): Promise<Region> {
    const { success, errors } = validateRegionData(data);
    if (!success) {
      throw new Error(JSON.stringify(errors));
    }
    return await this.db.region.create({
      data,
    });
  }

  async findAll() {
    return await this.db.region.findMany();
  }

  async findOne(id: string): Promise<Region> {
    const region = await this.db.region.findUnique({
      where: { id },
    });

    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }

    return region;
  }

  async updateRegion(
    id: string,
    data: Partial<CreateRegionDto>,
  ): Promise<Region> {
    try {
      return await this.db.region.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
  }

  async deleteRegion(id: string): Promise<Region> {
    try {
      return await this.db.region.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }
  }

  async deleteAllRegions(): Promise<{ count: number }> {
    return await this.db.region.deleteMany();
  }

  async bulkCreateRegions(data: CreateRegionDto[]): Promise<Array<Region>> {
    try {
      const results: Region[] = [];

      await this.db.$transaction(async (prisma) => {
        for (const regionData of data) {
          // Check if region already exists with same name and state
          const existingRegion = await prisma.region.findFirst({
            where: {
              name: regionData.name,
              state: regionData.state,
            },
          });
          if (existingRegion) {
            results.push(existingRegion);
          } else {
            const { success, errors } = validateRegionData(regionData);
            if (!success) {
              throw new Error(JSON.stringify(errors));
            }
            const newRegion = await prisma.region.create({
              data: regionData,
            });
            results.push(newRegion);
          }
        }
      });

      return results;
    } catch (error) {
      throw new Error('Error processing regions: ' + error.message);
    }
  }

  async getRegionsByOrganisationId(organisationId: string) {
    const regions = await this.db.region.findMany({
      include: {
        schedules: {
          where: {
            createdOrgId: organisationId,
          },
        },
      },
    });
    return regions;
  }
}
