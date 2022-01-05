import React, { useContext, useEffect, useState } from 'react';
import { CurrentIndexContext, CurrentImageContext } from '../ProductDetails';
import { CurrentStyleContext } from '../ProductDetails';
import Thumbnails from './Thumbnails';
import MainImageModal from './MainImageModal';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const MainImage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentImage, setCurrentImage } = useContext(CurrentImageContext);
  const { currentIndex } = useContext(CurrentIndexContext);
  const { currentStyle } = useContext(CurrentStyleContext);

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!event.target) {
        setIsOpen(false);
      }
    });
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '50%',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
  };

  const mainImageStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    objectFit: 'cover',
    width: '400px',
    height: '500px',
  };

  return (
    <div>
      <img
        onClick={() => {
          setIsOpen(true);
        }}
        style={mainImageStyle}
        src={props.currentStyle.photos ? currentImage || props.currentStyle.photos[0].thumbnail_url : null}
      ></img>
      <Thumbnails currentStyle={currentStyle} />
      <MainImageModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
        setIsOpen={setIsOpen}
        currentImage={currentImage}
        currentStyle={currentStyle}
      ></MainImageModal>
      {/* <img src="../imgs/checkmark.png"></img> */}
    </div>
  );
};

export default MainImage;
