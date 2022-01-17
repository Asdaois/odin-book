import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';
import requestLogger from './middlewares/requestLogger.js';
import logger from './utils/logger.js';
import errorHandler from './middlewares/errorHandler.js';
import unknowEndpoint from './middlewares/unknownEndpoint.js';
import connectToDatabase from './database.js';

const app = express();
// middlewares
app.use(
  cors({
    origin: [
      'https://odin-book-client.herokuapp.com/',
      'http://localhost:3000',
    ],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

// end middlewares

app.get('/', (_req, res) => {
  res.json('Nothing here');
});

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.use(unknowEndpoint);
app.use(errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  logger.info(`Server is running on port http://localhost:${port}!`);
  connectToDatabase();
});
