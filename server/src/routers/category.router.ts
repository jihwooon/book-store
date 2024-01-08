import express from 'express';

import getAllCategoryHandler from '../category/web/category-list.controller';

const router = express.Router();

router.get('/category', getAllCategoryHandler);

export default router;
