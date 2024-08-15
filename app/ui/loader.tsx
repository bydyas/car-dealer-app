import Image from "next/image";

export default function Loader() {
  return (
    <div className="w-full">
      <Image
        className="animate-spin pointer-events-none mt-24 mx-auto"
        src="/icons/car.svg"
        width={128}
        height={128}
        alt="Picture of the car"
      />
    </div>
  );
}
