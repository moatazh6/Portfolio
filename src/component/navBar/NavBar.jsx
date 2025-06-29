import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    // Keep dark mode on refresh
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 w-full z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Moataz</h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 text-orange-700 dark:text-gray-200">
          <li><a href="#home" className="hover:text-orange-500 dark:hover:text-orange-400">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500 dark:hover:text-orange-400">About</a></li>
          <li><a href="#skills" className="hover:text-orange-500 dark:hover:text-orange-400">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-orange-500 dark:hover:text-orange-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-orange-500 dark:hover:text-orange-400">Contact</a></li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-gray-700 dark:text-yellow-300 transition-colors duration-300"
          >
            {darkMode ? (
              <MdLightMode className='text-yellow-400' />
            ) : (
              <MdDarkMode className='text-gray-900' />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-3xl text-orange-500"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 text-orange-700 dark:text-gray-200 animate-slide-down transition-all duration-300 ease-out">
          <li><a href="#home" className="block py-1 hover:text-orange-500 dark:hover:text-orange-400">Home</a></li>
          <li><a href="#about" className="block py-1 hover:text-orange-500 dark:hover:text-orange-400">About</a></li>
          <li><a href="#skills" className="block py-1 hover:text-orange-500 dark:hover:text-orange-400">Skills</a></li>
          <li><a href="#portfolio" className="block py-1 hover:text-orange-500 dark:hover:text-orange-400">Portfolio</a></li>
          <li><a href="#contact" className="block py-1 hover:text-orange-500 dark:hover:text-orange-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
