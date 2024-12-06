// components/FishDead.tsx
'use client';
import React, { useState } from 'react';
import Modal1 from './Modal1';  // On suppose que Modal1 est déjà défini
import Modal2 from './Modal2';  // On suppose que Modal2 est déjà défini
import Modal3 from './Modal3';  // On suppose que Modal3 est déjà défini
import Image from 'next/image';

const FishDead = () => {
  const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>({
    fish: false,
  });

  const openModals = (modalName: string) => {
    setIsModalOpen({
      fish: modalName === 'fish',
    });
  };

  const closeModals = () => {
    setIsModalOpen({
      fish: false,
    });
  };

  return (
    <div className="relative mt-10 flex justify-center">
      {/* Conteneur de l'image avec une bordure propre */}
      <div onClick={() => openModals('fish')} className="mt-48 cursor-pointer hover:scale-110 hover:rotate-3 transform transition-all duration-300 ease-in-out"> 
        <Image
          src="/fish.svg"  // Image du poisson mort
          alt="Poisson Mort"
          width={800}
          height={500}
          className="w-full"
        />
      </div>

      {/* Affichage des modals */}
      {isModalOpen.fish && (
        <>
          <button
            className="fixed top-3 right-3 text-white hover:text-black z-50 text-4xl bg-sky-600 p-3 rounded-md border border-black"
            onClick={closeModals}
          >
            ✖
          </button>
          <Modal1
            title="La Pollution Marine"
            content="La pollution des océans par les plastiques, les produits chimiques et les déchets affecte la faune marine, y compris les poissons."
            onClose={closeModals}
          />
          <Modal2
            title="La Surpêche"
            content="La surpêche prive les océans de poissons en quantité excessive, mettant en danger les écosystèmes marins."
            list={[
              "Réduisez la consommation de poissons provenant de la pêche non durable.",
              "Soutenez les politiques de pêche durable et les zones marines protégées.",
              "Évitez les produits marins provenant de la surpêche."
            ]}
            onClose={closeModals}
          />
          <Modal3
            title="Menace pour l'Écosystème Marin"
            content="Les poissons sont essentiels pour maintenir l'équilibre des écosystèmes marins. Leur disparition affecte la chaîne alimentaire."
            content2="Pour protéger la vie marine et restaurer la biodiversité, il est nécessaire de lutter contre la pollution et la surpêche."
            onClose={closeModals}
          />
        </>
      )}
    </div>
  );
};

export default FishDead;
