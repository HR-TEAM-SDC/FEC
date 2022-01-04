import React from 'react';

const Thumbnail = (props) => {
  const thumbnailStyle = {
    objectFit: 'cover',
    width: '50px',
    height: '50px',
  };

  const selectedThumbnailStyle = {
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'yellow',
    objectFit: 'cover',
    width: '50px',
    height: '50px',
  };
  // if (props.currentIndex) {
  //   if (props.currentIndex !== props.index) {
  //     props.setCurrentIndex(0);
  //   }
  // }
  return (
    <img
      onClick={props.handleThumbnailClick}
      style={props.currentIndex === props.index ? selectedThumbnailStyle : thumbnailStyle}
      index={props.index}
      src={props.photo.thumbnail_url}
    ></img>
  );
};

export default Thumbnail;
