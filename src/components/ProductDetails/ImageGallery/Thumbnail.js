import React from "react";

const Thumbnail = (props) => {
  const thumbnailStyle = {
    maxWidth: "50px",
    maxHeight: "50px",
  };

  const selectedThumbnailStyle = {
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "yellow",
    maxWidth: "50px",
    maxHeight: "50px",
  };
  // style={props.currentImage === props.photo.thumbnail_url ? selectedThumbnailStyle : thumbnailStyle}
  return (
    <img
      onClick={props.handleThumbnailClick}
      style={
        props.currentImage === props.photo.thumbnail_url
          ? selectedThumbnailStyle
          : thumbnailStyle
      }
      index={props.index}
      src={props.photo.thumbnail_url}
    ></img>
  );
};

export default Thumbnail;
