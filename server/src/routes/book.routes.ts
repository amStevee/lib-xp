import express from 'express';
import { getAllBooks } from '../controllers/book.controller';

const router = express.Router();

// Get all books from db
router.route('/').get(getAllBooks);

export default router;