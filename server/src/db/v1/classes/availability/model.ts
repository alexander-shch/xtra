import mongoose, { Schema, Document } from 'mongoose';
import moment from 'moment';

export interface IClassAvailability extends Document {
  classId: string;
  from: string;
  to: string;
}

export const ClassAvailabilitySchema = new Schema<IClassAvailability>({
  classId: { type: Schema.Types.ObjectId, required: true },
  from: {
    type: Date,
    required: false,
    default: moment().toDate(),
    min: moment().toDate(),
  },
  to: { type: Date, required: true },
});

export interface ClassAvailability {
  _id: string;
  from: string;
  to: string;
  classId: string;
}

export default mongoose.model<IClassAvailability>(
  'ClassAvailability',
  ClassAvailabilitySchema
);
