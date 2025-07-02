import React, { useState, useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setIsDarkMode(savedTheme === "dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    setIsDarkMode(prefersDark);
  }
}, []);


  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
  const newMode = !isDarkMode;
  document.documentElement.classList.toggle("dark", newMode);
  localStorage.setItem("theme", newMode ? "dark" : "light");
  setIsDarkMode(newMode);
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

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50 transition-colors duration-300 dark:bg-gray-900">
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
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
          </button>

          <button className="lg:hidden text-3xl text-orange-500" onClick={toggleMenu}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="lg:hidden mobile-menu bg-white dark:bg-gray-800 px-6 py-4 space-y-3 text-orange-700 dark:text-gray-200 transition-all duration-300 ease-out">
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
