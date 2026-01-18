import React from "react";
import { FaGraduationCap, FaHistory, FaCode } from "react-icons/fa";
import image from "../assets/image.jpg"

export default function About() {
  const skills = [
    { name: "React.js / Tailwind CSS", level: "75%" },
    { name: "Node.js / Express", level: "70%" },
    { name: "PostgreSQL / SQL", level: "75%" },
    { name: "Java ", level: "70%" },
    { name: "Git / GitHub", level: "80%" },
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-64 h-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800">
            <img 
              src={image} 
              alt="Portrait de Ranto" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full">
              À propos de moi
            </div>
            <h1 className="text-4xl font-extrabold mb-6">Étudiant & Développeur</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Je m'appelle Ranto, je suis actuellement étudiant en <strong>Licence 2 Informatique</strong>. 
              Passionné par le code, je ne me limite pas aux cours théoriques : je construis des applications concrètes.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Mon objectif est de devenir un expert Full-Stack capable de gérer un projet de la base de données (PostgreSQL) 
              jusqu'à l'interface utilisateur (React), tout en appliquant la rigueur de la programmation orientée objet (Java).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaHistory className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Mon Parcours</h2>
            </div>
            
            <div className="border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-6 space-y-8">
              
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-lg">Projets Académiques & Personnels</h4>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">En cours</span>
                <p className="text-sm text-slate-500 mt-2">
                  Développement d'applications Web  et conception de logiciels en Java avec gestion de base de données relationnelles.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-400 border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-lg">Début de l'Université (L1)</h4>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2024 - 2025</span>
                <p className="text-sm text-slate-500 mt-2">
                  Apprentissage des fondamentaux : Algorithmique, HTML, CSS, JavaScript, Architecture des ordinateurs et Mathématiques appliquées.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Niveau Technique</h2>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span>{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold">Formation Académique</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-slate-600 dark:text-slate-400">
            
            <div className="flex flex-col">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Actuellement</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Licence 2 Informatique</h3>
              <p className="text-sm mt-1">Haute Ecole d'Informatique-HEI</p>
              <p className="text-sm mt-2 opacity-80">Spécialisation : Ecosystème logiciel</p>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">2024</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bacc Série C</h3>
              <p className="text-sm mt-1">Lycée Le Colibri Sabotsy Namehana</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}