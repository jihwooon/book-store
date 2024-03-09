import express from 'express';
import getAllOrdersHandler from 'src/orders/web/orders-list.controller';

const router = express.Router();

router.get('/orders', getAllOrdersHandler);

export default router;
