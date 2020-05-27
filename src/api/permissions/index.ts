import { Router, Response } from 'express';
import { PermissionsScope, Permission } from '../../models';
import allow from '../../helper/user-permission';
import { RequestExtend } from '../../auth';
import { queryMulti } from '../../db/helper';
import DB from '../../db';

const permissionsRouter = Router();
const scope: PermissionsScope = 'permissions';

permissionsRouter.get('/', allow(scope), (_: RequestExtend, res: Response) => {
  const query = `SELECT * FROM role`;
  return queryMulti<Permission>(query).then((result) => {
    result = (result || []).map((item) => {
      item.permissions = JSON.parse((item.permissions as unknown) as string);
      return item;
    });
    return res.status(200).json(result);
  });
});

permissionsRouter.put(
  '/:id',
  allow(scope),
  (req: RequestExtend, res: Response) => {
    const query = `UPDATE role
    SET permission = '${JSON.stringify(req.body)}'
    WHERE id=${req.params.id}`;
    console.log(query);
    return DB(query)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch(console.error);
  }
);

export default permissionsRouter;
