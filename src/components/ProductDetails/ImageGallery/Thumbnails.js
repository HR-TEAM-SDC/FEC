import React, { useContext } from "react";
import Thumbnail from "./Thumbnail";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import { CurrentImageContext } from "./ImageGallery";

const Thumbnails = (props) => {
  let photos = props.currentStyle.photos;
  let { setCurrentImage } = useContext(CurrentImageContext);

  const thumbnailsStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
  };

  const handleThumbnailClick = () => {
    let index = event.target.selectedIndex;
    let src = event.target.getAttribute("src");
    console.log("Thumbnail clicked...");
    console.log("src:", src);
    setCurrentImage(src);
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
