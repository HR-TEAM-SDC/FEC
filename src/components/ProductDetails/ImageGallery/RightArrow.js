import React, { useContext } from 'react';
import { CurrentIndexContext, CurrentStylePhotosContext } from '../ProductDetails';
import { CurrentImageContext } from '../ProductDetails';

const RightArrow = (props) => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const { currentStylePhotos } = useContext(CurrentStylePhotosContext);
  const { setCurrentImage } = useContext(CurrentImageContext);

  const handleClick = () => {
    let incrementIndex = currentIndex + 1;
    setCurrentIndex(incrementIndex);
    setCurrentImage(currentStylePhotos[incrementIndex].thumbnail_url);
  };

  if (props.isOpen) {
    return (
      <div>
        {currentStylePhotos ? (
          currentIndex < currentStylePhotos.length - 1 ? (
            <button onClick={handleClick} style={props.style}>
              {' '}
              Right{' '}
            </button>
          ) : null
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {currentStylePhotos ? (
        currentIndex < currentStylePhotos.length - 1 ? (
          <button style={props.style} onClick={handleClick}>
            {' '}
            Right{' '}
          </button>
        ) : null
      ) : null}
    </div>
  );
};

export default RightArrow;
