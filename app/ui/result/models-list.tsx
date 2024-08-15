import { fetchVehicleModels } from "@/app/lib/data";

type Props = {
  makeId: string;
  year: string;
}

export default async function ModelsList({ makeId, year }: Props) {
  const models = await fetchVehicleModels({ makeId, year });
  return (
    <ul className="grid grid-cols-4 gap-3">
      {models.Results.map((model) => <li className="px-2 py-2 bg-red-400 text-white rounded-md" key={model.Model_ID}>{model.Model_Name}</li>)}
    </ul>
  );
}
