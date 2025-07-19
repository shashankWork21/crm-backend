import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateActivityDto } from './dtos/create-activity.dto';
import { ActivityType } from 'prisma-client';

@Injectable()
export class ActivityService {
  constructor(private readonly db: DbService) {}

  async createActivity(data: CreateActivityDto) {
    try {
      const activity = await this.db.activity.create({
        data,
      });
      return activity;
    } catch (error) {
      throw new Error('Error creating activity: ' + error.message);
    }
  }

  async getActivitiesByContact(contactId: string) {
    const activities = await this.db.activity.findMany({
      where: {
        contactId,
        followUpActivityId: null,
      },
      include: {
        addedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
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
    return activities;
  }

  async getActivityById(id: string) {
    const activity = await this.db.activity.findUnique({
      where: { id },
    });
    return activity;
  }

  async updateActivity(id: string, data: Partial<CreateActivityDto>) {
    const activity = await this.db.activity.update({
      where: { id },
      data,
    });
    return activity;
  }

  async deleteActivity(id: string) {
    const activity = await this.db.activity.delete({
      where: { id },
    });
    return activity;
  }

  async getActivitiesByOrganisation(organisationId: string) {
    const activities = await this.db.activity.findMany({
      where: {
        contact: {
          branch: {
            organisationId,
          },
        },
      },
    });
    return activities;
  }

  async getActivitiesByOurOrganisation(organisationId: string) {
    const activities = await this.db.activity.findMany({
      where: {
        addedBy: {
          organisationId,
        },
      },
    });
    return activities;
  }

  async getFollowUpActivities(organisationId: string) {
    const activities = await this.db.activity.findMany({
      where: {
        needFollowUp: true,
        addedBy: {
          organisationId,
        },
      },
      include: {
        assignedTo: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return activities;
  }

  async filterActivitiesByQuery(
    organisationId: string,
    types: ActivityType[],
    needFollowUp?: boolean,
    overdue?: boolean,
  ) {
    const activityQuery = {
      addedBy: {
        organisationId,
      },
    };
    if (types && types.length > 0) {
      activityQuery['type'] = {
        in: types.map(
          (type) => ActivityType[type as keyof typeof ActivityType],
        ),
      };
    }

    if (needFollowUp) {
      activityQuery['needFollowUp'] = needFollowUp;
      activityQuery['followUpDate'] = overdue
        ? { lt: new Date().toISOString() }
        : { gte: new Date().toISOString() };
    }

    const activities = await this.db.activity.findMany({
      where: activityQuery,
      include: {
        addedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
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
    return activities;
  }

  async getFollowUpActivitiesByActivityId(activityId: string) {
    const activities = await this.db.activity.findMany({
      where: {
        followUpActivityId: activityId,
      },
    });
    return activities;
  }
}
