import React, { useContext } from "react";
import Thumbnail from "./Thumbnail";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import { CurrentImageContext } from "../ProductDetails";
import { CurrentIndexContext } from "../ProductDetails";

const Thumbnails = (props) => {
  let photos = props.currentStyle.photos;
  let { setCurrentImage } = useContext(CurrentImageContext);
  let { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);

  const thumbnailsStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
  };

  const handleThumbnailClick = () => {
    let index = event.target.getAttribute("index");
    let src = event.target.getAttribute("src");
    console.log("Thumbnail clicked...");
    console.log("src:", src);
    console.log("currentIndex:", currentIndex);
    setCurrentImage(src);
    setCurrentIndex(Number(index));
  };

  return (
    <div style={thumbnailsStyle}>
      <span>
        <LeftArrow />
        {photos
          ? photos.map((photo, index) => {
              return (
                <Thumbnail
                  handleThumbnailClick={handleThumbnailClick}
                  photo={photo}
                  index={index}
                  key={index}
                />
              );
            })
          : null}
        <RightArrow />
      </span>
    </div>
  );
};

export default Thumbnails;
