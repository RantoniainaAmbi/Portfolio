import React from "react";
import { FaExternalLinkAlt, FaGithub, FaDatabase, FaServer } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Personal Expense Tracker",
      description: "Une application complète de gestion de dépenses personnelles permettant de suivre ses finances avec une interface intuitive.",
      tags: ["React", "Express", "Node.js", "SQLite"],
      link: "#",
      github: "https://github.com/Amboara-PRO/Personal-Expense-Tracker",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Pokedex",
      description: "Application interactive de consultation de Pokémon utilisant une API REST. Gestion d'affichage dynamique et filtrage de données.",
      tags: ["React", "PokeAPI", "Context API"],
      link: "#",
      github: "https://github.com/Amboara-PRO/Pokedex",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ND8QIm2uaUJ5fiGTVl4_7QCUVzsvP-Mx-Q&s"
    },
    {
      id: 3,
      title: "Gasy-Prime",
      description: "Conception et déploiement de la plateforme officielle pour une ligue e-sport malagasy. Projet indexé sur Google, ayant servi de vitrine pour les palmarès et la gestion des membres de la communauté.",
      tags: ["React", "Tailwind CSS", "SEO", "Vercel"],
      link: "https://gasy-prime.vercel.app",
      github: "https://github.com/RantoniainaAmbi/Gasy-prime",
      image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full">
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Mes Travaux <span className="text-blue-600">& Réalisations</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href={project.github} className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.link} className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <a 
                    href={project.github}
                    className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 hover:text-blue-600 transition-colors"
                  >
                    Code Source
                  </a>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <a 
                    href={project.link}
                    className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 hover:underline"
                  >
                    Demo <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}