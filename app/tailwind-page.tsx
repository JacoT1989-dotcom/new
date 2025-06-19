'use client';
import './tailwind-test.css';

export default function TailwindPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Tailwind Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-red-500 p-6 rounded-lg shadow-lg text-white">
          Red Box
        </div>
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
          Blue Box
        </div>
        <div className="bg-green-500 p-6 rounded-lg shadow-lg text-white">
          Green Box
        </div>
        <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-white">
          Yellow Box
        </div>
        <div className="bg-purple-500 p-6 rounded-lg shadow-lg text-white">
          Purple Box
        </div>
        <div className="bg-pink-500 p-6 rounded-lg shadow-lg text-white">
          Pink Box
        </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Button 1
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          Button 2
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
          Button 3
        </button>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Custom Tailwind Classes Test</h2>
        <div className="tailwind-test mb-4">
          This should have blue background if Tailwind is processing the CSS file correctly.
        </div>
        
        <div className="tailwind-grid">
          <div className="bg-purple-500 p-4 text-white">Grid Item 1</div>
          <div className="bg-indigo-500 p-4 text-white">Grid Item 2</div>
        </div>
      </div>
    </div>
  );
}
