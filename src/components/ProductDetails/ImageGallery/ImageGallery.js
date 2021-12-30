import React, { useState, useContext, createContext, useEffect } from "react";
import MainImage from "./MainImage";
import Images from "./Images";
import { StylesContext, CurrentStyleContext } from "../ProductDetails";

export const CurrentImageContext = createContext();

const ImageGallery = () => {
  const { currentStyle } = useContext(CurrentStyleContext);
  const [currentImage, setCurrentImage] = useState(null);

  console.log("currentImage:", currentImage);
  const imageGalleryStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
    width: "40%",
    height: "auto",
    float: "left",
    marginLeft: "100px",
  };

  return (
    <div style={imageGalleryStyle}>
      <CurrentImageContext.Provider value={{ currentImage, setCurrentImage }}>
        <MainImage currentStyle={currentStyle} />
        <Images currentStyle={currentStyle} />
      </CurrentImageContext.Provider>
    </div>
  );
};

export default ImageGallery;
