import React from "react";
import { motion } from "framer-motion";
import profileImg from "url:../assets/profile.jpg";
 // <-- add your photo in /src/assets/


export default function About() {
  console.log("IMAGE:", profileImg);

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        
        {/* LEFT — PHOTO */}
        <div className="flex justify-between">
          <img
             src={profileImg}
            alt="Riddhi Patel"
            className="w-56 h-56 rounded-2xl object-cover shadow-xl border border-slate-200 dark:border-slate-700"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-3">Riddhi Patel</h2>
          <h3 className="text-xl text-slate-700 dark:text-slate-300 font-semibold mb-6">
            Front-End Web Developer & Web Production Specialist
          </h3>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            I specialize in building clean, accessible, efficient user interfaces
            with <strong>React, HTML, CSS, JavaScript</strong> and modern workflows.
            With 5+ years of experience in web production and digital learning,
            I focus on responsive layouts, AODA/WCAG compliance, and collaboration
            in agile design environments.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
