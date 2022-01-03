import React, { useContext, useEffect } from 'react';
import { CurrentIndexContext, CurrentImageContext } from '../ProductDetails';

const MainImage = (props) => {
  const { currentImage, setCurrentImage } = useContext(CurrentImageContext);
  const { currentIndex } = useContext(CurrentIndexContext);

  // if (props.currentStyle) {
  //   useEffect(() => {
  //     setCurrentImage(props.currentStyle.photos[0]);
  //   }, []);
  // }

  const mainImageStyle = {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '600px',
    height: 'auto',
  };
  return (
    <span>
      <img
        style={mainImageStyle}
        src={props.currentStyle.photos ? currentImage || props.currentStyle.photos[0].thumbnail_url : null}
      ></img>
    </span>
  );
};

export default MainImage;
