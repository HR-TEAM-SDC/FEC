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
      <span>
        {photos
          ? photos.map((photo, index) => {
              return <Image photo={photo} key={index} />;
            })
          : null}
      </span>
    </div>
  );
};

export default Images;
