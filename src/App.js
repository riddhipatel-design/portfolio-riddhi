import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // top-level controls global bg + text for both modes
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#0f172a] dark:text-slate-100 transition-colors duration-300">
      {/* Skip Link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
             bg-white dark:bg-slate-800 p-2 rounded z-50 shadow"
      >
        Skip to main content
      </a>
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
