import express from 'express';
import addCartHandler from 'src/cartItems/web/cartItem-save.controller';

const router = express.Router();

router.post('/cart', addCartHandler);

export default router;
