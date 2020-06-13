import { Router, Response } from 'express';
import { RequestExtend } from '../../auth';
import allow from '../../helper/user-permission';
import { CreateUser, FindUserFull } from '../../db/v1/user/controller';
import { Types, isValidObjectId } from 'mongoose';

const userRouter = Router();
const scope = 'user';

userRouter.get('/', (req: RequestExtend, res: Response) => {
  const { user } = req;
  res.status(200).json(user);
});

userRouter.post(
  '/',
  allow(scope),
  async (req: RequestExtend, res: Response) => {
    return CreateUser(req.body)
      .then((user) => {
        return res.status(200).json({
          user,
        });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json(err.errors);
      });
  }
);

userRouter.get(
  '/:id',
  allow(scope),
  async (req: RequestExtend, res: Response) => {
    if (!isValidObjectId(req.params.id)) {
      return res.sendStatus(400);
    }
    return FindUserFull({
      _id: Types.ObjectId(req.params.id),
    })
      .then((user) => {
        if (!user) {
          return res.sendStatus(404);
        }
        return res.status(200).json(user);
      })
      .catch((err) => {
        console.error(err.errors);
        return res.sendStatus(500);
      });
  }
);

export default userRouter;
