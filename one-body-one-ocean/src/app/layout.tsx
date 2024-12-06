'use client';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-sky-400 to-sky-950">

      {/* Contenu principal de l'application */}
      <div className="z-10 relative">
          {children}
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