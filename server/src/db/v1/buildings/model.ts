import mongoose, { Schema, Document } from 'mongoose';

export interface IBuilding {
  name: string;
  active: boolean;
}

export interface IBuildingDOC extends IBuilding, Document {}


export const BuildingSchema = new Schema<IBuildingDOC>({
  name: { type: String, required: true },
  active: { type: Boolean, required: true },
});

export default mongoose.model<IBuildingDOC>('Buildings', BuildingSchema);
