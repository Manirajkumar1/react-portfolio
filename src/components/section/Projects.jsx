import React from "react";
import { FiExternalLink } from "react-icons/fi";

const projectData = [
  {
    title: "E-Learning Platform",
    description:
      "A responsive e-learning web app where users can register, login, and access learning resources. Built using the MERN stack and deployed live.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "https://e-learning-ebrd.onrender.com/",
  },
  {
    title: "Space Explorer App",
    description:
      "An interactive app that shows space facts, NASA images, and astronomical data using public APIs. Built for science lovers and aspiring space YouTubers.",
    techStack: ["React", "API", "Framer Motion"],
    link: "#",
  },
  {
    title: "MERN Dev Portfolio",
    description:
      "A sleek dark-themed portfolio featuring space illustrations, interactive animations, and detailed info about skills, projects, and journey.",
    techStack: ["React", "TailwindCSS", "GSAP", "Framer Motion"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  View Project <FiExternalLink className="mt-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
