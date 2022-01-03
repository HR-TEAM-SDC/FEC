import React, { useContext } from 'react';
import { CurrentIndexContext } from '../ProductDetails';

const LeftArrow = () => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);

  const handleClick = () => {
    let decrementIndex = currentIndex - 1;
    setCurrentIndex(decrementIndex);
  };

  return <span>{currentIndex > 0 ? <button onClick={handleClick}> Left </button> : null}</span>;
};

export default LeftArrow;
