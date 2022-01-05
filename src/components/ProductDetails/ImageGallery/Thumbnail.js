import React from 'react';

const Thumbnail = (props) => {
  const thumbnailStyle = {
    objectFit: 'cover',
    width: '40px',
    height: '40px',
    padding: '1px',
  };

  const selectedThumbnailStyle = {
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'yellow',
    objectFit: 'cover',
    width: '40px',
    height: '40px',
  };

  if (props.isOpen) {
    // Return icons instead of thumbnails
  }

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
