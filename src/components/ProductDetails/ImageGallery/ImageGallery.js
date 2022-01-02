import React, { useState, useContext, createContext, useEffect } from 'react';
import MainImage from './MainImage';
import Thumbnails from './Thumbnails';
import { StylesContext, CurrentStyleContext } from '../ProductDetails';

export const CurrentImageContext = createContext();

const ImageGallery = () => {
  const { currentStyle } = useContext(CurrentStyleContext);

  const imageGalleryStyle = {
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '40%',
    justifyContent: 'center',
  };

  return (
    <section style={imageGalleryStyle}>
      <MainImage currentStyle={currentStyle} />
      {/* <Thumbnails currentStyle={currentStyle} /> */}
    </section>
  );
};

export default ImageGallery;
