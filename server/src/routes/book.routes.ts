import express from 'express';

import { verifyUser } from '../middleware/verifyUser';
import { BookController } from '../controllers/book.controller';

const bookContorller = new BookController()
const router = express.Router();

// Get all books from db
router.route('/').get(bookContorller.getAllBooks);
router.route('/book').post(verifyUser,  bookContorller.addNewBook);
router.route('/book/:id').get(verifyUser, bookContorller.getBook).delete(verifyUser, bookContorller.deleteBook);
router.route('/like/book/:book_id').put(verifyUser, bookContorller.toggleBookLike);



export default router;