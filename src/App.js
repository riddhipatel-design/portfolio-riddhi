import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // persist theme in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // add/remove the `dark` class on <html> (Tailwind dark mode by class)
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {}
  }, [darkMode]);

  return (
    // top-level controls global bg + text for both modes
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#0f172a] dark:text-slate-100 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* WIDE centered container, but content inside will be left-aligned */}
      <main className="max-w-6xl mx-auto px-6">
        <About />
       
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
