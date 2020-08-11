import BuildingModel, { IBuilding } from './model';

export async function GetAllBuildings() {
  return BuildingModel.find({});
}

export async function GetBuildingById(id: string) {
  return BuildingModel.findById(id).then((data) => data?.toObject());
}

export async function CreateBuildingRecord(building: IBuilding) {
  const buildingRecord = new BuildingModel(building);
  return buildingRecord.save().then((role) => role.toObject());
}

export async function FindAndUpdate(_id: string, building: IBuilding) {
  return BuildingModel.findOneAndUpdate({ _id }, building, {
    new: true,
  }).then((updated) => updated?.toObject());
}

export async function DeleteBuildingRecord(id: string) {
  return BuildingModel.findByIdAndDelete(id).then((_) => true);
}
