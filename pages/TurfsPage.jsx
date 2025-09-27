import React from "react";
import { assets } from "../assets/assets";

const TurfsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 md:px-16 lg:px-24 py-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        🏟️ Available Turfs
      </h1>

      {/* Turf Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        
        {/* Turf 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={assets.turf1}
              alt="Turf 1"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">Football Turf</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Football Turf</h2>
            <p className="text-gray-600 text-sm">📍 Bengaluru | ₹800/hour | ⏰ 6 AM - 10 PM</p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Turf 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={assets.turf2}
              alt="Turf 2"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">Soccer Ground</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Soccer Ground</h2>
            <p className="text-gray-600 text-sm">📍 Mumbai | ₹1200/hour | ⏰ 5 AM - 11 PM</p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Turf 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={assets.turf3}
              alt="Turf 3"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">Cricket Pitch</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Cricket Pitch</h2>
            <p className="text-gray-600 text-sm">📍 Delhi | ₹1000/hour | ⏰ 7 AM - 9 PM</p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Turf 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={assets.turf4}
              alt="Turf 4"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-semibold">Multi Sports Turf</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Multi Sports Turf</h2>
            <p className="text-gray-600 text-sm">📍 Pune | ₹1500/hour | ⏰ 6 AM - 12 AM</p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TurfsPage;
