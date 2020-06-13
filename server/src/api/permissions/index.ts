import { Router, Response } from 'express';
import { PermissionsScope } from '../../models';
import allow from '../../helper/user-permission';
import { RequestExtend } from '../../auth';
import {
  FindRoles,
  FindRole,
  RoleUpdateOne,
} from '../../db/v1/permissions/controller';
import { isValidObjectId, Types } from 'mongoose';

const permissionsRouter = Router();
const scope: PermissionsScope = 'permissions';
const allowPath = allow(scope);

permissionsRouter.get(
  '/',
  allowPath,
  async (_: RequestExtend, res: Response) => {
    return FindRoles()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
);

permissionsRouter.get(
  '/:id',
  allowPath,
  async (req: RequestExtend, res: Response) => {
    if (!isValidObjectId(req.params.id)) {
      return res.sendStatus(400);
    }
    return FindRole({ _id: Types.ObjectId(req.params.id) })
      .then((singlePermission) => {
        if (!singlePermission) {
          return res.sendStatus(404);
        }
        return res.status(200).json(singlePermission);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
);

permissionsRouter.put(
  '/:id',
  allowPath,
  async (req: RequestExtend, res: Response) => {
    if (!isValidObjectId(req.params.id)) {
      return res.sendStatus(400);
    }
    return RoleUpdateOne(req.params.id, req.body)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
);

export default permissionsRouter;
