import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Before/After Image Slider",
    description: "Draggable before/after slider built with React.",
    image: "/projects/juxtapose.jpg",
    demo: "#",
    github: "#",
    tech: ["React", "CSS"]
  },
  {
    title: "Interactive Learning Module",
    description: "Reusable React components for learning modules.",
    image: "/projects/ilo.jpg",
    demo: "#",
    github: "#",
    tech: ["React", "Sass"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projectList.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white dark:bg-[#1e293b] shadow-lg rounded-xl p-6 transition"
          >
            {/* image */}
            <div className="h-44 bg-gray-200 dark:bg-gray-700">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{p.description}</p>

              <div className="flex items-center gap-3 text-sm">
                <a href={p.demo} className="text-blue-600 dark:text-blue-400 hover:underline">Demo</a>
                <a href={p.github} className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
