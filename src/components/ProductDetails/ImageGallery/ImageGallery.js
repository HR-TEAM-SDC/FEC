import React, { useState, useContext } from "react";
import MainImage from "./MainImage";
import Images from "./Images";
import { StylesContext, CurrentStyleContext } from "../ProductDetails";

const ImageGallery = () => {
  const { currentStyle } = useContext(CurrentStyleContext);
  const [currentImage, setCurrentImage] = useState(null);

  const imageGalleryStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
    width: "40%",
    float: "left",
    marginLeft: "100px",
  };

  return (
    <div style={imageGalleryStyle}>
      <MainImage currentStyle={currentStyle} />
      <Images currentStyle={currentStyle} />
    </div>
  );
};

export default ImageGallery;
