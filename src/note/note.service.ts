import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateNoteDto } from './dtos/create-note.dto';

@Injectable()
export class NoteService {
  constructor(private readonly db: DbService) {}

  async createNote(data: CreateNoteDto) {
    try {
      const note = await this.db.note.create({
        data,
      });
      return note;
    } catch (error) {
      throw new Error('Error creating note: ' + error.message);
    }
  }

  async getNotesByContact(contactId: string) {
    const notes = await this.db.note.findMany({
      where: {
        contactId,
      },
    });
    return notes;
  }

  async getNoteById(id: string) {
    const note = await this.db.note.findUnique({
      where: { id },
    });
    return note;
  }

  async updateNote(id: string, data: Partial<CreateNoteDto>) {
    const note = await this.db.note.update({
      where: { id },
      data,
    });
    return note;
  }

  async deleteNote(id: string) {
    const note = await this.db.note.delete({
      where: { id },
    });
    return note;
  }

  async getNotesByOrganisation(organisationId: string) {
    const notes = await this.db.note.findMany({
      where: {
        contact: {
          branch: {
            organisationId,
          },
        },
      },
    });
    return notes;
  }

  async bulkAddNotes(data: CreateNoteDto[]) {
    const notes = await this.db.$transaction(
      data.map((noteData) => this.db.note.create({ data: noteData })),
    );
    return notes;
  }
}
