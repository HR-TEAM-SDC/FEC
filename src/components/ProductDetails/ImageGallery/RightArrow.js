import React from "react";

const RightArrow = () => {
  const buttonOnClick = () => {
    console.log("button clicked...");
  };

  return (
    <span>
      <button onClick={buttonOnClick}> Right </button>
    </span>
  );
};

export default RightArrow;
