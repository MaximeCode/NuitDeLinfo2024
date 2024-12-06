// components/Modal.tsx
import React, { useEffect, useState } from 'react';

interface ModalProps {
  title: string;
  content: string;
  list?: string[];  // Une liste optionnelle d'éléments à afficher (si nécessaire)
  onClose: () => void;
}

const Modal2 = ({ title, content, list = [] }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Lorsqu'une modal est ouverte, on l'affiche avec une animation.
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 transition-all ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <div
          className={`absolute top-1/3 right-10 transform -translate-y-1/2 bg-white text-black p-6 rounded-md shadow-lg max-w-lg transform transition-transform ${
            isVisible ? 'translate-y-0' : 'translate-y-10'
          }`}
          style={{ transition: 'transform 0.5s ease-out' }}
        >

          {/* Affichage du titre */}
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>

          {/* Affichage du contenu principal */}
          <p className="text-lg mb-4">{content}</p>

          {/* Si une liste est fournie, affichage des éléments */}
          {list.length > 0 && (
            <ul className="list-disc pl-6 text-lg">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal2;