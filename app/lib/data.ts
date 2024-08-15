import { unstable_noStore as noStore } from 'next/cache';
import { IGetMakesForVehicleType, IGetModelsForMakeIdYear } from './definitions';

export async function fetchVehicles(): Promise<IGetMakesForVehicleType> {
  noStore();

  try {
    const cars = await fetch(`${process.env.NEXT_PUBLIC_API_VEHICLES}/GetMakesForVehicleType/car?format=json`);
    return await cars.json();
  } catch (error) {
    console.log('Failed to fetch cars');
    throw new Error('Failed to fetch cars.');
  }
}

export async function fetchVehicleModels({ makeId, year}: { 
  makeId: string; 
  year: string 
}): Promise<IGetModelsForMakeIdYear> {
  noStore();

  try {
    const models = await fetch(`${process.env.NEXT_PUBLIC_API_VEHICLES}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    return await models.json();
  } catch (error) {
    console.log('Failed to fetch cars');
    throw new Error('Failed to fetch cars.');
  }
}