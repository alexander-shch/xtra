require('dotenv').config();
import express from 'express';
import authRouter from './auth';
import appRouter from './routing';
import mongoConnect from './db/v1';

const cors = require("cors");

const app = express();

// Simple check if body contains well defined content
app.use((req, res, next) =>
  express.json()(req, res, (err) => (err ? res.sendStatus(400) : next()))
);

app.use(cors());

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
mongoConnect();
