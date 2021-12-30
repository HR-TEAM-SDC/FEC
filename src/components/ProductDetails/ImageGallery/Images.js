import React from "react";
import Image from "./Image";

const Images = (props) => {
  let photos = props.currentStyle.photos;
  console.log("photos:", photos);
  const imagesStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
  };

  return (
    <div style={imagesStyle}>
      Images
      {photos
        ? photos.map((photo) => {
            return <Image photo={photo} />;
          })
        : null}
    </div>
  );
};

export default Images;
