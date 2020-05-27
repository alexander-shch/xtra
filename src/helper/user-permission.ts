import { Response, NextFunction } from 'express';
import { RequestExtend } from '../auth';
import { PermissionOptions, PermissionsScope, User } from '../models';

function hasPermission(
  user: User,
  scope: PermissionsScope,
  permission: PermissionOptions
): boolean {
  console.log(user);

  return (
    user?.permissions &&
    user?.permissions[scope] &&
    user?.permissions[scope][permission]
  );
}

function methodMapper(method: string): PermissionOptions | undefined {
  switch (method.toLowerCase()) {
    case 'get':
      return 'read';
    case 'post':
      return 'create';
    case 'delete':
      return 'delete';
    case 'put':
      return 'update';
    default:
      return undefined;
  }
}

export default function allow(scope: PermissionsScope) {
  return (req: RequestExtend, res: Response, next: NextFunction) => {
    const method = req.method;
    const { user } = req;
    const permissionAction = methodMapper(method);
    if (!permissionAction) {
      return res.sendStatus(405);
    }
    const allowed = hasPermission(user, scope, permissionAction);
    if (!allowed) {
      return res.status(403).json({
        message: `Action ${permissionAction} on ${scope} is not allowed`,
      });
    }
    return next();
  };
}
