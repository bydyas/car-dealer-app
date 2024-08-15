import Link from "next/link";

export default function GoBack() {
  return (
    <Link 
      href={'/'}
      className="border px-8 py-2 border-red-400 text-red-400 rounded-md mb-6 block w-fit hover:bg-white hover:text-red-400"
    >
      Go Back
    </Link>
  )
}