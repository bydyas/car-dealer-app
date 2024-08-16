import { unstable_noStore as noStore } from 'next/cache';
import { ICustomError, IGetMakesForVehicleType, IGetModelsForMakeIdYear } from './definitions';

export async function fetchVehicles(): Promise<IGetMakesForVehicleType | ICustomError> {
  noStore();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_VEHICLES}/GetMakesForVehicleType/car?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch types.');
    }
    return await response.json();
  } catch (error) {
    return ({
      message: (error as Error).message,
    });
  }
}

export async function fetchVehicleModels({ makeId, year}: { 
  makeId: string; 
  year: string 
}): Promise<IGetModelsForMakeIdYear | ICustomError> {
  noStore();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_VEHICLES}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    if (!response.ok) {
      throw new Error('Failed to fetch models.');
    }
    return await response.json();
  } catch (error) {
    return ({
      message: (error as Error).message,
    });
  }
}
