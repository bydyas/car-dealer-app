export interface IGetMakesForVehicleType {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleType[];
}

export interface IGetModelsForMakeIdYear {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleModel[];
}

export interface IVehicleModel {
  "Make_ID": number;
  "Make_Name": string;
  "Model_ID": number;
  "Model_Name": string;
}

export interface IVehicleType {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export enum FetchStatus {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error',
}
