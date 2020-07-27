import mongoose from 'mongoose';
import { CreateRole, FindRole } from './permissions/controller';
import { DefaultPermissionsSuperUser } from '../../settings/permissions';
import { FindUser, CreateUser } from './user/controller';
import { Role } from '../../models';

export default () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
        {
          dbName: process.env.DB_NAME,
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      )
      .then(() => {
        populate();
        return console.info(`Successfully connected to ${process.env.DB_NAME}`);
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  // Exec connection
  connect();
  // In case of disconnection reconnect
  mongoose.connection.on('disconnected', connect);
};

function createAdminUser(role: Role) {
  return FindUser({ name: 'admin' }).then((user) => {
    if (!user) {
      return CreateUser({
        name: 'admin',
        lastName: 'admin',
        role: role._id,
        email: 'admin@gmail.com',
        password: 'o87y3hu4g',
      });
    }
    return Promise.reject('User admin was already populated');
  });
}

async function populate() {
  try {
    let role = await FindRole({ name: 'admin' });
    if (!role) {
      role = await CreateRole({
        name: 'admin',
        permissions: DefaultPermissionsSuperUser,
      });
    }
    await createAdminUser(role);
  } catch (e) {
    console.error(e);
  }
}
