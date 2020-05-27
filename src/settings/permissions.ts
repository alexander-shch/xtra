import { createPermissionsList } from './helper';

export const DefaultPermissions = createPermissionsList(false);
export const DefaultPermissionsSuperUser = createPermissionsList(true);
