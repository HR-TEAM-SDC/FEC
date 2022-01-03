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

  return (
    <img
      onClick={props.handleThumbnailClick}
      style={props.currentImage === props.photo.thumbnail_url ? selectedThumbnailStyle : thumbnailStyle}
      index={props.index}
      src={props.photo.thumbnail_url}
    ></img>
  );
};

export default Thumbnail;
