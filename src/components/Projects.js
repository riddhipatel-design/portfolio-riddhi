import React from "react";
import { motion } from "framer-motion";

import abSliderImg from "url:../assets/projects/afterbefore_slider.png";
import imgSlider from "url:../assets/projects/image_slider.png";
import freshBake from "url:../assets/projects/freshbake.png";
import novaLand from "url:../assets/projects/nova_page.png";

const projectList = [
  {
    title: "FreshBake Foods",
    image: freshBake,
    demo: "https://freshback.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Nova Landing Page",
    image: novaLand,
    demo: "https://nova-page.netlify.app/",
    tech: ["React", "CSS", "Vite", "Styled Components"],
  },
  {
    title: "Before/After Slider",
    image: abSliderImg,
    demo: "https://slider-position.netlify.app/before-after",
    tech: ["React", "React Router", "CSS", "Webpack"],
  },
  {
    title: "Image Slider",
    image: imgSlider,
    demo: "https://slider-position.netlify.app/image-slider",
    tech: ["React", "React Router", "CSS", "Webpack"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projectList.map((p, i) => (
          <article
            key={i}
            className="bg-[linear-gradient(120deg,#f6d365_0%,#fda085_100%)] shadow-lg rounded-xl p-6"
          >
            {/* IMAGE container (ensures popup stays inside box) */}
            <motion.a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden"      // 🚀 keeps image growth inside
              whileHover={{ scale: 1.03 }}                      // small smooth popup
              transition={{ duration: 0.3 }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </motion.a>

            <div className="p-5 text-left">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {p.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}