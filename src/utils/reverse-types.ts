import { ActivityType } from 'prisma-client';

export const activityTypes = Object.values(ActivityType).reduce(
  (acc, type) => {
    acc[`${type}`] = type;
    return acc;
  },
  {} as Record<string, ActivityType>,
);
