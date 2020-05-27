import { Router, Request, Response } from 'express';

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
  const jsonRes = req.query;
  res.status(200).json(jsonRes);
});

export default userRouter;
