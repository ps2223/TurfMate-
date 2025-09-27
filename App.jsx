import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage"; // ✅ make sure filename matches (AboutPage.jsx)
import TurfsPage from "./Pages/TurfsPage"; 
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      


      <div className="p-6">
        <Routes>
          
          <Route path="/" element={<HomePage/>} />
          <Route path="/turfs" element={<TurfsPage />} />
          <Route path="/about" element={<AboutPage />} />  
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/profile" element={<h1 className="text-2xl font-bold">My Profile</h1>} />
          <Route path="/bookings" element={<h1 className="text-2xl font-bold">My Bookings</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
