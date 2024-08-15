import { unstable_noStore as noStore } from 'next/cache';
import { IGetMakesForVehicleType } from './definitions';

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
