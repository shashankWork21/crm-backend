import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { NoteCategory } from 'prisma-client';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(NoteCategory)
  category: NoteCategory;

  @IsString()
  @IsNotEmpty()
  contactId: string;

  @IsString()
  @IsNotEmpty()
  createdById: string;
}
