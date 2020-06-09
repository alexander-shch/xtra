import UserModel from './model';
import { User } from '../../../models';

export async function FindUser(
  queryObject: Partial<User & { password: string }>
) {
  return UserModel.findOne(queryObject).select('-password');
}

export async function FindUserFull(
  queryObject: Partial<User & { password: string }>
) {
  return UserModel.aggregate<User>([
    {
      $match: queryObject,
    },
    {
      $lookup: {
        from: 'Roles',
        localField: 'role',
        foreignField: '_id',
        as: 'roles',
      },
    },
    {
      $unwind: '$roles',
    },
    {
      $project: {
        password: -1,
      },
    },
  ])
    .limit(1)
    .then((userList) => userList[0])
    .then((singleUser) => singleUser);
}

export async function CreateUser(user: User) {
  const newUser = new UserModel(user);
  return newUser.save().then((user) => user);
}
