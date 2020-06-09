import { Router, Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { createHash } from 'crypto';
import { User } from '../models';
import { FindUserFull } from '../db/v1/user/controller';

export type RequestExtend<T = any> = Request & {
  user?: User;
  body?: T;
};

const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'both email and password are required',
    });
  }

  const pass = createHash('sha256')
    .update(password as string)
    .digest('base64');

  return FindUserFull({
    email,
    password: pass,
  })
    .then((user) => {
      if (!user) {
        return res.sendStatus(404);
      }
      return res.status(200).json({
        expiresIn: 3600,
        token: sign(user, process.env.ACCESS_TOKEN_SECRET as string, {
          expiresIn: '1h',
        }),
      });
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
});

export function authenticateToken(
  req: RequestExtend,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  return verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user as User;
      return next();
    }
  );
}

export default authRouter;
