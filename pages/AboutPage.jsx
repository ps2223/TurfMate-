import React from "react";

const AboutPage = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        Welcome to <span className="font-semibold text-blue-600">TurfMate</span>, 
        your one-stop solution to discover, connect, and book sports turfs 
        in your city. Our mission is to make sports accessible, convenient, 
        and fun for everyone.
      </p>

      {/* Mission Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
          alt="Turf"
          className="rounded-xl shadow-md object-cover w-full h-80"
        />

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At TurfMate, we believe in the power of sports to bring people 
            together. Whether you're planning a casual match with friends 
            or a competitive tournament, we’re here to help you find the 
            perfect turf. With our easy-to-use platform, booking your slot 
            is just a few clicks away.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose TurfMate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              🏟️ Wide Turf Network
            </h3>
            <p className="text-gray-600">
              Access a wide range of verified turfs across different cities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              ⚡ Easy Booking
            </h3>
            <p className="text-gray-600">
              Book your slot in just a few clicks with our smooth interface.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              👥 Community Building
            </h3>
            <p className="text-gray-600">
              Find teammates and connect with players in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
