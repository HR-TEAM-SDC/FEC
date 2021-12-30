import React from "react";

const Thumbnail = (props) => {
  const thumbnailStyle = {
    maxWidth: "50px",
    maxHeight: "50px",
  };
  return (
    <img
      onClick={props.handleThumbnailClick}
      style={thumbnailStyle}
      src={props.photo.thumbnail_url}
    ></img>
  );
};

export default Thumbnail;
