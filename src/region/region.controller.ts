import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { Region } from 'prisma-client';
import { Response } from 'express';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  async create(
    @Body() createRegionDto: CreateRegionDto,
    @Res() response: Response,
  ) {
    try {
      const region = await this.regionService.createRegion(createRegionDto);
      return response.status(201).json(region);
    } catch (error) {
      console.log('Error creating region:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Get()
  async findAll() {
    return await this.regionService.findAll();
  }

  @Get('organisation/:organisationId')
  async findByOrganisation(@Param('organisationId') organisationId: string) {
    return this.regionService.getRegionsByOrganisationId(organisationId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Region> {
    return this.regionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRegionDto: Partial<CreateRegionDto>,
  ): Promise<Region> {
    return this.regionService.updateRegion(id, updateRegionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Region> {
    return this.regionService.deleteRegion(id);
  }

  @Delete('')
  async removeAll() {
    return await this.regionService.deleteAllRegions();
  }

  @Post('bulk')
  async createBulk(@Body() regionData: CreateRegionDto[]) {
    try {
      const regions = await this.regionService.bulkCreateRegions(regionData);
      return { message: 'Regions created successfully', regions };
    } catch (error) {
      console.log('Error creating bulk regions:', error);
      throw new Error('Error creating bulk regions: ' + error.message);
    }
  }
}
