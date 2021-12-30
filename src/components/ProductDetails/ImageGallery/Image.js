import React from "react";

const Image = (props) => {
  const thumbnailStyle = {
    display: "block",
    maxWidth: "50px",
    maxHeight: "50px",
    width: "auto",
    height: "auto",
  };
  return (
    <span>
      <img style={thumbnailStyle} src={props.photo.thumbnail_url}></img>
    </span>
  );
};

export default Image;
