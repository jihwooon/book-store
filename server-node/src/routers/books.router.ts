import express from 'express';

import getAllBooksHandler from '../books/web/books-list.controller';
import getBooksHandler from '../books/web/books-detail.controller';

const router = express.Router();

router.get('/books', getAllBooksHandler);
router.get('/books/:id', getBooksHandler);

export default router;
