import React, { useState, useEffect, useReducer } from 'react';

const Input = (props) => {
  const [minimumLength, setMinimumLength] = useState(null);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  var WriteReviewBody = (e) => {
    setMinimumLength(e.target.value.length);
    props.bodyReview(e.target.value);
  };

  var uploadMultiplePhotos = (e) => {
    var photoArray = photoURLs;
    photoArray.push(URL.createObjectURL(e.target.files[0]));
    setPhotoURLs(photoArray);
    props.photoReview(photoArray);
    forceUpdate();
  };

  return (
    <div className="writeReviewInput">
      <p>Review summary: </p>
      <input
        id="reviewSummary"
        type="text"
        placeholder="Example: Best purchase ever!"
        style={{ width: '90%' }}
        maxLength="60"
        onChange={props.summaryReview}
      ></input>
      <p>Review Body: </p>
      <textarea
        id="reviewBody"
        type="text"
        placeholder="Why did you like the product or not?"
        style={{
          width: '90%',
          height: '300px',
          textAlign: 'top',
          padding: '0',
        }}
        maxLength="1000"
        onChange={WriteReviewBody}
      ></textarea>
      <p>
        {minimumLength >= 50 ? (
          <span style={{ color: 'green' }}>Minimum reached</span>
        ) : (
          <span style={{ color: 'red' }}>Minimum required characters left: {50 - minimumLength}</span>
        )}
      </p>
      <div className="form-group multi-preview">
        {photoURLs.map((url) => (
          <img src={url} alt="..." style={{ height: '100px', width: '100px' }} />
        ))}
      </div>
      {photoURLs.length < 5 ? (
        <form action="/action_page.php">
          <label htmlFor="img">Select image:</label>
          <input type="file" id="img" name="img" accept="image/*" onChange={uploadMultiplePhotos} multiple />
        </form>
      ) : null}

      <p>Nickname</p>
      <input
        id="Nickname"
        type="text"
        placeholder="Example: jackson11!"
        style={{ width: '20%' }}
        maxLength="60"
        onChange={props.nicknameReview}
      ></input>
      <p>For privacy reasons, do not use your full name or email address</p>
      <p>Your email</p>
      <input
        id="email"
        type="text"
        placeholder="Example: jackson11@email.com"
        style={{ width: '40%' }}
        maxLength="60"
        onChange={props.emailReview}
      ></input>
      <p>For authentication reasons, you will not be emailed</p>
    </div>
  );
};

export default Input;
