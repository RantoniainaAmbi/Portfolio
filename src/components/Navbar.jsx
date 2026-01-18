import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement; 
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Accueil", path: "/Home" },
    { name: "Mon parcours", path: "/About" },
    { name: "Mes projets", path: "/Project" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 font-bold text-2xl tracking-wide">
          <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm ">
              <FaLayerGroup />
              <span>Portfolio</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-500 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" size={20} />
              ) : (
                <FaMoon className="text-slate-600" size={20} />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" size={20} />
              ) : (
                <FaMoon className="text-slate-600" size={20} />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}