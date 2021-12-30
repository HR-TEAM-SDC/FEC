import React from "react";

const Image = (props) => {
  const thumbnailStyle = {
    maxWidth: "50px",
    maxHeight: "50px",
  };
  return <img style={thumbnailStyle} src={props.photo.thumbnail_url}></img>;
};

export default Image;
