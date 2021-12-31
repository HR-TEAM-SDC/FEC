import React, { useContext } from "react";
import { CurrentIndexContext, CurrentImageContext } from "../ProductDetails";
import { CurrentStylePhotosContext } from "../ProductDetails";

const LeftArrow = () => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const { setCurrentImage } = useContext(CurrentImageContext);
  const { currentStylePhotos } = useContext(CurrentStylePhotosContext);

  const handleClick = () => {
    let decrementIndex = currentIndex - 1;
    setCurrentIndex(decrementIndex);
    setCurrentImage(currentStylePhotos[decrementIndex].thumbnail_url);
  };

  return (
    <span>
      {currentIndex > 0 ? <button onClick={handleClick}> Left </button> : null}
    </span>
  );
};

export default LeftArrow;
