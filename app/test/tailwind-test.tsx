'use client';

export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Tailwind Test</h1>
      <p className="text-lg bg-blue-500 p-4 rounded-lg">If you can see this with red background and blue box, Tailwind is working!</p>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-green-500 p-4 rounded-lg">Green Box</div>
        <div className="bg-yellow-500 p-4 rounded-lg">Yellow Box</div>
        <div className="bg-purple-500 p-4 rounded-lg">Purple Box</div>
      </div>
    </div>
  );
}
