import { PermissionTable, PermissionList } from '../models';

export function createPermissionTableWithStatus(
  allow: boolean
): PermissionTable {
  return {
    read: allow,
    create: allow,
    delete: allow,
    update: allow,
  };
}

export function createPermissionsList(allow: boolean): PermissionList {
  return {
    user: createPermissionTableWithStatus(allow),
    permissions: createPermissionTableWithStatus(allow),
  };
}
