import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './NavBar.css'

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 w-full z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Moataz</h1>
        <ul className="flex space-x-6 text-orange-700 dark:text-gray-200">
          <li><a href="#home" className="hover:text-orange-500 dark:hover:text-orange-400">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500 dark:hover:text-orange-400">About</a></li>
          <li><a href="#skills" className="hover:text-orange-500 dark:hover:text-orange-400">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-orange-500 dark:hover:text-orange-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-orange-500 dark:hover:text-orange-400">Contact</a></li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="text-2xl text-gray-700 dark:text-yellow-300 transition-colors duration-300"
        >
          {darkMode ? <MdLightMode className='text-yellow-400' /> : <MdDarkMode className='text-gray-900' />}
        </button>
      </div>
    </nav>
  );
}
