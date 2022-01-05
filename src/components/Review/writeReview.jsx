import React, { useState, useEffect, useReducer } from 'react';
import Characteristics from './Characteristics.jsx';
import Input from './writeReviewInput.jsx';
import axios from '../../apis/atelier.js';
import { createPortal } from 'react-dom';

const WriteReview = (props) => {
  const [rate, setRate] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState(null);
  const [body, setBody] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [photoURLs, setPhotoURLs] = useState([]);

  // useEffect(() => {
  //   console.log(characteristics);
  // }, [characteristics]);
  var finalSubmit = () => {
    if (!rate) {
      var string = 'You must enter the following: rating';
      alert(string);
      return;
    }
    if (!body) {
      var string = 'You must enter the following: body';
      alert(string);
      return;
    }
    if (body.length < 50) {
      var string = 'Body must have over 50 characters';
      alert(string);
      return;
    }
    if (!characteristics) {
      var string = 'You must enter the following: characteristics';
      alert(string);
      return;
    }
    if (!nickname) {
      var string = 'You must enter the following: nickname';
      alert(string);
      return;
    }
    if (!email) {
      var string = 'You must enter the following: email';
      alert(string);
      return;
    }

    var finalParam = {
      product_id: props.id,
      rating: rate,
      summary: summary,
      body: body,
      recommend: recommend,
      name: nickname,
      email: email,
      photos: photoURLs,
      characteristics: characteristics,
    };
    axios
      .post('reviews', finalParam)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var starRate = (e) => {
    setRate(Number(e.target.value));
  };

  var starResult = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

  var recommendRate = (e) => {
    if (e.target.value === 'Yes') {
      setRecommend(true);
    }
    if (e.target.value === 'No') {
      setRecommend(false);
    }
  };

  var CharacteristicsReview = (e) => {
    var result = characteristics;
    var number = e.target.id;
    result[number] = Number(e.target.value);
    setCharacteristics(result);
    forceUpdate();
  };

  var summaryReview = (e) => {
    setSummary(e.target.value);
  };

  var bodyReview = (value) => {
    setBody(value);
  };

  var nicknameReview = (e) => {
    setNickname(e.target.value);
  };

  var emailReview = (e) => {
    setEmail(e.target.value);
  };

  var photoReview = (array) => {
    setPhotoURLs(array);
  };

  return createPortal(
    <div className="write-review">
      <div className="write-review-close" onClick={props.writeReviewClick}></div>
      <div className="writeReviewBox">
        <h2>Write Your Review</h2>
        <h5> About the {props.name}</h5>
        <div className="rateBox">
          <div className="rate" onClick={starRate}>
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
          <p className="result" style={{ textAlign: 'center' }}>
            {starResult[rate]}
          </p>
        </div>
        <div className="recommend" onClick={recommendRate}>
          <span>Recommend? </span>
          <input type="radio" id="Yes" value="Yes" name="recommend" />
          <label for="Yes" title="text">
            Yes
          </label>
          <input type="radio" id="No" value="No" name="recommend" />
          <label for="No" title="text">
            No
          </label>
        </div>
        <Characteristics
          CharacteristicsReview={CharacteristicsReview}
          metaData={props.metaData ? props.metaData : null}
        />
        <Input
          summaryReview={summaryReview}
          bodyReview={bodyReview}
          nicknameReview={nicknameReview}
          emailReview={emailReview}
          photoReview={photoReview}
        />
        <input type="submit" value="submit" className="write-review-submit" onClick={finalSubmit}></input>
      </div>
    </div>,
    document.getElementById('AddModal')
  );
};

export default WriteReview;
