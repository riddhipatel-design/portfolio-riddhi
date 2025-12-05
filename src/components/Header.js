import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="w-full sticky top-0 z-30 bg-gradient-to-r from-white to-gray-100 dark:from-[#0f172a] dark:to-[#1e293b] shadow">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title={darkMode ? "Switch to light" : "Switch to dark"}
          >
            {darkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-6 text-md">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#resume" className="hover:text-blue-600 dark:hover:text-blue-400">Resume</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </nav>

         
        </div>
      </div>
    </header>
  );
}
