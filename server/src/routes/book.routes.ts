import express from 'express';
import { getAllBooks } from '../controllers/book.controller';
import isUserBookCount from '../middleware/checkUserCirculationStatus'

const router = express.Router();

// Get all books from db
router.route('/').get(isUserBookCount, getAllBooks);

export default router;