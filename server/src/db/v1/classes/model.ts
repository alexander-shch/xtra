import mongoose, { Schema, Document } from 'mongoose';
import { IBuilding } from '../buildings/model';
import { ClassAvailability } from './availability/model';

export interface IClassRoom extends Document {
  building: string;
  name: string;
  minStudents: number;
  maxStudents: number;
}

export const ClassesSchema = new Schema<IClassRoom>({
  building: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: false, default: '' },
  minStudents: { type: Number, required: false, default: 1 },
  maxStudents: { type: Number, required: true },
});

export interface ClassRoom {
  _id: string;
  building: IBuilding;
  name: string;
  minStudents: number;
  maxStudents: number;
  availability: ClassAvailability[];
}

export default mongoose.model<IClassRoom>('Classes', ClassesSchema);
