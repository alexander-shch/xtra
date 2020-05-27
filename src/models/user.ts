import { PermissionList } from './permissions';

export interface User {
  id: string;
  fullName: string;
  name: string;
  lastName: string;
  permissions: PermissionList;
}
