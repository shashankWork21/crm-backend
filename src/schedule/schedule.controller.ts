import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedule } from 'prisma-client';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(
    @Body() createScheduleDto: CreateScheduleDto,
  ): Promise<Schedule> {
    return this.scheduleService.createSchedule(createScheduleDto);
  }
  @Post('bulk')
  async createBulk(@Body() scheduleData: CreateScheduleDto[]) {
    return this.scheduleService.bulkCreateSchedule(scheduleData);
  }

  @Get()
  async findAll(): Promise<Schedule[]> {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Schedule> {
    return this.scheduleService.findOne(id);
  }

  @Get('region/:regionId')
  async findByRegion(@Param('regionId') regionId: string): Promise<Schedule[]> {
    return this.scheduleService.findByRegion(regionId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateScheduleDto: Partial<CreateScheduleDto>,
  ): Promise<Schedule> {
    return this.scheduleService.updateSchedule(id, updateScheduleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Schedule> {
    return this.scheduleService.deleteSchedule(id);
  }

  @Delete('')
  async removeAll() {
    return this.scheduleService.deleteAllSchedules();
  }
}
