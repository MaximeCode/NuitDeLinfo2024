'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

const HumanBodyNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>({
    poumons: false,
    coeur: false,
    blodd: false,
  });

  // Ouvrir les 3 modals pour un élément du corps humain
  const openModals = (modalName: string) => {
    setIsModalOpen({
      poumons: modalName === 'poumons',
      coeur: modalName === 'coeur',
      blood: modalName === 'blood',
    });
  };

  // Fermer toutes les modals
  const closeModals = () => {
    setIsModalOpen({
      poumons: false,
      coeur: false,
      blood: false,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen">

      {/* Illustration du corps humain */}
      <div className="relative mt-10">
        <Image
          src="/human-body.svg"
          alt="Schéma du corps humain"
          width={800}
          height={1000}
        />

        {/* Zones cliquables */}
        <div
          onClick={() => openModals('poumons')}
          className="absolute top-[175px] left-[340px] w-11 h-11 cursor-pointer hover:scale-150 hover:rotate-6 transform transition-all duration-300 ease-in-out"
          title="Poumons"
        >
          <Image
            src="/lungs.svg"
            alt="Poumons"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div
          onClick={() => openModals('coeur')}
          className="absolute top-[175px] left-[410px] w-11 h-11 cursor-pointer hover:scale-150 hover:-rotate-6 transform transition-all duration-300 ease-in-out"
          title="Cœur"
        >
          <Image
            src="/heart.svg"
            alt="Cœur"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div
          onClick={() => openModals('blood')}
          className="absolute top-[300px] left-[480px] w-11 h-11 cursor-pointer hover:scale-150 hover:-rotate-6 transform transition-all duration-300 ease-in-out"
          title="Cœur"
        >
          <Image
            src="/blood.png"
            alt="Blood"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div
          className="absolute top-[20] left-[360px] w-11 h-11 cursor-pointer hover:scale-150 hover:-rotate-6 transform transition-all duration-300 ease-in-out"
          title="Cœur"
        >
          <Image
            src="/brain.svg"
            alt="Brain"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Affichage des modals */}
      {isModalOpen.poumons && (
        <>
        <button
            className="fixed top-3 right-3 text-white hover:text-black z-50 text-4xl bg-sky-600 p-3 rounded-md border border-black"
            onClick={closeModals}
          >
            ✖
          </button>
            <Modal1
            title="Les Poumons de la Terre : Une Respiration Essentielle"
            content="Les poumons de l'homme sont essentiels pour la vie, tout comme les océans qui régulent l'air que nous respirons. Ils sont les gardiens de notre respiration, absorbant l'oxygène vital et rejetant le dioxyde de carbone. Les océans, de la même manière, agissent comme des filtres géants qui capturent le dioxyde de carbone et libèrent de l'oxygène."
            onClose={closeModals}
          />
          <Modal2
            title="Protéger nos Poumons, Protéger les Océans"
            content="La pollution, qu'elle soit dans l'air ou dans l'océan, est une menace directe pour notre santé et pour celle de la planète. Tout comme les déchets plastiques menacent les mers
                et les océans, la pollution atmosphérique menace nos poumons. En protégeant l'un, nous protégeons l'autre."
            list={[
              "Réduisez les émissions de carbone en privilégiant les énergies renouvelables et en réduisant l'utilisation des combustibles fossiles.",
              "Participez au nettoyage des plages et à la réduction des déchets plastiques qui polluent les océans.",
              "Respirez un air pur et contribuez à la lutte contre la pollution de l'air en soutenant des initiatives de réduction des émissions.",
              "Protégez les habitats marins et soutenez la conservation des écosystèmes océaniques.",
            ]}
            onClose={closeModals}
          />
          <Modal3
            title="Les Menaces Pesant sur nos Poumons et les Océans"
            content="Les poumons humains sont vulnérables aux maladies respiratoires, tout comme les océans sont menacés par des phénomènes comme le réchauffement climatique et la pollution.
                Le réchauffement des océans affecte la vie marine et aggrave les phénomènes météorologiques extrêmes, tout comme la pollution de l'air peut provoquer des maladies pulmonaires."
            content2="Nous devons prendre conscience que les actions humaines, qu'elles touchent l'atmosphère ou les océans, ont des répercussions profondes sur la santé de notre planète et de ses habitants.
                Protéger nos poumons, c'est aussi protéger les océans, et vice versa."
            onClose={closeModals}
          />
        </>    
      )}
      {isModalOpen.coeur && (
        <>
          <button
            className="fixed top-3 right-3 text-white hover:text-black z-50 text-4xl bg-sky-600 p-3 rounded-md border border-black"
            onClick={closeModals}
          >
            ✖
          </button>
          <Modal1
            title="Le Cœur de la Terre : Un Pouls Vital"
            content="Le cœur humain est un organe central qui propulse le sang à travers tout le corps, tout comme les océans propulsent les flux d'eau et régulent la température de la planète. Il est essentiel à la vie, tout comme l'équilibre des océans est vital pour la survie de la Terre."
            onClose={closeModals}
          />
          <Modal2
            title="Protéger notre Cœur, Protéger les Océans"
            content="La pollution, qu'elle affecte nos poumons ou nos océans, menace également notre cœur. L'impact des toxines dans l'air et de la pollution marine affecte directement notre santé. Nous devons préserver nos océans pour préserver la santé de nos cœurs."
            list={[
              "Réduisez les pollutions atmosphériques en choisissant des transports plus écologiques.",
              "Réduisez la pollution de l'eau en soutenant les actions de nettoyage des océans et des rivières.",
              "Consommez des aliments durables et soutenez des pratiques agricoles respectueuses de l'environnement.",
              "Soutenez les initiatives pour protéger les écosystèmes marins, essentiels à la régulation climatique."
            ]}
            onClose={closeModals}
          />
          <Modal3
            title="Les Menaces Pesant sur notre Cœur et les Océans"
            content="Le réchauffement climatique et la pollution affectent non seulement notre cœur, mais aussi la santé des océans. Le stress environnemental, qu'il soit thermique ou dû aux polluants, impacte la santé des écosystèmes et la nôtre."
            content2="En prenant soin de notre cœur, nous prenons également soin des océans. Préserver notre planète est essentiel pour notre bien-être et celui des générations futures."
            onClose={closeModals}
          />
        </>
      )}
      {isModalOpen.blood && (
        <>
          <button
            className="fixed top-3 right-3 text-white hover:text-black z-50 text-4xl bg-sky-600 p-3 rounded-md border border-black"
            onClick={closeModals}
          >
            ✖
          </button>
          <Modal1
            title="Le Sang et les Océans : La Vie en Mouvement"
            content="Le sang transporte l'oxygène et les nutriments essentiels dans notre corps, tout comme les courants océaniques transportent la vie à travers la planète. Ces deux systèmes circulatoires sont les moteurs de la vie et de l'équilibre."
            onClose={closeModals}
          />
          <Modal2
            title="Les Océans, Notre Système Circulatoire Planétaire"
            content="Tout comme le sang doit rester pur pour maintenir notre santé, les océans doivent être préservés de la pollution pour soutenir la vie marine. Une perturbation dans l'un de ces systèmes entraîne des conséquences graves sur l'ensemble de l'écosystème."
            list={[
              "Réduisez votre empreinte plastique pour éviter que les déchets ne polluent les océans.",
              "Soutenez les initiatives de nettoyage des océans et de restauration des récifs coralliens.",
              "Protégez la biodiversité marine pour maintenir un équilibre écologique.",
              "Prenez soin de votre propre santé en maintenant un système cardiovasculaire sain.",
            ]}
            onClose={closeModals}
          />
          <Modal3
            title="La Fièvre des Océans : Une Planète en Détresse"
            content="Lorsque les océans se réchauffent, c'est comme si notre planète avait de la fièvre. Ce déséquilibre affecte les courants marins, la biodiversité et les cycles climatiques globaux. Cela reflète la manière dont une fièvre corporelle perturbe notre fonctionnement interne."
            content2="Agissons pour refroidir la planète en réduisant les émissions de gaz à effet de serre et en protégeant les systèmes vitaux, que ce soit dans notre corps ou sur notre Terre."
            onClose={closeModals}
          />
        </>
      )}
    </div>
  );
};

export default HumanBodyNavbar;