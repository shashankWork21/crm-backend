import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dtos/create-activity.dto';
import { ActivityType } from 'prisma-client';
import { activityTypes } from 'src/utils/reverse-types';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.createActivity(createActivityDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.activityService.getActivityById(id);
  }

  @Get('contact/:contactId')
  async findByContact(@Param('contactId') contactId: string) {
    return this.activityService.getActivitiesByContact(contactId);
  }

  @Get(':organisationId')
  async findByOrganisation(@Param('organisationId') organisationId: string) {
    return this.activityService.getActivitiesByOrganisation(organisationId);
  }

  @Get('our-organisation/:organisationId')
  async findByOurOrganisation(@Param('organisationId') organisationId: string) {
    return this.activityService.getActivitiesByOurOrganisation(organisationId);
  }

  @Get('follow-up/:organisationId')
  async findFollowUpActivities(
    @Param('organisationId') organisationId: string,
  ) {
    return this.activityService.getFollowUpActivities(organisationId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateActivityDto: Partial<CreateActivityDto>,
  ) {
    return this.activityService.updateActivity(id, updateActivityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.activityService.deleteActivity(id);
  }

  @Get('follow-ups/:activityId')
  async getFollowUpActivitiesByActivityId(
    @Param('activityId') activityId: string,
  ) {
    return this.activityService.getFollowUpActivitiesByActivityId(activityId);
  }

  @Get('search/:organisationId')
  async searchActivities(
    @Param('organisationId') organisationId: string,
    @Query('types') types: string,
    @Query('needFollowUp') needFollowUp: string,
    @Query('overdue') overdue: string,
  ) {
    return this.activityService.filterActivitiesByQuery(
      organisationId,
      types?.split(',').map((type) => activityTypes[type]) || [],
      needFollowUp !== 'false' || undefined,
      overdue !== 'false' || undefined,
    );
  }
}
