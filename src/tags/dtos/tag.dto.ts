import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TagType } from 'prisma-client';

export class TagDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TagType)
  tagType: TagType;

  @IsNotEmpty()
  @IsString()
  createdOrganisationId: string;
}
