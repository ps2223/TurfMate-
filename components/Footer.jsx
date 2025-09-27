// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">TurfMate</h3>
          <p className="text-gray-400">
            Book turfs. Build teams. Play sports. Anytime, anywhere.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#book" className="hover:text-white transition">Book Turf</a></li>
            <li><a href="#teams" className="hover:text-white transition">Create Team</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">FB</a>
            <a href="#" className="text-gray-400 hover:text-white">IG</a>
            <a href="#" className="text-gray-400 hover:text-white">TW</a>
            <a href="#" className="text-gray-400 hover:text-white">YT</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">© 2025 TurfMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;