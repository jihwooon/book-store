import express from 'express';
import rTracer from 'cls-rtracer';

import userRouter from './routers/users.router';

const app = express();

app.use(express.json());
app.use(rTracer.expressMiddleware());

app.use(userRouter);

app.get('/', async (req, res) => {
  res.send('Hello World');
});

export default app;
