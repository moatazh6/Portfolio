import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
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

        <ul className="hidden lg:flex space-x-6 text-orange-700 dark:text-gray-200">
          <li><span onClick={() => handleNavClick('home')} className="cursor-pointer hover:text-orange-500 dark:hover:text-orange-400">Home</span></li>
          <li><span onClick={() => handleNavClick('about')} className="cursor-pointer hover:text-orange-500 dark:hover:text-orange-400">About</span></li>
          <li><span onClick={() => handleNavClick('skills')} className="cursor-pointer hover:text-orange-500 dark:hover:text-orange-400">Skills</span></li>
          <li><span onClick={() => handleNavClick('portfolio')} className="cursor-pointer hover:text-orange-500 dark:hover:text-orange-400">Portfolio</span></li>
          <li><span onClick={() => handleNavClick('contact')} className="cursor-pointer hover:text-orange-500 dark:hover:text-orange-400">Contact</span></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-2xl text-gray-700 dark:text-yellow-300 transition-colors duration-300">
            {darkMode ? <MdLightMode className='text-yellow-400' /> : <MdDarkMode className='text-gray-900' />}
          </button>

          <button className="lg:hidden text-3xl text-orange-500" onClick={toggleMenu}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="lg:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 text-orange-700 dark:text-gray-200 animate-slide-down transition-all duration-300 ease-out">
          <li><span className="block py-1 cursor-pointer" onClick={() => handleNavClick('home')}>Home</span></li>
          <li><span className="block py-1 cursor-pointer" onClick={() => handleNavClick('about')}>About</span></li>
          <li><span className="block py-1 cursor-pointer" onClick={() => handleNavClick('skills')}>Skills</span></li>
          <li><span className="block py-1 cursor-pointer" onClick={() => handleNavClick('portfolio')}>Portfolio</span></li>
          <li><span className="block py-1 cursor-pointer" onClick={() => handleNavClick('contact')}>Contact</span></li>
        </ul>
      )}
    </nav>
  );
}
