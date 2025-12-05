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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#0f172a] dark:text-slate-100 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* WIDE centered container, but content inside will be left-aligned */}
      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Skills />
        <Projects />
        <section id="resume" className="py-12">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Download my resume for a quick summary of experience and work history.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-5 py-3 bg-black text-white dark:bg-gray-100 dark:text-black rounded hover:opacity-90 transition"
          >
            Download Resume (PDF)
          </a>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
