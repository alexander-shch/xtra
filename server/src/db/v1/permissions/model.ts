import mongoose, { Schema, Document } from 'mongoose';
import { PermissionList, PermissionTable } from '../../../models';

export interface IRole {
  name: string;
  permissions: PermissionList;
}

export interface IRoleDOC extends IRole, Document {}

export const PermissionSchema = new Schema<PermissionTable>(
  {
    read: Boolean,
    update: Boolean,
    delete: Boolean,
    create: Boolean,
  },
  {
    _id: false,
  }
);

export const PermissionsSchema = new Schema<PermissionList>(
  {
    user: { type: PermissionSchema, required: true },
    permissions: { type: PermissionSchema, required: true },
    buildings: { type: PermissionSchema, required: true },
    classes: { type: PermissionSchema, required: true },
  },
  {
    _id: false,
  }
);

export const RoleSchema = new Schema<IRoleDOC>({
  name: { type: String, required: true },
  permissions: { type: PermissionsSchema, required: true },
});

export default mongoose.model<IRoleDOC>('Roles', RoleSchema);
