import React from "react";
import Hero from "../components/Hero";
import TurfHighlights from "../components/TurfHighlights";
import Features from "../components/Features";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <TurfHighlights />
      <Features />
      <Footer /> {/* Footer only here */}
    </div>
  );
};

export default HomePage;
