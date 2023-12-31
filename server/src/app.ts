import rTracer from 'cls-rtracer';
import express from 'express';

import bookRouter from './routers/books.router';
import categoryRouter from './routers/category.router';
import userRouter from './routers/users.router';

const app = express();

app.use(express.json());
app.use(rTracer.expressMiddleware());

app.use(userRouter);
app.use(bookRouter);
app.use(categoryRouter);

app.get('/', async (req, res) => {
  res.send('Hello World');
});

export default app;
