import { PermissionList } from './permissions';

export interface User {
  id: string;
  fullName: string;
  name: string;
  lastName: string;
  email: string;
  permissions: PermissionList;
}
