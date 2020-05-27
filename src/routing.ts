import { Router } from 'express';
import { authenticateToken } from './auth';
import userRouter from './api/user';

const appRouter = Router();

appRouter.use(authenticateToken);
appRouter.use('/user', userRouter);

export default appRouter;
