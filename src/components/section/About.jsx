import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const About = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "REST API", icon: <SiPostman className="text-orange-400" /> },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            I’m a passionate full-stack developer focused on building clean, efficient, and scalable web applications using the MERN stack.
            I enjoy turning ideas into reality through code, and I'm always eager to learn and grow. I believe in clean code, user-centric design, 
            and staying curious every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-300 py-1.5 px-4 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-300 py-1.5 px-4 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>BCA</strong> – Radha Govind University (2020–2023)
              </li>
              <li>
                Relevant Coursework: HTML, CSS, JavaScript, React, Node.js, MongoDB, REST API
              </li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">Work Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              Currently seeking my first opportunity as a Full Stack Developer, where I can apply my skills, collaborate with great minds, and keep growing professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
