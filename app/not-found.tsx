import Link from 'next/link'
import GoBack from './ui/go-back';
 
export default function NotFound() {
  return (
    <main className="layout">
      <GoBack />
      <h2 className='text-4xl bg-red-400 text-white text-center py-2 px-8 rounded-md'>Not found page</h2>
    </main>
  );
}
