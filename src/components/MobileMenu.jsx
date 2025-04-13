import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  if (!menuOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex flex-col md:hidden">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl focus:outline-none hover:text-red-400 transition"
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>

      {/* Centered Menu Items */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-10 text-white text-2xl">
        {["home", "about", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setMenuOpen(false)}
            className="capitalize hover:text-blue-400 transition-colors duration-200"
          >
            {section}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
