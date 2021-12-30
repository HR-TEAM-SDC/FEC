import React from "react";
import Image from "./Image";

const Images = (props) => {
  let photos = props.currentStyle.photos;

  const imagesStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
  };

  return (
    <div style={imagesStyle}>
      Images
      {photos
        ? photos.map((photo, index) => {
            return <Image photo={photo} key={index} />;
          })
        : null}
    </div>
  );
};

export default Images;
