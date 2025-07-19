import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { ActivityType } from 'prisma-client';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  addedById: string;

  @IsNotEmpty()
  @IsString()
  contactId: string;

  @IsNotEmpty()
  @IsBoolean()
  needFollowUp: boolean = true;

  @IsNotEmpty()
  @IsEnum(ActivityType)
  type: ActivityType;

  @IsOptional()
  @IsString()
  followUpDate: string;

  @IsOptional()
  @IsString()
  followUpById: string;
}
