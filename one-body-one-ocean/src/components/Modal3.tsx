// components/Modal.tsx
import React, { useEffect, useState } from 'react';

interface ModalProps {
  title: string;
  content: string;
  content2: string;
  onClose: () => void;
}

const Modal3 = ({ title, content, content2, onClose }: ModalProps) => {
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
        className={`fixed inset-0 flex items-center justify-center z-10 transition-all${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      >
        <div
          className={`absolute bottom-10 left-10 bg-white text-black p-6 rounded-md shadow-lg max-w-lg transform transition-transform${
            isVisible ? 'translate-y-0' : 'translate-y-10'
          }`}
          style={{ transition: 'transform 0.8s ease-out' }}
        >

          {/* Affichage du titre */}
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>

          {/* Affichage du contenu principal */}
          <p className="text-lg mb-4">{content}</p>

          <p className='text-lg mb-4'>{content2}</p>
        </div>
      </div>
    </>
  );
};

export default Modal3;