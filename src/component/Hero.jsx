import React from 'react';

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-16 px-4">
      <h1 className="text-3xl font-bold text-[#08082e] mb-6 text-center">Protect Yourself From Scam Websites</h1>
      <div className="flex w-full max-w-md gap-3">
        <input
          type="text"
          placeholder="Enter website here"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </main>
  );
};

export default Hero;
