import React, { useContext, useEffect } from "react";
import { CurrentImageContext } from "./ImageGallery";
import { CurrentStyleContext } from "../ProductDetails";

const MainImage = (props) => {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentImage } = useContext(CurrentImageContext);

  // if (currentStyle) {
  //   setCurrentImage(currentStyle.photos[0].thumbnail_url);
  // }
  // useEffect(() => {
  //   setCurrentImage(<img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" style="max-width: 50px; max-height: 50px;"></img>);
  // }, []);
  //a

  const mainImageStyle = {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "600px",
    height: "auto",
  };

  return (
    <span>
      <img
        style={mainImageStyle}
        src={
          props.currentStyle.photos
            ? currentImage || props.currentStyle.photos[0].thumbnail_url
            : null
        }
      ></img>
    </span>
  );
};

export default MainImage;
