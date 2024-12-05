"use client"; // Nécessaire pour utiliser des hooks dans Next.js 13+

import { useState } from "react";

export default function CookieClicker() {
  const [cookies, setCookies] = useState(0);

  const handleClick = () => {
    setCookies(cookies + 1); // Incrémente simplement le compteur
  };

  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      {/* Colonne gauche : Cookie Clicker */}
      <div className="flex flex-col items-center justify-center w-1/2 border-r border-gray-700">
        <h1 className="text-4xl font-bold mb-4 text-pink-500 drop-shadow-lg">
          Cookie Clicker
        </h1>
        <p className="text-2xl mb-6">
          Nombre de cookies :{" "}
          <span className="font-extrabold text-yellow-400">{cookies}</span>
        </p>
        <img
          onClick={handleClick}
          src="/images/cookie.png"
          alt="Cookie"
          className="mt-6 w-24 h-24 animate-bounce cursor-pointer"
        />
      </div>

      {/* Colonne droite : Bonus et fonctionnalités supplémentaires */}
      <div className="flex flex-col items-center justify-center w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-green-400">
          Bonus
        </h2>
        <p className="text-lg text-gray-300 text-center">
          En cours...
        </p>
      </div>
    </div>
  );
}
