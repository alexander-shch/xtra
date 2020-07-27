import RoleModel, { IRole, IRoleDOC } from './model';

export async function CreateRole(role: IRole) {
  const roleModel = new RoleModel(role);
  return roleModel.save().then((role) => role.toObject());
}

export async function FindRole(query: Partial<IRoleDOC>) {
  return RoleModel.findOne(query).then((role) => role?.toObject());
}

export async function FindRoles(query: Partial<IRole> = {}) {
  return RoleModel.find(query);
}

export async function RoleUpdateOne(_id: string, doc: IRole) {
  return RoleModel.findByIdAndUpdate(_id, doc, {
    new: true,
  }).then((updated) => updated?.toObject());
}
