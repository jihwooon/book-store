import rTracer from 'cls-rtracer';
import cors from 'cors';
import express from 'express';

import bookRouter from './routers/books.router';
import cartItemRouter from './routers/cartItems.router';
import categoryRouter from './routers/category.router';
import healthCheckRouter from './routers/healthCheck.router';
import likeRouter from './routers/like.router';
import orderRouter from './routers/order.router';
import userRouter from './routers/users.router';

const app = express();

app.use(express.json());
app.use(rTracer.expressMiddleware());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(userRouter);
app.use(bookRouter);
app.use(categoryRouter);
app.use(likeRouter);
app.use(cartItemRouter);
app.use(orderRouter);
app.use(healthCheckRouter);

app.get('/', async (req, res) => {
  res.send('Hello World');
});

export default app;
