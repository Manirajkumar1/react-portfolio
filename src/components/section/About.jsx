import React from "react";

const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "REST API"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-lg">
            I’m a dedicated web developer with a strong interest in building full-stack applications using the MERN stack.
            I enjoy learning new technologies and turning ideas into reality through code. While I’m still growing and gaining experience, 
            I focus on writing clean code and creating responsive, user-friendly interfaces. Every day is a step forward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>BCA</strong> – Radha Govind University (2020–2023)
              </li>
              <li>Relevant Coursework: HTML, CSS, JavaScript, React, Node.js, MongoDB, REST API</li>
            </ul>
          </div>

          {/* Work Experience (Optional) */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-white">Work Experience</h3>
            <p className="text-gray-300">Currently seeking my first professional opportunity as a Full Stack Developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
