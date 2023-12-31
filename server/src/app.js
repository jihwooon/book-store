import express from 'express';
import rTracer from 'cls-rtracer';

const app = express();

app.use(express.json());
app.use(rTracer.expressMiddleware());

app.get('/', async (req, res) => {
  res.send('Hello World');
});

export default app;
