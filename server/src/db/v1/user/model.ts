import mongoose, { Schema, Document } from 'mongoose';
import { createHash } from 'crypto';

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
}

type IUserDOC = IUser & Document;

export const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, required: true },
});

UserSchema.pre<IUserDOC>('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  const pass = createHash('sha256')
    .update(user.password as string)
    .digest('base64');

  user.password = pass;
  next();
});

export default mongoose.model<IUserDOC>('User', UserSchema);
