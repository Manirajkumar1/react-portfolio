import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 relative"
    >
      <div className="text-center z-10 w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Hi, I'm Maniraj
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          I'm a full-stack developer who loves crafting clean, scalable web
          applications. My goal is to build solutions that offer both exceptional
          performance and a delightful user experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Manirajkumar1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-white text-2xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/maniraj-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
