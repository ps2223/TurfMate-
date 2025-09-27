// src/components/Hero/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-20 px-6 text-center rounded-lg my-10"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Play. Connect. Dominate.</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Book turfs instantly or create your dream team with TurfMate.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md">
          Book a Turf
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
          Create a Team
        </button>
      </div>
    </section>
  );
};

export default Hero;