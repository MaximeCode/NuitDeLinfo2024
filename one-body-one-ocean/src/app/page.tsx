"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HumanBodyNavbar from "../components/Navbar";
import Wreck from "../components/Wreck";
import Waste from "../components/Waste"
import FishDead from "../components/FishDead"
import Image from 'next/image';

export default function App() {
  const [background, setBackground] = useState('rgba(0, 122, 255, 1)'); // Bleu initial
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter(); // Initialiser le routeur

  const handleGame = () => {
    router.push('/captcha-game'); // Rediriger vers /quiz
  };

  const anchorScrollFactor = 0.33; // Facteur de ralentissement de l'ancre (ajuster ce nombre pour ralentir ou accélérer)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / pageHeight;

      // Mettre à jour la couleur de fond
      const blueValue = Math.max(255 - scrollY / 3, 50); // Limiter la valeur de bleu
      setBackground(`rgba(0, 0, ${blueValue}, 1)`); // Utilisation du bleu pur sans vert

      // Mettre à jour la position de l'ancre avec le facteur de ralentissement
      setScrollPosition(scrollY * anchorScrollFactor); // Appliquer le facteur de ralentissement
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Nettoyage
  }, []); // Se déclenche uniquement au chargement initial


  return (
    <>
    <div className="absolute inset-0 z-0">
        <div className="bubbles"></div>
    </div>
    <div className="flex justify-center items-center mt-10 bg-white/40 w-max mx-auto p-2 rounded-lg hover:scale-105 hover:rotate-3 transform transition-all duration-300 ease-in-out">
      <h1
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 
          drop-shadow-lg font-outline-4"
      >
        One Body, One Ocean
      </h1>
  </div>

      <HumanBodyNavbar />
      <Wreck />
      <Waste />
      <div
          onClick={() => handleGame()}
          className="absolute top-[2000] left-[360px] w-48 h-48 cursor-pointer hover:scale-110 hover:-rotate-3 transform transition-all duration-300 ease-in-out"
          title="Cœur"
        >
          <Image
            src="/images/cookie.png"
            alt="fish"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </div>
      <FishDead />
      {/* Conteneur de l'ancre et de la chaîne */}
      <div
            className="anchor"
            style={{
              position: 'fixed',
              top: `${scrollPosition}px`, // L'ancre suit la position de défilement avec un facteur de ralentissement
              right: '0',
              transition: 'top 0.1s ease-in-out', // Transition fluide pour l'ancre
            }}
          >
            {/* Boucle pour générer plusieurs chaînes */}
            {[...Array(25)].map((_, index) => (
              <img
                key={index}
                src="/chain.png" // Image de la chaîne
                alt="Chain"
                className="absolute w-6"
                style={{
                  top: `-${(index + 1) * 89}px`, // Position des segments de chaîne
                  right: '29px',
                }}
              />
            ))}

            {/* Image de l'ancre */}
            <img
              src="/anchor.png" // Image d'ancre
              alt="Anchor"
              className="w-20 h-20 cursor-pointer"
            />
          </div>
          
    </>
  )
}
