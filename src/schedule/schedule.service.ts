import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Schedule } from 'prisma-client';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly db: DbService) {}

  async createSchedule(data: CreateScheduleDto): Promise<Schedule> {
    return this.db.schedule.create({
      data,
      include: {
        region: true,
      },
    });
  }

  async findAll(): Promise<Schedule[]> {
    return this.db.schedule.findMany({
      include: {
        region: true,
      },
    });
  }

  async findOne(id: string): Promise<Schedule> {
    const schedule = await this.db.schedule.findUnique({
      where: { id },
      include: {
        region: true,
      },
    });

    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    return schedule;
  }

  async findByRegion(regionId: string) {
    const schedules = await this.db.schedule.findMany({
      where: {
        regionId,
      },
      include: {
        region: true,
      },
    });
    return schedules;
  }

  async updateSchedule(
    id: string,
    data: Partial<CreateScheduleDto>,
  ): Promise<Schedule> {
    try {
      return await this.db.schedule.update({
        where: { id },
        data,
        include: {
          region: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deleteSchedule(id: string): Promise<Schedule> {
    try {
      return await this.db.schedule.delete({
        where: { id },
        include: {
          region: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deleteAllSchedules() {
    return this.db.schedule.deleteMany();
  }

  async bulkCreateSchedule(data: CreateScheduleDto[]) {
    return this.db.$transaction(
      async (tx) => {
        const createdSchedules: Schedule[] = [];

        for (const schedule of data) {
          if (!schedule.regionId) {
            throw new Error('Region ID is required for each schedule');
          }
          const existingSchedule = await tx.schedule.findFirst({
            where: {
              regionId: schedule.regionId,
              dayOfMonth: schedule.dayOfMonth,
            },
          });

          if (existingSchedule) {
            continue;
          }
          const createdSchedule = await tx.schedule.create({
            data: schedule,
          });

          createdSchedules.push(createdSchedule);
        }

        return createdSchedules;
      },
      { maxWait: 10000, timeout: 30000 },
    );
  }
}
