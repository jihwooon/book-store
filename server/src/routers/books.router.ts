import express from 'express';

import getAllBooksHandler from '../books/web/books-list.controller';

const router = express.Router();

router.get('/books', getAllBooksHandler);

export default router;
