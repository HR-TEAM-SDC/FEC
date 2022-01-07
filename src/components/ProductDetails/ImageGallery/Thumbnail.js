import React from 'react';

const Thumbnail = (props) => {
  const thumbnailStyle = {
    objectFit: 'cover',
    width: '40px',
    height: '40px',
    padding: '1px',
    borderRadius: '10%',
  };

  const selectedThumbnailStyle = {
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: '#29f756ad',
    objectFit: 'cover',
    width: '40px',
    height: '40px',
    borderRadius: '10%',
  };

  const iconStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: '#A8A8A8',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'white',
    borderRadius: '50%',
  };

  const selectedStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    borderRadius: '50%',
  };

  if (props.isOpen) {
    return (
      // Return icons instead of thumbnails
      <div
        onClick={props.handleThumbnailClick}
        style={props.currentImage === props.photo.thumbnail_url ? selectedStyle : iconStyle}
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
