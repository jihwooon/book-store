import express from 'express';
import getOrdersDetailHandler from 'src/orders/web/orders-detail.controller';
import getAllOrdersHandler from 'src/orders/web/orders-list.controller';

const router = express.Router();

router.get('/orders', getAllOrdersHandler);
router.get('/orders/:orderId', getOrdersDetailHandler);

export default router;
