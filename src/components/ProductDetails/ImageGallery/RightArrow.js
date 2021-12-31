import React from "react";

const RightArrow = () => {
  const buttonOnClick = () => {
    console.log("Right arrow clicked...");
  };

  return (
    <span>
      <button onClick={buttonOnClick}> Right </button>
    </span>
  );
};

export default RightArrow;
