import { Router } from 'express';
import { PermissionsScope } from '../../models';
import allow from '../../helper/user-permission';
// import { RequestExtend } from '../../auth';
// import { queryMulti, querySingle } from '../../db/helper';
// import DB from '../../db';

const permissionsRouter = Router();
const scope: PermissionsScope = 'permissions';
const allowPath = allow(scope);

permissionsRouter.get(
  '/',
  allowPath
  // async (_: RequestExtend, res: Response) => {
  //   const query = `SELECT * FROM role`;
  //   return queryMulti<PermissionDB>(query)
  //     .then((result) => {
  //       result = (result || []).map((item) => {
  //         item.permissions = JSON.parse(item.permissions);
  //         return item;
  //       });
  //       return res.status(200).json(result);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // }
);

permissionsRouter.get(
  '/:id',
  allowPath
  // async (req: RequestExtend, res: Response) => {
  //   const query = `SELECT * FROM role WHERE id=${req.params.id}`;
  //   return querySingle<PermissionDB>(query)
  //     .then((singlePermission) => {
  //       if (!singlePermission) {
  //         return res.sendStatus(404);
  //       }
  //       return res.status(200).json({
  //         ...singlePermission,
  //         permissions: JSON.parse(singlePermission.permissions),
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // }
);

permissionsRouter.put(
  '/:id',
  allowPath
  // async (req: RequestExtend, res: Response) => {
  //   const query = `UPDATE role
  //   SET permission = '${JSON.stringify(req.body)}'
  //   WHERE id=${req.params.id}`;
  //   return DB(query)
  //     .then((result) => {
  //       return res.status(200).json(result);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // }
);

export default permissionsRouter;
