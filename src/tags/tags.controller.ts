import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { TagsService } from './tags.service';
import { TagDto } from './dtos/tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async createTag(@Body() tagData: TagDto, @Res() response: Response) {
    try {
      const tag = await this.tagsService.CreateTag(tagData);
      return response.status(201).json({
        message: 'Tag created successfully',
        tag,
      });
    } catch (error) {
      console.log('Error during tag creation:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Patch(':id')
  async updateTag(
    @Param('id') id: string,
    @Body() tagData: TagDto,
    @Res() response: Response,
  ) {
    try {
      const tag = await this.tagsService.updateTag(id, tagData);
      return response.status(200).json({
        message: 'Tag updated successfully',
        tag,
      });
    } catch (error) {
      console.log('Error during tag update:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Delete(':id')
  async deleteTag(@Param('id') id: string, @Res() response: Response) {
    try {
      const tag = await this.tagsService.deleteTag(id);
      return response.status(200).json({
        message: 'Tag deleted successfully',
        tag,
      });
    } catch (error) {
      console.log('Error during tag deletion:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Get('organisation/:organisationId')
  async getTagsByOrganisation(
    @Param('organisationId') organisationId: string,
    @Res() response: Response,
  ) {
    try {
      const tags = await this.tagsService.getTagsByOrganisation(organisationId);
      return response.status(200).json(tags);
    } catch (error) {
      console.log('Error fetching organisation tags:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Put('connect/organisation/:organisationId')
  async connectTagsToOrganisation(
    @Param('organisationId') organisationId: string,
    @Body('tagIds') tagIds: string[],
    @Res() response: Response,
  ) {
    try {
      const result = await this.tagsService.connectTagsToOrganisation(
        tagIds,
        organisationId,
      );
      return response.status(200).json(result);
    } catch (error) {
      console.log('Error connecting tags to organisation:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Put('connect/activity/:activityId')
  async connectTagsToActivity(
    @Param('activityId') activityId: string,
    @Body('tagIds') tagIds: string[],
    @Res() response: Response,
  ) {
    try {
      const result = await this.tagsService.connectTagsToActivity(
        tagIds,
        activityId,
      );
      return response.status(200).json(result);
    } catch (error) {
      console.log('Error connecting tags to activity:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Put('connect/contact/:contactId')
  async connectTagsToContact(
    @Param('contactId') contactId: string,
    @Body('tagIds') tagIds: string[],
    @Res() response: Response,
  ) {
    try {
      const result = await this.tagsService.connectTagsToContact(
        tagIds,
        contactId,
      );
      return response.status(200).json(result);
    } catch (error) {
      console.log('Error connecting tags to contact:', error);
      return response.status(500).json({ errors: error.message });
    }
  }
}
