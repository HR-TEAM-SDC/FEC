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
          <button onClick={handleClick} style={props.style}>
            {' '}
            Left
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {currentIndex > 0 ? (
        <button style={props.style} onClick={handleClick}>
          {' '}
          Left
        </button>
      ) : null}
    </div>
  );
};

export default LeftArrow;
