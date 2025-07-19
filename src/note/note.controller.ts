import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dtos/create-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.createNote(createNoteDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.noteService.getNoteById(id);
  }

  @Get('contact/:contactId')
  async findByContact(@Param('contactId') contactId: string) {
    return this.noteService.getNotesByContact(contactId);
  }

  @Get()
  async findByOrganisation(@Query('organisationId') organisationId: string) {
    return this.noteService.getNotesByOrganisation(organisationId);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNoteDto: Partial<CreateNoteDto>,
  ) {
    return this.noteService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.noteService.deleteNote(id);
  }

  @Post('bulk')
  async bulkCreate(@Body() notes: CreateNoteDto[]) {
    return this.noteService.bulkAddNotes(notes);
  }
}
