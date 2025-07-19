import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { TagDto } from './dtos/tag.dto';
import { validateTag } from 'src/utils/validations/tag.validation';

@Injectable()
export class TagsService {
  constructor(private readonly db: DbService) {}

  async CreateTag(data: TagDto) {
    const result = validateTag(data);
    if (!result.success) {
      throw new Error(JSON.stringify(result.errors));
    }
    const tag = await this.db.tag.create({
      data,
    });
    return tag;
  }

  async updateTag(id: string, data: TagDto) {
    const result = validateTag(data);
    if (!result.success) {
      throw new Error(JSON.stringify(result.errors));
    }
    const tag = await this.db.tag.update({
      where: { id },
      data,
    });
    return tag;
  }

  async deleteTag(id: string) {
    const tag = await this.db.tag.delete({
      where: { id },
    });
    return tag;
  }

  async getTagsByOrganisation(organisationId: string) {
    const tags = await this.db.tag.findMany({
      where: {
        createdOrganisationId: organisationId,
      },
    });
    return tags;
  }

  async connectTagsToOrganisation(tagIds: string[], organisationId: string) {
    await this.db.organisation.update({
      where: { id: organisationId },
      data: {
        tags: {
          set: tagIds.map((id) => ({ id })),
        },
      },
    });
    return {
      success: true,
      message: 'Tags connected to organisation successfully',
    };
  }

  async connectTagsToActivity(tagIds: string[], activityId: string) {
    await this.db.activity.update({
      where: { id: activityId },
      data: {
        tags: {
          set: tagIds.map((id) => ({ id })),
        },
      },
    });
    return {
      success: true,
      message: 'Tags connected to activity successfully',
    };
  }

  async connectTagsToContact(tagIds: string[], contactId: string) {
    await this.db.contact.update({
      where: { id: contactId },
      data: {
        tags: {
          set: tagIds.map((id) => ({ id })),
        },
      },
    });
    return {
      success: true,
      message: 'Tags connected to contact successfully',
    };
  }
}
