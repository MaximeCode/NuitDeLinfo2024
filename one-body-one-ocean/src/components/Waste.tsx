// components/Waste.tsx
'use client';
import React, { useState } from 'react';
import Modal1 from './Modal1';  // On suppose que Modal1 est déjà défini
import Modal2 from './Modal2';  // On suppose que Modal2 est déjà défini
import Modal3 from './Modal3';  // On suppose que Modal3 est déjà défini
import Image from 'next/image';

const Waste = () => {
  const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>({
    plastic: false,
    garbage: false,
    pollution: false,
  });

  const openModals = (modalName: string) => {
    setIsModalOpen({
      waste: modalName === 'waste',
    });
  };

  const closeModals = () => {
    setIsModalOpen({
      plastic: false,
      garbage: false,
      pollution: false,
    });
  };

  return (
    <div className="relative mt-10 flex justify-center w-auto">
      {/* Conteneur de l'image avec une bordure propre */}
      <div onClick={() => openModals('waste')} className="border-8 border-solid border-black rounded-lg overflow-hidden relative mt-96 left-[290px] cursor-pointer hover:scale-105 hover:-rotate-6 transform transition-all duration-300 ease-in-out">
        <Image
          src="/waste.webp"  // Image des déchets
          alt="Zone des déchets"
          width={800}
          height={500}
          className="w-full"
        />
      </div>

      {/* Affichage des modals */}
      {isModalOpen.waste && (
        <>
          <button
            className="fixed top-3 right-3 text-white hover:text-black z-50 text-4xl bg-sky-600 p-3 rounded-md border border-black"
            onClick={closeModals}
          >
            ✖
          </button>
          <Modal1
            title="Les Déchets Plastiques"
            content="Les déchets plastiques représentent une menace majeure pour l'environnement marin. Ils mettent des centaines d'années à se décomposer et polluent nos océans."
            onClose={closeModals}
          />
          <Modal2
            title="Protéger nos Océans des Déchets"
            content="Les déchets généraux dans les océans polluent non seulement les eaux, mais affectent aussi la faune marine. Il est crucial de réduire notre production de déchets et de recycler."
            list={[
              "Réduisez l'utilisation du plastique à usage unique.",
              "Participer à des initiatives de nettoyage des plages.",
              "Sensibiliser les communautés à la gestion des déchets.",
            ]}
            onClose={closeModals}
          />
          <Modal3
            title="L'Impact de la Pollution sur les Océans"
            content="La pollution des océans affecte la santé marine et humaine. Le plastique, les produits chimiques et les déchets organiques sont les principaux coupables."
            content2="Protéger nos océans nécessite une action collective pour réduire la pollution et préserver la biodiversité marine."
            onClose={closeModals}
          />
        </>
      )}
    </div>
  );
};

export default Waste;