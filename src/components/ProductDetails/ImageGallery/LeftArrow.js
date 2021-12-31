import React, { useContext } from "react";
import { CurrentIndexContext } from "../ProductDetails";

const LeftArrow = () => {
  const { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);

  const buttonOnClick = () => {
    console.log("Left arrow clicked...");
    let decrementIndex = currentIndex - 1;
    setCurrentIndex(decrementIndex);
    console.log("currentIndex:", currentIndex);
  };

  return (
    <span>
      {currentIndex > 0 ? (
        <button onClick={buttonOnClick}> Left </button>
      ) : null}
    </span>
  );
};

export default LeftArrow;
