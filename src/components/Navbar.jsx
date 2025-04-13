import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md border-b border-white/10">
      <nav
        className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="#home" className="text-white text-2xl font-bold font-mono">
          Maniraj <span className="text-blue-500">Kumar</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="capitalize hover:text-white transition-colors duration-200"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-3xl focus:outline-none z-50"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          &#9776;
        </button>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Navbar;
