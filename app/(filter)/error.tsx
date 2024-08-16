'use client';
  
export default function Error({ reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) { 
  return (
    <main className="flex h-full flex-col items-center justify-center mt-6">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-red-400 px-4 py-2 text-sm text-white transition-colors hover:bg-red-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
