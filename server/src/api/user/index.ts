import { Router, Response } from 'express';
import { RequestExtend } from '../../auth';
import allow from '../../helper/user-permission';
import { CreateUser } from '../../db/v1/user/controller';

const userRouter = Router();
const scope = 'user';

userRouter.get('/', (req: RequestExtend, res: Response) => {
  const { user } = req;
  res.status(200).json(user);
});

userRouter.get(
  '/:id',
  allow(scope)
  // async (req: RequestExtend, res: Response) => {
  // const query = `SELECT * FROM users where id = ${req.params.id}`;
  // return querySingle<User>(query)
  //   .then((user) => {
  //     if (!user) {
  //       return res.sendStatus(404);
  //     }
  //     return res.status(200).json({
  //       ...user,
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     return res.sendStatus(500);
  //   });
  // }
);

userRouter.post(
  '/',
  // allow(scope),
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

export default userRouter;
