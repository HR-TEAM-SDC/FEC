import React, { useContext } from "react";
import {
  CurrentIndexContext,
  CurrentStylePhotosContext,
} from "../ProductDetails";

const RightArrow = () => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  const { currentStylePhotos } = useContext(CurrentStylePhotosContext);

  const buttonOnClick = () => {
    console.log("Right arrow clicked...");
    let incrementIndex = currentIndex + 1;
    setCurrentIndex(incrementIndex);
    console.log("currentIndex:", currentIndex);
  };

  return (
    <span>
      {currentStylePhotos ? (
        currentIndex < currentStylePhotos.length - 1 ? (
          <button onClick={buttonOnClick}> Right </button>
        ) : null
      ) : null}
    </span>
  );
};

export default RightArrow;
