import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between text-sm py-4 px-6 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
           <NavLink to="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src={assets.Logo}
            alt="TurfMate Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-gray-800">TurfMate</span>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 items-center text-gray-700 font-medium">
          <li className="py-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="py-1">
            <NavLink
              to="/turfs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-500"
              }
            >
              Turfs
            </NavLink>
          </li>
          <li className="py-1">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-500"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="py-1">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-500"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Button */}
        <div>
          <button onClick = {() => navigate('/login')}  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
