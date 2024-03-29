import express from 'express';
import getCartHandler from 'src/cartItems/web/cartItem-list.controller';
import removeCartHandler from 'src/cartItems/web/cartItem-remove.controller';
import addCartHandler from 'src/cartItems/web/cartItem-save.controller';

const router = express.Router();

router.post('/carts', addCartHandler);
router.get('/carts', getCartHandler);
router.delete('/carts/:id', removeCartHandler);

export default router;
