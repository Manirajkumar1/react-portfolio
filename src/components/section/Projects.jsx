import React from "react";

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
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
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
