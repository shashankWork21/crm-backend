import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { CreateOrganisationDto } from './dtos/create-organisation.dto';
import { Response } from 'express';

@Controller('organisation')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  @Get()
  async findAllOrganisations() {
    const organisations = await this.organisationService.getAll();
    return organisations;
  }

  @Delete()
  async deleteAllOrganisations() {
    const organisations = await this.organisationService.deleteAll();
    return organisations;
  }

  @Post()
  async createEmployedOrganisation(
    @Body() data: CreateOrganisationDto,
    @Req() request: any,
    @Res() response: Response,
  ) {
    try {
      const user = request.user;
      const organisation =
        await this.organisationService.createEmployedOrganisation(
          data,
          user.id,
        );
      return response.status(201).json(organisation);
    } catch (error) {
      console.log('Error during organisation creation:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Post('contact')
  async createContactOrganisation(
    @Body() data: CreateOrganisationDto,
    @Req() request: any,
  ) {
    const user = request.user;
    const organisation =
      await this.organisationService.createContactOrganisation(
        data,
        user.organisationId,
      );
    return organisation;
  }

  @Get('team')
  async findTeamOrganisations() {
    const organisations =
      await this.organisationService.findTeamOrganisations();
    return organisations;
  }

  @Get('search')
  async searchOrganisationsByName(@Query('searchTerm') searchTerm: string) {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    
    const organisations = await this.organisationService.searchOrganisationsByName(
      searchTerm.trim(),
    );
    return organisations;
  }

  @Get('contacts/:organisationId')
  async findContactOrganisations(
    @Param('organisationId') organisationId: string,
  ) {
    const organisations =
      await this.organisationService.findContactOrganisations(organisationId);
    return organisations;
  }

  @Get(':id')
  async findOrganisationById(@Param('id') id: string) {
    const organisation =
      await this.organisationService.findOrganisationById(id);
    return organisation;
  }

  @Put(':id')
  async updateOrganisation(
    @Param('id') id: string,
    @Body() data: CreateOrganisationDto,
  ) {
    const organisation = await this.organisationService.updateOrganisationById(
      id,
      data,
    );
    return organisation;
  }

  @Put('')
  async updateEmployedOrganisation(
    @Req() request: any,
    @Body() data: CreateOrganisationDto,
  ) {
    const user = request.user;
    const id = user.organisationId;
    const organisation = await this.organisationService.updateOrganisationById(
      id,
      data,
    );
    return organisation;
  }

  @Delete(':id')
  async deleteOrganisation(@Param('id') id: string, @Req() request: any) {
    const user = request.user;
    const organisation = await this.organisationService.deleteOrganisationById(
      id,
      user.id,
    );
    return organisation;
  }

  @Delete('force/:id')
  async forceDeleteOrganisation(@Param('id') id: string, @Req() request: any) {
    const user = request.user;
    const organisation = await this.organisationService.deleteOrganisationById(
      id,
      user.id,
    );
    return organisation;
  }

  @Post('bulk')
  async bulkCreateOrganisations(
    @Body() data: CreateOrganisationDto[],
    @Req() request: any,
  ) {
    const user = request.user;
    const organisations =
      await this.organisationService.bulkCreateOrganisations(
        data,
        user.organisationId,
      );
    return organisations;
  }
}
