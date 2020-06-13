import { Role } from './permissions';

export interface User {
  _id: string;
  fullName: string;
  name: string;
  lastName: string;
  email: string;
  role: Role;
  password?: string;
}
