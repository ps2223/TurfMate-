import React from "react";
import { assets } from "../assets/assets";

const TurfHighlights = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Popular Turfs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={assets.turf1} alt="Football Turf" className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Football Turf</h3>
            <p className="text-sm text-gray-600">📍 Bengaluru | ₹800/hour</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={assets.turf2} alt="Soccer Ground" className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Soccer Ground</h3>
            <p className="text-sm text-gray-600">📍 Mumbai | ₹1200/hour</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={assets.turf3} alt="Cricket Pitch" className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Cricket Pitch</h3>
            <p className="text-sm text-gray-600">📍 Delhi | ₹1000/hour</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurfHighlights;
