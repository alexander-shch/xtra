export type PermissionOptions = 'read' | 'update' | 'delete' | 'create';
export type PermissionsScope = 'user' | 'permissions';
export type PermissionTable = Record<PermissionOptions, boolean>;
export type PermissionList = Record<PermissionsScope, PermissionTable>;
export interface Permission {
  id: number;
  insertdate: string;
  title: string;
  onsite: number;
  role: number;
  lg: number;
  permissions: PermissionList;
  order1: number;
};
export interface PermissionDB extends Permissions {
  permissions: string;
}