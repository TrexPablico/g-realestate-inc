import React, { useState } from "react";
import Logo from "../assets/Navbar/logo.png"; // Assuming your logo is saved as logo.png in the assets folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#333333] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={Logo}
              alt="G Real Estate Logo"
              className="h-20 w-auto p-2" // Adjusted height and added padding
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#"
              className="text-green-300 hover:text-green-500 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-green-500 text-lg font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-green-500 text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-green-500 text-lg font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-green-500 text-lg font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-300 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-100 p-4">
          <a href="#" className="block text-green-800 py-2">
            Home
          </a>
          <a href="#" className="block text-green-800 py-2">
            Services
          </a>
          <a href="#" className="block text-green-800 py-2">
            About Us
          </a>
          <a href="#" className="block text-green-800 py-2">
            Projects
          </a>
          <a href="#" className="block text-green-800 py-2">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
