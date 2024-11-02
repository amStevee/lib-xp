import express from 'express';
import { getAllBooks } from '../controllers/book.controller';
import checkoutStatus from '../middleware/checkUserCirculationStatus'
import { verifyUser } from '../middleware/verifyUser';

const router = express.Router();

// Get all books from db
router.route('/').get(verifyUser, checkoutStatus, getAllBooks);

export default router;