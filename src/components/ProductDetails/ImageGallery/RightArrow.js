import React, { useContext } from "react";
import {
  CurrentIndexContext,
  CurrentStylePhotosContext,
} from "../ProductDetails";
import { CurrentImageContext } from "../ProductDetails";

const RightArrow = () => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const { currentStylePhotos } = useContext(CurrentStylePhotosContext);
  const { setCurrentImage } = useContext(CurrentImageContext);

  const handleClick = () => {
    let incrementIndex = currentIndex + 1;
    setCurrentIndex(incrementIndex);
    setCurrentImage(currentStylePhotos[incrementIndex].thumbnail_url);
  };

  return (
    <span>
      {currentStylePhotos ? (
        currentIndex < currentStylePhotos.length - 1 ? (
          <button onClick={handleClick}> Right </button>
        ) : null
      ) : null}
    </span>
  );
};

export default RightArrow;
