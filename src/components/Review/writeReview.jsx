import React, { useState, useEffect } from "react";
import "./style.css";
import Characteristics from "./Characteristics.jsx";

const WriteReview = (props) => {
  const [rate, setRate] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [minimumLength, setMinimumLength] = useState(null);

  useEffect(() => {
    console.log(characteristics);
  }, [characteristics]);

  var starRate = (e) => {
    setRate(e.target.value);
  };

  var starResult = ["", "Poor", "Fair", "Average", "Good", "Great"];

  var recommendRate = (e) => {
    setRecommend(e.target.value);
  };

  var CharacteristicsRate = (e) => {
    var result = characteristics;
    result[e.target.id] = e.target.value;
    setCharacteristics(result);
  };

  var WriteReviewBody = (e) => {
    setMinimumLength(e.target.value.length);
  };

  return (
    <div>
      <h2>Write Your Review</h2>
      <h5>About the [Product Name Here]</h5>
      <div
        className="rateBox"
        style={{
          position: "relative",
          display: "block",
          float: "top",
          width: "180px",
        }}
      >
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
        <p className="result" style={{ textAlign: "center" }}>
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
      <Characteristics CharacteristicsRate={CharacteristicsRate} />
      <p>Review summary: </p>
      <input
        id="reviewSummary"
        type="text"
        placeholder="Example: Best purchase ever!"
        style={{ width: "90%" }}
        maxlength="60"
      ></input>
      <p>Review Body: </p>
      <textarea
        id="reviewBody"
        type="text"
        placeholder="Why did you like the product or not?"
        style={{
          width: "90%",
          height: "400px",
          textAlign: "top",
          padding: "0",
        }}
        maxlength="1000"
        onChange={WriteReviewBody}
      ></textarea>
      <p>
        {minimumLength >= 50
          ? "Minimum reached"
          : "Minimum required characters left: " + (50 - minimumLength)}
      </p>
    </div>
  );
};

export default WriteReview;
