import express from 'express';
import getOrdersDetailHandler from 'src/orders/web/orders-detail.controller';
import getAllOrdersHandler from 'src/orders/web/orders-list.controller';
import saveOrdersHandler from 'src/orders/web/orders-save.controller';

const router = express.Router();

router.get('/orders', getAllOrdersHandler);
router.get('/orders/:orderId', getOrdersDetailHandler);
router.post('/orders', saveOrdersHandler);

export default router;
