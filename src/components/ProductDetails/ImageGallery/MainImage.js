import React, { useContext } from "react";

const MainImage = (props) => {
  const mainImageStyle = {
    display: "block",
    maxWidth: "400px",
    maxHeight: "400px",
    width: "auto",
    height: "auto",
    margin: "auto",
  };

  return (
    <img
      style={mainImageStyle}
      src={
        props.currentStyle.photos
          ? props.currentStyle.photos[0].thumbnail_url
          : null
      }
    ></img>
  );
};

export default MainImage;
