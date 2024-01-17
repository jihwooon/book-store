import express from 'express';
import getCartHandler from 'src/cartItems/web/cartItem-list.controller';
import addCartHandler from 'src/cartItems/web/cartItem-save.controller';

const router = express.Router();

router.post('/cart', addCartHandler);
router.get('/cart/:bookId', getCartHandler);

export default router;
