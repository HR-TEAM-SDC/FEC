import React from 'react';
import ReactDom from 'react-dom';

const MainImageModal = ({ isOpen, setIsOpen, closeModal, currentImage, children }) => {
  const modalStyles = {
    position: 'fixed',
    width: '600px',
    height: '750px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 100,
  };

  const imgStyles = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  if (!isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div
        style={overlayStyles}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div style={modalStyles}>
        <button onClick={closeModal}>Close Modal</button>
        <img style={imgStyles} src={currentImage}></img>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default MainImageModal;
