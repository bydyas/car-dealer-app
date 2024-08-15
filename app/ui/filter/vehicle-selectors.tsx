'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { fetchVehicles } from "@/app/lib/data";
import { FetchStatus, IGetMakesForVehicleType, IVehicleType } from "@/app/lib/definitions";
import { vehicleModelYears } from "@/app/lib/placeholders";
import Select from "../select";
import Loader from "../loader";

export default function VehicleSelectors() {
  const router = useRouter()
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);
  const [vehiclesTypes, setVehiclesTypes] = useState<IVehicleType[]>([]);
  const [selectedVehicleTypeId, setSelectedVehicleTypeId] = useState<IVehicleType>();
  const [selectedVehicleModelYear, setSelectedModelYear] = useState<string>();

  useEffect(() => {
    setStatus(FetchStatus.Loading);
    fetchVehicles()
      .then((data: IGetMakesForVehicleType) => {
        const vehiclesTypes: IVehicleType[] =  data.Results;
        setVehiclesTypes(vehiclesTypes);
      })
      .catch((error) => {
        console.log(error.message);
        setStatus(FetchStatus.Error);
      })
      .finally(() => setStatus(FetchStatus.Idle));
  }, []);

  if (status === FetchStatus.Loading) {
    return <Loader />
  }

  if (status === FetchStatus.Error) {
    return (
      <div>Oops, something went wrong. Try again!</div>
    );
  }

  return (
    <section className="">
      <form className="flex flex-col gap-3">
        <div className="flex gap-4">
          <Select 
            id={'types'} 
            label={'types'}
            placeholder="Select the type"
            onSelect={setSelectedVehicleTypeId}
            options={vehiclesTypes.map((type) => ({ name: type.MakeName, value: type.MakeId }))}
          />
          <Select 
            id={'years'} 
            label={'years'}
            placeholder="Select the year"
            onSelect={setSelectedModelYear}
            options={vehicleModelYears.map((year) => ({ name: year, value: year }))}
          />
        </div>
        <button
          disabled={!selectedVehicleTypeId || !selectedVehicleModelYear}
          onClick={() => router.push(`/result/${selectedVehicleTypeId}/${selectedVehicleModelYear}`)}
          className="h-12 bg-red-400 text-white rounded-lg text-lg bold uppercase transition-all hover:scale-95 cursor-pointer disabled:opacity-25 disabled:pointer-events-none" 
          type="button"
        >
          Next
        </button>
      </form>
      <Image
        className="animate-bounce pointer-events-none mt-24 mx-auto"
        src="/icons/car.svg"
        width={128}
        height={128}
        alt="Picture of the car"
      />
    </section>
  );
}
