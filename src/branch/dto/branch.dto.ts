import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BranchType } from 'prisma-client';

export class CreateBranchDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  regionId: string;

  @IsNotEmpty()
  @IsString()
  organisationId: string;

  @IsNotEmpty()
  @IsEnum(BranchType)
  type: BranchType;

  @IsOptional()
  @IsString()
  landlineNumber?: string;
}
