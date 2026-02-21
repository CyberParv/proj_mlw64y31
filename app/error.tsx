'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground mt-3">
          We could not load this page. Please try again.
        </p>
        <div className="mt-6 flex justify-center">
          <Button onClick={reset}>Try Again</Button>
        </div>
      </div>
    </main>
  );
}
