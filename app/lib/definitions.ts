export interface IGetMakesForVehicleType {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleType[];
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
