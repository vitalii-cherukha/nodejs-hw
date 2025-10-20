import { Router } from 'express';
import { getNoteById, getNotes } from '../controllers/notesController.js';

const notesRouters = Router();

notesRouters.get('/', getNotes);

notesRouters.get('/:noteId', getNoteById);

export default notesRouters;
