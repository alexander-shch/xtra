require('dotenv').config();
import express from 'express';
import authRouter from './auth';
import appRouter from './routing';

const app = express();

app.use(express.json());

app.use(authRouter);
app.use(appRouter);
app.all('*', (_, res) => {
  res.status(404).json({
    message: 'Nothing here',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Running at localhost:${process.env.PORT}`);
});
