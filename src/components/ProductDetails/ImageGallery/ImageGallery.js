import React, { useState, useContext, createContext } from "react";
import MainImage from "./MainImage";
import Images from "./Images";
import { StylesContext, CurrentStyleContext } from "../ProductDetails";

export const CurrentImageContext = createContext();

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
      <CurrentImageContext.Provider value={{ currentImage }}>
        <MainImage currentStyle={currentStyle} />
        <Images currentStyle={currentStyle} />
      </CurrentImageContext.Provider>
    </div>
  );
};

export default ImageGallery;
