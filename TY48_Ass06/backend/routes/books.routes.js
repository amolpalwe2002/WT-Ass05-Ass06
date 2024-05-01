import express from 'express';
import { addBook, deleteBook, getBookById, getBooks, updateBook } from '../controllers/books.controller.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
