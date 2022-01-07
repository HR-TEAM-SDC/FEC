import React, { useState } from 'react';
import ReactDom from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Thumbnails from './Thumbnails';
import '../styles.css';

const MainImageModal = ({ isOpen, setIsOpen, closeModal, currentImage, currentStyle, children }) => {
  const [backgroundPos, setBackgroundPos] = useState(null);

  const handleMouseMove = (event) => {
    let modalContainer = document.getElementById('modal-container');
    let modalImage = document.getElementById('modal-image');

    let offsetX = event.nativeEvent.offsetX - modalContainer.offsetLeft;
    let offsetY = event.nativeEvent.offsetY - modalContainer.offsetTop;
    let width = modalContainer.offsetWidth;
    let height = modalContainer.offsetHeight;

    offsetX = (offsetX / width) * 100;
    offsetY = (offsetY / height) * 100;

    // modalImage.style.transform = 'translate(-' + offsetX + '%, -' + offsetY + '%) scale(2)';
    // modalImage.style.transform = 'scale(2)';
  };
  const handleMouseLeave = (event) => {
    let modalContainer = document.getElementById('modal-container');
    let modalImage = document.getElementById('modal-image');

    // modalImage.style.transform = 'translate(-' + offsetX + '%, -' + offsetY + '%) scale(1)';
    // modalImage.style.transform = 'translate(-50%, -50%) scale(1)';
    // modalImage.style.transform = 'scale(1)';
  };

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
      <figure id="modal-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
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
