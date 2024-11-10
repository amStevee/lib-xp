import express from 'express';
import { addNewBook, deleteBook, getAllBooks, getBook, likeBook } from '../controllers/book.controller';
import checkoutStatus from '../middleware/checkUserCirculationStatus'
import { verifyUser } from '../middleware/verifyUser';

const router = express.Router();

// Get all books from db
router.route('/').get(getAllBooks);
router.route('/book').post(verifyUser,  addNewBook);
router.route('/book/:id').get(verifyUser, getBook).delete(verifyUser, deleteBook);
router.route('/like/book/:id').get(verifyUser, likeBook);



export default router;