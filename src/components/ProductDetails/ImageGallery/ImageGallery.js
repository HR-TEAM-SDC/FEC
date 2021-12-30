import React, { useState, useContext, createContext, useEffect } from "react";
import MainImage from "./MainImage";
import Thumbnails from "./Thumbnails";
import { StylesContext, CurrentStyleContext } from "../ProductDetails";

export const CurrentImageContext = createContext();
export const CurrentIndexContext = createContext();

const ImageGallery = () => {
  const { currentStyle } = useContext(CurrentStyleContext);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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
        <CurrentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
          <MainImage currentStyle={currentStyle} />
          <Thumbnails currentStyle={currentStyle} />
        </CurrentIndexContext.Provider>
      </CurrentImageContext.Provider>
    </div>
  );
};

export default ImageGallery;
