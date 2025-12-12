import React from "react";

// Importing all SVG icons exactly as per your folder
import htmlIcon from "url:../assets/skills/html5.svg";
import cssIcon from "url:../assets/skills/css3.svg";
import jsIcon from "url:../assets/skills/js.svg";
import reactIcon from "url:../assets/skills/react.svg";
import bootstrapIcon from "url:../assets/skills/bootstrap.svg";
import tailwindIcon from "url:../assets/skills/tailwind.svg";
import sassIcon from "url:../assets/skills/sass.svg";
import jqueryIcon from "url:../assets/skills/jquery.svg";

import gitIcon from "url:../assets/skills/git.svg";
import gitlabIcon from "url:../assets/skills/gitlab.svg";
import jsonIcon from "url:../assets/skills/json.svg";
import nodeIcon from "url:../assets/skills/node.js.svg";

import wordpressIcon from "url:../assets/skills/wordpress.svg";
import indesignIcon from "url:../assets/skills/indesign.svg";

// Skill list
const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Sass", icon: sassIcon },
  { name: "jQuery", icon: jqueryIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitLab", icon: gitlabIcon },
  { name: "JSON", icon: jsonIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "WordPress", icon: wordpressIcon },
  { name: "InDesign", icon: indesignIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-semibold mb-10">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col">
            <div
              className="w-16 h-16 flex items-center justify-center 
              bg-white dark:bg-slate-800 rounded-xl shadow-md 
              border border-slate-200 dark:border-slate-700 
              overflow-hidden
              transition-transform duration-300 hover:scale-110"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <p className="mt-3 text-sm text-slate-900 dark:text-slate-100 font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
