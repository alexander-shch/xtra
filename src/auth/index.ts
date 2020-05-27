import { Router, Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';

type RequestExtend = Request & {
  user?: any;
};

const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'bob' && password === '1234') {
    return res.status(200).json({
      expiresIn: 3600,
      token: sign(
        {
          username,
          id: '1',
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        {
          expiresIn: 3600,
        }
      ),
    });
  }
  return res.status(404).json({
    message: 'user was not found',
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
      req.user = user;
      return next();
    }
  );
}

export default authRouter;
