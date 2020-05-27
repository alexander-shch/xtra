import { Router, Response } from 'express';
import { RequestExtend } from '../../auth';
import allow from '../../helper/user-permission';
import { querySingle } from '../../db/helper';
import { User } from '../../models';

const userRouter = Router();
const scope = 'user';

userRouter.get('/', (req: RequestExtend, res: Response) => {
  const { user } = req;
  res.status(200).json(user);
});

userRouter.get(
  '/:id',
  allow(scope),
  async (req: RequestExtend, res: Response) => {
    const query = `SELECT * FROM users where id = ${req.params.id}`;
    return querySingle<User>(query)
      .then((user) => {
        if (!user) {
          return res.sendStatus(404);
        }
        return res.status(200).json({
          ...user,
        });
      })
      .catch((err) => {
        console.error(err);
        return res.sendStatus(500);
      });
  }
);

export default userRouter;
