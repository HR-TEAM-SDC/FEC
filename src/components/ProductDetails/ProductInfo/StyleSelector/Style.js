import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../apis/atelier";

const Style = (props) => {
  const thumbnailStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "100%",
    width: "75px",
    height: "75px",
    margin: "0px 5px",
  };

  return (
    <span>
      <img
        style={thumbnailStyle}
        src={props.style.photos[0].thumbnail_url}
      ></img>
    </span>
  );
};

export default Style;