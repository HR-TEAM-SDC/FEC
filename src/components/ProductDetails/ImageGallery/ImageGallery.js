import React, { useState, useContext, createContext, useEffect } from 'react';
import MainImage from './MainImage';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { StylesContext, CurrentStyleContext } from '../ProductDetails';

export const CurrentImageContext = createContext();
export const CurrentIndexContext = createContext();

const ImageGallery = () => {
  const { currentStyle } = useContext(CurrentStyleContext);

  const imageGalleryStyle = {
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <section style={imageGalleryStyle}>
      <LeftArrow />
      <MainImage currentStyle={currentStyle} />
      <RightArrow />
    </section>
  );
};

export default ImageGallery;
