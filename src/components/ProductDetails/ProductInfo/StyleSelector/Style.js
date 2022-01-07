import React, { useState, useEffect, useContext } from 'react';
import axios from '../../../../apis/atelier';
import { CurrentIndexContext } from '../../ProductDetails';
import '../../styles.css';

const Style = (props) => {
  const { currentIndex } = useContext(CurrentIndexContext);

  const thumbnailStyle = {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '50%',
    borderColor: 'black',
    width: '60px',
    height: '60px',
  };

  const selectedStyle = {
    borderStyle: 'solid',
    borderWidth: '4px',
    borderRadius: '50%',
    borderColor: '#29f756ad',
    width: '60px',
    height: '60px',
  };

  return (
    <span>
      <img
        id="style"
        style={props.style === props.currentStyle ? selectedStyle : thumbnailStyle}
        src={props.style.photos[0].thumbnail_url}
        onClick={() => props.styleClickHandler(props.style)}
      ></img>
    </span>
  );
};

export default Style;
