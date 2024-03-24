import express from 'express';

import addLikeHandler from 'src/likes/web/add-like.controller';
import cancelLikeHandler from 'src/likes/web/cancel-like.controller';

const router = express.Router();

router.post('/likes/:id', addLikeHandler);
router.delete('/likes/:id', cancelLikeHandler);

export default router;
