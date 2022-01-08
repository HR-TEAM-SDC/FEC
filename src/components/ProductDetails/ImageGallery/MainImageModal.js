import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Thumbnails from './Thumbnails';
import '../styles.css';

const MainImageModal = ({ isOpen, setIsOpen, closeModal, currentImage, currentStyle, children }) => {
  const leftArrowStyles = {
    position: 'fixed',
    marginTop: '325px',
    zIndex: 100,
  };

  const rightArrowStyles = {
    position: 'fixed',
    marginTop: '325px',
    right: 0,
    zIndex: 100,
  };

  const thumbnailStyles = {
    display: 'flex',
    position: 'fixed',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  if (!isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div
        id="modal-overlay"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <figure id="modal-container">
        <button class="slider" id="close-modal" onClick={closeModal}>
          X
        </button>
        <LeftArrow isOpen={isOpen} style={leftArrowStyles} />
        <RightArrow isOpen={isOpen} style={rightArrowStyles} />
        <Thumbnails isOpen={isOpen} style={thumbnailStyles} currentStyle={currentStyle} />
        <img id="modal-image" src={currentImage}></img>
      </figure>
    </>,
    document.getElementById('portal')
  );
};

export default MainImageModal;
