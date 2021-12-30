import React, { useContext } from "react";
import { CurrentImageContext } from "./ImageGallery";

const MainImage = (props) => {
  const currentImage = useContext(CurrentImageContext);

  const mainImageStyle = {
    display: "block",
    maxWidth: "400px",
    maxHeight: "400px",
    width: "auto",
    height: "auto",
    margin: "auto",
  };

  return (
    <span>
      <img
        style={mainImageStyle}
        src={
          props.currentStyle.photos
            ? props.currentStyle.photos[0].thumbnail_url
            : null
        }
      ></img>
    </span>
  );
};

export default MainImage;
