export default function Loading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="h-8 w-48 bg-gray-200 rounded-md mx-auto" />
        <div className="mt-4 h-4 w-64 bg-gray-200 rounded-md mx-auto" />
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="h-24 w-24 bg-gray-200 rounded-md" />
          <div className="h-24 w-24 bg-gray-200 rounded-md" />
          <div className="h-24 w-24 bg-gray-200 rounded-md" />
        </div>
      </div>
    </main>
  );
}
