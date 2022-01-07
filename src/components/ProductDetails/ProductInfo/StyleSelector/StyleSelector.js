import React, { useState, useEffect, useContext } from 'react';
import axios from '../../../../apis/atelier';
import Style from './Style';
import { StylesContext, CurrentStyleContext } from '../../ProductDetails';
import { CurrentSizeContext, CurrentSkuContext } from '../../ProductDetails';
import { CurrentQuantityContext, CurrentIndexContext } from '../../ProductDetails';
import { CurrentImageContext, CurrentStylePhotosContext } from '../../ProductDetails';

const StyleSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle, setCurrentStyle } = useContext(CurrentStyleContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { setCurrentQuantity } = useContext(CurrentQuantityContext);
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const { setCurrentImage } = useContext(CurrentImageContext);
  const { setCurrentStylePhotos } = useContext(CurrentStylePhotosContext);

  useEffect(() => {
    setCurrentSize('Select Size');
    let sizeMsg = document.getElementById('size-msg');
    let sizeMenu = document.getElementById('size-menu');
    sizeMsg.innerHTML = '';
    sizeMenu.size = 1;
  }, [currentStyle]);

  const styleClickHandler = (style) => {
    if (currentStyle === style) {
      return;
    }
    setCurrentStyle(style);
    setCurrentStylePhotos(style.photos);
    setCurrentSku(null);
    setCurrentQuantity(null);
    if (currentIndex > style.photos.length - 1) {
      setCurrentIndex(0);
      setCurrentImage(style.photos[0].thumbnail_url);
    } else {
      setCurrentImage(style.photos[currentIndex].thumbnail_url);
    }
  };

  const thumbnailsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5px',
  };

  return (
    <div>
      <h4>Style: {currentStyle.name}</h4> <br></br>
      <div style={thumbnailsStyle}>
        {styles.map((style) => {
          return (
            <Style
              style={style}
              key={style.style_id}
              currentStyle={currentStyle}
              styleClickHandler={styleClickHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
