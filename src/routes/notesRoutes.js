import { Router } from 'express';
import {
  addNoteController,
  deleteNoteByIdController,
  getNoteByIdController,
  getNotesController,
  updateNoteByIdController,
} from '../controllers/notesController.js';

const notesRouters = Router();

notesRouters.get('/', getNotesController);

notesRouters.get('/:noteId', getNoteByIdController);

notesRouters.post('/', addNoteController);

notesRouters.delete('/:noteId', deleteNoteByIdController);

notesRouters.patch('/:noteId', updateNoteByIdController);

export default notesRouters;
