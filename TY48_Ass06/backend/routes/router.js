import express from 'express';
import authRoutes from './auth.routes.js';
import booksRoutes from './books.routes.js';

const router = express.Router();

router.use('/books', booksRoutes);
router.use('/auth', authRoutes);

export default router;