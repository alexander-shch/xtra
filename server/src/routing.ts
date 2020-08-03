import { Router } from 'express';
import { authenticateToken } from './auth';

import userRouter from './api/user';
import permissionsRouter from './api/permissions';
import buildingsRouter from './api/buildings';

const appRouter = Router();

appRouter.use(authenticateToken);
appRouter.use('/user', userRouter);
appRouter.use('/permissions', permissionsRouter);
appRouter.use('/buildings', buildingsRouter);

export default appRouter;
