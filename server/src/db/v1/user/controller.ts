import UserModel, { IUser } from './model';
import { User } from '../../../models';

export async function FindUser(queryObject: Partial<IUser>) {
  return UserModel.findOne(queryObject).select('-password');
}

export async function FindUserFull(queryObject: Partial<IUser>) {
  return UserModel.aggregate<User>([
    {
      $match: queryObject,
    },
    {
      $lookup: {
        from: 'roles',
        localField: 'role',
        foreignField: '_id',
        as: 'role',
      },
    },
    {
      $unwind: '$role',
    },
    {
      $project: {
        password: 0,
      },
    },
  ])
    .limit(1)
    .then((singleUser) => singleUser[0]);
}

export async function CreateUser(user: User) {
  const newUser = new UserModel(user);
  return newUser.save().then((user) => user);
}
