import React, { useContext, useEffect } from "react";
import { CurrentIndexContext, CurrentImageContext } from "../ProductDetails";
import { CurrentStyleContext } from "../ProductDetails";
import Thumbnails from "./Thumbnails";

const MainImage = (props) => {
  const { currentImage, setCurrentImage } = useContext(CurrentImageContext);
  const { currentIndex } = useContext(CurrentIndexContext);
  const { currentStyle } = useContext(CurrentStyleContext);

  // if (props.currentStyle) {
  //   useEffect(() => {
  //     setCurrentImage(props.currentStyle.photos[0]);
  //   }, []);
  // }

  const mainImageStyle = {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexShrink: "0",
    // minWidth: "50%",
    // minHeight: "50%",
    // overflow: "hidden"
    borderStyle: "solid",
    borderWidth: "1px",
    objectFit: "cover",
    width: "400px",
    height: "500px",
  };

  return (
    <div>
      <img
        style={mainImageStyle}
        src={
          props.currentStyle.photos
            ? currentImage || props.currentStyle.photos[0].thumbnail_url
            : null
        }
      ></img>
      <Thumbnails currentStyle={currentStyle} />
    </div>
  );
};

export default MainImage;
