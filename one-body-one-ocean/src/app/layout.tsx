'use client';
import React, { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [background, setBackground] = useState('rgba(0, 122, 255, 1)'); // Bleu initial
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-sky-400 to-sky-950">
      <div className="absolute inset-0 z-0">
        <div className="bubbles"></div>
      </div>

      {/* Contenu principal de l'application */}
      <div className="z-10 relative">
          {children}

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
        </div>
        

        {/* Personnalisation de la barre de défilement */}
        <style jsx global>{`
          body {
            overflow: auto; /* Utiliser auto pour que le navigateur gère la barre de défilement */
          }

          /* Personnalisation de la scrollbar */
          body::-webkit-scrollbar {
            width: 0; /* Largeur de la barre de défilement */
          }

          body::-webkit-scrollbar-track {
            background: #f1f1f1; /* Couleur de la zone de suivi */
          }

          body::-webkit-scrollbar-thumb {
            background-image: url('/anchor.png'); /* Image de l'ancre */
            background-size: cover; /* Recouvrir l'élément de défilement avec l'image */
            border-radius: 10px;
            border: 2px solid #f1f1f1;
            height: 50px; /* Hauteur de l'élément de défilement */
          }

          body::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.5); /* Changer la couleur au survol */
          }
        `}</style>
      </body>
    </html>
  );
}