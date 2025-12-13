import React from "react";
import { motion } from "framer-motion";
import resumePdf from "url:../assets/Riddhi_resume.pdf";


export default function About() {
  return (
    <section id="about" className="pt-24 pb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-1 gap-8 items-center"
      >
        <div className="grid md:grid-cols-1 gap-8 items-center">
          <h2
            className="text-5xl font-bold 
            bg-gradient-to-t from-[#5d6a7b] to-black 
            dark:bg-gradient-to-t dark:from-[#94a3b8] dark:to-white
            bg-clip-text text-transparent"
          >
            Riddhi Patel
          </h2>

          <h3
            className="text-2xl font-semibold 
            bg-gradient-to-t from-[#8e8e8e] to-black
            dark:bg-gradient-to-t dark:from-[#cbd5e1] dark:to-white
            bg-clip-text text-transparent"
          >
            Front-End Web Developer & Web Production Specialist
          </h3>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            I specialize in building clean, accessible, efficient user
            interfaces with React, HTML, CSS, JavaScript and modern workflows.
            With over 4 years of experience in web production and digital learning,
            I focus on responsive layouts, AODA/WCAG compliance, and
            collaborative, agile design practices. I develop interactive web
            and e-learning experiences, reskin and enhance React projects,
            optimize digital assets, and ensure high-quality, standards-compliant
            code across all devices.
          </p>

          {/* Resume Button Inside About Section */}
          <div className="mt-8">
         <a
  href={resumePdf}
  download="Riddhi_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-2 px-6 py-3 rounded-xl
    text-white font-semibold
    bg-gradient-to-b from-[#6b788e] to-[#171e2e] 
    dark:bg-gradient-to-b dark:from-[#63769c] dark:to-[#2c2c2c]
    transition-all duration-500
    hover:from-[#8a95ae] hover:to-[#1f273d] 
    dark:hover:from-[#7a85ad] dark:hover:to-[#3c3c3c]
    hover:shadow-lg
  "
>
  {/* Download Icon */}
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-5'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4'
    />
  </svg>

  Download Resume
</a>


          </div>
        </div>
      </motion.div>
    </section>
  );
}
