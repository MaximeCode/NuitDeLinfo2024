'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal1 from './Modal1';  // Assurez-vous que Modal1 est bien configuré pour l'épave
import Modal2 from './Modal2';  // Assurez-vous que Modal2 est bien configuré pour l'épave
import Modal3 from './Modal3';  // Assurez-vous que Modal3 est bien configuré pour l'épave

const Wreck = () => {
  const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>({
    wreck: false,
  });

  // Ouvrir les modals pour l'épave
  const openModals = () => {
    setIsModalOpen({
      wreck: true,
    });
  };

  // Fermer toutes les modals
  const closeModals = () => {
    setIsModalOpen({
      wreck: false,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen ">
      {/* Illustration du corps humain (si nécessaire) */}
      <div className="relative mt-10">
        {/* Zones cliquables du corps humain */}
        <div onClick={() => openModals()} className="relative top-[350px] left-[-400px] cursor-pointer hover:scale-105 hover:rotate-3 transform transition-all duration-300 ease-in-out">
          <Image
            src="/wreck.png"  // L'image de l'épave de bateau
            alt="Épave de bateau"
            width={1200}
            height={500}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Affichage des modals pour l'épave */}
      {isModalOpen.wreck && (
        <>
          <button
            className="fixed top-3 right-3 text-white hover:text-black z-50 text-4xl bg-sky-600 p-3 rounded-md border border-black"
            onClick={closeModals}
          >
            ✖
          </button>
          <Modal1
            title="L'Épave de Bateau : Un Voyage Submergé"
            content="Les épaves de bateaux sous-marins sont des témoins silencieux de l'histoire, souvent englouties par les océans. Ces épaves, à la fois fascinantes et inquiétantes, nous rappellent les dangers des mers et la relation complexe entre l'homme et l'eau."
            onClose={closeModals}
          />
          <Modal2
            title="Explorer les Épaves : Le Mystère Sous les Vagues"
            content="Explorer les épaves sous-marines est une aventure, mais c'est aussi un rappel de la fragilité humaine face à la force des océans. Ces épaves racontent l'histoire de navires disparus, de naufrages tragiques et de découvertes fascinantes."
            list={[
              "Respectez les zones protégées pour les épaves maritimes et évitez la perturbation des écosystèmes marins.",
              "Soutenez les efforts pour conserver les épaves historiques et minimiser l'impact écologique des explorations.",
              "Apprenez de l'histoire des naufrages pour mieux comprendre les défis liés à la navigation en mer.",
            ]}
            onClose={closeModals}
          />
          <Modal3
            title="Les Menaces Pesant sur les Épaves et les Océans"
            content="Les épaves sont menacées par l'usure du temps, la corrosion et l'impact des activités humaines. Le réchauffement des océans, la pollution et le pillage illégal affectent ces vestiges, qui sont autant de témoins de notre relation avec les mers."
            content2="Protéger les épaves et les océans, c'est aussi préserver notre histoire et notre avenir. L'humanité doit apprendre à respecter les mers pour éviter la destruction de ces précieux témoignages du passé."
            onClose={closeModals}
          />
        </>
      )}
    </div>
  );
};

export default Wreck;
