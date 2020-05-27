import { Router, Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { createHash } from 'crypto';
import { querySingle } from '../db/helper';
import { User } from '../models';

export type RequestExtend = Request & {
  user?: any;
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

  const query = `SELECT 
  users.id,
  CONCAT(users.fname,' ',users.lname) as fullname,
  users.role,
  users.type_of_cource,
  role.permissions
  FROM
  users
  INNER JOIN role ON role.id = users.role
  WHERE
  role.onsite = 1
  AND users.onsite = 1
  AND users.email = '${email}'
  AND users.password = '${pass}'`;

  return querySingle<User>(query)
    .then((user) => {
      if (!user) {
        return res.sendStatus(404);
      }
      console.log(user);

      return res.status(200).json({
        expiresIn: 3600,
        token: sign(
          {
            ...user,
            permissions: JSON.parse((user.permissions as unknown) as string),
          },
          process.env.ACCESS_TOKEN_SECRET as string,
          {
            expiresIn: 3600,
          }
        ),
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
      req.user = user;
      return next();
    }
  );
}

export default authRouter;
