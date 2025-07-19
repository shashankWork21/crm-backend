import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/branch.dto';
import { Response } from 'express';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post()
  async createBranch(
    @Body() createBranchDto: CreateBranchDto,
    @Res() response: Response,
  ) {
    try {
      const branch = await this.branchService.createBranch(createBranchDto);
      return response.status(201).json(branch);
    } catch (error) {
      console.log('Error creating branch:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Get('organisation/:organisationId')
  async getBranchesByOrganisation(
    @Param('organisationId') organisationId: string,
  ) {
    return await this.branchService.getBranchesByOrganisationId(organisationId);
  }

  @Put(':id')
  async updateBranch(
    @Param('id') id: string,
    @Body() updateBranchDto: Partial<CreateBranchDto>,
  ) {
    return await this.branchService.updateBranchById(id, updateBranchDto);
  }

  @Delete(':id')
  async deleteBranch(@Param('id') id: string, @Res() response: Response) {
    try {
      await this.branchService.deleteBranchById(id);
      return response.status(200).json({
        message: 'Branch deleted successfully',
      });
    } catch (error) {
      console.log(error.message);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Delete('force/:id')
  async forceDeleteBranch(@Param('id') id: string, @Res() response: Response) {
    try {
      const branch = await this.branchService.deleteBranchById(id);
      return response.status(200).json({
        message: 'Branch deleted successfully',
        branch,
      });
    } catch (error) {
      console.log('Error deleting branch:', error);
      return response.status(500).json({ errors: error.message });
    }
  }

  @Post('bulk')
  async bulkCreateBranches(@Body() createBranchDtos: CreateBranchDto[]) {
    return await this.branchService.bulkCreateBranches(createBranchDtos);
  }

  @Get()
  async getAllBranches() {
    return await this.branchService.getAll();
  }
  @Delete()
  async deleteAllBranches() {
    return await this.branchService.deleteAll();
  }
}
