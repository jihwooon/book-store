import express from 'express';

import addLikeHandler from 'src/likes/web/add-like.controller';

const router = express.Router();

router.post('/likes/:id', addLikeHandler);

export default router;
