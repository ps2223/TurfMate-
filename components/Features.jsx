import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why TurfMate?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Easy Booking</h3>
          <p>Book your favorite turf in seconds with our simple interface.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Team Connect</h3>
          <p>Find other players nearby and form teams to play together.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Real-time Availability</h3>
          <p>Check turf availability instantly and never miss a game.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
