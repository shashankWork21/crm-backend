import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { Contact } from 'prisma-client';
import { validateContactData } from 'src/utils/validations/contact.validation';

@Injectable()
export class ContactService {
  constructor(private readonly db: DbService) {}

  async createContact(data: CreateContactDto) {
    const { success, errors } = validateContactData(data);
    if (!success) {
      throw new Error(JSON.stringify(errors));
    }
    const contact = await this.db.contact.create({
      data,
    });
    return contact;
  }

  async getContactsByOurOrganisationId(organisationId: string) {
    const contacts = await this.db.contact.findMany({
      where: { contactOrgId: organisationId },
      include: {
        branch: {
          include: {
            region: true,
            organisation: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    return contacts;
  }

  async getContactByTheirOrganisationId(organisationId: string) {
    const contacts = await this.db.contact.findMany({
      where: {
        branch: {
          organisationId,
        },
      },
      include: {
        branch: {
          include: {
            organisation: true,
            region: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        activities: true,
      },
    });
    return contacts;
  }

  async updateContactById(id: string, data: Partial<CreateContactDto>) {
    const contact = await this.db.contact.update({
      where: { id },
      data,
    });
    return contact;
  }

  async assignContact(id: string, userId: string) {
    const contact = await this.db.contact.update({
      where: { id },
      data: { assignedToId: userId },
    });
    return contact;
  }

  async updateContactBranch(id: string, branchId: string) {
    const contact = await this.db.contact.update({
      where: { id },
      data: { branchId },
    });
    return contact;
  }

  async updateFollowUp(id: string, followUpOn: Date) {
    const contact = await this.db.contact.update({
      where: { id },
      data: { followUpOn },
    });
    return contact;
  }

  async bulkContactCreate(data: CreateContactDto[]) {
    return this.db.$transaction(
      async (tx) => {
        const contacts: Contact[] = [];

        for (const contactData of data) {
          const existingContact = await tx.contact.findFirst({
            where: {
              name: contactData.name,
              phoneNumber: contactData.phoneNumber,
              contactOrgId: contactData.contactOrgId,
            },
          });
          if (existingContact) {
            await tx.contact.update({
              where: { id: existingContact.id },
              data: contactData,
            });
            contacts.push(existingContact);
            continue;
          }
          const contact = await tx.contact.create({
            data: contactData,
          });
          contacts.push(contact);
        }

        return contacts;
      },
      { maxWait: 10000, timeout: 30000 },
    );
  }

  async deleteContactById(id: string) {
    const contact = await this.db.contact.delete({
      where: { id },
    });
    return contact;
  }

  async getUpcomingFollowUpContacts(organisationId: string) {
    const contacts = await this.db.contact.findMany({
      where: {
        followUpOn: {
          gte: new Date(),
        },
        contactOrgId: organisationId,
      },
      include: {
        branch: {
          include: {
            region: true,
            organisation: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return contacts;
  }

  async getOverdueFollowUpContacts(organisationId: string) {
    const contacts = await this.db.contact.findMany({
      where: {
        followUpOn: {
          lt: new Date().toISOString(),
        },
        contactOrgId: organisationId,
      },
      include: {
        branch: {
          include: {
            region: true,
            organisation: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return contacts;
  }

  async getContactsByRegionSchedule(organisationId: string, day: number) {
    const contacts = await this.db.contact.findMany({
      where: {
        followUpFrequency: null,
        branch: {
          region: {
            schedules: {
              some: {
                dayOfMonth: day,
                createdOrgId: organisationId,
              },
            },
          },
        },
      },
      include: {
        branch: {
          include: {
            organisation: true,
            region: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return contacts;
  }

  async searchContacts(organisationId: string, query: string) {
    const contacts = await this.db.contact.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { phoneNumber: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
        ],
        contactOrgId: organisationId,
      },
      include: {
        branch: {
          include: {
            organisation: true,
            region: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }
}
