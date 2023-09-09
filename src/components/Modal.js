import { Overlay, ModalImg } from './Modal.styled';
// import { Component } from 'react';
import { useEffect } from 'react';

export const Modal = ({ onClose, src }) => {
  const handleOverlay = e => {
    if (e.currentTarget === e.target) onClose();
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <Overlay onClick={handleOverlay}>
      <ModalImg>
        <img src={src} alt="" />
      </ModalImg>
    </Overlay>
  );
};
