import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateOrganisationDto } from './dtos/create-organisation.dto';
import { Organisation, Role } from 'prisma-client';
import { validateOrganisationData } from 'src/utils/validations/organisation.validation';

@Injectable()
export class OrganisationService {
  constructor(private readonly db: DbService) {}

  async getAll() {
    const organisations = await this.db.organisation.findMany({});
    return organisations;
  }

  async deleteAll() {
    const organisations = await this.db.organisation.deleteMany({});
    return organisations;
  }

  async createEmployedOrganisation(
    data: CreateOrganisationDto,
    userId: string,
  ) {
    const { success, errors } = validateOrganisationData(data);
    if (!success) {
      throw new Error(JSON.stringify(errors));
    }

    const organisation = await this.db.organisation.create({
      data: {
        ...data,
      },
    });

    const user = await this.db.user.update({
      where: { id: userId },
      data: {
        organisationId: organisation.id,
      },
    });

    return organisation;
  }
  async createContactOrganisation(
    data: CreateOrganisationDto,
    organisationId: string,
  ) {
    const organisation = await this.db.organisation.create({
      data: {
        ...data,
        contactOrgId: organisationId,
      },
    });
    return organisation;
  }

  async findContactOrganisations(organisationId: string) {
    const organisations = await this.db.organisation.findMany({
      where: {
        contactOrgId: organisationId,
      },
      include: {
        branches: {
          include: {
            region: true,
          },
        },
      },
    });

    return organisations;
  }

  async updateOrganisationById(
    id: string,
    data: Partial<CreateOrganisationDto>,
  ) {
    const organisation = await this.db.organisation.update({
      where: { id },
      data,
    });
    return organisation;
  }

  async deleteOrganisationById(id: string, userId: string) {
    const organisation = await this.db.organisation.findUnique({
      where: { id },
      include: { team: true },
    });
    const user = await this.db.user.findUnique({
      where: { id: userId },
    });
    const condition =
      organisation?.contactOrgId === user?.organisationId ||
      organisation?.team.some(
        (member) => member.id === userId && member.role === Role.ADMIN,
      );
    if (!condition) {
      throw new Error('You are not authorized to delete this organisation');
    }
    const deletedOrganisation = await this.db.organisation.delete({
      where: { id },
    });
    return deletedOrganisation;
  }

  async findOrganisationById(id: string) {
    const organisation = await this.db.organisation.findUnique({
      where: { id },
      include: {
        branches: {
          include: {
            region: true,
          },
        },
      },
    });
    return organisation;
  }

  async bulkCreateOrganisations(
    data: CreateOrganisationDto[],
    organisationId: string,
  ) {
    return this.db.$transaction(async (tx) => {
      const organisations: Organisation[] = [];

      for (const organisationData of data) {
        const existingOrganisation = await tx.organisation.findFirst({
          where: {
            name: organisationData.name,
            contactOrgId: organisationId,
          },
        });
        if (existingOrganisation) {
          await tx.organisation.update({
            where: { id: existingOrganisation.id },
            data: {
              name: organisationData.name,
            },
          });
          organisations.push(existingOrganisation);
          continue;
        }
        const organisation = await tx.organisation.create({
          data: {
            ...organisationData,
            contactOrgId: organisationId,
          },
        });
        organisations.push(organisation);
      }

      return organisations;
    });
  }

  async findTeamOrganisations() {
    const organisations = await this.db.organisation.findMany({
      where: {
        team: {
          some: {},
        },
      },
      include: {
        team: true,
      },
    });

    return organisations;
  }

  async searchOrganisationsByName(searchTerm: string) {
    const organisations = await this.db.organisation.findMany({
      where: {
        name: {
          contains: searchTerm,
          mode: 'insensitive', // Case-insensitive search
        },
      },
      include: {
        branches: {
          include: {
            region: true,
          },
        },
        team: true,
      },
    });

    return organisations;
  }

  
}
