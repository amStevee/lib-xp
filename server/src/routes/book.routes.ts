import express from 'express';

const router = express.Router();

// Get all books from db
router.route('/book').get()