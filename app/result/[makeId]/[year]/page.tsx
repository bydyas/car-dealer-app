import { fetchVehicles } from "@/app/lib/data";
import { generateVehicleModelYears } from "@/app/lib/utils";
import GoBack from "@/app/ui/go-back";
import Loader from "@/app/ui/loader";
import ModelsList from "@/app/ui/result/models-list";
import { Suspense } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const vehicles = await fetchVehicles();
  const vehiclesTypes = await vehicles.Results;
  const years = generateVehicleModelYears();

  return years.map((year) => {
    return vehiclesTypes.map((car: any) => ({
      year: year,
      makeId: car.MakeId.toString(),
    })).flat();
  }).flat();
}

export default async function Page({ params }: { params: { makeId: string, year: string } }) {
  return (
    <main className="layout">
      <GoBack />
      <Suspense fallback={<Loader />}>
        <ModelsList year={params.year} makeId={params.makeId} />
      </Suspense>
    </main>
  );
}
