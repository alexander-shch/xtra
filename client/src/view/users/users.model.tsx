export enum UserRoleEnum {
  USER = 'User',
  SUPERUSER = 'Superuser',
}
  
export type userRoleKey = 'USER' | 'SUPERUSER';
  
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  role: userRoleKey;
  avatarUrl?: string;
  isBlacklisted?: boolean;
}