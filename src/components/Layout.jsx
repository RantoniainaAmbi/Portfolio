import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      
      {/* Le main prend tout l'espace disponible (flex-grow) 
         pour pousser le footer vers le bas si la page est vide 
      */}
      <main className="flex-grow pt-16"> 
        <Outlet /> {/* C'est ici que vos pages (Home, About) s'afficheront */}
      </main>

      <Footer />
    </div>
  );
}