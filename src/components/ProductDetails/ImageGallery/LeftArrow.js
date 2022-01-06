import React, { useContext } from 'react';
import { CurrentIndexContext, CurrentImageContext } from '../ProductDetails';
import { CurrentStylePhotosContext } from '../ProductDetails';

const LeftArrow = (props) => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const { setCurrentImage } = useContext(CurrentImageContext);
  const { currentStylePhotos } = useContext(CurrentStylePhotosContext);

  const handleClick = () => {
    let decrementIndex = currentIndex - 1;
    setCurrentIndex(decrementIndex);
    setCurrentImage(currentStylePhotos[decrementIndex].thumbnail_url);
  };

  if (props.isOpen) {
    return (
      <div>
        {currentIndex > 0 ? (
          <button class="slider" onClick={handleClick} style={props.style}>
            {'<'}
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {currentIndex > 0 ? (
        <button class="slider" style={props.style} onClick={handleClick}>
          {' '}
          {'<'}
        </button>
      ) : null}
    </div>
  );
};

export default LeftArrow;
