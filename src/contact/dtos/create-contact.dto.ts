import {
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ContactType, LeadSegment } from 'prisma-client';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  branchId: string;

  @IsNotEmpty()
  @IsEnum(ContactType)
  contactType: ContactType;

  @IsOptional()
  @IsEnum(LeadSegment)
  leadSegment?: LeadSegment;

  @IsOptional()
  @IsInt()
  leadScore?: number;

  @IsOptional()
  @IsString()
  assignedToId: string;

  @IsOptional()
  @IsDate()
  followUpOn: Date;

  @IsOptional()
  @IsInt()
  followUpFrequency: number;

  @IsOptional()
  @IsString()
  alternateNumber: string;

  @IsNotEmpty()
  @IsString()
  contactOrgId: string;
}
