import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaDatabase, FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
          Étudiant L2 & Développeur Web
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Salut, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ranto</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10">
          Développeur Full-Stack en formation, je conçois des applications web complètes en alliant 
          <span className="font-semibold text-slate-800 dark:text-slate-200"> React</span> et 
          <span className="font-semibold text-slate-800 dark:text-slate-200"> Express.js</span>, 
          avec une gestion rigoureuse des données.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/Project"
            className="flex items-center justify-center px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25"
          >
            Voir mes projets <FaArrowRight className="ml-2" size={14} />
          </Link>
          <Link
            to="/About"
            className="flex items-center justify-center px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl font-semibold transition-all"
          >
            Mon parcours
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mes Compétences Techniques</h2>
            <p className="text-slate-600 dark:text-slate-400">Une approche complète du développement web et logiciel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaCode size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Front-End Moderne</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Création d'interfaces réactives et stylisées avec <strong>React.js</strong> et <strong>Tailwind CSS</strong>. Intégration de composants dynamiques.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaDatabase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Back-End & Données</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Développement d'API avec <strong>Express.js</strong>. Conception et normalisation de bases de données relationnelles sous <strong>PostgreSQL</strong>.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaJava size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Logique & POO</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Solides bases en algorithmique et Programmation Orientée Objet avec <strong>Java</strong>. Architecture logicielle propre et maintenable.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            À la recherche d'une alternance ou d'un projet ?
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            Motivé et rigoureux, je suis prêt à mettre mes compétences Full-Stack et ma curiosité au service de votre équipe.
          </p>
          <a
            href="mailto:andriamboavonjyrantoniainaambi@gmail.com"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
}