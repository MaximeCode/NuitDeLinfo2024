// components/Modal.tsx
import React, { useEffect, useState } from 'react';

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal1 = ({title, content, onClose }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Lorsqu'une modal est ouverte, on l'affiche avec une animation.
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Attendre la fin de l'animation avant de fermer
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 transition-all ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <div
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-black p-6 rounded-md shadow-lg max-w-4xl transform transition-transform ${
            isVisible ? 'translate-y-0' : 'translate-y-10'
          }`}
          style={{ transition: 'transform 0.3s ease-out' }}
        >

          {/* Affichage du titre */}
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>

          {/* Affichage du contenu principal */}
          <p className="text-lg mb-4">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Modal1;