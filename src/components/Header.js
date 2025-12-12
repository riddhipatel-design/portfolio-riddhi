import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
   <header className="w-full sticky top-0 z-30 bg-gradient-to-b from-white to-gray-100 dark:from-[#0f172a] dark:to-[#1e293b] shadow-xl shadow-neutral">

  <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4 relative">

    {/* Dark Mode Button — now inside flex, aligned left */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
      className="p-2 mr-auto rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      title={darkMode ? "Switch to light" : "Switch to dark"}
    >
      {darkMode ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </button>

    {/* Desktop Menu */}
    <nav className="hidden sm:flex gap-6 text-md font-semibold p-4">
      {menuItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="text-md font-semibold leading-6 cursor-pointer relative w-fit block 
          after:block after:content-[''] after:absolute after:h-[3px] after:bg-current 
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition 
          after:duration-300 after:origin-left"
        >
          {item.name}
        </a>
      ))}
    </nav>

    {/* Mobile Hamburger */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="sm:hidden p-2 ml-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle menu"
    >
      {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <nav className="sm:hidden absolute top-full right-0 w-full bg-white dark:bg-[#0f172a] shadow-md flex flex-col gap-4 px-6 py-4">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold hover:text-blue-500 transition"
          >
            {item.name}
          </a>
        ))}
      </nav>
    )}
  </div>
</header>

  );
}
