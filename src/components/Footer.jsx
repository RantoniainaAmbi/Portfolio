import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 py-12 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div className="flex flex-col space-y-4">
            <Link to="/Home" className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white group">
              <FaCode className="text-blue-600 group-hover:rotate-12 transition-transform" />
              <span>Ranto</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-600 dark:text-slate-400">
              Étudiant en Licence 2 Informatique. <br />
              Je construis des projets web avec React, Node.js et PostgreSQL tout en renforçant mes bases en Java.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/Home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                  Mon Parcours
                </Link>
              </li>
              <li>
                <Link to="/Project" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                  Mes Projets
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Me contacter
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Ouvert aux opportunités d'alternance et collaboration.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Rantoniainaambi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/ranto-andriamboavonjy-a0a6613a1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:andriamboavonjyrantoniainaambi@gmail.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                aria-label="Email"
              >
                <FaEnvelope size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500">
          <p>
            &copy; {currentYear} Ranto. Codé avec React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}