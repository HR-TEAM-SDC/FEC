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

  const iconStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
  };

  const selectedStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#BBB',
    borderRadius: '50%',
  };

  if (props.isOpen) {
    return (
      // Return icons instead of thumbnails
      <div
        onClick={props.handleThumbnailClick}
        style={props.currentImage === props.photo.thumbnail_url ? iconStyle : selectedStyle}
        index={props.index}
        src={props.photo.thumbnail_url}
      ></div>
    );
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
