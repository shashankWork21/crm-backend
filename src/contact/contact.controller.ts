import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { Response } from 'express';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async createContact(
    @Body() createContactDto: CreateContactDto,
    @Res() response: Response,
  ) {
    try {
      const contact = await this.contactService.createContact(createContactDto);
      return response.status(201).json(contact);
    } catch (error) {
      console.log('Error creating Contact:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Get('their-organisation/:id')
  async getContactsByTheirOrganisation(@Param('id') organisationId: string) {
    return await this.contactService.getContactByTheirOrganisationId(
      organisationId,
    );
  }

  @Get('our-organisation/:id')
  async getContactsByOurOrganisation(@Param('id') organisationId: string) {
    return await this.contactService.getContactsByOurOrganisationId(
      organisationId,
    );
  }

  @Get('upcoming-follow-ups/:organisationId')
  async getUpcomingFollowUpContacts(
    @Param('organisationId') organisationId: string,
  ) {
    return await this.contactService.getUpcomingFollowUpContacts(
      organisationId,
    );
  }

  @Get('overdue-follow-ups/:organisationId')
  async getOverdueFollowUpContacts(
    @Param('organisationId') organisationId: string,
  ) {
    return await this.contactService.getOverdueFollowUpContacts(organisationId);
  }

  @Get('region-schedule/:organisationId')
  async getContactsByRegionSchedule(
    @Param('organisationId') organisationId: string,
    @Query('day') day: string,
  ) {
    return await this.contactService.getContactsByRegionSchedule(
      organisationId,
      parseInt(day),
    );
  }

  @Put(':id')
  async updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: Partial<CreateContactDto>,
  ) {
    return await this.contactService.updateContactById(id, updateContactDto);
  }

  @Put(':id/assign')
  async assignContact(@Param('id') id: string, @Body('userId') userId: string) {
    return await this.contactService.assignContact(id, userId);
  }

  @Put(':id/branch')
  async updateContactOrganisation(
    @Param('id') id: string,
    @Body('branchId') branchId: string,
  ) {
    return await this.contactService.updateContactBranch(id, branchId);
  }

  @Put(':id/follow-up')
  async updateFollowUp(
    @Param('id') id: string,
    @Body('followUpOn') followUpOn: Date,
  ) {
    return await this.contactService.updateFollowUp(id, followUpOn);
  }

  @Post('bulk')
  async bulkCreateContacts(@Body() contacts: CreateContactDto[]) {
    return await this.contactService.bulkContactCreate(contacts);
  }

  @Delete(':id')
  async deleteContact(@Param('id') id: string) {
    return await this.contactService.deleteContactById(id);
  }
}
