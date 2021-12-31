import React from "react";

const LeftArrow = () => {
  const buttonOnClick = () => {
    console.log("Left arrow clicked...");
  };

  return (
    <span>
      <button onClick={buttonOnClick}> Left </button>
    </span>
  );
};

export default LeftArrow;
